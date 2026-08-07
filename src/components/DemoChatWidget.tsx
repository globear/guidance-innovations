import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronDown, Moon, Send, Sparkles, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { demoChatScript } from "@/data/demoChatScript";
import { cn } from "@/lib/utils";

interface DemoChatWidgetProps {
  /** 0–1 scroll progress through the sticky demo track */
  scrollProgress: MotionValue<number>;
  /** When false (mobile / reduced motion), show the full transcript */
  scrubEnabled: boolean;
}

const DemoChatWidget = ({
  scrollProgress,
  scrubEnabled,
}: DemoChatWidgetProps) => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const endRef = useRef<HTMLDivElement>(null);
  const total = demoChatScript.length;
  const active = scrubEnabled && !prefersReducedMotion;

  const [visibleCount, setVisibleCount] = useState(active ? 1 : total);

  const mappedCount = useTransform(scrollProgress, [0, 1], [1, total]);

  useMotionValueEvent(mappedCount, "change", (value) => {
    if (!active) return;
    const next = Math.min(total, Math.max(1, Math.round(value)));
    setVisibleCount((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    if (!active) {
      setVisibleCount(total);
      return;
    }
    setVisibleCount(
      Math.min(total, Math.max(1, Math.round(mappedCount.get()))),
    );
  }, [active, total, mappedCount]);

  useEffect(() => {
    if (!active) return;
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [visibleCount, active]);

  const visible = demoChatScript.slice(0, visibleCount);

  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-xl backdrop-blur-sm lg:mr-0">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-tech">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-card-foreground">
            {t("package.demo.widget.business")}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {t("package.demo.widget.tagline")}
          </p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="hidden items-center gap-1 rounded-md border border-border px-2 py-1 text-xs sm:inline-flex">
            Sans
            <ChevronDown className="h-3 w-3" />
          </span>
          <Moon className="h-4 w-4" />
          <X className="h-4 w-4" />
        </div>
      </div>

      <div className="h-[280px] space-y-3 overflow-y-auto bg-background/60 px-4 py-5 scroll-smooth">
        <AnimatePresence initial={false}>
          {visible.map((msg, i) => (
            <motion.div
              key={i}
              initial={
                prefersReducedMotion || !active
                  ? false
                  : { opacity: 0, y: 10, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "w-fit max-w-[85%] rounded-2xl px-4 py-3 text-sm",
                msg.role === "bot"
                  ? "rounded-tl-sm bg-muted text-foreground"
                  : "ml-auto rounded-tr-sm bg-primary text-primary-foreground",
              )}
            >
              {msg.role === "user" && msg.lang ? (
                <span className="mb-1.5 block text-[10px] font-mono uppercase tracking-wider text-primary-foreground/70">
                  {msg.lang}
                </span>
              ) : null}
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={endRef} />
      </div>

      <div className="flex items-center gap-2 border-t border-border px-4 py-3">
        <div className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm text-muted-foreground">
          {t("package.demo.widget.inputPlaceholder")}
        </div>
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-tech">
          <Send className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
};

export default DemoChatWidget;
