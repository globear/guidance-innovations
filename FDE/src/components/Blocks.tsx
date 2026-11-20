import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { media, type Industry } from "../content";
import { useLang } from "../i18n";
import { gsap, ScrollTrigger, reducedMotion } from "../motion";

export const Arrow = () => <span className="arrow" aria-hidden>→</span>;

export function PageHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="page-head">
      <div className="grid-bg" />
      <div className="wrap">
        <span className="eyebrow" data-scramble>{eyebrow}</span>
        <h1 className="h1 page-title" style={{ marginTop: 28 }} data-split="now">{title}</h1>
        {lead && <p className="lead" data-fade="0.5">{lead}</p>}
      </div>
    </section>
  );
}

/** Illustrative mini dashboard with animated bars and a self-drawing line chart. */
export function MiniDash({ labels, seed = 1 }: { labels: string[]; seed?: number }) {
  const vals = labels.map((_, i) => 35 + ((seed * 37 + i * 23) % 60));
  const pts = Array.from({ length: 14 }, (_, i) => 70 - (Math.sin(i * 0.7 + seed) * 22 + i * 2.2));
  const d = pts.map((y, i) => `${i ? "L" : "M"}${(i / 13) * 300},${y}`).join(" ");
  return (
    <div className="dash" aria-hidden>
      {labels.map((l, i) => (
        <div className="m" key={l}><b>{l}</b><em><i data-bar={vals[i]} style={{ width: `${vals[i]}%` }} /></em></div>
      ))}
      <div className="chart">
        <svg viewBox="0 0 300 100" preserveAspectRatio="none">
          {[25, 50, 75].map((y) => <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="currentColor" strokeOpacity=".08" />)}
          <path d={d} fill="none" stroke="var(--accent)" strokeWidth="1.5" data-draw vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}

/** Pinned scroll story: the screen holds while the five method steps play out. */
export function MethodPinned() {
  const { c } = useLang();
  const method = c.method;
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (reducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      ScrollTrigger.create({
        trigger: root.current, start: "top top", end: `+=${method.length * 70}%`, pin: true, scrub: true,
        onUpdate: (s) => {
          setActive(Math.min(method.length - 1, Math.floor(s.progress * method.length)));
          if (bar.current) bar.current.style.width = `${s.progress * 100}%`;
        },
      });
    });
    return () => mm.revert();
  }, [method.length]);

  const step = method[active];
  return (
    <div ref={root} className="wrap">
      <div className="method">
        <div>
          <span className="eyebrow">{c.ui.method.eyebrow}</span>
          <h2 className="h2" style={{ margin: "24px 0 40px" }}>{c.ui.method.title}</h2>
          <ol className="method-list">
            {method.map((m, i) => (
              <li key={m.k} className={i === active ? "on" : ""} onClick={() => setActive(i)}>
                <span className="k">{m.k}</span><span className="nm">{m.name}</span><span className="t">{m.time}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="method-detail">
          <div>
            <span className="mono accent">{c.ui.method.step} {step.k} / 05</span>
            <h3 className="h2" style={{ marginTop: 16 }} key={step.name}>{step.name}</h3>
          </div>
          <MethodViz step={active} />
          <div>
            <p className="muted" style={{ fontSize: 18 }}>{step.body}</p>
            <div className="bar"><i ref={bar} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** A small diagram that rebuilds itself per step: scattered → linked → structured → decided → guarded. */
function MethodViz({ step }: { step: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const nodes = Array.from({ length: 12 }, (_, i) => {
    const scattered = { x: 30 + ((i * 97) % 420), y: 20 + ((i * 53) % 120) };
    const grid = { x: 60 + (i % 4) * 110, y: 30 + Math.floor(i / 4) * 50 };
    return { scattered, grid };
  });
  const pos = (i: number) => (step === 0 ? nodes[i].scattered : nodes[i].grid);
  useEffect(() => {
    if (!ref.current || reducedMotion()) return;
    gsap.fromTo(ref.current.querySelectorAll(".mv"), { opacity: 0 }, { opacity: 1, duration: 0.6, stagger: 0.03 });
  }, [step]);
  return (
    <svg ref={ref} viewBox="0 0 480 160" className="method-viz" aria-hidden>
      {step >= 1 && nodes.map((_, i) => i % 4 !== 3 && (
        <line key={`h${i}`} className="mv" x1={pos(i).x} y1={pos(i).y} x2={pos(i + 1).x} y2={pos(i + 1).y} stroke="currentColor" strokeOpacity=".25" />
      ))}
      {step >= 2 && nodes.slice(0, 8).map((_, i) => (
        <line key={`v${i}`} className="mv" x1={pos(i).x} y1={pos(i).y} x2={pos(i + 4).x} y2={pos(i + 4).y} stroke="currentColor" strokeOpacity=".25" />
      ))}
      {nodes.map((_, i) => {
        const p = pos(i);
        const hot = step >= 3 && (i === 5 || i === 10);
        return (
          <rect key={i} x={p.x - 5} y={p.y - 5} width="10" height="10"
            style={{ transition: "x .8s cubic-bezier(.7,0,.2,1), y .8s cubic-bezier(.7,0,.2,1)" }}
            fill={hot ? "var(--accent)" : "none"} stroke={hot ? "var(--accent)" : "currentColor"} strokeOpacity={hot ? 1 : 0.6} />
        );
      })}
      {step >= 4 && <rect className="mv" x="30" y="8" width="440" height="144" fill="none" stroke="var(--accent)" strokeDasharray="4 6" />}
    </svg>
  );
}

/** Horizontal industry scroller: pinned + scrubbed on desktop, swipe on mobile. */
export function IndustriesScroll() {
  const { c } = useLang();
  const t = c.ui.industriesSection;
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (reducedMotion()) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 901px)", () => {
      const dist = () => track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true },
      });
    });
    return () => mm.revert();
  }, []);
  return (
    <div ref={root} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "96px 0" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 24, marginBottom: 48, flexWrap: "wrap" }}>
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="h2" style={{ marginTop: 24, maxWidth: "14ch" }}>{t.title}</h2>
        </div>
        <p className="lead" style={{ maxWidth: 420 }}>{t.lead}</p>
      </div>
      <div className="hscroll">
        <div className="hscroll-track" ref={track}>
          {c.industries.map((ind, i) => <IndustryCard key={ind.slug} ind={ind} i={i} view={t.view} />)}
        </div>
      </div>
    </div>
  );
}

