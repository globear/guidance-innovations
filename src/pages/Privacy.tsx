import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: January 2025
            </p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support. This may include your name, email address, 
                phone number, and any other information you choose to provide.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and respond 
                to your comments and questions.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                3. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not share your personal information with third parties except as described 
                in this policy. We may share information with vendors, consultants, and other 
                service providers who need access to such information to carry out work on our behalf.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                4. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take reasonable measures to help protect your personal information from loss, 
                theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to access, update, or delete your personal information at any time. 
                You may also opt out of receiving promotional communications from us by following 
                the instructions in those messages.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-semibold mb-4 text-foreground">
                6. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a 
                  href="mailto:privacy@guidanceinnovation.com" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  privacy@guidanceinnovation.com
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

export default Privacy;
