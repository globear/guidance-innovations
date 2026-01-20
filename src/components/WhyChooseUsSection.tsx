import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("why.q1"),
      answer: t("why.a1"),
    },
    {
      question: t("why.q2"),
      answer: t("why.a2"),
    },
    {
      question: t("why.q3"),
      answer: t("why.a3"),
    },
  ];

  return (
    <section id="about" className="relative px-6 py-20" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - 3D Visual Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[40px] bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 overflow-hidden">
              {/* Abstract 3D-like visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Outer glow ring */}
                  <div className="h-64 w-64 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl" />
                  
                  {/* Middle ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-gradient-to-br from-accent/50 to-primary/50 blur-xl" />
                  
                  {/* Inner sphere */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 shadow-xl" />
                  
                  {/* Center logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-card shadow-lg flex items-center justify-center border border-primary/30">
                    <span className="font-display text-2xl font-medium text-primary">G</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-accent/40 to-primary/30 opacity-60 blur-sm" />
              <div className="absolute bottom-12 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 opacity-60 blur-sm" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
              {t("why.title1")}
            </h2>

            {/* Accordion FAQ */}
            <div className="mt-10 space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-minimal">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between text-left py-2 group"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">{faq.question}</span>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full border border-border transition-all duration-200 ${
                      openIndex === index ? "bg-foreground" : "bg-transparent"
                    }`}>
                      {openIndex === index ? (
                        <Minus className="h-4 w-4 text-background" />
                      ) : (
                        <Plus className="h-4 w-4 text-foreground" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 pb-4 text-sm text-muted-foreground leading-relaxed pr-12">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
