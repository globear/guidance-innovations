import { memo, useEffect, useRef, useState, type CSSProperties } from "react";
import { TOOL, jData, journeyContent, phaseWeeks, type JourneyText } from "../journey";
import { useLang } from "../i18n";
import { lenis, reducedMotion } from "../motion";
import { CountUp } from "../pages/Case";
import { scrollToAnalysisVideo } from "./Blocks";

const NAV = 68; // fixed header height
/** Desktop with enough height: the section pins and scrolling moves through the steps. Otherwise: tabs. */
const PIN_QUERY = "(min-width: 1024px) and (min-height: 760px)";

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
const Book = memo(function Book({ t, on }: { t: JourneyText; on: boolean }) {
  const b = t.book;
  const n = useSeq(on, 4, 850);
  return (
    <div className="jy-book">
      <ol className="jy-times">
        <li className={n >= 1 ? "in" : ""}><b>14:12</b>{b.request}</li>
        <li className={n >= 2 ? "in" : ""}><b>15:40</b>{b.reply} · {b.replyIn}</li>
        <li className={n >= 4 ? "in" : ""}><b>✓</b>{b.accepted}</li>
      </ol>
      <div className="jy-book-row">
        <div className={`jy-card ${n >= 1 ? "in" : ""}`}>
          <div className="jy-card-head"><span className="dot-live" />{b.request}</div>
          <dl>
            <dt>{b.company}</dt><dd><Redact /> {t.report.clientSuffix}</dd>
            <dt>{b.industry}</dt><dd>{b.industryV}</dd>
            <dt>{b.area}</dt><dd>{b.areaV}</dd>
          </dl>
        </div>
        <div className={`jy-reply ${n >= 2 ? "in" : ""}`}>
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
    </div>
  );
});

/* ---------- 02 · the 45-minute call ---------- */
const NODE_POS: [number, number][] = [[0, 10], [205, 10], [410, 10], [410, 132], [205, 132], [0, 132]];
const NW = 170, NH = 44;
const FLAG_ON = [1, 2, 4, 5]; // nodes that carry a pain flag

const Call = memo(function Call({ t, on, live }: { t: JourneyText; on: boolean; live: boolean }) {
  const k = t.call;
  const nodes = useSeq(on, 6, 420);
  const flags = useSeq(on && nodes >= 6, 4, 450);
  const notes = useSeq(on, 4, 1500, 1100);
  const [sec, setSec] = useState(12 * 60 + 5);
  const [speaker, setSpeaker] = useState(0);
  useEffect(() => {
    if (!live || reducedMotion()) return;
    const a = setInterval(() => setSec((s) => s + 1), 1000);
    const b = setInterval(() => setSpeaker((s) => (s + 1) % 3), 2600);
    return () => { clearInterval(a); clearInterval(b); };
  }, [live]);
  const mm = String(Math.floor(sec / 60)).padStart(2, "0"), ss = String(sec % 60).padStart(2, "0");
  const people = [
    { name: k.fde, logo: true },
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
      <div className="jy-share">
        <span className="jy-share-cap">{k.share}</span>
        <svg viewBox="0 0 580 210" aria-hidden>
          {NODE_POS.slice(0, -1).map(([x, y], i) => {
            const [x2, y2] = NODE_POS[i + 1];
            const d = y === y2 ? `M${x + (x2 > x ? NW : 0)},${y + NH / 2} L${x2 + (x2 > x ? 0 : NW)},${y2 + NH / 2}` : `M${x + NW / 2},${y + NH + 30} L${x2 + NW / 2},${y2}`;
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
            {p.logo ? <img className="jy-logo" src="/logo.png" alt="" loading="lazy" /> : <span className="jy-initial">{p.initial}</span>}
            <span className="jy-tile-name">{p.name}</span>
          </div>
        ))}
      </div>
      <div className="jy-notes">
        <span className="jy-notes-head">{k.notesTitle}</span>
        <ul>{k.notes.map((x, i) => <li key={x} className={notes > i ? "in" : ""}>{x}</li>)}</ul>
      </div>
      <div className="jy-call-bar" aria-hidden><i /><i /><i /><i className="end" /></div>
    </div>
  );
});

/* ---------- 03 · first-impression report (summary card) ---------- */
const otdY = (v: number, h: number, pad: number) => h - pad - ((v - 80) / 20) * (h - pad * 2);
const otdPath = (w: number, h: number, pad = 6) => jData.otd.map((v, i) => `${i ? "L" : "M"}${pad + (i / (jData.otd.length - 1)) * (w - pad * 2)},${otdY(v, h, pad)}`).join(" ");

