import { useEffect, useLayoutEffect, useRef } from "react";
import { LANGS, useLang } from "../i18n";
import { gsap, lenis, reducedMotion } from "../motion";

// Each option invites the visitor in its own language.
const INVITE: Record<string, string> = {
  en: "Continue in English",
  th: "ดูเว็บไซต์เป็นภาษาไทย",
  "zh-Hans": "使用简体中文浏览",
  "zh-Hant": "使用繁體中文瀏覽",
  ms: "Teruskan dalam Bahasa Melayu",
  vi: "Tiếp tục bằng tiếng Việt",
};

/** Full-screen language chooser: shown on the first visit, reopened from the header or footer. */
export default function LangPicker() {
  const { lang, chosen, pickerOpen, setLang } = useLang();
  const root = useRef<HTMLDivElement>(null);
  const currentBtn = useRef<HTMLButtonElement>(null);

  // Lock the page behind it.
  useEffect(() => {
    if (!pickerOpen) return;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    currentBtn.current?.focus();
    return () => { lenis?.start(); document.body.style.overflow = ""; };
  }, [pickerOpen]);

  // Escape closes it only when a language is already set.
  useEffect(() => {
    if (!pickerOpen || !chosen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLang(lang); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pickerOpen, chosen, lang]);

  useLayoutEffect(() => {
    if (!pickerOpen || reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".lp-backdrop", { autoAlpha: 0, duration: 0.5, ease: "power2.out" });
      gsap.from(".lp-head > *", { y: 24, autoAlpha: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, delay: 0.1 });
      gsap.from(".lp-opt", { y: 30, autoAlpha: 0, duration: 0.8, ease: "power3.out", stagger: 0.06, delay: 0.25 });
    }, root);
    return () => ctx.revert();
  }, [pickerOpen]);

  if (!pickerOpen) return null;

  return (
    <div className="lp" ref={root} role="dialog" aria-modal="true" aria-labelledby="lp-title">
      <div className="lp-backdrop" onClick={() => chosen && setLang(lang)} />
      <div className="lp-panel">
        <div className="lp-head">
          <img src="/logo.png" alt="" className="lp-logo" />
          <span className="eyebrow">Language · ภาษา · 语言 · Bahasa · Ngôn ngữ</span>
          <h2 id="lp-title" className="h2">Choose your language</h2>
        </div>
        <div className="lp-grid">
          {LANGS.map((l) => (
            <button
              key={l.code}
              ref={l.code === lang ? currentBtn : undefined}
              lang={l.code}
              className={`lp-opt ${l.code === lang ? "on" : ""}`}
              onClick={() => setLang(l.code)}
            >
              <span className="lp-code">{l.short}</span>
              <span className="lp-name">{l.label}</span>
              <span className="lp-invite">{INVITE[l.code]} <span className="arrow">→</span></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
