import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, Workflow, Network, X } from "lucide-react";
import aiAgentsChatImage from "@/assets/ai-agents-chat.webp";
import n8nWorkflowImage from "@/assets/n8n-workflow.webp";
import supabaseEdgeFunctionsImage from "@/assets/supabase-edge-functions.webp";
import { useLanguage } from "@/contexts/LanguageContext";

type Capability = {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  image?: string;
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCapability, setSelectedCapability] = useState<Capability | null>(null);
  const { t } = useLanguage();

  const capabilities: Capability[] = [
    {
      title: t("features.aiAgents"),
      description: t("features.aiAgentsDesc"),
      icon: <Bot className="w-16 h-16 text-primary" />,
      gradient: "from-primary/20 via-primary/10 to-background",
      image: aiAgentsChatImage,
    },
    {
      title: t("features.workflow"),
      description: t("features.workflowDesc"),
      icon: <Workflow className="w-16 h-16 text-cyan-400" />,
      gradient: "from-cyan-500/20 via-cyan-500/10 to-background",
      image: n8nWorkflowImage,
    },
    {
      title: t("features.integration"),
      description: t("features.integrationDesc"),
      icon: <Network className="w-16 h-16 text-purple-400" />,
      gradient: "from-purple-500/20 via-purple-500/10 to-background",
      image: supabaseEdgeFunctionsImage,
    },
  ];

  const additionalCapabilities = [
    t("features.docProcessing"),
    t("features.dataPipelines"),
    t("features.vectorSearch"),
    t("features.apiDesign"),
  ];

  const handleCapabilityClick = (capability: Capability) => {
    if (selectedCapability?.title === capability.title) {
      setSelectedCapability(null);
    } else {
      setSelectedCapability(capability);
    }
  };

  return (
    <section id="services" className="relative bg-muted section-padding" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
            {t("features.heading")} <span className="text-primary">{t("features.headingHighlight")}</span>
          </h2>
          <p className="font-display text-xl sm:text-2xl text-muted-foreground mt-2">
            {t("features.subheading")}
          </p>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </motion.div>

        {/* Capability buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              onClick={() => handleCapabilityClick(capability)}
              className={`feature-card min-w-[180px] cursor-pointer transition-all duration-300 ${
                selectedCapability?.title === capability.title 
                  ? 'scale-105 ring-2 ring-primary/50' 
                  : 'hover:scale-105'
              }`}
            >
              {capability.title}
            </div>
          ))}
        </motion.div>

        {/* Expanded content area */}
        <AnimatePresence mode="wait">
          {selectedCapability && (
            <motion.div
              key={selectedCapability.title}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mb-12"
            >
              <div className="rounded-xl bg-card/80 border border-border backdrop-blur-sm p-6 sm:p-8 shadow-lg">
                {/* Close button */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                    {selectedCapability.title}
                  </h3>
                  <button
                    onClick={() => setSelectedCapability(null)}
                    className="rounded-md p-1.5 hover:bg-muted transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>

                {/* Image */}
                {selectedCapability.image && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="mb-6"
                  >
                    <img
                      src={selectedCapability.image}
                      alt={selectedCapability.title}
                      className="w-full rounded-lg border border-border shadow-md"
                    />
                  </motion.div>
                )}

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                >
                  {selectedCapability.description}
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Capability descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {capabilities.map((capability) => (
            <div key={capability.title} className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Additional capabilities list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
            {t("features.alsoIncludes")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalCapabilities.map((item) => (
              <span key={item} className="px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground font-mono">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
