import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative overflow-hidden" ref={ref}>
      {/* Orange section with main product */}
      <div className="bg-gradient-orange px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - Product name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mb-4">Our Products</p>
              <p className="text-primary-foreground text-4xl sm:text-5xl font-display font-medium leading-tight">
                Guidance
              </p>
              <p className="text-primary-foreground text-5xl sm:text-6xl font-display font-bold italic leading-none">
                Stream
              </p>
              <p className="text-primary-foreground/90 text-lg mt-6">
                AI Customer Service Agent
              </p>
              <span className="inline-block mt-4 px-4 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm">
                Private Beta
              </span>
            </motion.div>

            {/* Right - Product description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-primary-foreground/90 text-sm uppercase tracking-wider mb-4">
                The Problem It Solves
              </p>
              <p className="text-primary-foreground text-sm leading-relaxed mb-6">
                Businesses lose time, revenue, and reputation when customer 
                communication is slow or inconsistent. GuidanceStream solves 
                this by acting as a structured, intelligent customer service 
                layer across your communication channels.
              </p>
              
              <div className="space-y-3 text-primary-foreground/90 text-sm">
                <p>• High volume of repetitive inquiries</p>
                <p>• Inconsistent staff responses</p>
                <p>• Knowledge scattered across documents</p>
                <p>• Support teams that don't scale</p>
              </div>

              <div className="border-t border-primary-foreground/30 pt-6 mt-6">
                <p className="text-primary-foreground/90 text-sm uppercase tracking-wider mb-3">
                  How It Works
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm text-primary-foreground/80">
                  <p>• Central knowledge base</p>
                  <p>• Context-aware AI responses</p>
                  <p>• Automation workflows</p>
                  <p>• Integration-ready</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CareRouters section */}
      <div className="px-6 py-16 bg-background">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-12 lg:grid-cols-2 lg:gap-20"
          >
            {/* Left - Description */}
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Healthcare Platform</p>
              <h3 className="font-display text-4xl sm:text-5xl font-medium text-foreground">
                Care<span className="text-primary italic">Routers</span>
              </h3>
              <p className="text-muted-foreground mt-2">Hospital Escort Platform for Elderly Care</p>
              <span className="inline-block mt-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm">
                MVP Stage
              </span>
              
              <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
                Navigating hospitals can be stressful for elderly individuals and their families. 
                CareRouters provides a structured platform for finding reliable companions to 
                assist with hospital visits.
              </p>
            </div>

            {/* Right - Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[hsl(30_50%_95%)]">
                <p className="font-medium text-foreground text-sm">Elderly-friendly UX</p>
                <p className="text-xs text-muted-foreground mt-1">Designed for accessibility</p>
              </div>
              <div className="p-4 rounded-xl bg-primary">
                <p className="font-medium text-primary-foreground text-sm">Real hospital workflows</p>
                <p className="text-xs text-primary-foreground/80 mt-1">Practical usability</p>
              </div>
              <div className="p-4 rounded-xl bg-[hsl(45_60%_90%)]">
                <p className="font-medium text-foreground text-sm">Trust & Safety</p>
                <p className="text-xs text-muted-foreground mt-1">Accountability focused</p>
              </div>
              <div className="p-4 rounded-xl bg-[hsl(35_40%_88%)]">
                <p className="font-medium text-foreground text-sm">Thailand & Malaysia</p>
                <p className="text-xs text-muted-foreground mt-1">Regional coverage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
