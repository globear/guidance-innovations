import { useState, type FormEvent } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { Arrow, CTA, Founder, MethodPinned, MiniDash, PageHead, SecurityTeaser, TutorialVideo } from "../components/Blocks";
import DataFlow from "../components/DataFlow";
import { AgentBuild, AgentDay, LeaderMap, SecondBrain } from "../components/AgentStack";
import Select from "../components/Select";
import Journey from "../components/Journey";
import { CaseStory } from "./Case";
import { caseContent } from "../cases";
import { brand, contact, en, fieldPhotos, photos, teamMembers } from "../content";
import { sendBooking, summary, type Booking } from "../booking";
import { useLang } from "../i18n";
import { lenis } from "../motion";
import { legalContent } from "../legal";

export function Business() {
  const { c } = useLang();
  const t = c.ui.business;
  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} photo={photos.business} />
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
      <SecurityTeaser />
      <Faq light={false} />
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
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} photo={photos.leaders} />
      <LeaderMap />
      <AgentDay />
      <SecondBrain />
      <AgentBuild />
      <CTA />
    </>
  );
}

export function IndustryPage() {
  const { c, lang } = useLang();
  const t = c.ui.industry;
  const { slug } = useParams();
  const idx = c.industries.findIndex((i) => i.slug === slug);
  if (idx < 0) return <Navigate to="/" replace />;
  const ind = c.industries[idx];
  const toCase = () => {
    const el = document.getElementById("case");
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -80 }); else el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <PageHead eyebrow={`${c.ui.nav.industries} / ${ind.name}`} tab={ind.name} title={ind.headline} photo={photos.industries[ind.slug]} />
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
          {caseContent(lang).cases.some((x) => x.slug === ind.slug) && (
            <button type="button" className="btn" style={{ marginTop: 40 }} onClick={() => toCase()}>{caseContent(lang).ui.read} <Arrow /></button>
          )}
        </div>
      </section>
      <CaseStory slug={ind.slug} />
      <section className="section tight">
        <div className="wrap" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {c.industries.filter((i) => i.slug !== slug).map((i) => (
            <Link key={i.slug} to={`/industries/${i.slug}`} className="btn">{i.name}</Link>
          ))}
        </div>
      </section>
      <CTA to={`/consultation?industry=${ind.slug}`} />
    </>
  );
}