function IndustryCard({ ind, i, view }: { ind: Industry; i: number; view: string }) {
  return (
    <Link to={`/industries/${ind.slug}`} className="ind-card">
      <div className="top"><span>{String(i + 1).padStart(2, "0")}</span><span>{view}</span></div>
      <h3 className="h2" style={{ fontSize: "clamp(30px,3vw,44px)" }}>{ind.name}</h3>
      <p className="muted">{ind.short}</p>
      <MiniDash labels={ind.metrics} seed={i + 1} />
    </Link>
  );
}

export function Founder({ light = false }: { light?: boolean }) {
  const { c } = useLang();
  const t = c.ui.founderUi;
  const [playing, setPlaying] = useState(false);
  const vid = useRef<HTMLVideoElement>(null);
  return (
    <section className={`section ${light ? "light" : ""}`}>
      <div className="wrap founder">
        <div className="video-frame" data-fade onClick={() => { if (media.video && vid.current) { vid.current.play(); setPlaying(true); } }}>
          {media.video && <video ref={vid} src={media.video} poster={media.poster || undefined} controls={playing} playsInline />}
          {!playing && (
            <div className="video-ph">
              <div>
                <div className="play">▶</div>
                <span className="mono muted">{media.video ? t.watch : t.placeholder}</span>
              </div>
            </div>
          )}
        </div>
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <blockquote data-split>{c.founder.message}</blockquote>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} data-fade>
            <div className="headshot">{media.headshot ? <img src={media.headshot} alt={c.founder.name} /> : t.photo}</div>
            <div><div style={{ fontWeight: 500 }}>{c.founder.name}</div><div className="mono muted">{c.founder.role}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Scripted preview of the "Ask your business" agent. Replace with a live RAG endpoint later. */
export function ChatDemo() {
  const { c } = useLang();
  const t = c.ui.demo;
  const [msgs, setMsgs] = useState<{ role: "u" | "a"; text: string }[]>([]);
  const [typing, setTyping] = useState(false);
  const body = useRef<HTMLDivElement>(null);
  const used = new Set(msgs.filter((m) => m.role === "u").map((m) => m.text));

  useEffect(() => { body.current?.scrollTo({ top: body.current.scrollHeight, behavior: "smooth" }); }, [msgs]);

  const ask = (q: string, a: string) => {
    if (typing) return;
    setTyping(true);
    setMsgs((m) => [...m, { role: "u", text: q }, { role: "a", text: "" }]);
    const start = performance.now();
    const id = setInterval(() => {
      const n = Math.floor((performance.now() - start) / 7);
      setMsgs((m) => { const c = [...m]; c[c.length - 1] = { role: "a", text: a.slice(0, n) }; return c; });
      if (n >= a.length) { clearInterval(id); setTyping(false); }
    }, 18);
  };

  return (
    <div className="chat">
      <div className="chat-head"><span><span className="dot-live" />{t.head}</span><span>{t.tag}</span></div>
      <div className="chat-body" ref={body} data-lenis-prevent>
        {msgs.length === 0 && <p className="muted" style={{ fontSize: 15 }}>{t.empty}</p>}
        {msgs.map((m, i) => (
          <div key={i} className={`msg ${m.role}`}>
            {m.role === "a" && <span className="lbl">GUIDANCE AI</span>}
            {m.text}{m.role === "a" && typing && i === msgs.length - 1 && <span className="caret" />}
          </div>
        ))}
      </div>
      <div className="chat-prompts">
        {c.demoChat.map((d) => (
          <button key={d.q} className="chip" disabled={typing || used.has(d.q)} onClick={() => ask(d.q, d.a)}>{d.q}</button>
        ))}
      </div>
    </div>
  );
}

export function CTA() {
  const { c } = useLang();
  const t = c.ui.cta;
  return (
    <section className="section cta">
      <div className="wrap">
        <span className="eyebrow">{t.eyebrow}</span>
        <h2 className="h-display" style={{ margin: "28px 0 40px" }} data-split>{t.title}</h2>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 32, flexWrap: "wrap" }}>
          <p className="lead" data-fade>{t.lead}</p>
          <Link to="/consultation" className="btn primary" data-fade="0.2">{t.button} <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}
