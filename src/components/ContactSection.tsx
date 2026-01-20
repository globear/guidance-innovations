import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");
  const { t } = useLanguage();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");

    if (!validateEmail(email)) {
      setEmailError(t("contact.invalidEmail"));
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t("contact.success"));
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <section id="contact" className="relative px-6 py-24" ref={ref}>
      {/* Gradient blob */}
      <div className="gradient-blob gradient-blob-pink absolute bottom-0 left-1/4 h-[400px] w-[400px] opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl font-medium leading-tight sm:text-6xl">
              {t("contact.title1")}
              <br />
              {t("contact.title2")}
            </h2>

            <form onSubmit={handleSubmit} className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                {t("contact.subscribe")}
              </p>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder={t("contact.placeholder")}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    required
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? "email-error" : undefined}
                    className={`rounded-full border-border bg-card px-5 py-3 ${
                      emailError ? "border-destructive" : ""
                    }`}
                  />
                  {emailError && (
                    <p id="email-error" className="mt-2 text-sm text-destructive">
                      {emailError}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary rounded-full px-6"
                >
                  {isSubmitting ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </form>

            <a
              href="mailto:contact@guidanceinnovations.tech"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
            >
              {t("contact.cta")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Right - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm text-muted-foreground mb-2">{t("contact.supportedBy")}</p>
            <p className="font-display text-2xl font-medium">{t("contact.company")}</p>
            <p className="text-muted-foreground mt-2">{t("contact.location")}</p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-medium">{t("contact.email")}</p>
                <a href="mailto:contact@guidanceinnovations.tech" className="text-sm text-muted-foreground hover:text-foreground">
                  contact@guidanceinnovations.tech
                </a>
              </div>
              <div>
                <p className="text-sm font-medium">{t("contact.website")}</p>
                <a href="https://guidancestream.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                  guidancestream.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
