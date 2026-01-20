import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20">
      {/* Gradient blobs */}
      <div className="gradient-blob gradient-blob-blue absolute -top-20 right-0 h-[500px] w-[500px]" />
      <div className="gradient-blob gradient-blob-pink absolute top-40 -left-20 h-[400px] w-[400px]" />
      <div className="gradient-blob gradient-blob-orange absolute bottom-20 right-20 h-[300px] w-[300px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
                ✦ AI Products & Systems
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl font-medium leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Building AI
              <br />
              for Real
              <br />
              Businesses
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-md text-base text-muted-foreground"
            >
              Guiding Innovations in Driving the Next Generation of Transformative AI and Automation Technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="btn-secondary">
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right Content - Stats & Info Cards */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full"
            >
              {/* Main visual card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-100 via-purple-50 to-orange-50 p-8">
                <div className="space-y-6">
                  {/* Focus Areas */}
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-card p-5 shadow-sm">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Focus Area</p>
                      <p className="font-display text-lg font-medium">SaaS Products</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Production-ready AI products built for real business use.
                      </p>
                    </div>
                    
                    <div className="rounded-2xl bg-card p-5 shadow-sm">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Expertise</p>
                      <p className="font-display text-lg font-medium">AI Automation</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Custom AI systems for measurable operational improvement.
                      </p>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-card p-4 shadow-sm text-center">
                      <p className="font-display text-3xl font-medium">95%</p>
                      <p className="text-xs text-muted-foreground mt-1">Client Retention</p>
                    </div>
                    <div className="rounded-2xl bg-card p-4 shadow-sm text-center">
                      <p className="font-display text-3xl font-medium">50+</p>
                      <p className="text-xs text-muted-foreground mt-1">Projects Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Company Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center text-sm text-muted-foreground"
        >
          Guidance Innovation Co., Ltd. — Thailand
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
