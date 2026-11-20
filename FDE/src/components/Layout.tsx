import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { brand, contact } from "../content";
import { LANGS, useLang } from "../i18n";
import LangPicker from "./LangPicker";
import { gsap, lenis, reducedMotion, usePageMotion } from "../motion";

export default function Layout() {
  const { pathname, hash } = useLocation();
  const { lang, c, chosen, openPicker } = useLang();
  const t = c.ui;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const curtain = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const links = [
    { to: "/business", label: t.nav.business },
    { to: "/leaders", label: t.nav.leaders },
    { to: "/industries/factories", label: t.nav.industries, match: "/industries" },
    { to: "/how-we-work", label: t.nav.how },
    { to: "/security", label: t.nav.security },
    { to: "/about", label: t.nav.about },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change: jump to top and lift an accent curtain off the new page.
  useLayoutEffect(() => {
    setOpen(false);
    lenis?.resize(); // the new page has a different height
    lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0);
    if (first.current || reducedMotion()) { first.current = false; return; }
    gsap.fromTo(curtain.current, { scaleY: 1, transformOrigin: "top" }, { scaleY: 0, duration: 0.8, ease: "power4.inOut" });
  }, [pathname]);

  // Links like /how-we-work#cases: once the new page has laid out (pinned sections included), scroll to the anchor.
  useEffect(() => {
    if (!hash) return;
    const id = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (!el) return;
      // Jump rather than glide: the target can be thousands of pixels down. Refresh Lenis's
      // page height first, or it clamps the target to the previous page's length.
      if (lenis) { lenis.resize(); lenis.scrollTo(el, { offset: -80, immediate: true }); } else el.scrollIntoView();
    }, 900);
    return () => clearTimeout(id);
  }, [pathname, hash]);

  // Remount once a language is picked so the intro animations play after the pop-up closes.
  const pageKey = `${lang}${chosen ? "" : "?"}${pathname}`;
  usePageMotion(pageKey, lang);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap">
          <Link to="/" className="brand" aria-label={brand.name}>
            <img src="/logo.png" alt="" />
            <span>{brand.name}</span>
          </Link>
          <nav className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive || (l.match && pathname.startsWith(l.match)) ? "active" : "")}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-right">
            <button className="nav-lang" onClick={openPicker} aria-label={t.footer.language} aria-haspopup="dialog">
              <svg viewBox="0 0 16 16" aria-hidden><circle cx="8" cy="8" r="6.5" /><path d="M1.5 8h13M8 1.5c2 2 2.6 4.2 2.6 6.5S10 12.5 8 14.5M8 1.5C6 3.5 5.4 5.7 5.4 8S6 12.5 8 14.5" /></svg>
              {LANGS.find((l) => l.code === lang)!.short}
            </button>
            <Link to="/consultation" className="btn primary nav-cta">{t.nav.book}</Link>
            <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>{open ? t.nav.close : t.nav.menu}</button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        <Link to="/consultation" className="accent">{t.nav.book} →</Link>
        <button className="mobile-lang" onClick={() => { setOpen(false); openPicker(); }}>{t.footer.language} · {LANGS.find((l) => l.code === lang)!.label}</button>
      </div>

      {/* keyed so each route/language remounts fresh (split-text mutates the DOM) */}
      <main key={pageKey}><Outlet /></main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <Link to="/" className="brand"><img src="/logo.png" alt="" /><span>{brand.name}</span></Link>
              <p className="muted" style={{ marginTop: 16, maxWidth: 360, fontSize: 15 }}>{t.footer.blurb}</p>
            </div>
            <div>
              <h4>{t.footer.solutions}</h4>
              <ul>
                <li><Link to="/business">{t.footer.forBusiness}</Link></li>
                <li><Link to="/leaders">{t.footer.forLeaders}</Link></li>
                <li><Link to="/how-we-work">{t.footer.howWeWork}</Link></li>
                <li><Link to="/security">{t.footer.securityPdpa}</Link></li>
              </ul>
            </div>
            <div>
              <h4>{t.footer.industries}</h4>
              <ul>{c.industries.map((i) => <li key={i.slug}><Link to={`/industries/${i.slug}`}>{i.name}</Link></li>)}</ul>
            </div>
            <div>
              <h4>{t.footer.contact}</h4>
              <ul>
                <li><Link to="/consultation">{t.nav.book}</Link></li>
                <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp · {contact.whatsappLabel}</a></li>
                <li><Link to="/about">{t.footer.about}</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            <span>© {new Date().getFullYear()} {brand.legal} · {t.footer.location}</span>
            <span>{t.footer.base}</span>
            <span className="footer-legal">
              <a href={contact.privacy} target="_blank" rel="noopener noreferrer">{t.footer.privacy}</a>
              <a href={contact.terms} target="_blank" rel="noopener noreferrer">{t.footer.terms}</a>
            </span>
            <button className="footer-lang" onClick={openPicker}>{t.footer.language} · {LANGS.find((l) => l.code === lang)!.label}</button>
          </div>
        </div>
      </footer>
      <div className="curtain" ref={curtain} />
      <LangPicker />
    </>
  );
}
