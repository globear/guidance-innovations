import { useEffect, useRef, useState } from "react";
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

/** Leaders page: the personal-agent architecture, with a live chat, the layer stack and the second brain. */
export default function AgentStack() {
  const { lang } = useLang();
  const t = agentContent(lang);
  const [ref, seen] = useSeen<HTMLDivElement>();
  const [shown, setShown] = useState(reducedMotion() ? t.chat.length : 0);
  const [active, setActive] = useState(0);

  // Chat messages arrive one by one once the section is on screen.
  useEffect(() => {
    if (!seen || shown >= t.chat.length) return;
    const id = setTimeout(() => setShown((k) => k + 1), shown === 0 ? 300 : 1200);
    return () => clearTimeout(id);
  }, [seen, shown, t.chat.length]);

  // A request travels down the stack and back up, highlighting each layer in turn.
  useEffect(() => {
    if (!seen || reducedMotion()) return;
    const path = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1];
    let i = 0;
    const id = setInterval(() => { i = (i + 1) % path.length; setActive(path[i]); }, 700);
    return () => clearInterval(id);
  }, [seen]);

  return (
    <section className="section">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 32 }}>
          <span className="eyebrow">{t.eyebrow}</span>
          <div>
            <h2 className="h2" data-split>{t.title}</h2>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{t.lead}</p>
            <span className="case-label">{t.label}</span>
          </div>
        </div>

        <div className="ag" ref={ref}>
          <div className="phone ag-chat">
            <div className="phone-head"><span className="phone-avatar">G</span><div><b>{t.chatTitle}</b><span>WhatsApp · Telegram · LINE</span></div></div>
            <div className="phone-body">
              {t.chat.slice(0, shown).map((m) => (
                <p key={m.time} className={`bubble ${m.me ? "me" : ""}`}><span className="bt">{m.time}</span>{m.text}</p>
              ))}
              {seen && shown < t.chat.length && <p className={`bubble typing ${t.chat[shown]?.me ? "me" : ""}`}><i /><i /><i /></p>}
            </div>
          </div>

          <ol className="ag-stack">
            {t.layers.map((l, i) => (
              <li key={l.key} className={i === active ? "on" : ""}>
                <b>{l.title}</b>
                <span>{l.sub}</span>
              </li>
            ))}
            <li className="ag-note">{t.note}</li>
          </ol>

          <div className="ag-vault">
            <div className="ag-vault-head"><span className="dot-live" />{t.vaultTitle}</div>
            <div className="ag-vault-body">
              <ul className="ag-folders">{t.folders.map((f) => <li key={f}>{f}</li>)}</ul>
              <Graph on={seen} />
            </div>
            <div className="ag-note-card">
              <span className="ag-file">{t.noteTitle}</span>
              {t.noteLines.map((l) => <p key={l}>{l}</p>)}
              <p className="ag-links">{t.noteLinks.map((l) => <span key={l}>[[{l}]]</span>)}</p>
            </div>
          </div>
        </div>

        <div className="ag-guards">
          <span className="eyebrow">{t.guardTitle}</span>
          <ul className="checks" data-stagger>{t.guards.map((g) => <li key={g}>{g}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
