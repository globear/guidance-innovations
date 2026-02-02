import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Loader2, QrCode } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import type { ContactSubmissionInsert } from "@/types/database";

const WHATSAPP_NUMBER = "66984862094";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zM12.05 20.21c-1.5 0-2.97-.39-4.26-1.15l-.3-.18-3.11.82.83-3.04-.2-.32a8.198 8.198 0 0 1-1.9-5.42c0-4.52 3.67-8.19 8.19-8.19 2.19 0 4.25.85 5.8 2.4 1.55 1.55 2.4 3.61 2.4 5.8 0 4.52-3.67 8.19-8.19 8.19zm4.5-6.14c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.22-.18-.47-.31z"/>
  </svg>
);

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t, language } = useLanguage();

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
    
    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        toast.error("Configuration Error", {
          description: "Database connection is not configured. Please contact the administrator.",
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare submission data
      const submissionData: ContactSubmissionInsert = {
        name: data.name,
        email: data.email,
        company: data.company || null,
        message: data.message,
        language: language || 'en', // Default to 'en' if undefined
        user_agent: navigator.userAgent,
        ip_address: null, // IP address would need to be captured server-side
      };

      console.log('Submitting form to Supabase:', submissionData);

      // Insert into Supabase (without selecting back to avoid RLS issues for anon users)
      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (insertError) {
        console.error("Error submitting form:", insertError);
        toast.error(t("contact.errorMessage") || "Submission Failed", {
          description: t("contact.errorDescription") || "There was an error submitting your message. Please try again or email us directly.",
        });
        setIsSubmitting(false);
        return;
      }

      // Call Edge Function to send email notification
      try {
        const { data: functionData, error: functionError } = await supabase.functions.invoke(
          'send-contact-email',
          {
            body: {
              ...submissionData,
              created_at: new Date().toISOString(), // Use client timestamp since we can't select back
            },
          }
        );

        if (functionError) {
          console.error("Error sending email notification:", functionError);
          // Don't show error to user - submission was successful, just email failed
        }
      } catch (emailError) {
        console.error("Error calling email function:", emailError);
        // Don't show error to user - submission was successful, just email failed
      }

      // Show success message
      toast.success(t("contact.successMessage"), {
        description: t("contact.successDescription"),
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error(t("contact.errorMessage") || "Submission Failed", {
        description: t("contact.errorDescription") || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

            <div className="mt-8 flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none font-medium px-6"
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                {t("contact.whatsappButton")}
              </Button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white bg-transparent/10 backdrop-blur-sm"
                  >
                    <QrCode className="w-4 h-4 mr-2" />
                    {t("contact.whatsappScan")}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-sm bg-card border-border text-foreground">
                  <DialogHeader>
                    <DialogTitle>{t("contact.whatsappTitle")}</DialogTitle>
                    <DialogDescription>
                      {t("contact.whatsappDescription")}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg mt-2">
                    <img 
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://wa.me/${WHATSAPP_NUMBER}`} 
                      alt="WhatsApp QR Code" 
                      className="w-48 h-48"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

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
