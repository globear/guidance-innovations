import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Arrow } from "./Blocks";
import { agentContent } from "../agent";
import { useLang } from "../i18n";
import { reducedMotion } from "../motion";

/** True once the element has been on screen. */
function useSeen<T extends Element>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { rootMargin: "0px 0px -20% 0px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen] as const;
}

// An Obsidian-style note graph in 3D: node 0 is the person note, the rest are linked notes.
// Coordinates sit roughly inside a unit sphere; the graph slowly turns and can be dragged.
const NODES: [number, number, number][] = [
  [0, 0, 0],
  [0.62, -0.42, 0.25], [-0.6, -0.4, 0.3], [0.2, 0.62, 0.42], [-0.3, 0.5, -0.6], [0.58, 0.16, -0.62], [-0.72, 0.22, -0.12],
  [0.9, -0.5, 0.1], [0.75, 0.2, 0.6], [-0.8, -0.65, 0.3], [-0.95, 0.1, 0.5], [0.3, 0.85, 0.2], [-0.35, 0.8, -0.6],
  [0.85, 0.45, -0.55], [0.15, -0.8, -0.55], [-0.75, 0.55, -0.6], [0.6, -0.75, -0.4], [-0.15, -0.95, 0.35], [0.95, -0.05, -0.15],
  [-0.6, -0.35, -0.75], [0.25, 0.3, 0.95], [-0.45, 0.95, 0.25],
];
const EDGES = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 7], [1, 8], [2, 9], [2, 10], [3, 11], [4, 12], [5, 13], [5, 16], [4, 15], [6, 10], [6, 19],
  [1, 18], [2, 17], [3, 20], [3, 21], [7, 16], [9, 17], [11, 21], [12, 15], [14, 16], [14, 19], [8, 20], [13, 18], [1, 3],
];
// Note names, as they would appear in the vault (file names stay as written).
const LABELS: Record<number, string> = { 0: "Khun Somchai", 1: "Q1 forecast", 2: "Pricing review", 3: "Supplier Group", 4: "Daily · 21 Nov", 5: "Packaging quotes", 6: "Follow-ups" };

