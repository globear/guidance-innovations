import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages: { code: Language; label: string; ariaLabel: string }[] = [
  { code: "en", label: "EN", ariaLabel: "Switch to English" },
  { code: "th", label: "ไทย", ariaLabel: "เปลี่ยนเป็นภาษาไทย" },
  { code: "zh", label: "中文", ariaLabel: "切换到中文" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-card px-1 py-1" role="group" aria-label="Language selection">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          aria-label={lang.ariaLabel}
          aria-pressed={language === lang.code}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
            language === lang.code
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
