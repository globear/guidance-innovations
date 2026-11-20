// Consultation requests are sent with Netlify Forms (the site is hosted on Netlify).
// Netlify finds the "consultation" form in index.html at deploy time; submissions appear in
// Netlify → Forms and can be emailed to info@guidanceinnovations.tech (see docs/DEPLOY.md).
export const FORM_NAME = "consultation";

export type Booking = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  industry: string;
  problem: string;
  lang: string;
};

/** Plain-text summary used for the email fallback. */
export function summary(b: Booking) {
  const lines = ["Consultation request (FDE site)", `Interest: ${b.interest}`, `Industry: ${b.industry}`];
  if (b.phone) lines.push(`Phone / LINE: ${b.phone}`);
  lines.push(`Site language: ${b.lang}`, "", "First problem to solve:", b.problem);
  return lines.join("\n");
}

/** Sends the request. Throws if it was not accepted, so the page can offer email / WhatsApp instead. */
export async function sendBooking(b: Booking, honeypot = "") {
  const body = new URLSearchParams({ "form-name": FORM_NAME, "bot-field": honeypot, ...b });
  const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
  if (!res.ok) throw new Error(`Form not accepted (${res.status})`);
}
