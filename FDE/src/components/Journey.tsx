import { useEffect, useRef, useState } from "react";
import { jData, journeyContent, phaseWeeks, type JourneyText } from "../journey";
import { teamMembers } from "../content";
import { useLang } from "../i18n";
import { lenis, reducedMotion } from "../motion";
import { CountUp } from "../pages/Case";

/** Reveals items one by one once `on` turns true (all at once with reduced motion). */
function useSeq(on: boolean, count: number, gap = 700, first = 300) {
  const [n, setN] = useState(reducedMotion() ? count : 0);
  useEffect(() => {
    if (!on || n >= count) return;
    const id = setTimeout(() => setN((k) => k + 1), n === 0 ? first : gap);
    return () => clearTimeout(id);
  }, [on, n, count, gap, first]);
  return n;
}

const Redact = ({ w = 7 }: { w?: number }) => <span className="redact" style={{ width: `${w}ch` }} aria-label="name withheld" />;

/* ---------- 01 · booking ---------- */
function Book({ t, on }: { t: JourneyText; on: boolean }) {
  const b = t.book;
  const n = useSeq(on, 4, 900);
  return (
    <div className="jy-book">
      <div className={`jy-card ${n >= 1 ? "in" : ""}`}>
        <div className="jy-card-head"><span className="dot-live" />{b.request}<span className="mono muted">14:12</span></div>
        <dl>
          <dt>{b.company}</dt><dd><Redact /> {t.report.clientSuffix}</dd>
          <dt>{b.industry}</dt><dd>{b.industryV}</dd>
          <dt>{b.area}</dt><dd>{b.areaV}</dd>
        </dl>
      </div>
      <div className={`jy-reply ${n >= 2 ? "in" : ""}`}>
        <span className="jy-reply-meta">{b.reply} · 15:40 · {b.replyIn}</span>
        <p className="bubble me">{b.replyText}</p>
      </div>
      <div className={`jy-card jy-invite ${n >= 3 ? "in" : ""}`}>
        <div className="jy-cal"><span>TUE</span><b>25</b></div>
        <div>
          <b>{b.invite}</b>
          <span className="mono muted">{b.when}</span>
          <span className="mono muted">{b.where}</span>
        </div>
        <span className={`jy-accepted ${n >= 4 ? "in" : ""}`}>✓ {b.accepted}</span>
      </div>
    </div>
  );
}

/* ---------- 02 · the 45-minute call ---------- */
const NODE_POS: [number, number][] = [[0, 10], [205, 10], [410, 10], [410, 132], [205, 132], [0, 132]];
const NW = 170, NH = 44;
const FLAG_ON = [1, 2, 4, 5]; // nodes that get a pain flag