const Report = memo(function Report({ t, on, onOpen }: { t: JourneyText; on: boolean; onOpen: () => void }) {
  const r = t.report;
  const stage = useSeq(on, r.stages.length, 650, 500);
  return (
    <div className={`jy-doc jy-rep ${on ? "in" : ""}`}>
      <div className="jy-rep-a">
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
        <div className="jy-tool">
          <span className="mono muted">{r.processedIn} <b>{TOOL}</b></span>
          <ol>{r.stages.map((s, i) => <li key={s} className={stage > i ? "in" : ""}><i />{s}</li>)}</ol>
        </div>
        <div className="jy-keyfind">
          <span className="jy-sub">{r.findingsTitle}</span>
          <ol>{r.findings.slice(0, 3).map((f, i) => <li key={f.t} className={stage > i + 1 ? "in" : ""}><span className="k">0{i + 1}</span>{f.t}</li>)}</ol>
        </div>
        <button type="button" className="btn primary jy-open" onClick={onOpen}>{r.open} <span aria-hidden>↗</span></button>
      </div>
      <div className="jy-rep-b">
        <div className="jy-kpis">
          {r.kpis.map((k, i) => (
            <div key={k.label}>
              <b><CountUp to={jData.kpis[i].value} decimals={jData.kpis[i].decimals} start={on} /><small>{jData.kpis[i].unit}</small></b>
              <span>{k.label}</span>
            </div>
          ))}
        </div>
        <div className="jy-spark-box">
          <span className="jy-sub">{r.otdTitle}</span>
          <svg viewBox="0 0 300 130" className="jy-spark" aria-hidden>
            {[85, 90].map((v) => <line key={v} x1="0" x2="300" y1={otdY(v, 130, 8)} y2={otdY(v, 130, 8)} className="jy-grid" />)}
            <line x1="0" x2="300" y1={otdY(95, 130, 8)} y2={otdY(95, 130, 8)} className="jy-target" />
            <text x="300" y={otdY(95, 130, 8) - 5} textAnchor="end" className="jy-axis">{r.target} 95%</text>
            <path d={otdPath(300, 130, 8)} pathLength={1} className="jy-line" />
            {jData.otd.map((v, i) => <circle key={i} cx={8 + (i / (jData.otd.length - 1)) * 284} cy={otdY(v, 130, 8)} r="2.4" className="jy-sdot" />)}
          </svg>
          <span className="jy-legend">{r.weeks}</span>
        </div>
      </div>
    </div>
  );
});

/* ---------- 04 · proposal ---------- */
const Proposal = memo(function Proposal({ t, on }: { t: JourneyText; on: boolean }) {
  const p = t.proposal;
  const rows = useSeq(on, 4, 450, 900);
  return (
    <div className={`jy-doc jy-prop ${on ? "in" : ""}`}>
      <div className="jy-doc-head">
        <span className="jy-logo">G</span>
        <div><b>{p.title}</b><span className="mono muted"><Redact /> {t.report.clientSuffix}</span></div>
        <span className="jy-tag accent">{p.scope}</span>
      </div>
      <div className="jy-prop-top">
        <div className="jy-gantt">
          <span className="jy-sub">{p.phasesTitle}</span>
          <div className="jy-weeks"><span /><div>{[1, 2, 3, 4, 5, 6].map((w) => <span key={w}>W{w}</span>)}</div></div>
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
        <div className="jy-flow">
          <span className="jy-sub">{p.inputs}</span><span /><span className="jy-sub">{p.outputs}</span>
          <ul className="jy-io in-list">{p.inputItems.map((x, i) => <li key={x} style={{ transitionDelay: `${0.3 + i * 0.08}s` }}>{x}</li>)}</ul>
          <div className="jy-bus" aria-hidden><span className="jy-hub">G</span></div>
          <ul className="jy-io out-list">{p.outputItems.map((x, i) => <li key={x} style={{ transitionDelay: `${0.8 + i * 0.08}s` }}>{x}</li>)}</ul>
        </div>
      </div>
      <div className="jy-pricing">
        <span className="jy-sub">{p.pricingTitle}</span>
        <div className="jy-price-cards">
          <div className={`jy-price free ${rows >= 1 ? "in" : ""}`}>
            <span className="k">01</span><b>{p.freeTitle}</b><span className="note">{p.freeNote}</span><strong>{p.free}</strong>
          </div>
          <div className={`jy-price ${rows >= 2 ? "in" : ""}`}>
            <span className="k">02</span><b>{p.buildTitle}</b><span className="note">{p.buildNote}</span><strong className="jy-blur" aria-label="price withheld">฿000,000</strong>
          </div>
          <div className={`jy-price ${rows >= 3 ? "in" : ""}`}>
            <span className="k">03</span><b>{p.careTitle}</b><span className="note">{p.careNote}</span><strong><span className="jy-blur" aria-label="price withheld">฿00,000</span><small>{p.perMonth}</small></strong>
          </div>
        </div>
        <div className={`jy-terms ${rows >= 4 ? "in" : ""}`}>
          <span>{p.deposit}</span>
          <span>{p.golive} · <b>{p.goliveV}</b></span>
        </div>
      </div>
    </div>
  );
});

