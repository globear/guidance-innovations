const footerLinks = {
  about: [
    { label: "News", href: "#" },
    { label: "Insight", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Events & Meetups", href: "#" },
  ],
  resources: [
    { label: "Founder Toolkit", href: "#" },
    { label: "How it Works", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Case Studies", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#contact" },
    { label: "Community Guidelines", href: "#" },
    { label: "Help Center", href: "#" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              Building practical AI products and automation systems for real businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-sm mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Support</h4>
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
            © {currentYear} Guidance Innovation Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
