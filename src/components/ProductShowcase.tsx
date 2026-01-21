import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductShowcase = () => {
  const ref = useRef(null);
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: "guidancestream",
      label: "Our Products",
      name: "Guidance",
      nameBold: "Stream",
      subtitle: "AI Customer Service Agent",
      badge: "Private Beta",
      badgeStyle: "bg-primary-foreground/20 text-primary-foreground",
      isOrange: true,
      description: "Businesses lose time, revenue, and reputation when customer communication is slow or inconsistent. GuidanceStream solves this by acting as a structured, intelligent customer service layer across your communication channels.",
      problems: [
        "High volume of repetitive inquiries",
        "Inconsistent staff responses",
        "Knowledge scattered across documents",
        "Support teams that don't scale"
      ],
      features: [
        "Central knowledge base",
        "Context-aware AI responses",
        "Automation workflows",
        "Integration-ready"
      ]
    },
    {
      id: "carerouters",
      label: "Healthcare Platform",
      name: "Care",
      nameBold: "Routers",
      subtitle: "Hospital Escort Platform for Elderly Care",
      badge: "MVP Stage",
      badgeStyle: "bg-primary/10 text-primary",
      isOrange: false,
      description: "Navigating hospitals can be stressful for elderly individuals and their families. CareRouters provides a structured platform for finding reliable companions to assist with hospital visits.",
      coreFeatures: [
        { title: "Elderly-friendly UX", desc: "Designed for accessibility", bg: "bg-[hsl(30_50%_95%)]" },
        { title: "Real hospital workflows", desc: "Practical usability", bg: "bg-primary", light: true },
        { title: "Trust & Safety", desc: "Accountability focused", bg: "bg-[hsl(45_60%_90%)]" },
        { title: "Thailand & Malaysia", desc: "Regional coverage", bg: "bg-[hsl(35_40%_88%)]" }
      ]
    }
  ];

  const nextProduct = () => setActiveProduct((prev) => (prev + 1) % products.length);
  const prevProduct = () => setActiveProduct((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section id="products" className="relative overflow-hidden" ref={ref}>
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

      {/* Sliding container */}
      <div className="relative min-h-[600px]">
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
              {/* GuidanceStream - Orange section */}
              <div className="bg-gradient-orange px-6 py-16 min-h-[600px] flex items-center">
                <div className="mx-auto max-w-7xl w-full">
                  <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left - Product name */}
                    <div>
                      <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mb-4">
                        {products[0].label}
                      </p>
                      <p className="text-primary-foreground text-4xl sm:text-5xl font-display font-medium leading-tight">
                        {products[0].name}
                      </p>
                      <p className="text-primary-foreground text-5xl sm:text-6xl font-display font-bold italic leading-none">
                        {products[0].nameBold}
                      </p>
                      <p className="text-primary-foreground/90 text-lg mt-6">
                        {products[0].subtitle}
                      </p>
                      <span className={`inline-block mt-4 px-4 py-1 rounded-full text-sm ${products[0].badgeStyle}`}>
                        {products[0].badge}
                      </span>
                    </div>

                    {/* Right - Product description */}
                    <div className="flex flex-col justify-center">
                      <p className="text-primary-foreground/90 text-sm uppercase tracking-wider mb-4">
                        The Problem It Solves
                      </p>
                      <p className="text-primary-foreground text-sm leading-relaxed mb-6">
                        {products[0].description}
                      </p>
                      
                      <div className="space-y-3 text-primary-foreground/90 text-sm">
                        {products[0].problems?.map((p, i) => (
                          <p key={i}>• {p}</p>
                        ))}
                      </div>

                      <div className="border-t border-primary-foreground/30 pt-6 mt-6">
                        <p className="text-primary-foreground/90 text-sm uppercase tracking-wider mb-3">
                          How It Works
                        </p>
                        <div className="grid grid-cols-2 gap-3 text-sm text-primary-foreground/80">
                          {products[0].features?.map((f, i) => (
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
                        {products[1].description}
                      </p>
                    </div>

                    {/* Right - Features */}
                    <div className="grid grid-cols-2 gap-4">
                      {products[1].coreFeatures?.map((feature, i) => (
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
      </div>
    </section>
  );
};

export default ProductShowcase;
