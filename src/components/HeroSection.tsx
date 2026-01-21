import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          className="max-w-3xl"
        >
          {/* Company Name */}
          <p className="text-primary-foreground/80 text-sm font-medium tracking-wider uppercase mb-2">
            Guidance Innovation Co., Ltd.
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-primary-foreground italic leading-tight">
            Building Practical AI
          </h1>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-primary-foreground/90 mt-2">
            for Real Businesses
          </p>
        </motion.div>

        {/* Tagline and CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-xl"
        >
          <p className="text-primary-foreground/90 text-base leading-relaxed">
            We design and build AI-powered SaaS products, intelligent automation, and custom software systems that solve real operational problems.
          </p>
          <p className="text-primary-foreground/70 text-sm mt-4">
            No hype. Just systems that work.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#products" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground text-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              View Products
            </a>
          </div>
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-8 text-primary-foreground/80 text-sm"
        >
          <div>
            <p className="text-xs tracking-wider uppercase text-primary-foreground/60">Products</p>
            <p className="mt-1">GuidanceStream • CareRouters</p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-primary-foreground/60">Based in</p>
            <p className="mt-1">Thailand, serving global clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
