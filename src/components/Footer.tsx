import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const location = useLocation();
  
  const isAppSubdomain = window.location.hostname.startsWith("app.");
  const mainSiteUrl = "https://guidanceinnovations.tech";
  const isHome = location.pathname === "/";

  const getLink = (hash: string) => {
    if (isAppSubdomain) return `${mainSiteUrl}/${hash}`;
    return isHome ? hash : `/${hash}`;
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="section-container py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="sm:col-span-2">
            <span className="font-display text-lg font-medium text-foreground">
              Guidance Innovations Co., Ltd.
            </span>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Projects & Services */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-4">{t("footer.productsHeading")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://app.guidanceinnovations.tech" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GuidanceStream
                </a>
              </li>
              <li>
                <a href="https://app.guidanceinnovations.tech" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  CareRouters
                </a>
              </li>
              <li>
                <a href="https://app.guidanceinnovations.tech/FixMyText" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FixMyText
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-4">{t("footer.companyHeading")}</h4>
            <ul className="space-y-2">
              <li>
                <a href={getLink("#about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <Link to="/package" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.packages")}
                </Link>
              </li>
              <li>
                <a href={getLink("#contact")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright").replace("{year}", String(currentYear))}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
