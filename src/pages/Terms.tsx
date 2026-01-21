import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <Link to="/">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 hover:text-primary transition-colors cursor-pointer">
              Terms of Service
            </h1>
          </Link>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: January 2025
            </p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to these terms, please do not 
                use our services.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                2. Use of Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these 
                Terms. You agree not to use our services in any way that violates any applicable 
                local, national, or international law or regulation.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                3. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Guidance Innovation. Our trademarks and trade dress may not 
                be used in connection with any product or service without prior written consent.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                4. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In no event shall Guidance Innovation, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                5. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms. Upon 
                termination, your right to use the service will immediately cease.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                6. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will try to provide at least 30 days' notice prior to any new terms 
                taking effect.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                7. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us at{" "}
                <a 
                  href="mailto:info@guidanceinnovations.tech" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  info@guidanceinnovations.tech
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
