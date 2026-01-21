import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Dark tech background with gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Decorative gradient blobs */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3">
        <div className="gradient-blob gradient-blob-blue absolute right-[-10%] top-1/4 h-[500px] w-[500px]" />
        <div className="gradient-blob gradient-blob-purple absolute right-[15%] top-1/2 h-[400px] w-[400px]" />
        <div className="gradient-blob gradient-blob-cyan absolute left-[10%] bottom-0 h-[300px] w-[300px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Company Name */}
          <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase mb-4">
            Guidance Innovation Co., Ltd.
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground leading-tight tracking-tight">
            Building Practical AI
          </h1>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mt-2">
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
          <p className="text-muted-foreground text-base leading-relaxed">
            We design and build AI-powered SaaS products, intelligent automation, and custom software systems that solve real operational problems.
          </p>
          <p className="text-muted-foreground/60 text-sm mt-4 font-mono">
            // No hype. Just systems that work.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#contact" className="btn-primary">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#products" className="btn-secondary">
              View Products
            </a>
          </div>
        </motion.div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 flex flex-wrap gap-12 text-sm"
        >
          <div>
            <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground/60 mb-1">Products</p>
            <p className="text-foreground">GuidanceStream • CareRouters</p>
          </div>
          <div>
            <p className="text-xs font-mono tracking-wider uppercase text-muted-foreground/60 mb-1">Based in</p>
            <p className="text-foreground">Thailand, serving global clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
