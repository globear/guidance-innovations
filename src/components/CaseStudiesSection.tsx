import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Workflow, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const caseStudies = [
    {
      icon: Bot,
      title: t("caseStudies.aiCustomerService.title"),
      industry: t("caseStudies.aiCustomerService.industry"),
      challenge: t("caseStudies.aiCustomerService.challenge"),
      solution: t("caseStudies.aiCustomerService.solution"),
      outcome: t("caseStudies.aiCustomerService.outcome"),
    },
    {
      icon: Workflow,
      title: t("caseStudies.operationalAutomation.title"),
      industry: t("caseStudies.operationalAutomation.industry"),
      challenge: t("caseStudies.operationalAutomation.challenge"),
      solution: t("caseStudies.operationalAutomation.solution"),
      outcome: t("caseStudies.operationalAutomation.outcome"),
    },
    {
      icon: Smartphone,
      title: t("caseStudies.careRoutersMvp.title"),
      industry: t("caseStudies.careRoutersMvp.industry"),
      challenge: t("caseStudies.careRoutersMvp.challenge"),
      solution: t("caseStudies.careRoutersMvp.solution"),
      outcome: t("caseStudies.careRoutersMvp.outcome"),
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
    <section id="case-studies" className="relative bg-background section-padding" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
            {t("caseStudies.label")}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
            {t("caseStudies.heading")} <span className="text-primary">{t("caseStudies.headingHighlight")}</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("caseStudies.description")}
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
                  <p className="font-medium text-foreground mb-1">{t("caseStudies.challengeLabel")}</p>
                  <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{t("caseStudies.solutionLabel")}</p>
                  <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="font-medium text-primary mb-1">{t("caseStudies.outcomeLabel")}</p>
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
