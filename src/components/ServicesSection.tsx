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
    <section id="services" className="relative px-6 py-20" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t("services.label")}</span>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              {t("services.title1")}
              <br />
              {t("services.title2")}
            </h2>
            <div className="flex gap-12">
              <div>
                <p className="font-display text-5xl font-medium">{t("services.stat1.value")}</p>
                <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{t("services.stat1.desc")}</p>
              </div>
              <div>
                <p className="font-display text-5xl font-medium">{t("services.stat2.value")}</p>
                <p className="text-sm text-muted-foreground mt-1 whitespace-pre-line">{t("services.stat2.desc")}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid - Overlapping Cards Style */}
        <div className="relative mt-16">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`service-card ${service.gradient} min-h-[380px] flex flex-col justify-between`}
                style={{
                  marginTop: index === 1 ? '40px' : index === 2 ? '80px' : '0',
                }}
              >
                <div>
                  <span className="inline-block rounded-lg bg-foreground/10 px-3 py-1 text-xs font-medium">
                    SERVICE [{service.number}]
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-medium leading-tight whitespace-pre-line">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
