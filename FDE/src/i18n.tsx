import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { en, type Content } from "./content";
import { th } from "./content.th";
import { zhHans } from "./content.zh-hans";
import { zhHant } from "./content.zh-hant";
import { ms } from "./content.ms";
import { vi } from "./content.vi";

// Codes double as the <html lang> value, which the CSS uses for per-script typography.
export const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "th", label: "ไทย", short: "TH" },
  { code: "zh-Hans", label: "简体中文", short: "简" },
  { code: "zh-Hant", label: "繁體中文", short: "繁" },
  { code: "ms", label: "Bahasa Melayu", short: "MS" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
] as const;
export type Lang = (typeof LANGS)[number]["code"];

const dict: Record<Lang, Content> = { en, th, "zh-Hans": zhHans, "zh-Hant": zhHant, ms, vi };
const isLang = (v: string | null): v is Lang => !!v && v in dict;

/** Best guess from the browser, used only as the page behind the pop-up and its highlighted option. */
function browserLang(): Lang {
  const n = (navigator.language || "").toLowerCase();
  if (n.startsWith("th")) return "th";
  if (n.startsWith("zh")) return /tw|hk|mo|hant/.test(n) ? "zh-Hant" : "zh-Hans";
  if (n.startsWith("ms")) return "ms";
  if (n.startsWith("vi")) return "vi";
  return "en";
}

// A "?lang=" link or an earlier pick counts as chosen; otherwise the pop-up asks.
function initial(): { lang: Lang; chosen: boolean } {
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (isLang(q)) { localStorage.setItem("lang", q); return { lang: q, chosen: true }; }
    const saved = localStorage.getItem("lang");
    if (isLang(saved)) return { lang: saved, chosen: true };
  } catch { /* storage unavailable: ask every visit */ }
  return { lang: browserLang(), chosen: false };
}

type Ctx = { lang: Lang; c: Content; chosen: boolean; pickerOpen: boolean; setLang: (l: Lang) => void; openPicker: () => void };
const LangCtx = createContext<Ctx>(null!);

export function LangProvider({ children }: { children: ReactNode }) {
  const [state] = useState(initial);
  const [lang, setLangState] = useState<Lang>(state.lang);
  const [chosen, setChosen] = useState(state.chosen);
  const [pickerOpen, setPickerOpen] = useState(!state.chosen);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = dict[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", dict[lang].meta.description);
  }, [lang]);

  const setLang = (l: Lang) => {
    document.documentElement.lang = l;
    setLangState(l);
    setChosen(true);
    setPickerOpen(false);
    try { localStorage.setItem("lang", l); } catch { /* ignore */ }
    // Drop a stale "?lang=" so a reload keeps the new pick.
    const url = new URL(location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      history.replaceState(history.state, "", url);
    }
  };

  return (
    <LangCtx.Provider value={{ lang, c: dict[lang], chosen, pickerOpen, setLang, openPicker: () => setPickerOpen(true) }}>
      {children}
    </LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
