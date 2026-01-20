import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thanks! We'll be in touch soon.");
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
              Realize Your
              <br />
              Full Potential
            </h2>

            <form onSubmit={handleSubmit} className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe for growth tips and founder resources!
              </p>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full border-border bg-card px-5 py-3"
                />
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
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
            >
              Get in Touch
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
            <p className="text-sm text-muted-foreground mb-2">Supported by</p>
            <p className="font-display text-2xl font-medium">Guidance Innovation Co., Ltd.</p>
            <p className="text-muted-foreground mt-2">Thailand • Serving Global Clients</p>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm font-medium">Email</p>
                <a href="mailto:contact@guidanceinnovations.tech" className="text-sm text-muted-foreground hover:text-foreground">
                  contact@guidanceinnovations.tech
                </a>
              </div>
              <div>
                <p className="text-sm font-medium">Website</p>
                <a href="https://guidancestream.com" className="text-sm text-muted-foreground hover:text-foreground">
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
