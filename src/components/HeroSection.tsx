import { motion } from "framer-motion";
import { ArrowRight, Sparkles, TrendingUp, Globe2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] overflow-hidden px-6 pt-28 pb-16">
      {/* Gradient blobs - larger and softer */}
      <div className="gradient-blob gradient-blob-blue absolute -top-32 right-0 h-[600px] w-[600px]" />
      <div className="gradient-blob gradient-blob-pink absolute top-60 -left-32 h-[500px] w-[500px]" />
      <div className="gradient-blob gradient-blob-orange absolute bottom-0 right-1/4 h-[400px] w-[400px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                {t("hero.badge")}
              </span>
            </motion.div>

            {/* Main Headline - larger, more impact */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {t("hero.title1")}
              <br />
              <span className="text-muted-foreground">{t("hero.title2")}</span>
              <br />
              {t("hero.title3")}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                {t("hero.cta.primary")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="btn-secondary">
                {t("hero.cta.secondary")}
              </a>
            </motion.div>
          </div>

          {/* Right Content - Info Cards Stack */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Decorative gradient background */}
              <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 blur-sm" />
              
              <div className="relative space-y-4">
                {/* Growth Stage Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute -top-2 right-4 z-10"
                >
                  <div className="info-card flex items-center gap-2 py-2 px-4">
                    <div className="feature-icon bg-gradient-to-br from-primary/30 to-primary/20">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium">{t("hero.growthStage")}</span>
                  </div>
                </motion.div>

                {/* Main Card - Focus Area */}
                <div className="info-card mt-8">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">{t("hero.focusArea")}</p>
                  <p className="font-display text-xl font-medium">{t("hero.saasProducts")}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t("hero.saasDesc")}
                  </p>
                </div>

                {/* Secondary Card - Expertise */}
                <div className="info-card">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">{t("hero.expertise")}</p>
                  <p className="font-display text-xl font-medium">{t("hero.aiAutomation")}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t("hero.aiDesc")}
                  </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="info-card text-center py-6">
                    <p className="font-display text-4xl font-medium">2</p>
                    <p className="text-xs text-muted-foreground mt-1">{t("hero.productsInDev")}</p>
                  </div>
                  <div className="info-card text-center py-6">
                    <div className="flex items-center justify-center gap-2">
                      <Globe2 className="h-5 w-5 text-muted-foreground" />
                      <p className="font-display text-2xl font-medium">TH/MY</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{t("hero.marketsServed")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Company Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center text-sm text-muted-foreground"
        >
          {t("hero.companyBadge")}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
