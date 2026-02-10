import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RewriteRequest {
  text: string;
  tone: string;
  length: string;
  language?: string;
}

interface RewriteResponse {
  rewritten: string;
  translation?: string;
  usage: {
    remaining: number;
    limit: number;
    tier: string;
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    
    // Get Supabase client - use service role for database operations
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Try to get authenticated user if auth header is present
    let user = null;
    if (authHeader && authHeader !== "Bearer null" && authHeader !== "Bearer undefined") {
      const supabaseClient = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_ANON_KEY") ?? "",
        {
          global: {
            headers: { Authorization: authHeader },
          },
        }
      );
      const { data } = await supabaseClient.auth.getUser();
      user = data.user;
    }

    // Parse request body
    const { text, tone, length, language }: RewriteRequest = await req.json();

    if (!text || text.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Text is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Check usage limits
    let usageData = null;
    let remainingRewrites = 3; // Guest default
    let limit = 3;
    let tier = "guest";

    if (user) {
      // Get or create user usage record
      const { data: usage, error: usageError } = await supabaseAdmin
        .from("user_usage")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (usageError && usageError.code !== "PGRST116") {
        // PGRST116 is "not found" - it's ok if record doesn't exist yet
        throw usageError;
      }

      if (!usage) {
        // Create new usage record
        const { data: newUsage } = await supabaseAdmin
          .from("user_usage")
          .insert({
            user_id: user.id,
            monthly_rewrites: 0,
            subscription_tier: "free",
          })
          .select()
          .single();
        usageData = newUsage;
      } else {
        usageData = usage;
      }

      tier = usageData.subscription_tier;
      limit = tier === "paid" ? 999999 : 500;
      remainingRewrites = limit - usageData.monthly_rewrites;

      if (remainingRewrites <= 0) {
        return new Response(
          JSON.stringify({
            error: "Monthly rewrite limit reached",
            usage: {
              remaining: 0,
              limit,
              tier,
            },
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    // Call DeepSeek V3 API
    const deepseekApiKey = Deno.env.get("DEEPSEEK_API_KEY");
    if (!deepseekApiKey) {
      throw new Error("DEEPSEEK_API_KEY not configured");
    }

    // Build prompt based on parameters
    const toneInstructions = {
      neutral: "in a neutral, balanced tone",
      casual: "in a casual, relaxed tone",
      professional: "in a professional, business-appropriate tone",
      formal: "in a formal, respectful tone",
      friendly: "in a friendly, warm tone",
      confident: "in a confident, assertive tone",
      apologetic: "in an apologetic, understanding tone",
      direct: "in a direct, concise manner",
    };

    const lengthInstructions = {
      shorter: "Make it more concise and shorter.",
      same: "Keep approximately the same length.",
      longer: "Expand and elaborate more.",
    };

    const systemPrompt = `You are an expert writing assistant helping non-native English speakers improve their messages. Your task is to rewrite messages with:
1. Correct grammar and natural English phrasing
2. Appropriate tone as specified
3. Preservation of original meaning and intent
4. Kept details like names, numbers, links unchanged

Always respond with ONLY the rewritten text, no explanations or meta-commentary.`;

    const userPrompt = `Rewrite this message ${toneInstructions[tone as keyof typeof toneInstructions] || "naturally"}. ${lengthInstructions[length as keyof typeof lengthInstructions] || ""}

Original message:
${text}`;

    const deepseekResponse = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${deepseekApiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!deepseekResponse.ok) {
      const errorData = await deepseekResponse.text();
      console.error("DeepSeek API error:", errorData);
      throw new Error(`DeepSeek API error: ${deepseekResponse.status}`);
    }

    const deepseekData = await deepseekResponse.json();
    const rewritten = deepseekData.choices[0].message.content.trim();

    // Handle translation if requested
    let translation = null;
    if (language && language !== "none") {
      const languageNames: Record<string, string> = {
        zh: "Chinese (Simplified)",
        es: "Spanish",
        th: "Thai",
        de: "German",
        ja: "Japanese",
        fr: "French",
      };

      const translationPrompt = `Translate the following English text to ${languageNames[language]}. Respond with ONLY the translation, no explanations:

${rewritten}`;

      const translationResponse = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${deepseekApiKey}`,
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [{ role: "user", content: translationPrompt }],
          temperature: 0.3,
          max_tokens: 2000,
        }),
      });

      if (translationResponse.ok) {
        const translationData = await translationResponse.json();
        translation = translationData.choices[0].message.content.trim();
      }
    }

    // Save to history and update usage for authenticated users
    if (user) {
      // Save to history
      await supabaseAdmin.from("rewrite_history").insert({
        user_id: user.id,
        original_text: text,
        rewritten_text: rewritten,
        translation: translation,
        settings: { tone, length, target_lang: language || "none" },
      });

      // Update usage count
      await supabaseAdmin
        .from("user_usage")
        .update({
          monthly_rewrites: (usageData?.monthly_rewrites || 0) + 1,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", user.id);

      remainingRewrites -= 1;
    }

    const response: RewriteResponse = {
      rewritten,
      translation,
      usage: {
        remaining: remainingRewrites,
        limit,
        tier,
      },
    };

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