/* ---------- the full report, in a dialog ---------- */
function FullReport({ t, open, onClose }: { t: JourneyText; open: boolean; onClose: () => void }) {
  const r = t.report;
  const { c } = useLang();
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
  const maxDelay = Math.max(...jData.delay.counts);
  const heat = jData.heatDays.map((d) => jData.heatHours.map((h) => h * d));
  const maxHeat = Math.max(...heat.flat());
  const C = 2 * Math.PI * 52;
  let acc = 0;
  // scatter scales and a least-squares trend line
  const sx = (v: number) => 40 + ((v - 15) / 37) * 350, sy = (v: number) => 150 - ((v - 105) / 45) * 140;
  const n = jData.trucks.length, mx = jData.trucks.reduce((a, b) => a + b) / n, my = jData.perDrop.reduce((a, b) => a + b) / n;
  const slope = jData.trucks.reduce((a, x, i) => a + (x - mx) * (jData.perDrop[i] - my), 0) / jData.trucks.reduce((a, x) => a + (x - mx) ** 2, 0);
  const maxMonth = Math.max(...jData.months);

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
          <span className="jy-sub">{r.pipeTitle}</span>
          <p className="jy-r-lead">{r.pipeLead}</p>
          <ol className="jy-pipe">{r.pipe.map((s, i) => <li key={s.t}><span className="k">0{i + 1}</span><b>{s.t}</b><p>{s.b}</p></li>)}</ol>
          <div className="jy-env"><span className="chip acc">{TOOL}</span>{r.env.map((e) => <span className="chip" key={e}>{e}</span>)}</div>
          <button type="button" className="btn jy-watch" onClick={() => { onClose(); window.setTimeout(scrollToAnalysisVideo, 250); }}>▶ {c.ui.how.video.watch} <span className="arrow" aria-hidden>→</span></button>
        </section>

        <section className="jy-r-sec">
          <span className="jy-sub">{r.dataTitle}</span>
          <table className="jy-table">
            <thead><tr>{r.dataHead.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>{r.data.map((d, i) => <tr key={d.name}><td>{d.name}</td><td className="muted">{d.format}</td><td className="num">{jData.data[i]} <span className="muted">{d.detail}</span></td></tr>)}</tbody>
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
            <span className="jy-legend"><i />{r.weeks} <i className="tgt" />{r.target} 95%</span>
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
            <figcaption>{r.delayTitle}</figcaption>
            <div className="jy-hist">
              {jData.delay.counts.map((v, i) => (
                <div key={i}><em><i style={{ height: drawn ? `${(v / maxDelay) * 100}%` : 0, transitionDelay: `${i * 0.06}s` }} className={i >= 4 ? "acc" : ""} /></em><span>{jData.delay.labels[i]}</span></div>
              ))}
            </div>
            <span className="jy-legend">{r.delayNote}</span>
          </figure>
          <figure>
            <figcaption>{r.heatTitle}</figcaption>
            <div className="jy-heat">
              <span />{jData.heatHours.map((_, h) => <span key={h} className="jy-heat-h">{h % 3 === 0 ? `${String(7 + h).padStart(2, "0")}` : ""}</span>)}
              {heat.map((row, d) => [
                <span key={`d${d}`} className="jy-heat-d">{r.days[d]}</span>,
                ...row.map((v, h) => <i key={`${d}-${h}`} style={{ opacity: drawn ? 0.08 + (v / maxHeat) * 0.92 : 0, transitionDelay: `${(d + h) * 0.025}s` }} />),
              ])}
            </div>
            <span className="jy-legend">{r.heatNote}</span>
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
            <figcaption>{r.scatterTitle}</figcaption>
            <svg viewBox="0 0 400 175" aria-hidden>
              {[110, 125, 140].map((v) => <g key={v}><line x1="40" x2="400" y1={sy(v)} y2={sy(v)} className="jy-grid" /><text x="0" y={sy(v) + 4} className="jy-axis">฿{v}</text></g>)}
              {[20, 30, 40, 50].map((v) => <text key={v} x={sx(v)} y="172" textAnchor="middle" className="jy-axis">{v}%</text>)}
              <line x1={sx(18)} y1={sy(my + slope * (18 - mx))} x2={sx(50)} y2={sy(my + slope * (50 - mx))} className="jy-trend" />
              {jData.trucks.map((x, i) => <circle key={i} cx={sx(x)} cy={sy(jData.perDrop[i])} r="4" className={`jy-dot ${x >= 40 ? "hot" : ""}`} style={{ transitionDelay: `${0.2 + i * 0.03}s` }} />)}
            </svg>
            <span className="jy-legend">{r.scatterX} → · {r.scatterY} ↑ · {r.scatterNote}</span>
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
          <figure>
            <figcaption>{r.monthTitle}</figcaption>
            <div className="jy-months">
              {jData.months.map((v, i) => (
                <div key={i}><b>฿{v}</b><em><i style={{ height: drawn ? `${(v / maxMonth) * 100}%` : 0, transitionDelay: `${i * 0.15}s` }} className={i === 2 ? "acc" : ""} /></em><span>{r.months[i]}</span></div>
              ))}
            </div>
            <span className="jy-legend">{r.monthNote}</span>
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
  const [pinned, setPinned] = useState(() => !reducedMotion() && window.matchMedia(PIN_QUERY).matches);
  const [step, setStep] = useState(0);
  const [inView, setInView] = useState(false);
  const [visited, setVisited] = useState<boolean[]>(() => steps.map(() => reducedMotion()));
  const [open, setOpen] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const tabs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion()) return;
    const mq = window.matchMedia(PIN_QUERY);
    const on = () => setPinned(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    if (!track.current) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: "-20% 0px -20% 0px" });
    io.observe(track.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (inView && !visited[step]) setVisited((v) => v.map((x, i) => x || i === step));
  }, [inView, step, visited]);

  // Pinned: the scroll position inside the tall track picks the step and fills the tab bars.
  useEffect(() => {
    if (!pinned) { tabs.current?.style.setProperty("--p", String(step + 1)); return; }
    const onScroll = () => {
      const el = track.current;
      if (!el) return;
      const total = el.offsetHeight - (window.innerHeight - NAV);
      const p = Math.min(1, Math.max(0, (NAV - el.getBoundingClientRect().top) / total)) * steps.length;
      tabs.current?.style.setProperty("--p", p.toFixed(3));
      setStep(Math.min(steps.length - 1, Math.floor(p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [pinned, steps.length, step]);

  const go = (i: number) => {
    const el = track.current;
    if (!pinned || !el) { setStep(i); return; }
    const total = el.offsetHeight - (window.innerHeight - NAV);
    const y = el.getBoundingClientRect().top + window.scrollY - NAV + ((i + 0.5) / steps.length) * total;
    if (lenis) lenis.scrollTo(y, { duration: 1 }); else window.scrollTo({ top: y, behavior: "smooth" });
  };

  const openReport = () => setOpen(true);
  const panel = (i: number) => {
    const on = visited[i];
    if (i === 0) return <Book t={t} on={on} />;
    if (i === 1) return <Call t={t} on={on} live={inView && step === 1} />;
    if (i === 2) return <Report t={t} on={on} onOpen={openReport} />;
    return <Proposal t={t} on={on} />;
  };

  const trackStyle: CSSProperties | undefined = pinned ? { height: `calc(${steps.length * 75}vh + 100vh - ${NAV}px)` } : undefined;

  return (
    <section className="section jy-section" id="journey">
      <div className="wrap">
        <div className="split" style={{ marginBottom: 40 }}>
          <span className="eyebrow">{t.eyebrow}</span>
          <div>
            <h2 className="h2" data-split>{t.title}</h2>
            <p className="lead" style={{ marginTop: 24 }} data-fade>{t.lead}</p>
            <span className="case-label">{t.label}</span>
          </div>
        </div>
      </div>
      <div className={`jy-track ${pinned ? "pinned" : ""}`} ref={track} style={trackStyle}>
        <div className="jy-sticky">
          <div className="wrap jy-inner">
            <div className="jy-tabs" role="tablist" ref={tabs}>
              {steps.map((s, i) => (
                <button key={s.t} type="button" role="tab" aria-selected={i === step} className={i === step ? "on" : ""} onClick={() => go(i)} style={{ "--i": i } as CSSProperties}>
                  <span className="k">0{i + 1}</span><span className="t">{s.t}</span><i aria-hidden />
                </button>
              ))}
            </div>
            <div className="jy-frame">
              <div className="jy-panels">
                {steps.map((_, i) => <div key={i} className={`jy-panel ${i === step ? "on" : ""}`} aria-hidden={i !== step}>{panel(i)}</div>)}
              </div>
              <div className="jy-caption" key={step}>
                <span className="k">0{step + 1}</span>
                <div>
                  <h3 className="h3">{steps[step].t}</h3>
                  <p>{steps[step].b}</p>
                </div>
                <span className="artifact">→ {t.artifacts[step]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FullReport t={t} open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
