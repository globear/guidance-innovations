import { useEffect, useRef, useState, type RefObject } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Arrow, CTA, Photo } from "../components/Blocks";
import { caseContent, type CaseStudy, type CaseUi } from "../cases";
import { photos } from "../content";
import { useLang } from "../i18n";
import { reducedMotion } from "../motion";

/** True once the element has scrolled into view (stays true). */
function useInView<T extends Element>(ref: RefObject<T>, margin = "0px 0px -15% 0px") {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { rootMargin: margin });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [ref, seen, margin]);
  return seen;
}

const fmt = (n: number, d = 0) => n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

function CountUp({ to, decimals = 0, start }: { to: number; decimals?: number; start: boolean }) {
  const [v, setV] = useState(reducedMotion() ? to : 0);
  useEffect(() => {
    if (!start || reducedMotion()) { if (start) setV(to); return; }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return <>{fmt(v, decimals)}</>;
}

function Stats({ cs }: { cs: CaseStudy }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref);
  return (
    <div className="case-stats" ref={ref}>
      {cs.stats.map((s) => (
        <div key={s.label}>
          <b><CountUp to={s.value} decimals={s.decimals} start={seen} />{s.suffix}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * The deployment told as one picture that rebuilds itself per step:
 * scattered sources → connected to one model → model entities → owner outputs → guarded.
 */
function FlowViz({ cs, step, ui }: { cs: CaseStudy; step: number; ui: CaseUi }) {
  const scattered = [[230, 60], [470, 85], [340, 165], [560, 245], [250, 305], [430, 375], [600, 135], [215, 205]];
  const src = cs.before.sources.map((label, i) => {
    const x = step === 0 ? scattered[i % scattered.length][0] : 222;
    const y = step === 0 ? scattered[i % scattered.length][1] : 50 + i * (320 / Math.max(1, cs.before.sources.length - 1));
    return { label, x, y };
  });
  const hub = { x: 355, y: 210 };
  const ent = cs.model.map((label, i) => {
    const a = (i / cs.model.length) * Math.PI * 2 - Math.PI / 2;
    return { label, x: hub.x + Math.cos(a) * 78, y: hub.y + Math.sin(a) * 78 };
  });
  const out = cs.outputs.map((label, i) => ({ label, x: 500, y: 120 + i * 90 }));
  const ease = "transform .9s cubic-bezier(.7,0,.2,1), opacity .6s";
  return (
    <svg viewBox="0 0 650 420" className="flow-viz" aria-hidden>
      {step >= 4 && <rect className="fv-fade" x="8" y="10" width="634" height="400" fill="none" stroke="var(--accent)" strokeDasharray="5 7" />}
      {step >= 4 && <text className="fv-fade fv-label" x="22" y="34" fill="var(--accent)">{ui.guard}</text>}
      {step >= 1 && src.map((s) => <line key={`l${s.label}`} className="fv-fade" x1={s.x} y1={s.y} x2={hub.x} y2={hub.y} stroke="currentColor" strokeOpacity=".22" />)}
      {step >= 3 && out.map((o) => <line key={`o${o.label}`} className="fv-fade fv-flow" x1={hub.x} y1={hub.y} x2={o.x} y2={o.y} stroke="var(--accent)" strokeOpacity=".7" />)}
      {src.map((s) => (
        <g key={s.label} style={{ transform: `translate(${s.x}px, ${s.y}px)`, transition: ease }}>
          <rect x="-5" y="-5" width="10" height="10" fill={step === 0 ? "var(--accent)" : "currentColor"} className={step === 0 ? "fv-pulse" : ""} />
          <text className="fv-label" x="-12" y="4" textAnchor="end" fill="currentColor" fillOpacity=".75">{s.label}</text>
        </g>
      ))}
      {step >= 1 && (
        <g className="fv-fade">
          <rect x={hub.x - 22} y={hub.y - 22} width="44" height="44" fill="none" stroke="var(--accent)" />
          <rect x={hub.x - 5} y={hub.y - 5} width="10" height="10" fill="var(--accent)" />
          <text className="fv-label" x={hub.x} y={hub.y + 118} textAnchor="middle" fill="currentColor" fillOpacity=".6">{ui.oneModel}</text>
        </g>
      )}
      {step >= 2 && ent.map((e) => (
        <g key={e.label} className="fv-fade">
          <line x1={hub.x} y1={hub.y} x2={e.x} y2={e.y} stroke="var(--accent)" strokeOpacity=".35" />
          <circle cx={e.x} cy={e.y} r="4" fill="currentColor" />
          <text className="fv-label fv-small" x={e.x} y={e.y - 11} textAnchor="middle" fill="currentColor" fillOpacity=".8">{e.label}</text>
        </g>
      ))}
      {step >= 3 && out.map((o) => (
        <g key={o.label} className="fv-fade">
          <rect x={o.x - 6} y={o.y - 6} width="12" height="12" fill="none" stroke="var(--accent)" />
          <text className="fv-label" x={o.x + 14} y={o.y + 4} fill="currentColor">{o.label}</text>
        </g>
      ))}
    </svg>
  );
}

/** Scroll-driven deployment story: the picture stays put while the steps scroll past. */
function Flow({ cs, ui }: { cs: CaseStudy; ui: CaseUi }) {
  const [step, setStep] = useState(reducedMotion() ? cs.steps.length - 1 : 0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    if (reducedMotion()) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setStep(Number((e.target as HTMLElement).dataset.i)); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className="flow">
      <div className="flow-stage"><FlowViz cs={cs} step={step} ui={ui} /></div>
      <ol className="flow-steps">
        {cs.steps.map((s, i) => (
          <li key={s.name} data-i={i} ref={(el) => (refs.current[i] = el)} className={i === step ? "on" : ""}>
            <span className="k">{s.when}</span>
            <h3 className="h2">{s.name}</h3>
            <p>{s.did}</p>
            <span className="artifact">→ {s.artifact}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Interactive sample dashboard: count-up KPIs, a self-drawing trend, bars and alerts. */
function Dash({ cs, ui }: { cs: CaseStudy; ui: CaseUi }) {
  const d = cs.dash;
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref);
  const [range, setRange] = useState<"today" | "week">("today");
  const [bump, setBump] = useState(0);
  // A gentle "live" tick on the first counter, only while the dashboard is on screen.
  useEffect(() => {
    if (!seen || reducedMotion()) return;
    const id = setInterval(() => setBump((b) => b + 3 + Math.floor(Math.random() * 9)), 2200);
    return () => clearInterval(id);
  }, [seen]);
  const pts = d.trend[range];
  const max = Math.max(...pts) * 1.1;
  // Fixed aspect ratio (no stretching), so the stroke can be drawn on with pathLength.
  const path = pts.map((v, i) => `${i ? "L" : "M"}${4 + (i / (pts.length - 1)) * 292},${126 - (v / max) * 116}`).join(" ");
  return (
    <div className={`case-dash ${seen ? "in" : ""}`} ref={ref}>
      <div className="cd-head">
        <span><span className="dot-live" />{d.title}</span>
        <span className="cd-tag">{ui.live}</span>
      </div>
      <div className="cd-kpis">
        {d.kpis.map((k) => (
          <div key={k.label}>
            <span className="cd-k">{k.label}</span>
            <b>{k.live && bump > 0 ? fmt(k.value + bump, k.decimals) : <CountUp to={k.value} decimals={k.decimals} start={seen} />}<small>{k.unit}</small></b>
            <span className="cd-note">{k.note}</span>
          </div>
        ))}
      </div>
      <div className="cd-body">
        <div className="cd-panel">
          <div className="cd-panel-head">
            <span className="cd-k">{d.trendTitle}</span>
            <div className="cd-tabs" role="tablist">
              {(["today", "week"] as const).map((r) => (
                <button key={r} role="tab" aria-selected={range === r} className={range === r ? "on" : ""} onClick={() => setRange(r)}>{r === "today" ? ui.today : ui.week}</button>
              ))}
            </div>
          </div>
          <svg viewBox="0 0 300 130" className="cd-trend">
            {[33, 65, 97].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="currentColor" strokeOpacity=".08" />)}
            <path key={range} d={path} fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round" pathLength={1} className="cd-line" />
          </svg>
        </div>
        <div className="cd-panel">
          <span className="cd-k">{d.barsTitle}</span>
          <ul className="cd-bars">
            {d.bars.map((b) => (
              <li key={b.name}>
                <span>{b.name}</span>
                <em><i style={{ width: seen ? `${b.pct}%` : 0 }} className={!d.barsAreShares && b.pct < 75 ? "low" : ""} /></em>
                <b>{b.pct}%</b>
              </li>
            ))}
          </ul>
          <span className="cd-k" style={{ marginTop: 18, display: "block" }}>{ui.alerts}</span>
          <ul className="cd-alerts">
            {d.alerts.map((a, i) => (
              <li key={a.time} className={a.warn ? "warn" : ""} style={{ transitionDelay: `${0.6 + i * 0.25}s` }}>
                <span>{a.time}</span>{a.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** The owner's morning message, typed out in a phone frame when it scrolls into view. */
function Brief({ cs, ui }: { cs: CaseStudy; ui: CaseUi }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref);
  const [shown, setShown] = useState(reducedMotion() ? cs.brief.length : 0);
  useEffect(() => {
    if (!seen || shown >= cs.brief.length) return;
    const id = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 400 : 1100);
    return () => clearTimeout(id);
  }, [seen, shown, cs.brief.length]);
  return (
    <div className="phone" ref={ref}>
      <div className="phone-head"><span className="phone-avatar">G</span><div><b>{ui.briefFrom}</b><span>07:00</span></div></div>
      <div className="phone-body">
        {cs.brief.slice(0, shown).map((line) => <p key={line} className="bubble">{line}</p>)}
        {seen && shown < cs.brief.length && <p className="bubble typing"><i /><i /><i /></p>}
      </div>
    </div>
  );
}

export function CasePage() {
  const { lang, c } = useLang();
  const { slug } = useParams();
  const { ui, cases } = caseContent(lang);
  const idx = cases.findIndex((x) => x.slug === slug);
  if (idx < 0) return <Navigate to="/how-we-work" replace />;
  const cs = cases[idx];
  const ind = c.industries.find((i) => i.slug === cs.slug);
  const next = cases[(idx + 1) % cases.length];
  return (
    <>
      <section className="page-head has-photo case-hero">
        <Photo name={photos.industries[cs.slug]} className="page-head-photo" eager />
        <div className="page-head-shade" />
        <div className="wrap">
          <span className="eyebrow" data-scramble>{`${ui.eyebrow} / ${ind?.name ?? cs.slug}`}</span>
          <p className="case-client" data-fade="0.2">{cs.client} <span>+ Guidance</span></p>
          <h1 className="h1 page-title" style={{ marginTop: 20 }} data-split="now">{cs.title}</h1>
          <span className="case-label" data-fade="0.6">{ui.label}</span>
        </div>
      </section>

      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 48 }}>
            <span className="eyebrow">{ui.impact}</span>
            <p className="lead" style={{ maxWidth: 720 }} data-fade>{cs.intro}</p>
          </div>
          <Stats cs={cs} />
        </div>
      </section>

      <section className="section light">
        <div className="wrap split">
          <div>
            <span className="eyebrow">{ui.beforeTitle}</span>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{cs.before.body}</p>
          </div>
          <div>
            <span className="eyebrow">{ui.pains}</span>
            <ul className="checks pains" style={{ columns: 1, marginTop: 24 }} data-stagger>{cs.before.pains.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 32 }}>
            <span className="eyebrow">{ui.how}</span>
            <h2 className="h2" data-split>{cs.steps.map((s) => s.name).join(" → ")}</h2>
          </div>
          <Flow cs={cs} ui={ui} />
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 40 }}>
            <span className="eyebrow">{ui.built}</span>
            <h2 className="h2" data-split>{cs.dash.title}</h2>
          </div>
          <div className="case-built">
            <Dash cs={cs} ui={ui} />
            <div className="case-brief">
              <span className="eyebrow">{ui.brief}</span>
              <Brief cs={cs} ui={ui} />
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="wrap">
          <span className="eyebrow">{ui.after}</span>
          <div className="ba" data-stagger>
            <div className="ba-head"><span>{ui.beforeCol}</span><span>{ui.afterCol}</span></div>
            {cs.after.map((r) => <div className="ba-row" key={r.before}><s>{r.before}</s><b>{r.after}</b></div>)}
          </div>
        </div>
      </section>

      {cases.length > 1 && (
        <section className="section tight">
          <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <Link to="/how-we-work#cases" className="btn">{ui.all}</Link>
            <Link to={`/cases/${next.slug}`} className="btn">{ui.next}: {c.industries.find((i) => i.slug === next.slug)?.name} <Arrow /></Link>
          </div>
        </section>
      )}
      <CTA to={`/consultation?industry=${cs.slug}`} />
    </>
  );
}

/** Case-study cards for How we work (and anywhere else that wants them). */
export function CaseIndex() {
  const { lang, c } = useLang();
  const { ui, cases } = caseContent(lang);
  return (
    <section className="section" id="cases">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 48 }}>
          <span className="eyebrow">{ui.indexEyebrow}</span>
          <div>
            <h2 className="h2" data-split>{ui.indexTitle}</h2>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{ui.indexLead}</p>
          </div>
        </div>
        <div className="case-cards" data-stagger>
          {cases.map((cs) => (
            <Link to={`/cases/${cs.slug}`} className="case-card" key={cs.slug}>
              <Photo name={photos.industries[cs.slug]} className="case-card-photo" eager />
              <div className="case-card-body">
                <span className="k">{c.industries.find((i) => i.slug === cs.slug)?.name}</span>
                <h3 className="h3">{cs.title}</h3>
                <p>{cs.client}</p>
                <div className="case-card-stat"><b>{cs.stats[1].value}{cs.stats[1].suffix}</b><span>{cs.stats[1].label}</span></div>
                <span className="go">{ui.read} <Arrow /></span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mono muted case-note">{ui.label}</p>
      </div>
    </section>
  );
}
