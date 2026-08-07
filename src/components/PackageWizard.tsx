import { useMemo, useState } from "react";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  User,
  LayoutGrid,
  Send,
  Rocket,
  ClipboardCheck,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import type { PackageLeadInsert } from "@/types/database";

const EN = translations.en.package.wizard;

const packageValues = ["demo", "website", "business", "sales"] as const;
const websiteStatusValues = ["have", "need", "bundle"] as const;

const stepIcons = [LayoutGrid, User, ClipboardCheck, Rocket];

const emptyForm = {
  package: "",
  websiteStatus: "",
  addOns: [] as string[],
  name: "",
  businessName: "",
  websiteUrl: "",
  phone: "",
  lineId: "",
  email: "",
  preferredContact: "",
  message: "",
  consent: false,
};

function classNames(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function englishAddOn(id: string) {
  const [category, option] = id.split(".").map(Number);
  return EN.addOnCategories[category]?.options[option] ?? id;
}

type PackageWizardProps = {
  initialPackage?: string;
  initialWebsiteStatus?: string;
};

export default function PackageWizard({
  initialPackage = "",
  initialWebsiteStatus = "",
}: PackageWizardProps) {
  const { t, tList, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    ...emptyForm,
    package: initialPackage,
    websiteStatus: initialWebsiteStatus,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleAddOn = (value: string) => {
    setForm((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(value)
        ? prev.addOns.filter((item) => item !== value)
        : [...prev.addOns, value],
    }));
  };

  const canProceedFromStep1 = Boolean(form.package && form.websiteStatus);
  const canProceedFromStep2 = Boolean(
    form.name.trim() &&
      form.businessName.trim() &&
      form.phone.trim() &&
      form.email.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      (form.websiteStatus !== "have" || form.websiteUrl.trim())
  );
  const canProceedFromStep3 = form.consent;

  const validateStep = (targetStep: number) => {
    const nextErrors: Record<string, string> = {};

    if (targetStep > 1) {
      if (!form.package) nextErrors.package = t("package.wizard.errors.package");
      if (!form.websiteStatus) nextErrors.websiteStatus = t("package.wizard.errors.websiteStatus");
    }

    if (targetStep > 2) {
      if (!form.name.trim()) nextErrors.name = t("package.wizard.errors.name");
      if (!form.businessName.trim())
        nextErrors.businessName = t("package.wizard.errors.businessName");
      if (!form.phone.trim()) nextErrors.phone = t("package.wizard.errors.phone");
      if (!form.email.trim()) nextErrors.email = t("package.wizard.errors.emailRequired");
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        nextErrors.email = t("package.wizard.errors.emailInvalid");
      if (form.websiteStatus === "have" && !form.websiteUrl.trim())
        nextErrors.websiteUrl = t("package.wizard.errors.websiteUrl");
    }

    if (targetStep === 4) {
      if (!form.consent) nextErrors.consent = t("package.wizard.errors.consent");
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const next = () => {
    if (!validateStep(step + 1)) return;
    setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => {
    setSubmitError("");
    setStep((s) => Math.max(s - 1, 1));
  };

  const submit = async () => {
    if (!validateStep(4)) return;
    setSubmitting(true);
    setSubmitError("");

    try {
      if (!isSupabaseConfigured()) {
        throw new Error("Database is not configured");
      }

      const payload: PackageLeadInsert = {
        package: form.package,
        website_status: form.websiteStatus,
        add_ons: form.addOns.map(englishAddOn),
        name: form.name.trim(),
        business_name: form.businessName.trim(),
        website_url: form.websiteUrl.trim() || null,
        phone: form.phone.trim(),
        line_id: form.lineId.trim() || null,
        email: form.email.trim(),
        preferred_contact: form.preferredContact
          ? EN.step2.contactMethods[Number(form.preferredContact)]
          : null,
        message: form.message.trim() || null,
        language: language || "en",
        user_agent: navigator.userAgent,
      };

      const { error } = await supabase.from("package_leads").insert([payload]);
      if (error) throw error;

      setSubmitted(true);
      setStep(4);
    } catch (error) {
      console.error("Failed to save package lead:", error);
      setSubmitError(t("package.wizard.errors.submit"));
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";

  const stepLabels = tList("package.wizard.steps");
  const addOnCategoryCount = EN.addOnCategories.length;
  const contactMethods = tList("package.wizard.step2.contactMethods");
  const emptyValue = t("package.wizard.empty");

  const addOnLabel = (id: string) => {
    const [category, option] = id.split(".");
    return t(`package.wizard.addOnCategories.${category}.options.${option}` as any);
  };

  const selectedPackageLabel = form.package
    ? t(`package.wizard.packages.${form.package}.label` as any)
    : "";
  const selectedStatusLabel = form.websiteStatus
    ? t(`package.wizard.websiteStatuses.${form.websiteStatus}` as any)
    : "";
  const selectedContactLabel = form.preferredContact
    ? contactMethods[Number(form.preferredContact)]
    : "";

  const continueEnabled = useMemo(() => {
    if (step === 1) return canProceedFromStep1;
    if (step === 2) return canProceedFromStep2;
    if (step === 3) return canProceedFromStep3;
    return false;
  }, [step, canProceedFromStep1, canProceedFromStep2, canProceedFromStep3]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {stepIcons.map((Icon, idx) => {
            const id = idx + 1;
            const isActive = step === id;
            const isComplete = step > id || (id === 4 && submitted);
            return (
              <div key={id} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={classNames(
                      "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
                      isActive || isComplete
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground"
                    )}
                  >
                    {isComplete && id !== 4 ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  <span
                    className={classNames(
                      "mt-2 text-xs font-medium",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {stepLabels[idx]}
                  </span>
                </div>
                {idx < stepIcons.length - 1 && (
                  <div
                    className={classNames(
                      "mx-2 h-0.5 w-full max-w-[4rem] sm:max-w-[6rem]",
                      step > id ? "bg-primary" : "bg-border"
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                {t("package.wizard.step1.heading")}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("package.wizard.step1.description")}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("package.wizard.step1.packageLabel")}
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {packageValues.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => update("package", value)}
                    className={classNames(
                      "flex flex-col items-start rounded-lg border p-4 text-left transition-colors",
                      form.package === value
                        ? "border-primary bg-primary/10"
                        : "border-border bg-background hover:border-muted-foreground/30",
                      value === "demo" && "sm:col-span-2"
                    )}
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {t(`package.wizard.packages.${value}.label` as any)}
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      {t(`package.wizard.packages.${value}.price` as any)}
                    </span>
                    {value === "demo" && (
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {t("package.wizard.packages.demo.explanation")}
                      </p>
                    )}
                    {form.package === value && <Check className="mt-2 h-4 w-4 text-primary" />}
                  </button>
                ))}
              </div>
              {errors.package && <p className="mt-2 text-xs text-destructive">{errors.package}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("package.wizard.step1.websiteLabel")}
              </label>
              <div className="flex flex-wrap gap-3">
                {websiteStatusValues.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => update("websiteStatus", value)}
                    className={classNames(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      form.websiteStatus === value
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:border-muted-foreground/30"
                    )}
                  >
                    {t(`package.wizard.websiteStatuses.${value}` as any)}
                  </button>
                ))}
              </div>
              {errors.websiteStatus && (
                <p className="mt-2 text-xs text-destructive">{errors.websiteStatus}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                {t("package.wizard.step1.addOnsLabel")}{" "}
                <span className="text-muted-foreground">{t("package.wizard.optional")}</span>
              </label>
              <p className="mb-4 text-xs text-muted-foreground">
                {t("package.wizard.step1.addOnsHint")}
              </p>
              {Array.from({ length: addOnCategoryCount }).map((_, category) => (
                <div key={category} className="mb-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t(`package.wizard.addOnCategories.${category}.label` as any)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tList(`package.wizard.addOnCategories.${category}.options`).map(
                      (option, index) => {
                        const id = `${category}.${index}`;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => toggleAddOn(id)}
                            className={classNames(
                              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                              form.addOns.includes(id)
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-background text-muted-foreground hover:border-muted-foreground/30"
                            )}
                          >
                            {option}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                {t("package.wizard.step2.heading")}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {selectedPackageLabel
                  ? t("package.wizard.step2.descriptionWithPlan").replace(
                      "{plan}",
                      selectedPackageLabel
                    )
                  : t("package.wizard.step2.description")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  {t("package.wizard.step2.nameLabel")}
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder={t("package.wizard.step2.namePlaceholder")}
                  className={inputClass}
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  {t("package.wizard.step2.businessLabel")}
                </label>
                <input
                  type="text"
                  value={form.businessName}
                  onChange={(e) => update("businessName", e.target.value)}
                  placeholder={t("package.wizard.step2.businessPlaceholder")}
                  className={inputClass}
                />
                {errors.businessName && (
                  <p className="mt-1 text-xs text-destructive">{errors.businessName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                {t("package.wizard.step2.websiteLabel")}{" "}
                <span className="text-muted-foreground">
                  {form.websiteStatus === "have" ? "" : t("package.wizard.optional")}
                </span>
              </label>
              <input
                type="text"
                value={form.websiteUrl}
                onChange={(e) => update("websiteUrl", e.target.value)}
                placeholder={t("package.wizard.step2.websitePlaceholder")}
                className={inputClass}
              />
              {errors.websiteUrl ? (
                <p className="mt-1 text-xs text-destructive">{errors.websiteUrl}</p>
              ) : (
                <p className="mt-1 text-xs text-muted-foreground">
                  {t("package.wizard.step2.websiteHint")}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  {t("package.wizard.step2.phoneLabel")}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder={t("package.wizard.step2.phonePlaceholder")}
                  className={inputClass}
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  {t("package.wizard.step2.lineLabel")}{" "}
                  <span className="text-muted-foreground">{t("package.wizard.optional")}</span>
                </label>
                <input
                  type="text"
                  value={form.lineId}
                  onChange={(e) => update("lineId", e.target.value)}
                  placeholder={t("package.wizard.step2.linePlaceholder")}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                {t("package.wizard.step2.emailLabel")}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder={t("package.wizard.step2.emailPlaceholder")}
                className={inputClass}
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                {t("package.wizard.step2.contactMethodLabel")}{" "}
                <span className="text-muted-foreground">{t("package.wizard.optional")}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {contactMethods.map((method, index) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => update("preferredContact", String(index))}
                    className={classNames(
                      "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                      form.preferredContact === String(index)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background text-muted-foreground hover:border-muted-foreground/30"
                    )}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                {t("package.wizard.step2.messageLabel")}{" "}
                <span className="text-muted-foreground">{t("package.wizard.optional")}</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                rows={4}
                placeholder={t("package.wizard.step2.messagePlaceholder")}
                className={inputClass}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-card-foreground">
                {t("package.wizard.step3.heading")}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("package.wizard.step3.description")}
              </p>
            </div>

            <div className="space-y-4 rounded-xl border border-border bg-background p-4 text-sm">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("package.wizard.step3.planSection")}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.packageLabel")}
                    </span>
                    <p className="font-medium text-foreground">
                      {selectedPackageLabel || emptyValue}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.websiteStatusLabel")}
                    </span>
                    <p className="font-medium text-foreground">
                      {selectedStatusLabel || emptyValue}
                    </p>
                  </div>
                </div>
                {form.addOns.length > 0 && (
                  <div className="mt-2">
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.addOnsLabel")}
                    </span>
                    <p className="font-medium text-foreground">
                      {form.addOns.map(addOnLabel).join(", ")}
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t("package.wizard.step3.contactSection")}
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.nameLabel")}
                    </span>
                    <p className="font-medium text-foreground">{form.name || emptyValue}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.businessLabel")}
                    </span>
                    <p className="font-medium text-foreground">{form.businessName || emptyValue}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.websiteLabel")}
                    </span>
                    <p className="font-medium text-foreground">{form.websiteUrl || emptyValue}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.phoneLabel")}
                    </span>
                    <p className="font-medium text-foreground">{form.phone || emptyValue}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.lineLabel")}
                    </span>
                    <p className="font-medium text-foreground">{form.lineId || emptyValue}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.emailLabel")}
                    </span>
                    <p className="font-medium text-foreground">{form.email || emptyValue}</p>
                  </div>
                </div>
                {form.preferredContact && (
                  <div className="mt-2">
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.preferredLabel")}
                    </span>
                    <p className="font-medium text-foreground">{selectedContactLabel}</p>
                  </div>
                )}
                {form.message && (
                  <div className="mt-2">
                    <span className="text-muted-foreground">
                      {t("package.wizard.step3.notesLabel")}
                    </span>
                    <p className="font-medium text-foreground">{form.message}</p>
                  </div>
                )}
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-border bg-background text-primary focus:ring-ring"
              />
              <span className="text-sm text-muted-foreground">
                {t("package.wizard.step3.consent")}
              </span>
            </label>
            {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}
            {submitError && <p className="text-xs text-destructive">{submitError}</p>}
          </div>
        )}

        {step === 4 && (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Rocket className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">
              {submitted ? t("package.wizard.step4.thankYou") : t("package.wizard.step4.received")}
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              {t("package.wizard.step4.body")}
              {selectedContactLabel
                ? ` ${t("package.wizard.step4.viaContact").replace(
                    "{method}",
                    selectedContactLabel
                  )}`
                : ""}
            </p>
            {submitted && (
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setSubmitted(false);
                  setSubmitError("");
                  setForm({ ...emptyForm });
                }}
                className="btn-secondary mt-6"
              >
                {t("package.wizard.step4.resubmit")}
              </button>
            )}
          </div>
        )}

        {step < 4 && (
          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className={classNames(
                "inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors",
                step === 1
                  ? "cursor-not-allowed text-muted-foreground opacity-50"
                  : "text-foreground hover:bg-muted"
              )}
            >
              <ArrowLeft className="h-4 w-4" />
              {t("package.wizard.nav.back")}
            </button>

            {step < 3 ? (
              <div className="flex flex-col items-end gap-1">
                <button
                  type="button"
                  onClick={next}
                  disabled={!continueEnabled}
                  className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {step === 1 ? t("package.wizard.nav.continue") : t("package.wizard.nav.review")}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {!continueEnabled && (
                  <span className="text-xs text-muted-foreground">
                    {t("package.wizard.step1.continueLocked")}
                  </span>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={submitting || !continueEnabled}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? t("package.wizard.nav.sending") : t("package.wizard.nav.send")}
                <Send className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
