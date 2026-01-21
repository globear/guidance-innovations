import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative bg-background section-padding" ref={ref}>
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-start">
          {/* Left - What We Do intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              {t("welcome.label")}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-tight text-foreground">
              {t("welcome.heading1")}
              <br />
              {t("welcome.heading2")}
            </h2>

            {/* Tech gradient bar */}
            <div className="mt-8 h-1 w-full max-w-md rounded-full bg-gradient-tech" />

            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-lg">
              {t("welcome.description1")}
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg">
              {t("welcome.description2")}
            </p>
          </motion.div>

          {/* Right - Services overview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-border bg-card glow-hover">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t("welcome.saasTitle")}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t("welcome.saasDescription")}
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-card glow-hover">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t("welcome.automationTitle")}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t("welcome.automationDescription")}
              </p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-card glow-hover">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {t("welcome.devTitle")}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {t("welcome.devDescription")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
