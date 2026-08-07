import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoChatWidget from "@/components/DemoChatWidget";
import { useLanguage } from "@/contexts/LanguageContext";
import { demoChatScript } from "@/data/demoChatScript";

interface DemoScrollSectionProps {
  onRequestDemo: () => void;
}

const DemoScrollSection = ({ onRequestDemo }: DemoScrollSectionProps) => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLElement>(null);
  const [scrubEnabled, setScrubEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      setScrubEnabled(mq.matches && !prefersReducedMotion);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [prefersReducedMotion]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const hintOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [1, 1, 0.35, 0]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // ~1 viewport of sticky + ~0.12vh per message for scrub room
  const trackStyle = scrubEnabled
    ? { height: `${Math.max(280, 100 + demoChatScript.length * 12)}vh` }
    : undefined;

  return (
    <section
      id="demo"
      ref={trackRef}
      className="relative border-t border-border bg-muted"
      style={trackStyle}
    >
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      <div
        className={
          scrubEnabled
            ? "sticky top-20 flex min-h-[calc(100vh-5rem)] items-center py-10 lg:py-14"
            : "section-padding"
        }
      >
        <div className="section-container relative w-full">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("package.demo.label")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                {t("package.demo.heading")}
              </h2>
              <p className="mt-4 text-muted-foreground">
                {t("package.demo.paragraph1")}
              </p>
              <p className="mt-4 text-muted-foreground">
                {t("package.demo.paragraph2")}
              </p>
              <div className="mt-6 rounded-lg border border-border bg-background/80 p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">
                  {t("package.demo.importantLabel")}
                </strong>{" "}
                {t("package.demo.importantText")}
              </div>
              <button
                type="button"
                onClick={onRequestDemo}
                className="btn-primary mt-8"
              >
                {t("package.demo.cta")}
                <ArrowRight className="h-4 w-4" />
              </button>

              {scrubEnabled ? (
                <motion.div style={{ opacity: hintOpacity }} className="mt-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {t("package.demo.scrollHint")}
                  </p>
                  <div className="mt-2 h-1 w-40 overflow-hidden rounded-full bg-border">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      style={{ width: progressWidth }}
                    />
                  </div>
                </motion.div>
              ) : null}
            </div>

            <div className="relative">
              <div className="gradient-blob gradient-blob-purple absolute -right-20 top-0 h-[300px] w-[300px] opacity-30" />
              <DemoChatWidget
                scrollProgress={scrollYProgress}
                scrubEnabled={scrubEnabled}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoScrollSection;
