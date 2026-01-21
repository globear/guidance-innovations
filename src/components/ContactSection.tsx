import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 1-2 business days.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden" ref={ref}>
      <div className="grid lg:grid-cols-2">
        {/* Left - Tech gradient with contact info */}
        <div className="relative px-6 py-16 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-tech" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="gradient-blob gradient-blob-purple absolute right-0 bottom-0 h-[300px] w-[300px]" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative max-w-md"
          >
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-none tracking-tight">
              Let's
              <br />
              Talk
            </h2>

            <p className="mt-8 text-primary-foreground/80 leading-relaxed">
              If you're looking to build a serious product, implement AI in real operations, 
              or explore a partnership, we welcome structured discussions.
            </p>

            <div className="mt-12 space-y-4 text-primary-foreground">
              <div>
                <p className="font-semibold">Guidance Innovation Co., Ltd.</p>
                <p className="text-primary-foreground/70 text-sm font-mono">Thailand</p>
              </div>

              <div className="pt-4">
                <p className="text-primary-foreground/70 text-sm font-mono">
                  Email: <a href="mailto:contact@guidanceinnovations.tech" className="text-primary-foreground hover:underline transition-all">contact@guidanceinnovations.tech</a>
                </p>
              </div>

              <div>
                <p className="text-primary-foreground/70 text-sm font-mono">
                  Website: <a href="https://guidancestream.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline transition-all">guidancestream.com</a>
                </p>
              </div>
            </div>

            {/* Contact reasons */}
            <div className="mt-10 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/70 text-xs uppercase tracking-wider mb-4 font-mono">You may contact us for</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Product partnerships",
                  "AI automation",
                  "Technical consulting",
                  "Long-term collaboration",
                ].map((item) => (
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
          className="bg-card px-6 py-16 lg:px-12 flex items-center relative overflow-hidden"
        >
          {/* Grid pattern extending from left side */}
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
          
          <div className="w-full max-w-md relative">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              Send us a message
            </p>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Start a Conversation
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
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
                      <FormLabel className="text-foreground">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
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
                      <FormLabel className="text-foreground">Company</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your company (optional)" 
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
                      <FormLabel className="text-foreground">Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or how we can help..." 
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>

            <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
              This company is built with the mindset of a product builder, not an agency. 
              We focus on long-term product thinking rather than short-term experimentation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
