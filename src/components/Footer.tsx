import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { label: t("footer.aboutUs"), href: "#about" },
      { label: t("footer.careers"), href: "mailto:contact@guidanceinnovations.tech?subject=Careers" },
    ],
    products: [
      { label: t("footer.guidanceStream"), href: "#products" },
      { label: t("footer.careRouters"), href: "#products" },
    ],
    support: [
      { label: t("footer.contactUs"), href: "#contact" },
    ],
  };

  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground">
                <span className="font-display text-lg font-bold text-background">G</span>
              </div>
              <span className="font-body text-sm font-semibold">Guidance Innovation</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-sm mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">{t("footer.products")}</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">{t("footer.support")}</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright").replace("{year}", String(currentYear))}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {t("footer.privacy")}
            </span>
            <span className="text-sm text-muted-foreground">
              {t("footer.terms")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
