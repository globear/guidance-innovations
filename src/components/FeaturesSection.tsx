import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Bot, Workflow, Network } from "lucide-react";
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
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              onClick={() => setSelectedCapability(capability)}
              className="feature-card min-w-[180px] cursor-pointer hover:scale-105 transition-all duration-300"
            >
              {capability.title}
            </div>
          ))}
        </motion.div>

        {/* Modal for capability example */}
        <Dialog open={!!selectedCapability} onOpenChange={() => setSelectedCapability(null)}>
          <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-display">{selectedCapability?.title}</DialogTitle>
            </DialogHeader>
            {selectedCapability?.image ? (
              <div className="space-y-4">
                <img 
                  src={selectedCapability.image} 
                  alt={selectedCapability.title}
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-muted-foreground">
                  {selectedCapability.description}
                </p>
              </div>
            ) : (
              <div className={`flex flex-col items-center justify-center p-8 rounded-lg bg-gradient-to-br ${selectedCapability?.gradient}`}>
                {selectedCapability?.icon}
                <p className="mt-4 text-sm text-muted-foreground text-center max-w-sm">
                  {selectedCapability?.description}
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>

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
