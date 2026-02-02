// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TO_EMAIL = "info@guidanceinnovations.tech";

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
  language: string;
  created_at: string;
  user_agent?: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const submission: ContactSubmission = await req.json();

    // Validate required fields
    if (!submission.name || !submission.email || !submission.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Format the email content
    const languageLabels = {
      en: "English",
      th: "Thai (ไทย)",
      zh: "Chinese (中文)",
    };

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #4b5563; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { margin-top: 5px; color: #111827; }
            .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #667eea; margin-top: 10px; }
            .footer { background: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
            .meta { font-size: 11px; color: #9ca3af; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">GuidanceInnovations Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${submission.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${submission.email}" style="color: #667eea;">${submission.email}</a></div>
              </div>
              
              ${submission.company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${submission.company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${submission.message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="meta">
                <div><strong>Language:</strong> ${languageLabels[submission.language as keyof typeof languageLabels] || submission.language}</div>
                <div><strong>Submitted:</strong> ${new Date(submission.created_at).toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'full', timeStyle: 'long' })}</div>
                ${submission.user_agent ? `<div><strong>Browser:</strong> ${submission.user_agent}</div>` : ''}
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">This is an automated message from your website contact form.</p>
              <p style="margin: 5px 0 0 0;">Please reply directly to ${submission.email} to respond to this inquiry.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Name: ${submission.name}
Email: ${submission.email}
${submission.company ? `Company: ${submission.company}` : ''}

Message:
${submission.message}

---
Language: ${languageLabels[submission.language as keyof typeof languageLabels] || submission.language}
Submitted: ${new Date(submission.created_at).toUTCString()}
${submission.user_agent ? `Browser: ${submission.user_agent}` : ''}
    `.trim();

    // Send email using Resend API
    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "GuidanceInnovations <noreply@guidanceinnovations.tech>",
          to: [TO_EMAIL],
          reply_to: submission.email,
          subject: `New Contact Form: ${submission.name}${submission.company ? ` from ${submission.company}` : ''}`,
          html: emailHtml,
          text: emailText,
        }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error("Resend API error:", error);
        throw new Error(`Failed to send email: ${error}`);
      }

      const data = await res.json();
      console.log("Email sent successfully:", data);

      return new Response(
        JSON.stringify({ success: true, emailId: data.id }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    } else {
      // If no Resend API key, log the submission (useful for development)
      console.log("Email notification (RESEND_API_KEY not configured):");
      console.log(emailText);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Submission received (email not configured)" 
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
