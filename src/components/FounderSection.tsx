import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Code, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    label: "E-commerce operator since 2017",
  },
  {
    icon: Code,
    label: "Built multiple automation systems",
  },
  {
    icon: TrendingUp,
    label: "Developed SaaS from zero to production",
  },
  {
    icon: Award,
    label: "AI workflows & system architecture",
  },
];

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-6 py-32" ref={ref}>
      {/* Divider */}
      <div className="section-divider mx-auto max-w-7xl" />

      <div className="mx-auto max-w-7xl pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-muted">
              {/* Abstract visual representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Concentric circles */}
                  <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
                  <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/15" />
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
                  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/5" />
                  
                  {/* Center element */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-glow-secondary shadow-2xl shadow-primary/20">
                    <span className="font-display text-3xl font-bold text-white">T</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-10 top-10 rounded-xl bg-primary/10 p-3"
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 left-10 rounded-xl bg-glow-secondary/10 p-3"
              >
                <TrendingUp className="h-6 w-6 text-glow-secondary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Founder
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Te
            </h2>
            <p className="mt-2 text-xl text-muted-foreground">
              Founder & Lead Builder
            </p>

            <div className="mt-8 space-y-4 text-foreground/80">
              <p>
                Te brings a rare combination of business operations experience and 
                hands-on technical execution. This company is built with the mindset 
                of a product builder, not an agency.
              </p>
              <p>
                From active e-commerce operations across multiple platforms to designing 
                and developing SaaS platforms from concept to working systems — the focus 
                has always been on building things that actually work.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="mt-10 rounded-2xl border border-border bg-card/50 p-6">
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Current Focus
              </h4>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Building scalable AI products that solve concrete problems
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Helping businesses deploy AI and automation responsibly
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Long-term product thinking rather than short-term experimentation
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
