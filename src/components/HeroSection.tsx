import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] overflow-hidden">
      {/* Orange gradient background */}
      <div className="absolute inset-0 bg-gradient-orange" />
      
      {/* Decorative gradient blob - right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <div className="absolute right-0 top-0 h-full w-full">
          <div className="gradient-blob gradient-blob-yellow absolute right-[-10%] top-1/4 h-[400px] w-[400px]" />
          <div className="gradient-blob gradient-blob-coral absolute right-[10%] top-1/2 h-[300px] w-[300px]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* The Caseton Title */}
          <p className="text-primary-foreground/80 text-sm font-medium tracking-wider uppercase mb-2">
            The
          </p>
          <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl font-medium text-primary-foreground italic leading-none">
            Caseton
          </h1>
        </motion.div>

        {/* Issue and Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 flex gap-16 text-primary-foreground/90"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase">Issue 1</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase">December 2030</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
