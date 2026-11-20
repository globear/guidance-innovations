import { Fragment, useState } from "react";
import { useLang } from "../i18n";

type NodeKey = "sources" | "server" | "mask" | "aiLocal" | "aiApi";
type Zone = { label: "company" | "cloud" | "provider"; nodes: NodeKey[]; off?: boolean };
// "raw" = your data moving inside a trusted boundary; "masked" = the only thing that reaches an outside AI.
type Link = "raw" | "masked" | "none";

// One entry per deployment mode, in the same order as content.deploymentModes (Private, Hybrid, Managed).
const FLOWS: { zones: Zone[]; between: Link[] }[] = [
  { zones: [{ label: "company", nodes: ["sources", "server", "aiLocal"] }, { label: "provider", nodes: ["aiApi"], off: true }], between: ["none"] },
  { zones: [{ label: "company", nodes: ["sources", "server", "mask"] }, { label: "provider", nodes: ["aiApi"] }], between: ["masked"] },
  { zones: [{ label: "company", nodes: ["sources"] }, { label: "cloud", nodes: ["server", "mask"] }, { label: "provider", nodes: ["aiApi"] }], between: ["raw", "masked"] },
];

const Pipe = ({ kind }: { kind: Link }) => (
  <span className={`df-link ${kind}`} aria-hidden>
    {kind !== "none" && <><i /><i /><i /></>}
  </span>
);

/** Security diagram: per deployment mode, what stays inside your boundary and what (masked) reaches an AI provider. */
export default function DataFlow() {
  const { c } = useLang();
  const t = c.ui.security.flow;
  const modes = c.deploymentModes;
  const [sel, setSel] = useState(Math.max(0, modes.findIndex((m) => m.tag)));
  const flow = FLOWS[sel];
  const mode = modes[sel];

  return (
    <div className="df">
      <div className="df-tabs" role="tablist">
        {modes.map((m, i) => (
          <button key={m.name} role="tab" aria-selected={i === sel} className={i === sel ? "on" : ""} onClick={() => setSel(i)}>
            {m.name}{m.tag && <span className="tag">{m.tag}</span>}
          </button>
        ))}
      </div>

      <div className="df-stage" key={sel} role="tabpanel">
        {flow.zones.map((z, zi) => (
          <Fragment key={z.label}>
            {zi > 0 && <Pipe kind={flow.between[zi - 1]} />}
            <div className={`df-zone ${z.label} ${z.off ? "off" : ""}`}>
              <span className="df-zlabel">{t.zones[z.label]}</span>
              <div className="df-row">
                {z.nodes.map((n, ni) => (
                  <Fragment key={n}>
                    {ni > 0 && <Pipe kind="raw" />}
                    <div className={`df-node ${n}`}>
                      <b>{t.nodes[n].title}</b>
                      <span>{z.off ? t.notUsed : t.nodes[n].sub}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="df-foot">
        <p><span className="df-k">{c.ui.security.dataLives}</span>{mode.where}</p>
        <p><span className="df-k">{c.ui.security.aiProc}</span>{mode.ai}</p>
        <ul className="df-legend" aria-hidden>
          <li><i className="raw" />{t.legendData}</li>
          {flow.between.includes("masked") && <li><i className="masked" />{t.legendMasked}</li>}
        </ul>
      </div>
    </div>
  );
}
