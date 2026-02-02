import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import AuthModal from "@/components/AuthModal";
import { CryptoDonation } from "@/components/CryptoDonation";
import type { User } from "@supabase/supabase-js";

const Pricing = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-[#FDFCF5] text-[#1A1A1A]">
      {/* Header */}
      <header className="py-4 border-b border-gray-100 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate("/FixMyText")}
          >
            <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-purple-900">FixMyText</h1>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate("/FixMyText")}
              className="text-gray-600 hover:text-purple-600 font-medium text-sm transition-colors"
            >
              App
            </button>
            {user ? (
              <Button
                onClick={handleSignOut}
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-purple-600"
              >
                Sign Out
              </Button>
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
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Support a tiny tool</h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed max-w-xl mx-auto">
            Hi, I built this because I'm not a native English speaker and I always double-check my messages. I hope it helps you too!
          </p>
        </div>

        <div className="space-y-4">
          {/* Guest */}
          <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-gray-200 transition-colors">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-base font-medium text-gray-900">Just passing through</h3>
              <p className="text-gray-400 mt-1 text-sm">3 rewrites per session. No login.</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Free</span>
              <Button 
                onClick={() => navigate("/FixMyText")}
                variant="ghost"
                className="w-full sm:w-auto text-sm text-gray-500 hover:text-gray-900 hover:bg-transparent px-4 h-9"
              >
                Try it →
              </Button>
            </div>
          </div>

          {/* Account (Free) */}
          <div className="bg-white p-6 rounded-xl border border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-base font-medium text-gray-900">Create an account</h3>
                <span className="text-[10px] text-purple-600 font-medium">★</span>
              </div>
              <p className="text-gray-400 text-sm">20 rewrites/month + History saved.</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Free</span>
              <Button 
                onClick={() => setAuthModalOpen(true)}
                variant="ghost"
                className="w-full sm:w-auto text-sm text-purple-600 hover:text-purple-800 hover:bg-purple-50 px-4 h-9"
              >
                Sign up →
              </Button>
            </div>
          </div>

          {/* Supporter (Paid) */}
          <div className="bg-gray-50/30 p-6 rounded-xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-base font-medium text-gray-400">Buy me a coffee</h3>
                <span className="text-[10px] text-gray-400">soon</span>
              </div>
              <p className="text-gray-300 text-sm">Unlimited rewrites. Keeps the server alive.</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-sm text-gray-300">$5/mo</span>
              <Button 
                disabled 
                variant="ghost" 
                className="w-full sm:w-auto text-sm text-gray-300 cursor-not-allowed px-4 h-9 hover:bg-transparent"
              >
                Waitlist
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-3 h-3 text-red-400 fill-current" /> by a developer who hates typos
          </p>
          <CryptoDonation address="0xfAceF316637b6e32961a5CB2d1b29f42f97aC95B" />
        </div>
      </main>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  );
};

export default Pricing;