function Call({ t, on }: { t: JourneyText; on: boolean }) {
  const k = t.call;
  const nodes = useSeq(on, 6, 450);
  const flags = useSeq(on && nodes >= 6, 4, 500);
  const notes = useSeq(on, 4, 1600, 1200);
  const [sec, setSec] = useState(12 * 60 + 5);
  const [speaker, setSpeaker] = useState(0);
  useEffect(() => {
    if (!on || reducedMotion()) return;
    const a = setInterval(() => setSec((s) => s + 1), 1000);
    const b = setInterval(() => setSpeaker((s) => (s + 1) % 3), 2600);
    return () => { clearInterval(a); clearInterval(b); };
  }, [on]);
  const mm = String(Math.floor(sec / 60)).padStart(2, "0"), ss = String(sec % 60).padStart(2, "0");
  const people = [
    { name: "Reed · Guidance", photo: teamMembers[0].photo },
    { name: k.owner, initial: "S" },
    { name: k.ops, initial: "N" },
  ];
  return (
    <div className="jy-call">
      <div className="jy-call-top">
        <span className="jy-rec">REC</span>
        <b>{k.title}</b>
        <span className="mono">00:{mm}:{ss} / 00:45:00</span>
      </div>
      <div className="jy-call-main">
        <div className="jy-share">
          <span className="jy-share-cap">{k.share}</span>
          <svg viewBox="0 0 580 210" aria-hidden>
            {NODE_POS.slice(0, -1).map(([x, y], i) => {
              const [x2, y2] = NODE_POS[i + 1];
              const sameRow = y === y2;
              const d = sameRow ? `M${x + (x2 > x ? NW : 0)},${y + NH / 2} L${x2 + (x2 > x ? 0 : NW)},${y2 + NH / 2}` : `M${x + NW / 2},${y + NH + 30} L${x2 + NW / 2},${y2}`;
              return <path key={i} d={d} className={`jy-edge ${nodes > i + 1 ? "in" : ""}`} pathLength={1} />;
            })}
            {NODE_POS.map(([x, y], i) => {
              const f = FLAG_ON.indexOf(i);
              return (
                <g key={i} className={`jy-node ${nodes > i ? "in" : ""}`}>
                  <rect x={x} y={y} width={NW} height={NH} />
                  <text x={x + NW / 2} y={y + 28} textAnchor="middle">{k.nodes[i]}</text>
                  {f >= 0 && (
                    <g className={`jy-flag ${flags > f ? "in" : ""}`}>
                      <rect x={x + 10} y={y + NH + 4} width={NW - 20} height="22" />
                      <text x={x + NW / 2} y={y + NH + 19} textAnchor="middle">{k.flags[f]}</text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
        <div className="jy-people">
          {people.map((p, i) => (
            <div key={p.name} className={`jy-tile ${speaker === i ? "talk" : ""}`}>
              {p.photo ? <img src={p.photo} alt="" loading="lazy" /> : <span className="jy-initial">{p.initial}</span>}
              <span className="jy-tile-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="jy-notes">
        <span className="jy-notes-head">{k.notesTitle}</span>
        <ul>{k.notes.map((x, i) => <li key={x} className={notes > i ? "in" : ""}>{x}</li>)}</ul>
      </div>
      <div className="jy-call-bar" aria-hidden>
        <i /><i /><i /><i className="end" />
      </div>
    </div>
  );
}

/* ---------- 03 · first-impression report (summary card) ---------- */
function otdPath(w: number, h: number, pad = 6) {
  const v = jData.otd;
  return v.map((x, i) => `${i ? "L" : "M"}${pad + (i / (v.length - 1)) * (w - pad * 2)},${h - pad - ((x - 80) / 20) * (h - pad * 2)}`).join(" ");
}

function Report({ t, on, onOpen }: { t: JourneyText; on: boolean; onOpen: () => void }) {
  const r = t.report;
  return (
    <div className={`jy-doc ${on ? "in" : ""}`}>
      <div className="jy-doc-head">
        <span className="jy-logo">G</span>
        <div><b>{r.title}</b><span className="mono muted"><Redact /> {r.clientSuffix}</span></div>
        <span className="jy-tag">{r.confidential}</span>
      </div>
      <p className="jy-meta mono muted">{r.meta}</p>
      <div className="jy-processed">
        <div><b><CountUp to={jData.rows} start={on} /></b><span>{r.rows}</span></div>
        <div><b>{jData.sources}</b><span>{r.sources}</span></div>
      </div>
      <div className="jy-kpis">
        {r.kpis.map((k, i) => (
          <div key={k.label}>
            <b><CountUp to={jData.kpis[i].value} decimals={jData.kpis[i].decimals} start={on} /><small>{jData.kpis[i].unit}</small></b>
            <span>{k.label}</span>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 300 60" className="jy-spark" aria-hidden>
        <line x1="0" x2="300" y1={60 - 6 - (15 / 20) * 48} y2={60 - 6 - (15 / 20) * 48} className="jy-target" />
        <path d={otdPath(300, 60)} pathLength={1} className="jy-line" />
      </svg>
      <button type="button" className="btn primary jy-open" onClick={onOpen}>{r.open} <span aria-hidden>↗</span></button>
    </div>
  );
}

/* ---------- 04 · proposal ---------- */
function Proposal({ t, on }: { t: JourneyText; on: boolean }) {
  const p = t.proposal;
  const ticks = useSeq(on, p.items.length, 350, 900);
  return (
    <div className={`jy-doc jy-prop ${on ? "in" : ""}`}>
      <div className="jy-doc-head">
        <span className="jy-logo">G</span>
        <div><b>{p.title}</b><span className="mono muted"><Redact /> {t.report.clientSuffix}</span></div>
        <span className="jy-tag accent">{p.scope}</span>
      </div>
      <div className="jy-gantt">
        <span className="jy-sub">{p.phasesTitle}</span>
        <div className="jy-weeks">{[1, 2, 3, 4, 5, 6].map((w) => <span key={w}>W{w}</span>)}</div>
        {p.phases.map((name, i) => {
          const [a, b] = phaseWeeks[i];
          return (
            <div className="jy-phase" key={name}>
              <span>{name}</span>
              <em><i style={{ left: `${((a - 1) / 6) * 100}%`, width: `${((b - a + 1) / 6) * 100}%`, transitionDelay: `${0.2 + i * 0.15}s` }} /></em>
            </div>
          );
        })}
      </div>
      <div className="jy-prop-foot">
        <div>
          <span className="jy-sub">{p.packageTitle}</span>
          <ul className="jy-items">{p.items.map((x, i) => <li key={x} className={ticks > i ? "in" : ""}>{x}</li>)}</ul>
        </div>
        <div className="jy-price">
          <span className="jy-sub">{p.price}</span>
          <b className="jy-blur" aria-label="price withheld">฿ 000,000</b>
          <span className="muted">{p.priceNote}</span>
          <div className="jy-pair"><span>{p.impact}</span><b>{p.impactV}</b></div>
          <div className="jy-pair"><span>{p.golive}</span><b>{p.goliveV}</b></div>
        </div>
      </div>
    </div>
  );
}

/* ---------- the full report, in a dialog ---------- */
function FullReport({ t, open, onClose }: { t: JourneyText; open: boolean; onClose: () => void }) {
  const r = t.report;
  const ref = useRef<HTMLDialogElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      lenis?.stop();
      requestAnimationFrame(() => setDrawn(true));
    } else if (!open && d.open) d.close();
    if (!open) lenis?.start();
  }, [open]);
  const maxCause = Math.max(...jData.causes);
  const C = 2 * Math.PI * 52;
  let acc = 0;
  return (
    <dialog ref={ref} className={`jy-dialog ${drawn ? "drawn" : ""}`} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()}>
      <div className="jy-report" data-lenis-prevent>
        <header className="jy-r-head">
          <div>
            <span className="eyebrow">{r.confidential}</span>
            <h2 className="h2">{r.title}</h2>
            <p className="mono muted"><Redact w={9} /> {r.clientSuffix} · {r.meta}</p>
          </div>
          <button type="button" className="btn" onClick={onClose}>{r.close} ✕</button>
        </header>

        <section className="jy-r-sec">
          <span className="jy-sub">{r.summaryTitle}</span>
          <p className="lead">{r.summary}</p>
        </section>

        <div className="jy-r-kpis">
          {r.kpis.map((k, i) => (
            <div key={k.label}>
              <b><CountUp to={jData.kpis[i].value} decimals={jData.kpis[i].decimals} start={drawn} /><small>{jData.kpis[i].unit}</small></b>
              <span>{k.label}</span><em>{k.note}</em>
            </div>
          ))}
        </div>

        <section className="jy-r-sec">
          <span className="jy-sub">{r.dataTitle}</span>
          <table className="jy-table">
            <tbody>{r.data.map((d, i) => <tr key={d.name}><td>{d.name}</td><td className="num">{jData.data[i]}</td><td className="muted">{d.detail}</td></tr>)}</tbody>
          </table>
          <p className="mono muted jy-note">{r.quality}</p>
        </section>

        <div className="jy-r-charts">
          <figure>
            <figcaption>{r.otdTitle}</figcaption>
            <svg viewBox="0 0 400 170" aria-hidden>
              {[85, 90, 95].map((v) => {
                const y = 164 - ((v - 80) / 20) * 158;
                return <g key={v}><line x1="28" x2="400" y1={y} y2={y} className={v === 95 ? "jy-target" : "jy-grid"} /><text x="0" y={y + 4} className="jy-axis">{v}%</text></g>;
              })}
              <path d={jData.otd.map((x, i) => `${i ? "L" : "M"}${34 + (i / 12) * 360},${164 - ((x - 80) / 20) * 158}`).join(" ")} pathLength={1} className="jy-line" />
              {jData.otd.map((x, i) => <circle key={i} cx={34 + (i / 12) * 360} cy={164 - ((x - 80) / 20) * 158} r="2.6" className="jy-dot" style={{ transitionDelay: `${0.6 + i * 0.06}s` }} />)}
            </svg>
            <span className="jy-legend"><i className="acc" />{r.weeks} <i className="tgt" />{r.target} 95%</span>
          </figure>
          <figure>
            <figcaption>{r.causesTitle}</figcaption>
            <ul className="jy-hbars">
              {r.causes.map((c, i) => (
                <li key={c}><span>{c}</span><em><i style={{ width: drawn ? `${(jData.causes[i] / maxCause) * 100}%` : 0, transitionDelay: `${i * 0.1}s` }} className={i === 0 ? "acc" : ""} /></em><b>{jData.causes[i]}%</b></li>
              ))}
            </ul>
          </figure>
          <figure>
            <figcaption>{r.trucksTitle}</figcaption>
            <svg viewBox="0 0 400 150" aria-hidden>
              <line x1="0" x2="400" y1={140 - (24 / 50) * 130} y2={140 - (24 / 50) * 130} className="jy-target" />
              {jData.trucks.map((v, i) => (
                <rect key={i} x={i * 12.5 + 1} width="9" y={drawn ? 140 - (v / 50) * 130 : 140} height={drawn ? (v / 50) * 130 : 0} className={v >= 40 ? "jy-bar hot" : "jy-bar"} style={{ transitionDelay: `${i * 0.025}s` }} />
              ))}
            </svg>
            <span className="jy-legend">{r.trucksNote}</span>
          </figure>
          <figure>
            <figcaption>{r.costTitle}</figcaption>
            <div className="jy-donut">
              <svg viewBox="0 0 140 140" aria-hidden>
                {jData.costs.map((v, i) => {
                  const len = (v / 100) * C;
                  const el = <circle key={i} cx="70" cy="70" r="52" className={`jy-seg s${i}`} strokeDasharray={`${drawn ? len : 0} ${C}`} strokeDashoffset={-acc} style={{ transitionDelay: `${i * 0.15}s` }} />;
                  acc += len;
                  return el;
                })}
                <text x="70" y="68" textAnchor="middle" className="jy-donut-v">43%</text>
                <text x="70" y="86" textAnchor="middle" className="jy-axis">{r.costs[0]}</text>
              </svg>
              <ul>{r.costs.map((c, i) => <li key={c}><i className={`s${i}`} />{c}<b>{jData.costs[i]}%</b></li>)}</ul>
            </div>
          </figure>
        </div>

        <section className="jy-r-sec">
          <span className="jy-sub">{r.findingsTitle}</span>
          <div className="jy-findings">{r.findings.map((f, i) => <div key={f.t}><span className="k">0{i + 1}</span><b>{f.t}</b><p>{f.b}</p></div>)}</div>
        </section>

        <section className="jy-r-sec">
          <span className="jy-sub">{r.improveTitle}</span>
          <div className="jy-improve">
            <div className="jy-imp-head">{r.improveHead.map((h) => <span key={h}>{h}</span>)}</div>
            {r.improve.map((x) => (
              <div className="jy-imp-row" key={x.area}><b>{x.area}</b><s>{x.today}</s><span className="acc">{x.target}</span><span>{x.value}</span></div>
            ))}
            <div className="jy-imp-total"><span>{r.total}</span><b>{r.totalV}</b><span className="muted">{r.cash}</span></div>
          </div>
          <p className="mono muted jy-note">{r.method}</p>
        </section>
      </div>
    </dialog>
  );
}

/** How we work: the four steps before any commitment, told with a sample logistics client. */
export default function Journey() {
  const { c, lang } = useLang();
  const t = journeyContent(lang);
  const steps = c.ui.consult.next;
  const [step, setStep] = useState(0);
  const [reached, setReached] = useState(reducedMotion() ? steps.length - 1 : 0);
  const [open, setOpen] = useState(false);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const i = Number((e.target as HTMLElement).dataset.i);
        setStep(i);
        setReached((r) => Math.max(r, i));
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const panel = (i: number) => {
    const on = reached >= i;
    if (i === 0) return <Book t={t} on={on} />;
    if (i === 1) return <Call t={t} on={on} />;
    if (i === 2) return <Report t={t} on={on} onOpen={() => setOpen(true)} />;
    return <Proposal t={t} on={on} />;
  };

  return (
    <section className="section" id="journey">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 48 }}>
          <span className="eyebrow">{t.eyebrow}</span>
          <div>
            <h2 className="h2" data-split>{t.title}</h2>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{t.lead}</p>
            <span className="case-label">{t.label}</span>
          </div>
        </div>
        <div className="flow jy">
          <div className="flow-stage jy-stage">
            <div className="jy-progress" aria-hidden>{steps.map((_, i) => <span key={i} className={i === step ? "on" : i < step ? "done" : ""}>0{i + 1}</span>)}</div>
            <div className="jy-panels">
              {steps.map((_, i) => <div key={i} className={`jy-panel ${i === step ? "on" : ""}`} aria-hidden={i !== step}>{panel(i)}</div>)}
            </div>
          </div>
          <ol className="flow-steps jy-steps">
            {steps.map((s, i) => (
              <li key={s.t} data-i={i} ref={(el) => (refs.current[i] = el)} className={i === step ? "on" : ""}>
                <span className="k">0{i + 1}</span>
                <h3 className="h2">{s.t}</h3>
                <p>{s.b}</p>
                <span className="artifact">→ {t.artifacts[i]}</span>
                <div className="jy-inline">{panel(i)}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <FullReport t={t} open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
