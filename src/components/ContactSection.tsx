import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden" ref={ref}>
      <div className="grid lg:grid-cols-2">
        {/* Left - Orange gradient with contact info */}
        <div className="bg-gradient-orange px-6 py-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-primary-foreground italic leading-none">
              Let's
              <br />
              Talk
            </h2>

            <p className="mt-8 text-primary-foreground/90 leading-relaxed">
              If you're looking to build a serious product, implement AI in real operations, 
              or explore a partnership, we welcome structured discussions.
            </p>

            <div className="mt-12 space-y-4 text-primary-foreground">
              <div>
                <p className="font-medium">Guidance Innovation Co., Ltd.</p>
                <p className="text-primary-foreground/80 text-sm">Thailand</p>
              </div>

              <div className="pt-4">
                <p className="text-primary-foreground/80 text-sm">
                  Email: <a href="mailto:contact@guidanceinnovations.tech" className="underline">contact@guidanceinnovations.tech</a>
                </p>
              </div>

              <div>
                <p className="text-primary-foreground/80 text-sm">
                  Website: <a href="https://guidancestream.com" target="_blank" rel="noopener noreferrer" className="underline">guidancestream.com</a>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="mailto:contact@guidanceinnovations.tech"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right - Contact reasons */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-muted px-6 py-20 lg:px-12 flex items-center"
        >
          <div className="w-full max-w-md">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-6">You may contact us for</p>
            
            <div className="space-y-4">
              {[
                "Product development partnerships",
                "AI automation projects",
                "Technical architecture discussions",
                "Long-term collaboration opportunities",
              ].map((item) => (
                <div 
                  key={item}
                  className="p-4 rounded-xl bg-card border border-border text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
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
