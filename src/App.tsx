import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import AppHome from "./pages/AppHome";
import FixMyText from "./pages/FixMyText";
import Pricing from "./pages/Pricing";
import Package from "./pages/Package";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ConversationsDashboard from "./pages/bd/b604a733";

const queryClient = new QueryClient();

const App = () => {
  const hostname = window.location.hostname;
  const isAppSubdomain = hostname.startsWith("app.");
  const isFixMyTextDomain = hostname.includes("fix-my-text.cv");

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {isFixMyTextDomain ? (
                <>
                  <Route path="/" element={<FixMyText />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="*" element={<NotFound />} />
                </>
              ) : isAppSubdomain ? (
                <>
                  <Route path="/" element={<AppHome />} />
                  <Route path="/clock" element={<Navigate to="/clock/index.html" replace />} />
                  <Route path="/FixMyText" element={<FixMyText />} />
                  <Route path="/FixMyText/pricing" element={<Pricing />} />
                  <Route path="*" element={<NotFound />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<Index />} />
                  <Route path="/package" element={<Package />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/bd/b604a733" element={<ConversationsDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </>
              )}
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
