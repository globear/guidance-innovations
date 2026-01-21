import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Orange section with IT'S HERE */}
      <div className="bg-gradient-orange px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left - IT'S HERE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary-foreground/80 text-4xl sm:text-5xl font-display font-medium">
                IT'S
              </p>
              <p className="text-primary-foreground text-5xl sm:text-6xl font-display font-bold leading-none">
                HERE
              </p>
              <p className="mt-8 text-primary-foreground text-5xl sm:text-6xl font-display font-medium leading-none">
                MSGR
              </p>
              <p className="text-primary-foreground text-6xl sm:text-7xl font-display font-bold leading-none">
                2.0
              </p>
            </motion.div>

            {/* Right - Quote and description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="text-primary-foreground/90 text-sm uppercase tracking-wider mb-4">
                By Hal Stephenson
              </p>
              <p className="text-primary-foreground text-sm leading-relaxed mb-6">
                Delivering a personal and thoughtful email is the 
                best way to build a strong relationship with your 
                members and readers. Clear messaging helps 
                maintain clear communication:
              </p>
              <p className="text-primary-foreground/80 text-xs leading-relaxed mb-8">
                Stay relevant. Be proactive. Set the table. Gather 
                your team. Add a close. Make it easy to share.
              </p>
              <div className="border-t border-primary-foreground/30 pt-6">
                <p className="text-primary-foreground text-sm leading-relaxed">
                  There are a few keys to success. Here are a few other 
                  ways to build and engage with readers, partners at 
                  work, and even while avoiding with a simple tap.
                </p>
                <p className="text-primary-foreground/90 text-sm leading-relaxed mt-4">
                  Newsletters that grow your company start off 
                  by doing a few essential fundamentals. Be clear on 
                  subject matter. Model what success looks like. 
                  Be upbeat, to write. Take action to be 'useful but 
                  not salesy' to your reader. Be concise. Avoid, and 
                  ask the big questions. Don't ask too early. How do 
                  others' newsletters live, share, and dominate.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image gallery grid */}
      <div className="px-6 py-12 bg-background">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-4 gap-4"
          >
            {/* Row 1 */}
            <div className="gallery-item aspect-square bg-[hsl(30_50%_85%)]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-24 rounded-lg bg-[hsl(30_60%_75%)] shadow-lg" />
              </div>
            </div>
            <div className="gallery-item aspect-square bg-primary" />
            <div className="gallery-item aspect-square bg-[hsl(30_50%_85%)]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-24 rounded-lg bg-[hsl(35_60%_70%)] shadow-lg" />
              </div>
            </div>
            <div className="gallery-item aspect-square bg-primary" />

            {/* Row 2 */}
            <div className="gallery-item aspect-square bg-[hsl(35_50%_80%)]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-24 rounded-lg bg-[hsl(25_70%_65%)] shadow-lg" />
              </div>
            </div>
            <div className="gallery-item aspect-square bg-[hsl(45_70%_85%)]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-24 rounded-lg bg-[hsl(55_80%_70%)] shadow-lg" />
              </div>
            </div>
            <div className="gallery-item aspect-square bg-[hsl(50_100%_75%)]" />
            <div className="gallery-item aspect-square bg-[hsl(120_50%_80%)]">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-24 rounded-lg bg-[hsl(120_60%_60%)] shadow-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