function Graph({ on }: { on: boolean }) {
  const still = reducedMotion();
  const [n, setN] = useState(still ? NODES.length : 1);
  const [, setFrame] = useState(0);
  const rot = useRef({ yaw: 0.6, pitch: -0.25, drag: null as null | { x: number; y: number } });
  const svg = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  // Nodes appear one by one the first time the vault is on screen.
  useEffect(() => {
    if (!on || n >= NODES.length) return;
    const id = setTimeout(() => setN((k) => k + 1), 140);
    return () => clearTimeout(id);
  }, [on, n]);

  // Only animate while the graph is actually visible.
  useEffect(() => {
    if (!svg.current) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(svg.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (still || !visible) return;
    let raf = 0;
    const tick = () => {
      if (!rot.current.drag) rot.current.yaw += 0.0035;
      setFrame((f) => f + 1);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [still, visible]);

  const { yaw, pitch } = rot.current;
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  const pts = NODES.map(([x, y, z]) => {
    const x1 = x * cy + z * sy, z1 = -x * sy + z * cy; // turn around the vertical axis
    const y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp; // tilt toward the viewer
    const s = 2.8 / (2.8 - z2); // perspective
    return { x: 210 + x1 * s * 125, y: 120 + y2 * s * 88, s, d: (z2 + 1) / 2 }; // d: 0 = far, 1 = near
  });
  const order = pts.map((_, i) => i).filter((i) => i < n).sort((a, b) => pts[a].d - pts[b].d);

  const onDown = (e: React.PointerEvent) => { rot.current.drag = { x: e.clientX, y: e.clientY }; (e.target as Element).setPointerCapture?.(e.pointerId); };
  const onMove = (e: React.PointerEvent) => {
    const dr = rot.current.drag;
    if (!dr) return;
    rot.current.yaw += (e.clientX - dr.x) * 0.01;
    rot.current.pitch = Math.max(-0.9, Math.min(0.9, rot.current.pitch + (e.clientY - dr.y) * 0.008));
    rot.current.drag = { x: e.clientX, y: e.clientY };
    if (still) setFrame((f) => f + 1);
  };
  const onUp = () => { rot.current.drag = null; };

  return (
    <svg ref={svg} viewBox="0 0 420 240" className="ag-graph" aria-hidden onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
      {EDGES.filter(([a, b]) => a < n && b < n).map(([a, b]) => {
        const d = (pts[a].d + pts[b].d) / 2;
        return <line key={`${a}-${b}`} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y} stroke={a === 0 ? "var(--accent)" : "currentColor"} strokeOpacity={(a === 0 ? 0.35 : 0.12) + d * 0.25} />;
      })}
      {order.map((i) => {
        const p = pts[i];
        const label = LABELS[i];
        return (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={(i === 0 ? 6 : i <= 6 ? 3.6 : 2.6) * p.s} fill={i === 0 ? "var(--accent)" : "currentColor"} fillOpacity={i === 0 ? 1 : 0.35 + p.d * 0.6} />
            {label && (i === 0 || p.d > 0.42) && <text x={p.x + 8 * p.s} y={p.y + 3} className="ag-node-label" fill={i === 0 ? "var(--accent)" : "currentColor"} fillOpacity={0.25 + p.d * 0.75} fontSize={7.5 * p.s}>{label}</text>}
          </g>
        );
      })}
    </svg>
  );
}

// The Leaders page, top to bottom: the map (you, your agent, four jobs), a day with the agent,
// the second brain, and how it is built. Text comes from agent.ts; the day list from content.ts.

// Map cards sit around the hub in reading order: 0 top-left, 1 top-right, 2 bottom-left, 3 bottom-right.
const DOT_ANGLES = [-135, -45, 135, 45];

export function LeaderMap() {
  const { lang } = useLang();
  const t = agentContent(lang).map;
  const [ref, seen] = useSeen<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Each job lights up in turn until the visitor points at one.
  useEffect(() => {
    if (!seen || paused || reducedMotion()) return;
    const id = setInterval(() => setActive((a) => (a + 1) % t.jobs.length), 2600);
    return () => clearInterval(id);
  }, [seen, paused, t.jobs.length]);

  return (
    <section className="section">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 56 }}>
          <span className="eyebrow">{t.eyebrow}</span>
          <div>
            <h2 className="h2" data-split>{t.title}</h2>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{t.lead}</p>
          </div>
        </div>

        <div className="lm" ref={ref} onPointerLeave={() => setPaused(false)}>
          <div className="lm-hub">
            <svg viewBox="0 0 300 300" className="lm-rings" aria-hidden>
              <defs><path id="lm-arc" d="M 150 150 m -104 0 a 104 104 0 1 1 208 0 a 104 104 0 1 1 -208 0" /></defs>
              <circle cx="150" cy="150" r="140" className="lm-ring-out" />
              <circle cx="150" cy="150" r="104" className="lm-ring" />
              <text className="lm-arc-text"><textPath href="#lm-arc" startOffset="25%" textAnchor="middle">{t.agent}</textPath></text>
              {DOT_ANGLES.map((a, i) => {
                const r = (a * Math.PI) / 180;
                return <circle key={a} cx={150 + 140 * Math.cos(r)} cy={150 + 140 * Math.sin(r)} r={i === active ? 7 : 4.5} className={`lm-dot ${i === active ? "on" : ""}`} />;
              })}
            </svg>
            <div className="lm-core"><b>{t.you}</b><span>{t.youSub}</span></div>
            <p className="lm-channels"><span className="phone-avatar">G</span>{t.channels}</p>
          </div>

          {t.jobs.map((j, i) => (
            <article key={j.t} className={`lm-job lm-j${i} ${i === active ? "on" : ""}`} onPointerEnter={() => { setPaused(true); setActive(i); }}>
              <span className="k">0{i + 1}</span>
              <h3 className="h3">{j.t}</h3>
              <p className="lm-promise">{j.promise}</p>
              <ul>{j.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}

          <p className="lm-control">
            <svg viewBox="0 0 16 16" aria-hidden><rect x="3" y="7" width="10" height="7" rx="1" /><path d="M5 7V5a3 3 0 0 1 6 0v2" /></svg>
            {t.control}
          </p>
        </div>
      </div>
    </section>
  );
}

/** A day with your agent: the chat as it happens, beside the day's rhythm. */
export function AgentDay() {
  const { lang, c } = useLang();
  const t = agentContent(lang);
  const l = c.ui.leaders;
  const [ref, seen] = useSeen<HTMLDivElement>();
  const [shown, setShown] = useState(reducedMotion() ? t.chat.length : 0);

  // Chat messages arrive one by one once the section is on screen.
  useEffect(() => {
    if (!seen || shown >= t.chat.length) return;
    const id = setTimeout(() => setShown((k) => k + 1), shown === 0 ? 300 : 1200);
    return () => clearTimeout(id);
  }, [seen, shown, t.chat.length]);

  return (
    <section className="section light">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 56 }}>
          <span className="eyebrow">{l.dayEyebrow}</span>
          <h2 className="h2" data-split>{l.dayTitle}</h2>
        </div>
        <div className="ld" ref={ref}>
          <div className="phone ag-chat">
            <div className="phone-head"><span className="phone-avatar">G</span><div><b>{t.chatTitle}</b><span>WhatsApp · Telegram · LINE</span></div></div>
            <div className="phone-body">
              {t.chat.slice(0, shown).map((m) => (
                <p key={m.time} className={`bubble ${m.me ? "me" : ""}`}><span className="bt">{m.time}</span>{m.text}</p>
              ))}
              {seen && shown < t.chat.length && <p className={`bubble typing ${t.chat[shown]?.me ? "me" : ""}`}><i /><i /><i /></p>}
            </div>
          </div>
          <ol className="timeline compact" data-stagger>
            {c.leaderDay.map((d) => (
              <li key={d.time}><span className="tm">{d.time}</span><h3 className="h3">{d.title}</h3><p>{d.body}</p></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** The second brain: the vault as a 3D note map, and how it saves, connects and recalls. */
export function SecondBrain() {
  const { lang } = useLang();
  const t = agentContent(lang);
  const b = t.brain;
  const [ref, seen] = useSeen<HTMLDivElement>();
  return (
    <section className="section">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 56 }}>
          <span className="eyebrow">{b.eyebrow}</span>
          <div>
            <h2 className="h2" data-split>{b.title}</h2>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{b.lead}</p>
          </div>
        </div>
        <div className="sb" ref={ref}>
          <div className="ag-vault">
            <div className="ag-vault-head"><span className="dot-live" />{t.vaultTitle}<span className="sb-drag">{b.drag}</span></div>
            <div className="ag-vault-body">
              <ul className="ag-folders">{t.folders.map((f) => <li key={f}>{f}</li>)}</ul>
              <Graph on={seen} />
            </div>
            <div className="ag-note-card">
              <span className="ag-file">{t.noteTitle}</span>
              {t.noteLines.map((x) => <p key={x}>{x}</p>)}
              <p className="ag-links">{t.noteLinks.map((x) => <span key={x}>[[{x}]]</span>)}</p>
            </div>
          </div>
          <div className="sb-side">
            <ol className="sb-steps" data-stagger>
              {b.steps.map((s, i) => <li key={s.t}><span className="k">0{i + 1}</span><div><h3 className="h3">{s.t}</h3><p>{s.b}</p></div></li>)}
            </ol>
            <div className="sb-ask">
              <span className="sb-ask-label">{b.askLabel}</span>
              <p className="bubble me">{b.ask}</p>
              <p className="bubble">{b.answer}<span className="sb-src">↳ [[{b.source}]]</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** How it is built: the layer stack, the privacy guarantees and the private demo. */
export function AgentBuild() {
  const { lang, c } = useLang();
  const t = agentContent(lang);
  const l = c.ui.leaders;
  const [ref, seen] = useSeen<HTMLDivElement>();
  const [active, setActive] = useState(0);

  // A request travels down the stack and back up, highlighting each layer in turn.
  useEffect(() => {
    if (!seen || reducedMotion()) return;
    const path = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1];
    let i = 0;
    const id = setInterval(() => { i = (i + 1) % path.length; setActive(path[i]); }, 700);
    return () => clearInterval(id);
  }, [seen]);

  return (
    <section className="section light">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 56 }}>
          <span className="eyebrow">{t.eyebrow}</span>
          <div>
            <h2 className="h2" data-split>{t.title}</h2>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{t.lead}</p>
            <span className="case-label">{t.label}</span>
          </div>
        </div>
        <div className="ab" ref={ref}>
          <ol className="ag-stack">
            {t.layers.map((x, i) => <li key={x.key} className={i === active ? "on" : ""}><b>{x.title}</b><span>{x.sub}</span></li>)}
            <li className="ag-note">{t.note}</li>
          </ol>
          <div className="ab-side">
            <span className="eyebrow">{t.guardTitle}</span>
            <ul className="checks one" data-stagger>{t.guards.map((g) => <li key={g}>{g}</li>)}</ul>
            <div className="ab-conf">
              <span className="k">{l.confEyebrow}</span>
              <h3 className="h3">{l.confTitle}</h3>
              <p>{l.confLead}</p>
              <Link to="/consultation?for=leaders" className="btn" data-fade>{l.demoBtn} <Arrow /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
