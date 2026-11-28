// "How we work": the four steps from first message to proposal, shown with a sample logistics client.
// The client is fictional and unnamed; the figures are modelled on a typical Thai 6-wheel fleet.
// Inputs (checked Nov 2026): diesel ฿41.44/L (PTT, 24 Sep 2026); fuel commonly 40–50% of Thai trucking
// operating cost (industry estimates, 2026); empty running ~29% of distance on average (World Bank review).
// Model: 32 trucks × ~170 km/day × 26 days, 5 km/L. Empty running 33% → 24% cuts total km ~12%
// (≈ 40,000 L/yr ≈ ฿1.66M). Failed first attempts 6.8% → 3% on ~112,800 drops/yr at ฿190 each ≈ ฿0.81M.
// Loading wait 47 → 20 min, half of it paid overtime ≈ ฿0.34M. Invoice 16 → 6 days on ฿4.1M/month ≈ ฿1.37M once.
// English is the source; other languages fall back to English until translated.

import { thJourney } from "./locales/th";
import { zhHansJourney } from "./locales/zh-hans";
import { zhHantJourney } from "./locales/zh-hant";
import { msJourney } from "./locales/ms";
import { viJourney } from "./locales/vi";

export type JourneyText = {
  eyebrow: string; title: string; lead: string; label: string;
  artifacts: string[]; // what the client receives at each step
  book: {
    request: string; company: string; industry: string; industryV: string; area: string; areaV: string;
    reply: string; replyIn: string; replyText: string; invite: string; when: string; where: string; accepted: string;
  };
  call: { title: string; owner: string; ops: string; share: string; nodes: string[]; flags: string[]; notesTitle: string; notes: string[] };
  report: {
    title: string; clientSuffix: string; meta: string; rows: string; sources: string; open: string; close: string; confidential: string;
    processedIn: string; stages: string[];
    summaryTitle: string; summary: string;
    kpis: { label: string; note: string }[];
    pipeTitle: string; pipeLead: string; pipe: { t: string; b: string }[]; env: string[];
    logTitle: string;
    dataTitle: string; dataHead: [string, string, string]; data: { name: string; format: string; detail: string }[]; quality: string;
    otdTitle: string; target: string; weeks: string;
    causesTitle: string; causes: string[];
    delayTitle: string; delayNote: string;
    heatTitle: string; days: string[]; heatNote: string;
    trucksTitle: string; trucksNote: string;
    scatterTitle: string; scatterX: string; scatterY: string; scatterNote: string;
    costTitle: string; costs: string[];
    monthTitle: string; months: string[]; monthNote: string;
    findingsTitle: string; findings: { t: string; b: string }[];
    improveTitle: string; improveHead: [string, string, string, string];
    improve: { area: string; today: string; target: string; value: string }[];
    total: string; totalV: string; cash: string;
    method: string;
  };
  proposal: {
    title: string; scope: string; phasesTitle: string; phases: string[];
    inputs: string; inputItems: string[]; outputs: string; outputItems: string[];
    pricingTitle: string;
    freeTitle: string; freeNote: string; free: string;
    buildTitle: string; buildNote: string;
    careTitle: string; careNote: string; perMonth: string;
    deposit: string; golive: string; goliveV: string;
  };
};

/** The local analysis tool named in the sample report. */
export const TOOL = "Guidance Nexus";

/** Shared numbers (language-neutral). */
export const jData = {
  kpis: [
    { value: 86.4, decimals: 1, unit: "%" },
    { value: 33, decimals: 0, unit: "%" },
    { value: 43, decimals: 0, unit: "%" },
    { value: 47, decimals: 0, unit: " min" },
    { value: 6.8, decimals: 1, unit: "%" },
    { value: 16, decimals: 0, unit: " d" },
  ],
  rows: 3_026_204,
  sources: 5,
  data: ["3,512", "2,991,204", "2,618", "26,930", "1,940"],
  otd: [84.1, 85.9, 87.2, 86.0, 83.8, 85.5, 88.1, 87.4, 86.9, 85.2, 87.8, 88.6, 86.7],
  causes: [31, 28, 17, 14, 10],
  // departures by minutes late against plan (2,496 departures)
  delay: { labels: ["0–10", "10–20", "20–30", "30–40", "40–50", "50–60", "60–75", "75–90", "90+"], counts: [212, 298, 351, 402, 388, 301, 262, 158, 124] },
  // late drops by hour (07:00–18:00) and weekday (Mon–Sat): relative intensity
  heatHours: [4, 9, 14, 12, 8, 6, 5, 6, 8, 11, 9, 4],
  heatDays: [1.15, 1, 0.95, 1, 1.1, 0.8],
  trucks: [27, 22, 41, 27, 35, 46, 28, 24, 38, 44, 29, 21, 33, 48, 26, 31, 26, 39, 43, 28, 23, 36, 45, 30, 20, 34, 42, 25, 37, 29, 47, 32],
  // fuel cost per delivered drop (฿) for each truck, same order as trucks
  perDrop: [121, 110, 131, 124, 125, 144, 115, 121, 135, 134, 126, 114, 120, 140, 123, 118, 121, 129, 141, 117, 119, 132, 136, 124, 109, 130, 138, 114, 127, 122, 146, 121],
  costs: [43, 27, 11, 6, 13],
  months: [281, 289, 297], // total operating cost per drop (฿), Jul–Sep
};