export function HowWeWork() {
  const { c } = useLang();
  const t = c.ui.how;
  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} photo={photos.how} />
      <section style={{ padding: "40px 0" }}><MethodPinned /></section>
      <Journey />
      <TutorialVideo />
      <section className="section light">
        <div className="wrap">
          <div className="cols-3" data-stagger>
            {t.principles.map((p, i) => (
              <div className="cell" key={p.t}><span className="k">{"ABC"[i]}</span><h3 className="h3">{p.t}</h3><p>{p.b}</p></div>
            ))}
          </div>
        </div>
      </section>
      <Engagement />
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
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 56 }}>
            <span className="eyebrow">{t.flow.eyebrow}</span>
            <h2 className="h2" data-split>{t.flow.title}</h2>
          </div>
          <div data-fade><DataFlow /></div>
        </div>
      </section>
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
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} photo={photos.about} />
      <Founder quote />
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="split" style={{ marginBottom: 48 }}>
            <span className="eyebrow">{t.teamEyebrow}</span>
            <h2 className="h2" data-split>{t.teamTitle}</h2>
          </div>
          <div className="team" data-stagger>
            {teamMembers.map((m, i) => (
              <figure className="member" key={m.name}>
                <img src={m.photo} alt={m.name} loading="lazy" decoding="async" />
                <figcaption>
                  <b>{m.name}</b>
                  <span className="role">{i === 0 ? c.founder.role : t.team[i].role}</span>
                  <ul>{t.team[i].skills.map((sk) => <li key={sk}>{sk}</li>)}</ul>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section tight">
        <div className="wrap">
          <div className="split" style={{ marginBottom: 48 }}>
            <span className="eyebrow">{t.fieldEyebrow}</span>
            <h2 className="h2" data-split>{t.fieldTitle}</h2>
          </div>
          <div className="field-grid" data-stagger>
            {fieldPhotos.map((src, i) => (
              <figure key={src}><img src={src} alt={t.field[i]} loading="lazy" decoding="async" /><figcaption>{t.field[i]}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section light">
        <div className="wrap split">
          <div><span className="eyebrow">{t.bringEyebrow}</span><h2 className="h2" style={{ marginTop: 24 }} data-split>{t.bringTitle}</h2></div>
          <div className="cols-2" data-stagger>{c.capabilities.map((cap) => <div className="cell" key={cap}>{cap}</div>)}</div>
        </div>
      </section>
      <section className="section tight">
        <div className="wrap split">
          <span className="eyebrow">{t.companyEyebrow}</span>
          <dl className="facts" data-stagger>
            <div><dt>{t.factCompany}</dt><dd>{brand.legal}</dd></div>
            <div><dt>{t.factBase}</dt><dd>{t.factBaseV}</dd></div>
            <div><dt>{t.factEmail}</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
            <div><dt>WhatsApp</dt><dd><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">{contact.whatsappLabel}</a></dd></div>
          </dl>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Consultation() {
  const { c, lang } = useLang();
  const t = c.ui.consult;
  const [params] = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [draft, setDraft] = useState<Booking | null>(null);
  const preInterest = params.get("for") === "leaders" ? "1" : "0";
  const preIndustry = c.industries.some((i) => i.slug === params.get("industry")) ? params.get("industry")! : c.industries[0].slug;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    // Labels go to the inbox in English, whatever language the visitor used.
    const ind = en.industries.find((i) => i.slug === v("industry"));
    const booking: Booking = {
      name: v("name"), company: v("company"), email: v("email"), phone: v("phone"),
      interest: en.ui.consult.interestOpts[Number(v("interest"))] ?? v("interest"),
      industry: ind ? ind.name : en.ui.consult.other,
      business: v("business"), problem: v("problem"), lang,
    };
    setDraft(booking);
    setStatus("sending");
    try {
      await sendBooking(booking, v("bot-field"));
      setStatus("sent");
      requestAnimationFrame(() => document.querySelector(".sent")?.scrollIntoView({ behavior: "smooth", block: "center" }));
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(`Consultation request${draft?.company ? ` · ${draft.company}` : ""}`)}&body=${encodeURIComponent(draft ? `${draft.name} <${draft.email}>${draft.company ? `\n${draft.company}` : ""}\n\n${summary(draft)}` : "")}`;

  return (
    <>
      <PageHead eyebrow={t.eyebrow} title={t.title} lead={t.lead} photo={photos.consult} />
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap split consult">
          <div data-fade>
            <span className="eyebrow">{t.nextEyebrow}</span>
            <h2 className="h3" style={{ marginTop: 20 }}>{t.nextTitle}</h2>
            <ol className="next-steps">
              {t.next.map((s, i) => <li key={s.t}><span className="k">0{i + 1}</span><div><b>{s.t}</b><p>{s.b}</p></div></li>)}
            </ol>
            <span className="eyebrow" style={{ marginTop: 48 }}>{t.direct}</span>
            <div className="direct">
              <a className="btn" href={`mailto:${contact.email}`}>{contact.email} <Arrow /></a>
              <a className="btn" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp · {contact.whatsappLabel} <Arrow /></a>
            </div>
          </div>
          {status === "sent" ? (
            <div className="sent" role="status">
              <span className="sent-mark" aria-hidden>✓</span>
              <h2 className="h2">{t.thanks}</h2>
              <p className="lead" style={{ marginTop: 16 }}>{t.thanksLead}</p>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} data-fade>
              <input name="bot-field" tabIndex={-1} autoComplete="off" aria-hidden className="hp" />
              <div className="field"><label htmlFor="n">{t.name} *</label><input id="n" name="name" autoComplete="name" required maxLength={120} /></div>
              <div className="field"><label htmlFor="c">{t.company}</label><input id="c" name="company" autoComplete="organization" maxLength={160} /></div>
              <div className="field"><label htmlFor="e">{t.contact} *</label><input id="e" name="email" type="email" autoComplete="email" required maxLength={160} /></div>
              <div className="field"><label htmlFor="ph">{t.phone} *</label><input id="ph" name="phone" autoComplete="tel" required maxLength={60} /></div>
              <div className="field"><label htmlFor="t">{t.interest}</label>
                <Select id="t" name="interest" defaultValue={preInterest} options={t.interestOpts.map((o, i) => ({ value: String(i), label: o }))} />
              </div>
              <div className="field"><label htmlFor="i">{t.industry}</label>
                <Select id="i" name="industry" defaultValue={preIndustry} options={[...c.industries.map((i) => ({ value: i.slug, label: i.name })), { value: "other", label: t.other }]} />
              </div>
              <div className="field full"><label htmlFor="b">{t.business} *</label><textarea id="b" name="business" rows={3} required maxLength={3000} placeholder={t.businessHint} /></div>
              <div className="field full"><label htmlFor="p">{t.problem} *</label><textarea id="p" name="problem" rows={4} required maxLength={3000} placeholder={t.problemHint} /></div>
              <label className="consent full">
                <input type="checkbox" name="consent" required />
                <span>{t.consent} <a href={contact.privacy} target="_blank" rel="noopener noreferrer">{t.privacy}</a>{t.consentEnd}</span>
              </label>
              {status === "error" && (
                <div className="form-error full" role="alert">
                  <b>{t.errorTitle}</b>
                  <p>{t.errorLead}</p>
                  <div><a className="btn" href={mailto}>{t.emailBtn} <Arrow /></a><a className="btn" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">{t.whatsappBtn} <Arrow /></a></div>
                </div>
              )}
              <div className="full" style={{ marginTop: 12 }}>
                <button className="btn primary" type="submit" disabled={status === "sending"}>{status === "sending" ? t.sending : t.submit} {status !== "sending" && <Arrow />}</button>
              </div>
            </form>
          )}
        </div>
      </section>
      <Faq />
    </>
  );
}

/** Common owner questions, as native disclosure widgets (keyboard and screen-reader friendly). */
export function Faq({ light = true }: { light?: boolean }) {
  const { c } = useLang();
  const t = c.ui.faq;
  return (
    <section className={`section ${light ? "light" : ""}`}>
      <div className="wrap split">
        <div><span className="eyebrow">{t.eyebrow}</span><h2 className="h2" style={{ marginTop: 24 }} data-split>{t.title}</h2></div>
        <div className="faq" data-stagger>
          {t.items.map((it) => (
            <details key={it.q}><summary>{it.q}</summary><p>{it.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NotFound() {
  const { c } = useLang();
  return (
    <>
      <PageHead eyebrow="404" tab={c.ui.notFound.title} title={c.ui.notFound.title} lead={c.ui.notFound.lead} />
      <section className="section tight" style={{ paddingTop: 0 }}><div className="wrap"><Link to="/" className="btn primary">{c.ui.notFound.button} <Arrow /></Link></div></section>
    </>
  );
}

/** Privacy policy and terms of use, in the visitor's language. */
export function Legal({ doc }: { doc: "privacy" | "terms" }) {
  const { lang } = useLang();
  const l = legalContent(lang);
  const d = l[doc];
  return (
    <>
      <PageHead eyebrow={brand.legal} title={d.title} tab={d.title} lead={d.lead} />
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap legal">
          <p className="mono muted legal-date">{l.updated}</p>
          {d.sections.map((s) => (
            <div className="legal-sec" key={s.h}>
              <h2 className="h3">{s.h}</h2>
              <div>{s.p.map((x) => <p key={x}>{x}</p>)}</div>
            </div>
          ))}
          <p className="mono muted legal-contact">{l.contactLine}</p>
        </div>
      </section>
    </>
  );
}
