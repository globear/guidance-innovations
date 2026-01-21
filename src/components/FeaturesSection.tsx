import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      title: "AI Agents",
      description: "AI agents for customer support and internal operations with context-aware responses aligned with your brand voice.",
    },
    {
      title: "Workflow Automation",
      description: "Automated workflows using APIs, webhooks, and orchestration tools. Connect data sources, logic layers, and outputs.",
    },
    {
      title: "System Integration",
      description: "CRM, ERP, and platform integrations. Knowledge base systems using structured data and vector search.",
    },
  ];

  return (
    <section id="services" className="relative px-6 py-20 bg-muted" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
            AI Automation <span className="text-primary">Solutions</span>
          </h2>
          <p className="font-display text-xl sm:text-2xl text-muted-foreground mt-2">
            for measurable operational improvement
          </p>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We design and implement custom AI and automation systems for businesses. 
            Process optimization for speed, accuracy, and cost efficiency.
          </p>
        </motion.div>

        {/* Capability buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="feature-card feature-card-orange min-w-[180px]"
            >
              {capability.title}
            </div>
          ))}
        </motion.div>

        {/* Capability descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {capabilities.map((capability) => (
            <div key={capability.title} className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Additional capabilities list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Also includes</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Intelligent document processing", "Data pipelines", "Vector search", "API-driven design"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
