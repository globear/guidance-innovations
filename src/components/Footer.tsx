import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-xl font-bold text-primary-foreground">G</span>
              </div>
              <span className="font-display text-lg font-semibold">
                Guidance Innovation
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Building practical AI products and automation systems for real businesses.
              No hype. Just systems that work.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Guidance Innovation Co., Ltd. (Thailand)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {[
                { href: "#services", label: "Services" },
                { href: "#products", label: "Products" },
                { href: "#about", label: "About" },
                { href: "#cases", label: "Case Studies" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold">Products</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#products"
                  className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GuidanceStream
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  CareRouters
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Guidance Innovation Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Based in Thailand • Serving Global Clients</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
