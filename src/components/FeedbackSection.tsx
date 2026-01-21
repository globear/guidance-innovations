import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FeedbackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    "Integration with more devices",
    "Built-in AI assistant",
    "Community Chats",
  ];

  return (
    <section className="relative px-6 py-20 bg-muted" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary leading-tight">
              We're eager
              <br />
              to hear
              <br />
              from you!
            </h2>
            <p className="mt-6 text-lg font-medium text-foreground">
              Stay tuned for more updates
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-muted-foreground/10 px-4 py-2">
                <span className="text-sm text-muted-foreground">
                  Check out "Subscribe" for info and offers about the latest edition of The Caseton!
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Poll/Survey */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl border border-primary/30 bg-card p-6">
              <h3 className="font-medium text-foreground mb-6">
                What other premium
                <br />
                feature do you wish to see
                <br />
                in the app?
              </h3>

              <div className="space-y-3 mb-6">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                      selectedOption === option
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Input
                  placeholder="Other (please specify)"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
