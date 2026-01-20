import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <section id="about" className="relative px-6 py-16" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 overflow-hidden">
              {/* Abstract 3D-like visual using gradients */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-48 w-48 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 blur-xl" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-gradient-to-br from-orange-200 to-pink-200 blur-lg" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-card shadow-lg flex items-center justify-center">
                    <span className="font-display text-2xl font-medium">G</span>
                  </div>
                </div>
              </div>
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
              <br />
              {t("why.title2")}
            </h2>

            {/* Accordion FAQ */}
            <div className="mt-10 space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-minimal">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between text-left"
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pb-2 text-sm text-muted-foreground leading-relaxed">
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
