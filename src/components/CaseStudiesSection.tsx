import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Settings, Smartphone, ArrowRight, TrendingDown, Clock, AlertTriangle } from "lucide-react";

const cases = [
  {
    icon: MessageCircle,
    number: "01",
    title: "AI Customer Service for E-commerce",
    challenge: "High volume of repetitive inquiries, slow response time, inconsistent tone across support team.",
    solution: "AI agent connected to product data, policies, and order workflows with context-aware responses.",
    outcomes: [
      { icon: Clock, text: "Faster response times" },
      { icon: TrendingDown, text: "Reduced manual workload" },
      { icon: AlertTriangle, text: "Improved consistency" },
    ],
  },
  {
    icon: Settings,
    title: "Operational Workflow Automation",
    number: "02",
    challenge: "Manual document handling, fragmented processes, error-prone steps causing delays.",
    solution: "Automated workflows connecting data sources, logic layers, and outputs with error handling.",
    outcomes: [
      { icon: AlertTriangle, text: "Reduced human error" },
      { icon: TrendingDown, text: "Improved efficiency" },
      { icon: Settings, text: "Scalable operations" },
    ],
  },
  {
    icon: Smartphone,
    title: "CareRouters MVP Development",
    number: "03",
    challenge: "Designing a usable system around real hospital escort workflows for elderly users.",
    solution: "UX-driven product design, mobile app prototype, real-world validation with actual users.",
    outcomes: [
      { icon: Clock, text: "Functional MVP" },
      { icon: Settings, text: "User-validated design" },
      { icon: AlertTriangle, text: "Real workflow alignment" },
    ],
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="relative px-6 py-32" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-glow-secondary/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Case Studies
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            Proof of{" "}
            <span className="text-gradient">Execution</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Real projects, real outcomes. Even internal projects are presented as case studies
            because execution quality matters regardless of the client.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="mt-20 space-y-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 transition-all hover:border-primary/30 hover:bg-card/60"
            >
              <div className="grid gap-6 p-6 md:grid-cols-[auto_1fr_1fr_auto] md:items-center md:gap-8 md:p-8">
                {/* Number & Icon */}
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl font-bold text-muted-foreground/30">
                    {caseItem.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <caseItem.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <h3 className="font-display text-lg font-semibold">{caseItem.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/70">Challenge:</span>{" "}
                    {caseItem.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/70">Solution:</span>{" "}
                    {caseItem.solution}
                  </p>
                </div>

                {/* Outcomes */}
                <div className="flex flex-wrap gap-2 md:flex-col">
                  {caseItem.outcomes.map((outcome) => (
                    <div
                      key={outcome.text}
                      className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5"
                    >
                      <outcome.icon className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-medium">{outcome.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover arrow indicator */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 md:right-8">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
