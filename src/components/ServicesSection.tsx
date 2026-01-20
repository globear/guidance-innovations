import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "AI DATA\nDRIVEN\nRESEARCH",
    description: "We use smart tools and AI to speed up business intelligence and decision making.",
    gradient: "service-card-blue",
  },
  {
    number: "02",
    title: "SAAS\nPRODUCT\nDEVELOPMENT",
    description: "We build production-ready AI products for real business use, not demos.",
    gradient: "service-card-purple",
  },
  {
    number: "03",
    title: "AUTOMATION\n&\nINTEGRATION",
    description: "We build long-term partnerships to help companies scale efficiently.",
    gradient: "service-card-orange",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground">What We Offer</span>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              Connecting Startups
              <br />
              with Top Talent
            </h2>
            <div className="flex gap-8">
              <div>
                <p className="font-display text-4xl font-medium">120+</p>
                <p className="text-sm text-muted-foreground">Projects supported with<br />tailored advisory</p>
              </div>
              <div>
                <p className="font-display text-4xl font-medium">50+</p>
                <p className="text-sm text-muted-foreground">Top tier advisors from<br />diverse industries</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`service-card ${service.gradient} min-h-[360px] flex flex-col justify-between`}
            >
              <div>
                <span className="text-xs font-medium text-foreground/60">SERVICE [{service.number}]</span>
                <h3 className="mt-6 font-display text-2xl font-medium leading-tight whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-foreground/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
