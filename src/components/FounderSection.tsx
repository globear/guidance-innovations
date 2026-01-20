import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground">Our Team</span>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              Meet the Trusted Minds
              <br />
              Every Founder's Growth.
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              A network of experienced advisors dedicated to guiding founders through critical stages of their journey from early challenges to long-term success.
            </p>
          </div>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {/* Founder */}
          <div className="text-center">
            <div className="mx-auto mb-6 h-64 w-full max-w-[240px] rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-card shadow-lg flex items-center justify-center">
                  <span className="font-display text-3xl font-medium text-foreground">T</span>
                </div>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium">Te</h3>
            <p className="text-sm text-muted-foreground">Founder & Lead Builder</p>
          </div>

          {/* Placeholder for future team */}
          <div className="text-center opacity-60">
            <div className="mx-auto mb-6 h-64 w-full max-w-[240px] rounded-3xl bg-muted overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <span className="text-4xl text-muted-foreground/40">+</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium">Join Our Team</h3>
            <p className="text-sm text-muted-foreground">We're hiring</p>
          </div>

          <div className="text-center opacity-40">
            <div className="mx-auto mb-6 h-64 w-full max-w-[240px] rounded-3xl bg-muted overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <span className="text-4xl text-muted-foreground/40">+</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium">Growing Team</h3>
            <p className="text-sm text-muted-foreground">Future advisors</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
