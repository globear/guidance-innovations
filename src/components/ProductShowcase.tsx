import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductShowcase = () => {
  const ref = useRef(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const { t } = useLanguage();

  const products = [
    {
      id: "guidancestream",
      label: t("products.ourProducts"),
      name: t("products.guidancestream.name"),
      nameBold: t("products.guidancestream.nameBold"),
      subtitle: t("products.guidancestream.subtitle"),
      badge: t("products.privateBeta"),
      badgeStyle: "bg-primary text-primary-foreground border border-primary",
      isBlue: true,
    },
    {
      id: "carerouters",
      label: t("products.healthcarePlatform"),
      name: t("products.carerouters.name"),
      nameBold: t("products.carerouters.nameBold"),
      subtitle: t("products.carerouters.subtitle"),
      badge: t("products.mvpStage"),
      badgeStyle: "bg-secondary text-secondary-foreground",
      isBlue: false,
    }
  ];

  const [isPaused, setIsPaused] = useState(false);

  const nextProduct = useCallback(() => setActiveProduct((prev) => (prev + 1) % products.length), [products.length]);
  const prevProduct = useCallback(() => setActiveProduct((prev) => (prev - 1 + products.length) % products.length), [products.length]);

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextProduct, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextProduct]);

  // Handle swipe gestures
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextProduct();
    } else if (info.offset.x > swipeThreshold) {
      prevProduct();
    }
  };

  // Get translated arrays
  const guidanceProblems = [
    t("products.guidancestream.problems.0" as any),
    t("products.guidancestream.problems.1" as any),
    t("products.guidancestream.problems.2" as any),
    t("products.guidancestream.problems.3" as any),
  ];

  const guidanceFeatures = [
    t("products.guidancestream.features.0" as any),
    t("products.guidancestream.features.1" as any),
    t("products.guidancestream.features.2" as any),
    t("products.guidancestream.features.3" as any),
  ];

  const coreFeatures = [
    { title: t("products.carerouters.elderlyUx"), desc: t("products.carerouters.elderlyUxDesc"), bg: "bg-secondary" },
    { title: t("products.carerouters.realWorkflows"), desc: t("products.carerouters.realWorkflowsDesc"), bg: "bg-primary", light: true },
    { title: t("products.carerouters.trustSafety"), desc: t("products.carerouters.trustSafetyDesc"), bg: "bg-muted" },
    { title: t("products.carerouters.regions"), desc: t("products.carerouters.regionsDesc"), bg: "bg-card border border-border" }
  ];

  return (
    <section 
      id="products" 
      className="relative overflow-hidden" 
      ref={ref}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Navigation dots and arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
        <button 
          onClick={prevProduct}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-colors"
          aria-label="Previous product"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
        <button 
          onClick={nextProduct}
          className="p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background transition-colors"
          aria-label="Next product"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveProduct(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === activeProduct 
                ? "bg-primary w-8" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to product ${idx + 1}`}
          />
        ))}
      </div>

      {/* Sliding container with swipe support */}
      <motion.div 
        className="relative min-h-[600px] cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence mode="wait">
          {activeProduct === 0 ? (
            <motion.div
              key="guidancestream"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* GuidanceStream - Tech gradient section */}
              <div className="relative px-6 py-16 min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-tech" />
                <div className="absolute inset-0 grid-pattern opacity-20" />
                <div className="gradient-blob gradient-blob-purple absolute right-0 top-0 h-[400px] w-[400px]" />
                
                <div className="relative mx-auto max-w-7xl w-full">
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left - Product name */}
                    <div>
                      <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-4 font-mono">
                        {products[0].label}
                      </p>
                      <p className="text-primary-foreground text-4xl sm:text-5xl font-display font-semibold leading-tight tracking-tight">
                        {products[0].name}
                      </p>
                      <p className="text-primary-foreground text-5xl sm:text-6xl font-display font-bold leading-none">
                        {products[0].nameBold}
                      </p>
                      <p className="text-primary-foreground/80 text-lg mt-6">
                        {products[0].subtitle}
                      </p>
                      <span className={`inline-block mt-4 px-4 py-1.5 rounded-md text-sm font-medium ${products[0].badgeStyle}`}>
                        {products[0].badge}
                      </span>
                    </div>

                    {/* Right - Product description */}
                    <div className="flex flex-col justify-center">
                      <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-4 font-mono">
                        {t("products.guidancestream.problemLabel")}
                      </p>
                      <p className="text-primary-foreground/90 text-sm leading-relaxed mb-6">
                        {t("products.guidancestream.description")}
                      </p>
                      
                      <div className="space-y-2 text-primary-foreground/80 text-sm font-mono">
                        {guidanceProblems.map((p, i) => (
                          <p key={i}>→ {p}</p>
                        ))}
                      </div>

                      <div className="border-t border-primary-foreground/20 pt-6 mt-6">
                        <p className="text-primary-foreground/70 text-sm uppercase tracking-wider mb-3 font-mono">
                          {t("products.guidancestream.howItWorks")}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80 font-mono">
                          {guidanceFeatures.map((f, i) => (
                            <p key={i}>• {f}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="carerouters"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* CareRouters section */}
              <div className="px-6 py-16 bg-background min-h-[600px] flex items-center">
                <div className="mx-auto max-w-7xl w-full">
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left - Description */}
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                        {products[1].label}
                      </p>
                      <h3 className="font-display text-4xl sm:text-5xl font-medium text-foreground">
                        {products[1].name}<span className="text-primary italic">{products[1].nameBold}</span>
                      </h3>
                      <p className="text-muted-foreground mt-2">{products[1].subtitle}</p>
                      <span className={`inline-block mt-4 px-4 py-1 rounded-full text-sm ${products[1].badgeStyle}`}>
                        {products[1].badge}
                      </span>
                      
                      <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
                        {t("products.carerouters.description")}
                      </p>
                    </div>

                    {/* Right - Features */}
                    <div className="grid grid-cols-2 gap-4">
                      {coreFeatures.map((feature, i) => (
                        <div key={i} className={`p-4 rounded-xl ${feature.bg}`}>
                          <p className={`font-medium text-sm ${feature.light ? "text-primary-foreground" : "text-foreground"}`}>
                            {feature.title}
                          </p>
                          <p className={`text-xs mt-1 ${feature.light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                            {feature.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProductShowcase;