const en: JourneyText = {
  eyebrow: "From first message to proposal",
  title: "Four simple steps.",
  lead: "Here is what working with us looks like before you commit to anything, shown with a sample logistics company. Scroll, or pick a step.",
  label: "Sample client · name withheld · figures modelled on a typical Thai fleet",
  artifacts: ["A confirmed time, within one business day", "A map of how your operation runs today", "A free first-impression report on your own data", "A fixed scope, a timeline and clear pricing"],
  book: {
    request: "New consultation request",
    company: "Company", industry: "Industry", industryV: "Logistics",
    area: "Area to improve", areaV: "Late deliveries and rising fuel cost",
    reply: "Reply sent", replyIn: "1 h 28 min after the request",
    replyText: "Thanks for reaching out. Would Tuesday at 10:00 work for a 45-minute video call?",
    invite: "AI Opportunity Session", when: "Tuesday · 10:00–10:45", where: "Video call · 45 min · free", accepted: "Accepted",
  },
  call: {
    title: "AI Opportunity Session", owner: "Owner", ops: "Operations manager",
    share: "Shared screen · how an order moves today",
    nodes: ["Order in LINE", "Dispatch in Excel", "Loading bay", "On the road", "Proof of delivery", "Invoice"],
    flags: ["Typed again", "Waiting", "Photos in chats", "16 days"],
    notesTitle: "Live notes",
    notes: ["Routes planned each evening in Excel", "Trucks wait at the loading bay before leaving", "Delivery photos sit in LINE groups", "Invoices go out two weeks after delivery"],
  },
  report: {
    title: "First-impression report", clientSuffix: "Logistics Co., Ltd.",
    meta: "32 trucks · Bangkok and Eastern Seaboard · Jul–Sep 2026",
    rows: "records analysed", sources: "data sources",
    open: "Open the full report", close: "Close", confidential: "Confidential · sample report",
    processedIn: "Processed locally in",
    stages: ["Ingest", "Clean and match", "Analyse", "Report"],
    summaryTitle: "Summary",
    summary: "Over 13 weeks, 13.6% of drops arrived late and trucks ran empty for a third of their kilometres. Most of the delay starts at the loading bay, not on the road. Four changes could save in the region of ฿2.8 million a year, depending on how much of the plan you adopt.",
    kpis: [
      { label: "On-time delivery", note: "Target 95%" },
      { label: "Empty running", note: "Share of truck-km" },
      { label: "Fuel", note: "Share of operating cost" },
      { label: "Loading-bay wait", note: "Average, per departure" },
      { label: "Failed first attempts", note: "Drops delivered twice" },
      { label: "Delivery to invoice", note: "Average days" },
    ],
    pipeTitle: "How we processed your data",
    pipeLead: "Everything ran on an encrypted workstation in our office. Your files were not uploaded to any cloud service, and nothing was used to train an AI model.",
    pipe: [
      { t: "Ingest", b: "Encrypted transfer into an isolated project folder. Parsers for Excel, CSV, GPS exports and LINE chat exports; fuel-card PDFs read with OCR. Names and phone numbers masked on arrival." },
      { t: "Clean", b: "Duplicates removed, times normalised to Asia/Bangkok, addresses geocoded, truck plates and customer codes standardised across sources." },
      { t: "Match", b: "GPS points map-matched to stops with a 150 m geofence. Trips joined to fuel fill-ups, delivery photos and invoices on plate and date." },
      { t: "Analyse", b: "Stop-level dwell and delay, empty-leg detection from GPS speed and load status, fuel per drop, and delay causes classified from chat messages by an open-source language model running on the machine." },
      { t: "Report", b: "KPIs, charts and findings generated, then reviewed line by line by an engineer before it reaches you." },
    ],
    env: ["Runs locally on Apple silicon", "Disk encryption on", "Offline during analysis", "On-device language model", "Personal data masked", "Files deleted after the project"],
    logTitle: "Run log",
    dataTitle: "What you shared",
    dataHead: ["Source", "Format", "Records"],
    data: [
      { name: "Dispatch sheets", format: "Excel (.xlsx)", detail: "route sheets" },
      { name: "GPS export", format: "CSV · 30 s interval", detail: "location points" },
      { name: "Fuel card statements", format: "PDF → OCR", detail: "fill-ups" },
      { name: "LINE delivery groups", format: "Chat export + photos", detail: "messages" },
      { name: "Invoices", format: "CSV from accounting", detail: "invoices" },
    ],
    quality: "Data quality: 8.1% of drops had no arrival time in the sheets and were recovered from GPS. 2.4% of GPS points were dropped as signal noise.",
    otdTitle: "On-time delivery by week", target: "Target", weeks: "Weeks 1–13",
    causesTitle: "Why drops were late",
    causes: ["Late loading at the warehouse", "Customer time windows and traffic", "Wrong address or contact", "Route order", "Vehicle issues"],
    delayTitle: "Departure delay against plan", delayNote: "Minutes late, 2,496 departures. Median 40 minutes.",
    heatTitle: "When late drops happen", days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], heatNote: "Late drops peak 09:00–11:00, right after late departures, and again 16:00–17:00 in traffic.",
    trucksTitle: "Empty running by truck", trucksNote: "8 trucks on eastern routes account for 34% of all empty kilometres. Dashed line: 24% target.",
    scatterTitle: "Empty running vs fuel cost per drop", scatterX: "Empty running", scatterY: "Fuel ฿ per drop", scatterNote: "Each dot is one truck. More empty kilometres, more fuel paid for every delivery.",
    costTitle: "Where operating cost goes",
    costs: ["Fuel", "Drivers and helpers", "Maintenance and tyres", "Tolls", "Insurance and other"],
    monthTitle: "Operating cost per drop", months: ["Jul", "Aug", "Sep"], monthNote: "Up 6% in the quarter as diesel rose to ฿41.44 per litre.",
    findingsTitle: "What we found",
    findings: [
      { t: "Delays start at the loading bay", b: "Trucks leave 47 minutes after plan on average. A late first drop makes the whole route late." },
      { t: "Routes are planned from memory", b: "The same customers are visited in a different order each day, adding distance and late drops." },
      { t: "Trucks come back empty", b: "A third of all kilometres carry no load. Return trips from the east are rarely matched with pickups." },
      { t: "Proof of delivery waits in chats", b: "Photos are found by hand in LINE groups before billing, so invoices go out 16 days after delivery." },
    ],
    improveTitle: "Where to improve",
    improveHead: ["Change", "Today", "Target", "Potential value"],
    improve: [
      { area: "Route and backhaul planning", today: "33% empty km", target: "24%", value: "Up to ฿1.66M a year in fuel" },
      { area: "Address check when the order comes in", today: "6.8% failed", target: "3%", value: "Up to ฿0.81M a year" },
      { area: "Loading-bay schedule and dispatch board", today: "47 min wait", target: "20 min", value: "Up to ฿0.34M a year in overtime" },
      { area: "Proof of delivery linked to invoicing", today: "16 days", target: "6 days", value: "฿1.37M cash in sooner, once" },
    ],
    total: "Potential, from your data", totalV: "≈ ฿2.8M a year", cash: "Estimates, not a guarantee. Results depend on the data and on what is adopted.",
    method: "Method: 13 weeks of the client's own data. Diesel at ฿41.44 per litre (PTT, Sep 2026) and 5 km per litre for 6-wheel trucks.",
  },
  proposal: {
    title: "Proposal", scope: "Fixed scope · 6 weeks",
    phasesTitle: "Timeline",
    phases: ["Discovery on site", "Connect GPS, fuel, dispatch, LINE", "Dispatch board and loading schedule", "Route and backhaul planner", "Address check and proof-to-invoice", "Training, go-live, 07:00 brief"],
    inputs: "Data in", inputItems: ["GPS", "Fuel cards", "Dispatch Excel", "LINE groups", "Accounting"],
    outputs: "Modules out", outputItems: ["Dispatch board", "Route planner", "Address check", "Proof-to-invoice", "07:00 LINE brief"],
    pricingTitle: "Pricing",
    freeTitle: "Data analysis and report", freeNote: "Step 03, already delivered", free: "Free",
    buildTitle: "Development and integration", buildNote: "One-time · fixed price for the scope above",
    careTitle: "Guardian Care", careNote: "Monitoring, support and improvements", perMonth: "/ month",
    deposit: "50% deposit upfront", golive: "Go-live", goliveV: "Week 6",
  },
};

const dict: Partial<Record<string, JourneyText>> = { en, th: thJourney, "zh-Hans": zhHansJourney, "zh-Hant": zhHantJourney, ms: msJourney, vi: viJourney };

export const journeyContent = (lang: string): JourneyText => dict[lang] ?? en;

/** Phase bars on the proposal timeline: [start week, end week] (1–6). */
export const phaseWeeks: [number, number][] = [[1, 1], [2, 3], [3, 4], [4, 5], [5, 6], [6, 6]];
