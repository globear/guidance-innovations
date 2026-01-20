import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#products", label: t("nav.products") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl shadow-sm" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground">
              <span className="font-display text-lg font-bold text-background">G</span>
            </div>
            <span className="hidden font-body text-sm font-semibold tracking-tight sm:block">
              Guidance Innovation
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button & Language Switcher */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="btn-primary"
            >
              {t("nav.getInTouch")}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 right-4 top-20 rounded-2xl border border-border bg-card p-6 shadow-lg lg:hidden"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-lg font-medium text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-4 border-t border-border">
                  <LanguageSwitcher />
                </li>
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    {t("nav.getInTouch")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
