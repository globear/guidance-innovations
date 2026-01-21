import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const contactSchema = z.object({
    name: z.string().trim().min(1, t("contact.validation.nameRequired")).max(100, t("contact.validation.nameMax")),
    email: z.string().trim().email(t("contact.validation.emailInvalid")).max(255, t("contact.validation.emailMax")),
    company: z.string().trim().max(100, t("contact.validation.companyMax")).optional(),
    message: z.string().trim().min(10, t("contact.validation.messageMin")).max(1000, t("contact.validation.messageMax")),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call when backend is ready
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success(t("contact.successMessage"), {
      description: t("contact.successDescription"),
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  const contactReasons = [
    t("contact.contactReasons.0" as any),
    t("contact.contactReasons.1" as any),
    t("contact.contactReasons.2" as any),
    t("contact.contactReasons.3" as any),
  ];

  return (
    <section id="contact" className="relative overflow-hidden" ref={ref}>
      {/* Full-bleed background colors */}
      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="bg-gradient-tech" />
        <div className="bg-card" />
      </div>
      
      {/* Single continuous grid pattern spanning entire section */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
      
      {/* Decorative blob */}
      <div className="gradient-blob gradient-blob-purple absolute left-1/2 -translate-x-full bottom-0 h-[300px] w-[300px]" />
      
      {/* Centered content container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 py-16 sm:py-20 lg:py-24">
          {/* Left - Tech gradient with contact info */}
          <div className="relative">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative max-w-md"
          >
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-none tracking-tight">
              {t("contact.letsTalk")}
              <br />
              {t("contact.letsTalkLine2")}
            </h2>

            <p className="mt-8 text-primary-foreground/80 leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="mt-12 space-y-4 text-primary-foreground">
              <div>
                <p className="font-semibold">{t("contact.companyName")}</p>
                <p className="text-primary-foreground/70 text-sm font-mono">{t("contact.location")}</p>
              </div>

              <div className="pt-4">
                <p className="text-primary-foreground/70 text-sm font-mono">
                  {t("contact.emailLabel")} <a href="mailto:info@guidanceinnovations.tech" className="text-primary-foreground hover:underline transition-all">info@guidanceinnovations.tech</a>
                </p>
              </div>

              <div>
                <p className="text-primary-foreground/70 text-sm font-mono">
                  {t("contact.websiteLabel")} <a href="https://guidancestream.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline transition-all">guidancestream.com</a>
                </p>
              </div>
            </div>

            {/* Contact reasons */}
            <div className="mt-10 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/70 text-xs uppercase tracking-wider mb-4 font-mono">
                {t("contact.contactReasonsLabel")}
              </p>
              <div className="flex flex-wrap gap-2">
                {contactReasons.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 rounded-md bg-primary-foreground/10 text-primary-foreground text-xs font-mono border border-primary-foreground/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          </div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
          
          <div className="w-full max-w-md relative">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              {t("contact.formLabel")}
            </p>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              {t("contact.formHeading")}
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("contact.nameLabel")}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t("contact.namePlaceholder")} 
                          {...field} 
                          className="bg-background border-border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("contact.emailFieldLabel")}</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder={t("contact.emailPlaceholder")} 
                          {...field} 
                          className="bg-background border-border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("contact.companyLabel")}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t("contact.companyPlaceholder")} 
                          {...field} 
                          className="bg-background border-border"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">{t("contact.messageLabel")}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t("contact.messagePlaceholder")} 
                          {...field} 
                          className="bg-background border-border min-h-[120px] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t("contact.sendingButton")}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      {t("contact.sendButton")}
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
              {t("contact.footerNote")}
            </p>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
