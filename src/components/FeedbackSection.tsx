import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeedbackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      title: "Builder, Not Consultant",
      description: "Led by a founder who actively builds systems, not just advises on them. The same standards applied to our own products are applied to client work.",
    },
    {
      title: "Deep Real-World Experience",
      description: "Our systems are informed by real operational experience—multi-platform e-commerce, logistics, customer support workflows, and cross-border operations.",
    },
    {
      title: "Practical Approach to AI",
      description: "We prioritize reliability over novelty, maintainability over shortcuts, and measurable outcomes over marketing language.",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-16 bg-muted" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary leading-tight">
              Why Work
              <br />
              With Us?
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Clients work with us because they need systems that actually 
              function inside real operations.
            </p>

            {/* Founder highlight */}
            <div className="mt-12 p-6 rounded-xl bg-card border border-border glow-hover">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Founder</p>
              <h3 className="font-display text-2xl font-semibold text-foreground">Te</h3>
              <p className="text-sm text-muted-foreground mt-1">Founder & Lead Builder</p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                Active e-commerce operator since 2017. Built automation systems for customer service, 
                logistics, and operations. Experienced in AI workflows, system architecture, and 
                cross-platform integration.
              </p>
            </div>
          </motion.div>

          {/* Right - Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className="p-6 rounded-xl border border-border bg-card glow-hover"
              >
                <h3 className="font-semibold text-foreground">{reason.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}

            {/* Technical capabilities */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3">Technical Foundation</p>
              <div className="flex flex-wrap gap-2">
                {["AI agents", "RAG systems", "API design", "Full-stack engineering", "Scalable infrastructure"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
