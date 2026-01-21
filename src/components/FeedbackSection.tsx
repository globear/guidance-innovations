import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeedbackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      number: "01",
      title: "Builder, Not Consultant",
      description: "Led by a founder who actively builds systems, not just advises on them. The same standards applied to our own products are applied to client work.",
      avatar: "B",
      avatarColor: "from-primary to-blue-500",
    },
    {
      number: "02",
      title: "Deep Real-World Experience",
      description: "Our systems are informed by real operational experience—multi-platform e-commerce, logistics, customer support workflows, and cross-border operations.",
      avatar: "E",
      avatarColor: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Practical Approach to AI",
      description: "We prioritize reliability over novelty, maintainability over shortcuts, and measurable outcomes over marketing language.",
      avatar: "AI",
      avatarColor: "from-cyan-500 to-primary",
    },
  ];

  return (
    <section id="about" className="relative px-6 py-20 bg-background overflow-hidden" ref={ref}>
      {/* Left accent gradient bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-primary to-indigo-500" />
      
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Heading & Founder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-foreground leading-tight">
              Built by Someone
              <br />
              <span className="text-primary">Who Ships</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Not consultants. Not an agency. A builder who understands your 
              operations because we run our own.
            </p>

            {/* Enhanced Founder Card */}
            <div className="mt-12 p-6 rounded-xl bg-card border border-border relative overflow-hidden glow-hover">
              {/* Gradient glow border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-purple-500/20 pointer-events-none" />
              
              <div className="relative flex items-start gap-4">
                {/* Larger founder avatar - w-20 h-20 (80px) */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-2xl font-bold text-primary-foreground shrink-0 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  T
                </div>
                
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Founder</p>
                  <h3 className="font-display text-2xl font-semibold text-foreground">Te</h3>
                  <p className="text-sm text-muted-foreground">Founder & Lead Builder</p>
                </div>
              </div>
              
              <p className="relative text-sm text-muted-foreground mt-4 leading-relaxed">
                Active e-commerce operator since 2017. Built automation systems for customer service, 
                logistics, and operations. Experienced in AI workflows, system architecture, and 
                cross-platform integration.
              </p>
              
              {/* Experience badge */}
              <div className="relative mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-primary font-mono text-xs">7+ years experience</span>
              </div>
            </div>

            {/* Trust Metrics */}
            <div className="flex gap-8 border-t border-border pt-6 mt-8">
              <div>
                <span className="text-2xl font-bold text-foreground">7+</span>
                <span className="text-muted-foreground text-xs block font-mono">Years Experience</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">50+</span>
                <span className="text-muted-foreground text-xs block font-mono">Systems Built</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">TH/MY</span>
                <span className="text-muted-foreground text-xs block font-mono">Serving</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Proof Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {reasons.map((reason) => (
              <div 
                key={reason.title}
                className="p-6 rounded-xl border border-border bg-card glow-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  {/* Small avatar icon */}
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${reason.avatarColor} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                    {reason.avatar}
                  </div>
                  {/* Number badge */}
                  <span className="text-xs font-mono text-muted-foreground">{reason.number}</span>
                </div>
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
