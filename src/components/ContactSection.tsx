import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
              Reach
              <br />
              out!
            </h2>

            <div className="mt-12 space-y-4 text-primary-foreground">
              <div>
                <p className="font-medium">The Caseton</p>
                <p className="text-primary-foreground/80 text-sm">123 Anywhere St.</p>
                <p className="text-primary-foreground/80 text-sm">Any City, ST 12345</p>
              </div>

              <div className="pt-4">
                <p className="text-primary-foreground/80 text-sm">Tel. 123-456-7890</p>
              </div>

              <div>
                <p className="text-primary-foreground/80 text-sm">
                  Email: <a href="mailto:hello@reallygreatsite.com" className="underline">hello@reallygreatsite.com</a>
                </p>
              </div>

              <div>
                <p className="text-primary-foreground/80 text-sm">
                  Socials: <a href="#" className="underline">@reallygreatsite</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right - Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[hsl(35_60%_80%)] min-h-[400px] lg:min-h-0 flex items-center justify-center"
        >
          {/* Placeholder for phone image */}
          <div className="w-32 h-56 rounded-3xl bg-[hsl(25_100%_60%)] shadow-xl flex items-center justify-center">
            <div className="w-24 h-48 rounded-2xl bg-[hsl(30_40%_95%)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
