import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const products = [
    {
      name: t("products.gs.name"),
      tagline: t("products.gs.tagline"),
      description: t("products.gs.desc"),
      features: [t("products.gs.f1"), t("products.gs.f2"), t("products.gs.f3"), t("products.gs.f4")],
      status: t("products.gs.status"),
    },
    {
      name: t("products.cr.name"),
      tagline: t("products.cr.tagline"),
      description: t("products.cr.desc"),
      features: [t("products.cr.f1"), t("products.cr.f2"), t("products.cr.f3"), t("products.cr.f4")],
      status: t("products.cr.status"),
    },
  ];

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
          <span className="text-sm font-medium text-muted-foreground">{t("products.label")}</span>
          <h2 className="mt-4 font-display text-4xl font-medium sm:text-5xl">
            {t("products.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t("products.subtitle")}
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
