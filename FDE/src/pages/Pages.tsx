import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Arrow, ChatDemo, CTA, Founder, MethodPinned, MiniDash, PageHead } from "../components/Blocks";
import { contact } from "../content";
import { useLang } from "../i18n";

export function Business() {
  const { c } = useLang();
  const t = c.ui.business;
  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="section tight">
        <div className="wrap">
          <div className="cols-2" data-stagger>
            {c.businessOffers.map((o, i) => (
              <div className="cell" key={o.title}><span className="k">0{i + 1}</span><h3 className="h3">{o.title}</h3><p>{o.body}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section light">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 64 }}>
            <span className="eyebrow">{t.indEyebrow}</span>
            <h2 className="h2" data-split>{t.indTitle}</h2>
          </div>
          <div className="cols-3" data-stagger>
            {c.industries.map((ind, i) => (
              <Link to={`/industries/${ind.slug}`} className="cell" key={ind.slug}>
                <span className="k">0{i + 1}</span><h3 className="h3">{ind.name} →</h3><p>{ind.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Engagement />
      <CTA />
    </>
  );
}

function Engagement() {
  const { c } = useLang();
  const t = c.ui.engagement;
  return (
    <section className="section">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 64 }}>
          <span className="eyebrow">{t.eyebrow}</span>
          <div>
            <h2 className="h2" data-split>{t.title}</h2>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{t.lead}</p>
          </div>
        </div>
        <div className="cols-4" data-stagger>
          {t.steps.map((s, i) => <div className="cell" key={s.t}><span className="k">0{i + 1}</span><h3 className="h3">{s.t}</h3><p>{s.b}</p></div>)}
        </div>
      </div>
    </section>
  );
}

export function Leaders() {
  const { c } = useLang();
  const t = c.ui.leaders;
  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="section tight">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 56 }}>
            <span className="eyebrow">{t.dayEyebrow}</span>
            <h2 className="h2" data-split>{t.dayTitle}</h2>
          </div>
          <ol className="timeline" data-stagger>
            {c.leaderDay.map((d) => (
              <li key={d.time}><span className="tm">{d.time}</span><h3 className="h3">{d.title}</h3><p>{d.body}</p></li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section light">
        <div className="wrap split">
          <div>
            <span className="eyebrow">{t.confEyebrow}</span>
            <h2 className="h2" style={{ marginTop: 24 }} data-split>{t.confTitle}</h2>
          </div>
          <div>
            <p className="lead" data-fade>{t.confLead}</p>
            <Link to="/consultation" className="btn" style={{ marginTop: 32 }} data-fade>{t.demoBtn} <Arrow /></Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div><span className="eyebrow">{t.prevEyebrow}</span><h2 className="h2" style={{ marginTop: 24 }}>{t.prevTitle}</h2></div>
          <div data-fade><ChatDemo /></div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function IndustryPage() {
  const { c } = useLang();
  const t = c.ui.industry;
  const { slug } = useParams();
  const idx = c.industries.findIndex((i) => i.slug === slug);
  if (idx < 0) return <Navigate to="/" replace />;
  const ind = c.industries[idx];
  return (
    <>
      <PageHead eyebrow={`${c.ui.nav.industries} / ${ind.name}`} title={ind.headline} />
      <section className="section tight">
        <div className="wrap split">
          <div>
            <span className="eyebrow">{t.hear}</span>
            <ul className="checks" style={{ columns: 1, marginTop: 32 }} data-stagger>
              {ind.pains.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div data-fade>
            <MiniDash labels={ind.metrics} seed={idx + 1} />
            <p className="mono muted" style={{ marginTop: 12 }}>{t.illus}</p>
          </div>
        </div>
      </section>
      <section className="section light">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 64 }}>
            <span className="eyebrow">{t.build}</span>
            <h2 className="h2" data-split>{ind.forTitle}</h2>
          </div>
          <div className="cols-3" data-stagger>
            {ind.builds.map((b, i) => <div className="cell" key={b.title}><span className="k">0{i + 1}</span><h3 className="h3">{b.title}</h3><p>{b.body}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="wrap" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {c.industries.filter((i) => i.slug !== slug).map((i) => (
            <Link key={i.slug} to={`/industries/${i.slug}`} className="btn">{i.name}</Link>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function HowWeWork() {
  const { c } = useLang();
  const t = c.ui.how;
  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section style={{ padding: "40px 0" }}><MethodPinned /></section>
      <section className="section light">
        <div className="wrap">
          <div className="cols-3" data-stagger>
            {t.principles.map((p, i) => (
              <div className="cell" key={p.t}><span className="k">{"ABC"[i]}</span><h3 className="h3">{p.t}</h3><p>{p.b}</p></div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Security() {
  const { c } = useLang();
  const t = c.ui.security;
  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="section tight">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 56 }}>
            <span className="eyebrow">{t.modesEyebrow}</span>
            <h2 className="h2" data-split>{t.modesTitle}</h2>
          </div>
          <div className="modes" data-stagger>
            {c.deploymentModes.map((m) => (
              <div className={`mode ${m.tag ? "rec" : ""}`} key={m.name}>
                {m.tag && <span className="tag">{m.tag}</span>}
                <h3 className="h2" style={{ fontSize: 40 }}>{m.name}</h3>
                <dl>
                  <div><dt>{t.dataLives}</dt><dd>{m.where}</dd></div>
                  <div><dt>{t.aiProc}</dt><dd>{m.ai}</dd></div>
                  <div><dt>{t.bestFor}</dt><dd>{m.fit}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section light">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 56 }}>
            <span className="eyebrow">{t.comEyebrow}</span>
            <h2 className="h2" data-split>{t.comTitle}</h2>
          </div>
          <ul className="checks" data-stagger>{c.commitments.map((cm) => <li key={cm}>{cm}</li>)}</ul>
        </div>
      </section>
      <section className="section tight">
        <div className="wrap split">
          <span className="eyebrow">{t.pdpaEyebrow}</span>
          <p className="lead" style={{ maxWidth: 760 }} data-fade>{t.pdpaText}</p>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function About() {
  const { c } = useLang();
  const t = c.ui.about;
  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <Founder />
      <section className="section light">
        <div className="wrap split">
          <div><span className="eyebrow">{t.bringEyebrow}</span><h2 className="h2" style={{ marginTop: 24 }} data-split>{t.bringTitle}</h2></div>
          <div className="cols-2" data-stagger>{c.capabilities.map((cap) => <div className="cell" key={cap}>{cap}</div>)}</div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Consultation() {
  const { c } = useLang();
  const t = c.ui.consult;
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div data-fade>
            <span className="eyebrow">{t.direct}</span>
            <div style={{ display: "grid", gap: 12, marginTop: 28 }}>
              <a className="btn" href={contact.line}>LINE OA <Arrow /></a>
              <a className="btn" href={contact.wechat}>WeChat <Arrow /></a>
            </div>
          </div>
          {sent ? (
            <div data-fade><h2 className="h2">{t.thanks}</h2><p className="lead" style={{ marginTop: 16 }}>{t.thanksLead}</p></div>
          ) : (
            <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }} data-fade>
              <div className="field"><label htmlFor="n">{t.name}</label><input id="n" required /></div>
              <div className="field"><label htmlFor="c">{t.company}</label><input id="c" /></div>
              <div className="field"><label htmlFor="e">{t.contact}</label><input id="e" required /></div>
              <div className="field"><label htmlFor="t">{t.interest}</label>
                <select id="t">{t.interestOpts.map((o) => <option key={o}>{o}</option>)}</select>
              </div>
              <div className="field full"><label htmlFor="i">{t.industry}</label>
                <select id="i">{c.industries.map((i) => <option key={i.slug}>{i.name}</option>)}<option>{t.other}</option></select>
              </div>
              <div className="field full"><label htmlFor="p">{t.problem}</label><textarea id="p" rows={4} /></div>
              <div style={{ gridColumn: "1 / -1", marginTop: 28 }}><button className="btn primary" type="submit">{t.submit} <Arrow /></button></div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  const { c } = useLang();
  return <PageHead eyebrow="404" title={c.ui.notFound.title} lead={c.ui.notFound.lead} />;
}
