import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Brain, Globe2, Rocket, Shield, Target } from "lucide-react";

const advantages = [
  {
    icon: Wrench,
    title: "Builder, Not Consultant",
    description: "Led by a founder who actively builds systems, not just advises. The same standards applied to our products are applied to client work.",
  },
  {
    icon: Brain,
    title: "Deep Business Experience",
    description: "Systems informed by real operational experience — multi-platform e-commerce, logistics, customer support, and cross-border operations.",
  },
  {
    icon: Shield,
    title: "Strong Technical Foundation",
    description: "AI agents, RAG systems, API architecture, full-stack engineering, and scalable infrastructure planning.",
  },
  {
    icon: Target,
    title: "Practical AI Approach",
    description: "Reliability over novelty. Maintainability over shortcuts. Measurable outcomes over marketing language.",
  },
  {
    icon: Globe2,
    title: "Cross-Border Operations",
    description: "Experience operating across Asia and North America. Understanding of diverse market needs and regulatory environments.",
  },
  {
    icon: Rocket,
    title: "Fast & Cost-Efficient",
    description: "Faster execution and better cost efficiency compared to traditional agencies. No overhead, direct expertise.",
  },
];

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            The{" "}
            <span className="text-gradient">Guidance</span> Advantage
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We differentiate by actually executing, not just selling AI buzzwords.
            Clients work with us because they need systems that function inside real operations.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card/30 p-6 transition-all hover:border-primary/30 hover:bg-card/60"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 transition-all group-hover:from-primary/30 group-hover:to-glow-secondary/30">
                <advantage.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{advantage.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-glow-secondary/5 p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-glow-secondary/10 blur-3xl" />
            
            <blockquote className="relative text-center">
              <p className="font-display text-2xl font-medium leading-relaxed md:text-3xl">
                "This person actually knows what he is doing,
                <br className="hidden md:block" />
                <span className="text-gradient"> not just selling AI buzzwords.</span>"
              </p>
              <footer className="mt-6 text-sm text-muted-foreground">
                — The differentiator that matters
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
