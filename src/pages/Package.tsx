import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  Database,
  Globe,
  Layers,
  Mail,
  MessageSquare,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageWizard from "@/components/PackageWizard";
import DemoScrollSection from "@/components/DemoScrollSection";
import { useLanguage } from "@/contexts/LanguageContext";

const tiers = [
  { id: "website", recommended: false, hasNote: false },
  { id: "business", recommended: true, hasNote: false },
  { id: "sales", recommended: false, hasNote: true },
];

const addOnIcons = [
  MessageSquare,
  Globe,
  Layers,
  Database,
  Calendar,
  Users,
  Bot,
  Zap,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
];

const HOW_IT_WORKS_STEPS = 4;

const VALID_PLANS = ["demo", "website", "business", "sales"];
const VALID_WEBSITE_STATUSES = ["have", "need", "bundle"];

const Package = () => {
  const { t, tList, language } = useLanguage();
  const wizardRef = useRef<HTMLElement>(null);
  const [wizardPlan, setWizardPlan] = useState("");
  const [wizardWebsiteStatus, setWizardWebsiteStatus] = useState("");

  const scrollToWizard = (plan = "", websiteStatus = "") => {
    if (plan && VALID_PLANS.includes(plan)) setWizardPlan(plan);
    if (websiteStatus && VALID_WEBSITE_STATUSES.includes(websiteStatus)) {
      setWizardWebsiteStatus(websiteStatus);
    }
    requestAnimationFrame(() => {
      wizardRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? "";

    document.title = t("package.meta.title");
    if (metaDescription) metaDescription.setAttribute("content", t("package.meta.description"));

    return () => {
      document.title = previousTitle;
      if (metaDescription) metaDescription.setAttribute("content", previousDescription);
    };
  }, [t, language]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    const websiteStatus = params.get("website");
    const shouldScroll = window.location.hash === "#wizard";

    if (plan && VALID_PLANS.includes(plan)) setWizardPlan(plan);
    if (websiteStatus && VALID_WEBSITE_STATUSES.includes(websiteStatus)) {
      setWizardWebsiteStatus(websiteStatus);
    }
    if (
      shouldScroll &&
      ((plan && VALID_PLANS.includes(plan)) ||
        (websiteStatus && VALID_WEBSITE_STATUSES.includes(websiteStatus)))
    ) {
      requestAnimationFrame(() => {
        wizardRef.current?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden section-padding pt-28 sm:pt-32 lg:pt-40">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="gradient-blob gradient-blob-blue absolute -right-40 -top-20 h-[400px] w-[400px] opacity-40 lg:h-[500px] lg:w-[500px]" />
          <div className="gradient-blob gradient-blob-cyan absolute -left-40 top-40 h-[300px] w-[300px] opacity-30" />

          <div className="section-container relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("package.hero.label")}
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                {t("package.hero.headline")}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                {t("package.hero.description")}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <button type="button" onClick={() => scrollToWizard()} className="btn-primary">
                  {t("package.hero.primaryCta")}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a href="#demo" className="btn-secondary">
                  {t("package.hero.secondaryCta")}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What it does */}
        <section className="relative section-padding border-t border-border bg-muted">
          <div className="section-container">
            <div className="mx-auto max-w-3xl lg:mx-0">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("package.whatItDoes.label")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                {t("package.whatItDoes.heading")}
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tList("package.whatItDoes.items").map((item) => (
                <div
                  key={item}
                  className="info-card glow-hover flex items-start gap-4 transition-colors"
                >
                  <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-1.5">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed text-card-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding border-t border-border">
          <div className="section-container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("package.howItWorks.label")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                {t("package.howItWorks.heading")}
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: HOW_IT_WORKS_STEPS }).map((_, index) => (
                <div key={index} className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-tech font-display text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {t(`package.howItWorks.steps.${index}.title` as any)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`package.howItWorks.steps.${index}.description` as any)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <DemoScrollSection onRequestDemo={() => scrollToWizard("demo")} />

        {/* Packages */}
        <section id="packages" className="section-padding border-t border-border">
          <div className="section-container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("package.packages.label")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                {t("package.packages.heading")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("package.packages.description")}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {tiers.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col rounded-2xl border bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 sm:p-8 glow-hover ${
                    pkg.recommended
                      ? "border-primary shadow-lg shadow-primary/10"
                      : "border-border"
                  }`}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-tech px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                      {t("package.packages.recommended")}
                    </div>
                  )}
                  <div className="mb-4 flex items-center gap-2">
                    <Star
                      className={`h-5 w-5 ${
                        pkg.recommended ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                    <h3 className="font-display text-xl font-semibold text-card-foreground">
                      {t(`package.packages.${pkg.id}.name` as any)}
                    </h3>
                  </div>
                  <p className="text-3xl font-semibold text-foreground">
                    {t(`package.packages.${pkg.id}.price` as any)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t(`package.packages.${pkg.id}.term` as any)}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tList(`package.packages.${pkg.id}.features`).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-card-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {tList(`package.packages.${pkg.id}.exclusions`).map((exclusion) => (
                      <li
                        key={exclusion}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full border border-muted-foreground/40" />
                        <span>
                          {t("package.packages.excludesPrefix")} {exclusion}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {pkg.hasNote && (
                    <p className="mt-4 rounded-lg bg-muted p-3 text-xs text-muted-foreground">
                      {t(`package.packages.${pkg.id}.note` as any)}
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => scrollToWizard(pkg.id)}
                    className={`mt-6 w-full justify-center ${
                      pkg.recommended ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {t("package.packages.cta")}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section-padding border-t border-border">
          <div className="section-container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("package.addOns.label")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                {t("package.addOns.heading")}
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {addOnIcons.map((Icon, index) => (
                <div key={index} className="info-card glow-hover transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 text-sm font-semibold text-card-foreground">
                    {t(`package.addOns.items.${index}.label` as any)}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t(`package.addOns.items.${index}.detail` as any)}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              {t("package.addOns.note")}
            </p>
          </div>
        </section>

        {/* Subscription */}
        <section className="section-padding border-t border-border bg-muted">
          <div className="section-container">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm sm:p-10 lg:p-12">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("package.subscription.label")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium text-foreground sm:text-3xl">
                {t("package.subscription.heading")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("package.subscription.description")}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {tList("package.subscription.items").map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-card-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg border border-border bg-background/80 p-4 text-sm text-muted-foreground">
                <Clock className="mb-2 h-5 w-5 text-primary" />
                <p>
                  <strong className="text-foreground">
                    {t("package.subscription.disclaimerLabel")}
                  </strong>{" "}
                  {t("package.subscription.disclaimerText")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder quote */}
        <section className="section-padding border-t border-border">
          <div className="section-container">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm sm:p-10 lg:p-12">
              <blockquote className="text-center">
                <p className="font-display text-lg font-medium leading-relaxed text-card-foreground sm:text-xl">
                  &ldquo;{t("package.quote.text")}&rdquo;
                </p>
                <footer className="mt-6 text-sm font-semibold text-muted-foreground">
                  {t("package.quote.author")}
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Wizard */}
        <section ref={wizardRef} id="wizard" className="relative section-padding border-t border-border bg-muted">
          <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />
          <div className="section-container relative">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {t("package.wizardIntro.label")}
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-foreground sm:text-4xl">
                {t("package.wizardIntro.heading")}
              </h2>
              <p className="mt-4 text-muted-foreground">{t("package.wizardIntro.description")}</p>
            </div>
            <div className="mt-12">
              <PackageWizard
                key={`${wizardPlan || "default"}-${wizardWebsiteStatus || "none"}`}
                initialPackage={wizardPlan}
                initialWebsiteStatus={wizardWebsiteStatus}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Package;
