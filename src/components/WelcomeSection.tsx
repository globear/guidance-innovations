import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-6 py-20 bg-background" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left - Welcome text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-tight text-foreground">
              Welcome to
              <br />
              our latest app
            </h2>

            {/* Orange progress bar */}
            <div className="mt-8 h-3 w-full rounded-full bg-gradient-orange" />

            <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-lg">
              What is a newsletter, the medium, you're still reading? Well, let's say you should. Join the conversation: Stay connected to your audience by 
              creating engaging updates that highlight your products, make your content more discoverable online, keep 
              tabs on what your readers are interested in, and build a lasting audience.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-lg">
              Be sure to include keywords that highlight your products to make your sign up page more discoverable online, and 
              add a clear call-to-action to get more subscribers.
            </p>
          </motion.div>

          {/* Right - MSGR 2.0 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-end"
          >
            <div className="text-right">
              <p className="font-display text-6xl sm:text-7xl lg:text-8xl font-medium text-primary leading-none">
                MSGR
              </p>
              <p className="font-display text-6xl sm:text-7xl lg:text-8xl font-medium text-primary leading-none">
                2.0
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
