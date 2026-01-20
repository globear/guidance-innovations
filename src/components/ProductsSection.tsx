import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    name: "GuidanceStream",
    tagline: "AI Customer Service Agent",
    description: "An AI-powered customer service platform for businesses that handle high volumes of inquiries. Designed for e-commerce sellers, service providers, and multi-channel operations.",
    features: ["Multi-channel support", "RAG knowledge base", "Brand-aligned responses", "Workflow automation"],
    status: "Private Beta",
  },
  {
    name: "CareRouters",
    tagline: "Hospital Escort Platform",
    description: "A mobile platform designed to help elderly individuals and families access hospital escort services in Thailand and Malaysia.",
    features: ["iOS app booking", "Real hospital workflows", "Safety focused", "Elderly-friendly UX"],
    status: "MVP Stage",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative px-6 py-24" ref={ref}>
      {/* Gradient blob */}
      <div className="gradient-blob gradient-blob-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-muted-foreground">Our Products</span>
          <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
            Built for Real-World Use
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Products designed around actual business needs and validated with real users.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.tagline}</p>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {product.status}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
