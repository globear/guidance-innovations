const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">G</span>
              </div>
              <span className="font-display text-lg font-medium text-foreground">
                Guidance Innovation
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Building practical AI products and automation systems for real businesses. 
              Based in Thailand, serving global clients.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GuidanceStream
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  CareRouters
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-foreground text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Guidance Innovation Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
