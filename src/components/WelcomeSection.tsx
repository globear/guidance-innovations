import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-6 py-16 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left - What We Do intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">What We Do</p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-tight text-foreground">
              SaaS Products &
              <br />
              AI Solutions
            </h2>

            {/* Tech gradient bar */}
            <div className="mt-8 h-1 w-full max-w-md rounded-full bg-gradient-tech" />

            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-lg">
              Our work focuses on clarity, reliability, and long-term scalability. We build AI-powered SaaS products, 
              intelligent automation, and custom software systems that solve real operational problems for service 
              and product-based businesses.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg">
              Each solution is designed for production use and tailored to the business, not built from generic templates.
            </p>
          </motion.div>

          {/* Right - Services overview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-border bg-card glow-hover">
              <h3 className="font-display text-xl font-semibold text-foreground">SaaS Products</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Production-ready AI products built for real business use: GuidanceStream for customer service, 
                CareRouters for healthcare logistics.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-card glow-hover">
              <h3 className="font-display text-xl font-semibold text-foreground">AI Automation</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Custom AI and automation systems for businesses that want measurable operational improvement. 
                Workflow automation, intelligent document processing, and system integrations.
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-card glow-hover">
              <h3 className="font-display text-xl font-semibold text-foreground">Full-Stack Development</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                End-to-end product development for startups and growing businesses. From MVP to production-ready systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
