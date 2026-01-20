import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative px-6 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground">{t("founder.label")}</span>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              {t("founder.title1")}
              <br />
              {t("founder.title2")}
            </h2>
            <p className="max-w-md text-sm text-muted-foreground">
              {t("founder.subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Founder Card - Simplified to focus on single founder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {/* Founder */}
          <div className="text-center">
            <div className="mx-auto mb-6 h-64 w-full max-w-[240px] rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-card shadow-lg flex items-center justify-center">
                  <span className="font-display text-3xl font-medium text-foreground">T</span>
                </div>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium">{t("founder.name")}</h3>
            <p className="text-sm text-muted-foreground">{t("founder.role")}</p>
          </div>

          {/* Hiring placeholder */}
          <div className="text-center opacity-60">
            <div className="mx-auto mb-6 h-64 w-full max-w-[240px] rounded-3xl bg-muted overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <span className="text-4xl text-muted-foreground/40">+</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium">{t("founder.join")}</h3>
            <p className="text-sm text-muted-foreground">{t("founder.joinDesc")}</p>
          </div>

          {/* Growing team placeholder */}
          <div className="text-center opacity-40">
            <div className="mx-auto mb-6 h-64 w-full max-w-[240px] rounded-3xl bg-muted overflow-hidden">
              <div className="flex h-full items-center justify-center">
                <span className="text-4xl text-muted-foreground/40">+</span>
              </div>
            </div>
            <h3 className="font-display text-xl font-medium">{t("founder.growing")}</h3>
            <p className="text-sm text-muted-foreground">{t("founder.growingDesc")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
