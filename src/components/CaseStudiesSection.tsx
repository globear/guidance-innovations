import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Workflow, Smartphone } from "lucide-react";

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const caseStudies = [
    {
      icon: Bot,
      title: "AI Customer Service System",
      industry: "E-commerce Operations",
      challenge: "High volume of repetitive inquiries, slow response time, inconsistent tone across support staff.",
      solution: "AI agent connected to product data, policies, and order workflows with context-aware responses.",
      outcome: "Faster response times, reduced manual workload, improved consistency across all channels.",
    },
    {
      icon: Workflow,
      title: "Operational Automation",
      industry: "Business Workflows",
      challenge: "Manual document handling, fragmented processes, error-prone steps causing delays.",
      solution: "Automated workflows connecting data sources, logic layers, and outputs with intelligent routing.",
      outcome: "Reduced human error, improved efficiency, scalable operations ready for growth.",
    },
    {
      icon: Smartphone,
      title: "CareRouters MVP",
      industry: "Healthcare Platform",
      challenge: "Designing a usable system around real hospital escort workflows for elderly users.",
      solution: "UX-driven product design, mobile app prototype, real-world validation with target users.",
      outcome: "Functional MVP aligned with actual user needs rather than assumptions.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="case-studies" className="relative px-6 py-16 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
            Case Examples
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
            Real Solutions for <span className="text-primary">Real Problems</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Examples of how we've helped businesses implement AI and automation systems that deliver measurable results.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border bg-card glow-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <study.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Header */}
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                {study.industry}
              </p>
              <h3 className="font-display text-lg font-medium text-foreground mb-4">
                {study.title}
              </h3>

              {/* Content */}
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground mb-1">Challenge</p>
                  <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Solution</p>
                  <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="font-medium text-primary mb-1">Outcome</p>
                  <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
