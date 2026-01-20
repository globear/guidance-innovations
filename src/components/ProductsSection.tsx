import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, HeartPulse, ArrowUpRight, Check } from "lucide-react";

const products = [
  {
    id: "guidancestream",
    icon: MessageSquare,
    name: "GuidanceStream",
    tagline: "AI Customer Service Agent",
    description:
      "An AI-powered customer service platform for businesses that handle high volumes of inquiries. Designed for e-commerce sellers, service providers, and multi-channel operations.",
    problem: "Businesses lose time, revenue, and reputation when customer communication is slow or inconsistent.",
    features: [
      "Centralized knowledge base using RAG",
      "Multi-channel support (email, chat, messaging)",
      "Consistent, brand-aligned responses",
      "Workflow automation and integrations",
    ],
    status: "Private Beta",
    gradient: "from-primary to-blue-400",
  },
  {
    id: "carerouters",
    icon: HeartPulse,
    name: "CareRouters",
    tagline: "Hospital Escort Platform",
    description:
      "A mobile platform designed to help elderly individuals and families access hospital escort services in Thailand and Malaysia.",
    problem: "Navigating hospitals can be stressful for elderly individuals and their families.",
    features: [
      "iOS app for booking trusted companions",
      "Designed around real hospital workflows",
      "Focus on dignity, safety, and convenience",
      "Elderly-friendly experience",
    ],
    status: "MVP Stage",
    gradient: "from-emerald-500 to-teal-400",
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative px-6 py-32" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Products
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
            Built for{" "}
            <span className="text-gradient">Real-World</span> Use
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Products designed around actual business needs and validated with real users.
            Not theoretical demos, but systems that solve concrete problems.
          </p>
        </motion.div>

        {/* Products */}
        <div className="mt-20 space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-sm md:p-12"
            >
              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${product.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10`} />

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient}`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.tagline}</p>
                    </div>
                    <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {product.status}
                    </span>
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-6 rounded-xl bg-muted/50 p-4">
                    <p className="text-sm font-medium text-foreground">Problem it solves:</p>
                    <p className="mt-1 text-sm text-muted-foreground">{product.problem}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Features
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${product.gradient}`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/50 px-6 py-3 font-medium transition-all hover:border-primary hover:bg-primary/10"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
