import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Code2, Workflow, Bot, Database, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "SaaS Products",
    description: "Production-ready AI products built for real business use, not demos.",
    features: ["GuidanceStream", "CareRouters", "Custom Platforms"],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description: "Custom AI and automation systems for measurable operational improvement.",
    features: ["AI Agents", "Workflow Automation", "Process Optimization"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end product development from MVP to production-ready systems.",
    features: ["System Architecture", "API Development", "Infrastructure"],
  },
];

const capabilities = [
  { icon: Cpu, label: "AI Agents & RAG" },
  { icon: Database, label: "Knowledge Systems" },
  { icon: Workflow, label: "API Integrations" },
  { icon: Zap, label: "Workflow Automation" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative px-6 py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            Three Pillars of
            <br />
            <span className="text-gradient">Practical Innovation</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Our work focuses on clarity, reliability, and long-term scalability.
            Each solution is designed for production use and tailored to the business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="product-card group"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-muted-foreground">{service.description}</p>
              <ul className="mt-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="rounded-2xl border border-border bg-card/50 p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
              <div>
                <h4 className="font-display text-xl font-semibold">Core Capabilities</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Technology stack we specialize in
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2"
                  >
                    <cap.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{cap.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
