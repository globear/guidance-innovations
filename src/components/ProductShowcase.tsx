import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import OpsDashboardMock from "@/components/products/OpsDashboardMock";

const ProductShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="products"
      className="relative overflow-hidden px-3 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-tech" />
      <motion.div
        className="absolute inset-0 grid-pattern opacity-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.25 } : { opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.3 : 1.2, ease: "easeOut" }}
      />
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={
            isInView
              ? { opacity: [0, 0.45, 0.25], scale: [0.7, 1.05, 1] }
              : { opacity: 0, scale: 0.7 }
          }
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      )}

      <div className="relative mx-auto w-full max-w-7xl [perspective:1400px]">
        <motion.div
          data-products-stage={isInView ? "in" : "out"}
          initial={
            prefersReducedMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 72, scale: 0.92, rotateX: 12 }
          }
          animate={
            isInView
              ? prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1, rotateX: 0 }
              : prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 72, scale: 0.92, rotateX: 12 }
          }
          transition={{
            duration: prefersReducedMotion ? 0.35 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <OpsDashboardMock animate={isInView} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
