import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Heart, Zap, Shield } from "lucide-react";
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
      icon: Cpu,
      gradient: "from-blue-100 to-purple-100",
    },
    {
      name: t("products.cr.name"),
      tagline: t("products.cr.tagline"),
      description: t("products.cr.desc"),
      features: [t("products.cr.f1"), t("products.cr.f2"), t("products.cr.f3"), t("products.cr.f4")],
      status: t("products.cr.status"),
      icon: Heart,
      gradient: "from-orange-100 to-pink-100",
    },
  ];

  const industries = [
    { name: t("products.ind.tech"), icon: Cpu, desc: t("products.ind.techDesc") },
    { name: t("products.ind.health"), icon: Heart, desc: t("products.ind.healthDesc") },
    { name: t("products.ind.auto"), icon: Zap, desc: t("products.ind.autoDesc") },
    { name: t("products.ind.ops"), icon: Shield, desc: t("products.ind.opsDesc") },
  ];

  return (
    <section id="products" className="relative px-6 py-20" ref={ref}>
      {/* Subtle gradient blob */}
      <div className="gradient-blob gradient-blob-mint absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        {/* Executive Search Style Header */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t("products.label")}</span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
              {t("products.title")}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              {t("products.subtitle")}
            </p>
          </motion.div>

          {/* Industries/Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {industries.map((industry, index) => (
              <div key={industry.name} className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors">
                <div className="feature-icon bg-gradient-to-br from-blue-100 to-purple-100">
                  <industry.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{industry.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{industry.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="group rounded-3xl border border-border bg-card p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`feature-icon bg-gradient-to-br ${product.gradient}`}>
                    <product.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.tagline}</p>
                  </div>
                </div>
                <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
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
