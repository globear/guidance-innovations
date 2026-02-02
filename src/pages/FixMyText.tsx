import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useGuestUsage } from "@/hooks/useGuestUsage";
import type { User } from "@supabase/supabase-js";
import type { RewriteHistory, UserUsage } from "@/types/database";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LogIn, LogOut, User as UserIcon, Loader2, ArrowRightLeft } from "lucide-react";
import RewriteInput from "@/components/RewriteInput";
import ControlPanel from "@/components/ControlPanel";
import RewriteOutput from "@/components/RewriteOutput";
import HistorySection from "@/components/HistorySection";
import AuthModal from "@/components/AuthModal";

import { useNavigate } from "react-router-dom";

const FixMyText = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const navigate = useNavigate();
  
  // Form state
  const [originalText, setOriginalText] = useState("");
  const [tone, setTone] = useState("neutral");
  const [length, setLength] = useState("same");
  const [targetLanguage, setTargetLanguage] = useState("none");
  
  // Result state
  const [rewrittenText, setRewrittenText] = useState("");
  const [translation, setTranslation] = useState<string | null>(null);
  const [rewriting, setRewriting] = useState(false);
  
  // Usage state
  const [userUsage, setUserUsage] = useState<UserUsage | null>(null);
  const [authHistory, setAuthHistory] = useState<RewriteHistory[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  
  // Guest usage
  const guestUsage = useGuestUsage();
  
  const { toast } = useToast();

  const isGuest = !user;
  const remaining = isGuest ? guestUsage.remaining : (userUsage ? (userUsage.subscription_tier === 'paid' ? 999999 : 20 - userUsage.monthly_rewrites) : 20);
  const limit = isGuest ? guestUsage.limit : (userUsage?.subscription_tier === 'paid' ? 999999 : 20);
  const canRewrite = isGuest ? guestUsage.canRewrite : remaining > 0;

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (session?.user) {
        loadUserData(session.user.id);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadUserData(session.user.id);
      } else {
        setUserUsage(null);
        setAuthHistory([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserData = async (userId: string) => {
    const { data: usage } = await supabase
      .from("user_usage")
      .select("*")
      .eq("user_id", userId)
      .single();
    
    if (usage) setUserUsage(usage);
    loadHistory(userId);
  };

  const loadHistory = async (userId: string) => {
    if (!userId) return;
    setHistoryLoading(true);
    const { data, error } = await supabase
      .from("rewrite_history")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(20);

    if (!error && data) setAuthHistory(data);
    setHistoryLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({ title: "Signed out successfully" });
  };

  const handleRewrite = async () => {
    if (!originalText.trim()) return;

    if (!canRewrite) {
      toast({
        title: "Limit reached",
        description: isGuest 
          ? "Please sign up for more rewrites!"
          : "Monthly limit reached. Upgrade to continue.",
        variant: "destructive",
      });
      if (isGuest) setAuthModalOpen(true);
      return;
    }

    setRewriting(true);
    setRewrittenText("");
    setTranslation(null);

    try {
      const { data, error } = await supabase.functions.invoke("rewrite-message", {
        body: { text: originalText, tone, length, language: targetLanguage },
      });

      if (error) throw error;

      setRewrittenText(data.rewritten);
      setTranslation(data.translation || null);

      if (isGuest) {
        guestUsage.incrementUsage({
          original_text: originalText,
          rewritten_text: data.rewritten,
          translation: data.translation,
          settings: { tone, length, target_lang: targetLanguage },
        });
      } else if (user) {
        loadUserData(user.id);
      }
    } catch (error: any) {
      console.error("Rewrite error:", error);
      toast({
        title: "Error rewriting",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setRewriting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCF5]">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  const displayHistory = isGuest ? guestUsage.history : authHistory;

  return (
    <div className="min-h-screen bg-[#FDFCF5] text-[#1A1A1A]">
      {/* Header */}
      <header className="py-4 border-b border-gray-100 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-purple-900">FixMyText</h1>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate("/FixMyText/pricing")}
              className="text-gray-600 hover:text-purple-600 font-medium text-sm transition-colors"
            >
              Pricing
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 font-medium">
                  <UserIcon className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                <Button
                  onClick={handleSignOut}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-purple-600"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setAuthModalOpen(true)}
                variant="ghost"
                className="text-gray-900 font-medium hover:text-purple-600 hover:bg-transparent"
              >
                Log in
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wide">
            Beta Release
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            AI message rewriter <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
              for non-native speakers
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Paste any text and get a clearer, more natural version—same meaning, better grammar.
          </p>
        </div>

        {/* Controls */}
        <div className="max-w-5xl mx-auto">
          <ControlPanel
            tone={tone}
            length={length}
            targetLanguage={targetLanguage}
            onToneChange={setTone}
            onLengthChange={setLength}
            onLanguageChange={setTargetLanguage}
          />
        </div>

        {/* Editor Area */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl border border-gray-200 min-h-[500px] flex flex-col md:flex-row shadow-sm">
          
          {/* Left: Input */}
          <div className="flex-1 p-6 md:p-8 flex flex-col relative">
             <div className="flex-1">
              <RewriteInput
                value={originalText}
                onChange={setOriginalText}
              />
            </div>
            <div className="mt-4">
              <Button
                onClick={handleRewrite}
                disabled={!originalText.trim() || rewriting || !canRewrite}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {rewriting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Working...
                  </>
                ) : (
                  "Rewrite"
                )}
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full md:w-px h-px md:h-auto bg-gray-100 flex items-center justify-center relative">
            <div className="bg-white border border-gray-200 rounded-full p-1.5 absolute text-gray-400">
               <ArrowRightLeft className="w-4 h-4" />
            </div>
          </div>

          {/* Right: Output */}
          <div className="flex-1 p-6 md:p-8 bg-gray-50/50 rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
            {rewrittenText ? (
              <RewriteOutput
                rewrittenText={rewrittenText}
                translation={translation}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400 text-lg">
                Your rewritten text will appear here...
              </div>
            )}
          </div>
        </div>

        {/* Usage Info */}
        <div className="max-w-5xl mx-auto mt-4 flex justify-end">
          <span className="text-sm text-gray-400">
             {isGuest ? (
               `${remaining} free rewrites remaining`
             ) : (
               userUsage?.subscription_tier === 'paid' ? 'Unlimited plan' : `${remaining} rewrites remaining`
             )}
          </span>
        </div>

        {/* History */}
        <div className="mt-16">
          <HistorySection
            history={displayHistory}
            isGuest={isGuest}
            onRefresh={() => user && loadHistory(user.id)}
            onClearGuest={guestUsage.clearHistory}
          />
        </div>

      </main>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  );
};

export default FixMyText;
