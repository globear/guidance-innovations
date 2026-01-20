import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FounderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t("founder.name"),
      role: t("founder.role"),
      initial: "T",
      gradient: "from-primary/30 to-accent/20",
      active: true,
    },
    {
      name: t("founder.join"),
      role: t("founder.joinDesc"),
      initial: "+",
      gradient: "from-muted to-muted",
      active: false,
    },
    {
      name: t("founder.growing"),
      role: t("founder.growingDesc"),
      initial: "+",
      gradient: "from-muted to-muted",
      active: false,
    },
  ];

  return (
    <section className="relative px-6 py-20" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t("founder.label")}</span>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              {t("founder.title1")}
              <br />
              {t("founder.title2")}
            </h2>
            <p className="max-w-md text-sm text-muted-foreground leading-relaxed">
              {t("founder.subtitle")}
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`text-center ${!member.active ? 'opacity-50' : ''}`}
            >
              <div className={`mx-auto mb-6 h-72 w-full max-w-[280px] rounded-[32px] bg-gradient-to-br ${member.gradient} overflow-hidden`}>
                <div className="flex h-full items-center justify-center">
                  {member.active ? (
                    <div className="relative">
                      {/* Avatar with glow */}
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-xl absolute -inset-4" />
                      <div className="relative h-24 w-24 rounded-full bg-card shadow-lg flex items-center justify-center border border-border/50">
                        <span className="font-display text-4xl font-medium text-foreground">{member.initial}</span>
                      </div>
                    </div>
                  ) : (
                    <span className="text-5xl text-muted-foreground/40 font-light">{member.initial}</span>
                  )}
                </div>
              </div>
              <h3 className="font-display text-xl font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
