import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Enhanced security",
      description: "Rest assured, we will keep your file overall, private, and with encryption. Follow our tips so your contacts can verify your identity.",
    },
    {
      title: "Customization options",
      description: "Here are the changes tailored better to your overall point of view. This way you let your messages truly reflect your own personality.",
    },
    {
      title: "Offline mode",
      description: "With a spotty going wireless, you're ready to save time and stay connected. Rest your messages across a seamlessly send easily.",
    },
  ];

  return (
    <section className="relative px-6 py-20 bg-muted" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-foreground">
            Unlock these <span className="text-primary">3 features</span>
          </h2>
          <p className="font-display text-2xl sm:text-3xl text-muted-foreground mt-2">
            with a premium subscription
          </p>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Delivering newsletters through email is one of the best ways to build a 
            strong relationship with your members and customers.
          </p>
        </motion.div>

        {/* Feature buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card feature-card-orange min-w-[180px]"
            >
              {feature.title}
            </div>
          ))}
        </motion.div>

        {/* Feature descriptions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
