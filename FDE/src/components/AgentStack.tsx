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

// An Obsidian-style note graph: node 0 is the person note, the rest are linked notes.
const NODES = [[150, 100], [80, 50], [225, 45], [250, 120], [205, 175], [95, 165], [40, 110], [150, 25], [285, 70], [290, 170], [140, 200], [30, 175], [60, 15], [250, 15]];
const EDGES = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11], [6, 12], [2, 13], [7, 2], [5, 6]];

function Graph({ on }: { on: boolean }) {
  const [n, setN] = useState(reducedMotion() ? NODES.length : 1);
  useEffect(() => {
    if (!on || n >= NODES.length) return;
    const id = setTimeout(() => setN((k) => k + 1), 260);
    return () => clearTimeout(id);
  }, [on, n]);
  return (
    <svg viewBox="0 0 320 220" className="ag-graph" aria-hidden>
      {EDGES.filter(([a, b]) => a < n && b < n).map(([a, b]) => (
        <line key={`${a}-${b}`} className="fv-fade" x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} stroke="currentColor" strokeOpacity=".25" />
      ))}
      {NODES.slice(0, n).map(([x, y], i) => (
        <circle key={i} className="fv-fade" cx={x} cy={y} r={i === 0 ? 7 : 3.5} fill={i === 0 ? "var(--accent)" : "currentColor"} fillOpacity={i === 0 ? 1 : 0.7} />
      ))}
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
