import { Link } from "react-router-dom";
import NetworkCanvas from "../components/NetworkCanvas";
import { Arrow, ChatDemo, CTA, Founder, IndustriesScroll, MethodPinned, SecurityTeaser, useTitle } from "../components/Blocks";
import { Faq } from "./Pages";
import { brand, photos } from "../content";
import { useLang } from "../i18n";

export default function Home() {
  const { c } = useLang();
  const t = c.ui;
  useTitle(c.meta.title);
  const paths = [
    { to: "/business", ...t.paths.business },
    { to: "/leaders", ...t.paths.leaders },
  ];
  return (
    <>
      <section className="hero">
        <picture className="hero-photo" aria-hidden>
          <source media="(max-width: 759px)" srcSet={`/images/${photos.heroMobile}.webp`} />
          <img src={`/images/${photos.hero}.webp`} srcSet={`/images/${photos.hero}-1280.webp 1280w, /images/${photos.hero}.webp 2560w`} sizes="100vw" alt="" />
        </picture>
        <NetworkCanvas coreLabel={t.hero.core} />
        <div className="hero-shade" />
        <div className="hero-status">
          <span><span className="dot-live" />{t.hero.status1}</span>
          <span>{t.hero.status2}</span>
        </div>
        <div className="wrap">
          <h1 className="h-display hero-title" data-split="now">{t.hero.title}</h1>
          <div className="hero-meta">
            <p className="lead" data-fade="0.6">{t.hero.lead}</p>
            <div className="hero-actions" data-fade="0.8">
              <Link to="/consultation" className="btn primary">{t.hero.book} <Arrow /></Link>
              <Link to="/how-we-work" className="btn">{t.hero.how}</Link>
            </div>
          </div>
          <p className="hero-legal" data-fade="1">
            <svg viewBox="0 0 16 16" aria-hidden><path d="M8 1.5 13.5 4v4c0 3.2-2.3 5.6-5.5 6.5C4.8 13.6 2.5 11.2 2.5 8V4L8 1.5Z" /><path d="m5.6 8.1 1.7 1.7 3.2-3.4" /></svg>
            <b>{brand.legal}</b><span>{t.hero.registered}</span>
          </p>
        </div>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...c.industries, ...c.industries].map((ind, i) => <span key={i}>{ind.name}</span>)}
        </div>
      </div>

      {/* Problem */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 72 }}>
            <span className="eyebrow">{t.problem.eyebrow}</span>
            <h2 className="h2" data-split>{t.problem.title}</h2>
          </div>
          <div className="cols-3" data-stagger>
            {c.problems.map((p) => (
              <div className="cell" key={p.k}><span className="k">{p.k}</span><h3 className="h3">{p.title}</h3><p>{p.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="section tight">
        <div className="wrap">
          <div className="paths" data-stagger>
            {paths.map((p) => (
              <Link to={p.to} className="path" key={p.to}>
                <div>
                  <span className="num">{p.num}</span>
                  <h3 className="h2" style={{ marginTop: 24 }}>{p.title}</h3>
                  <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
                <div className="go"><span>{p.foot}</span><span className="arrow">→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <IndustriesScroll />

      <section className="light" style={{ padding: "40px 0" }}>
        <MethodPinned />
      </section>

      <Founder more />

      {/* Demo */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <span className="eyebrow">{t.demo.eyebrow}</span>
            <h2 className="h2" style={{ margin: "24px 0" }} data-split>{t.demo.title}</h2>
            <p className="lead" data-fade>{t.demo.lead}</p>
            <div style={{ marginTop: 40 }}>
              <span className="mono muted">{t.demo.buildWith}</span>
              <div className="cols-2" style={{ marginTop: 16 }} data-stagger>
                {c.capabilities.map((cap) => <div className="cell" key={cap} style={{ padding: "16px 16px 16px 0" }}>{cap}</div>)}
              </div>
            </div>
          </div>
          <div data-fade><ChatDemo /></div>
        </div>
      </section>

      <SecurityTeaser />

      <Faq light={false} />
      <CTA />
    </>
  );
}
