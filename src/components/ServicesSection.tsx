import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    {
      number: "01",
      title: t("services.s1.title"),
      description: t("services.s1.desc"),
      gradient: "service-card-blue",
    },
    {
      number: "02",
      title: t("services.s2.title"),
      description: t("services.s2.desc"),
      gradient: "service-card-purple",
    },
    {
      number: "03",
      title: t("services.s3.title"),
      description: t("services.s3.desc"),
      gradient: "service-card-orange",
    },
  ];

  return (
    <section id="services" className="relative px-6 py-16" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-sm font-medium text-muted-foreground">{t("services.label")}</span>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              {t("services.title1")}
              <br />
              {t("services.title2")}
            </h2>
            <div className="flex gap-8">
              <div>
                <p className="font-display text-4xl font-medium">{t("services.stat1.value")}</p>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{t("services.stat1.desc")}</p>
              </div>
              <div>
                <p className="font-display text-4xl font-medium">{t("services.stat2.value")}</p>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{t("services.stat2.desc")}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
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
