// Case studies, one per industry. These are example engagements: composites built from how we work,
// with the client name withheld and figures labelled illustrative on the page. Replace with real,
// client-approved facts as they become available.
// English is the source; other languages fall back to English until they are translated.

import { thCases } from "./locales/th";
import { zhHansCases } from "./locales/zh-hans";
import { zhHantCases } from "./locales/zh-hant";
import { msCases } from "./locales/ms";
import { viCases } from "./locales/vi";

export type CaseStudy = {
  slug: string; // matches an industry slug
  client: string; // anonymised description, shown instead of a name
  title: string;
  intro: string;
  stats: { value: number; decimals?: number; suffix: string; label: string }[];
  before: { body: string; sources: string[]; pains: string[] };
  steps: { when: string; name: string; did: string; artifact: string }[];
  model: string[]; // entities in the shared model
  outputs: string[]; // what the owner gets
  dash: {
    title: string;
    kpis: { label: string; value: number; decimals?: number; unit: string; note: string; live?: boolean }[];
    barsTitle: string;
    bars: { name: string; pct: number }[];
    barsAreShares?: boolean; // shares of a whole, not performance: never shown as "low"
    trendTitle: string;
    trend: { today: number[]; week: number[] };
    alerts: { time: string; text: string; warn?: boolean }[];
  };
  brief: string[];
  after: { before: string; after: string }[];
};

export type CaseUi = {
  eyebrow: string; label: string; impact: string; beforeTitle: string; pains: string; how: string;
  built: string; live: string; today: string; week: string; alerts: string; brief: string; briefFrom: string;
  after: string; beforeCol: string; afterCol: string; indexEyebrow: string; indexTitle: string; indexLead: string;
  read: string; all: string; next: string; oneModel: string; guard: string;
};

const ui: CaseUi = {
  eyebrow: "Case study",
  label: "Example engagement · client name withheld · figures are illustrative",
  impact: "Impact",
  beforeTitle: "Where the data lived",
  pains: "What it cost",
  how: "How we deployed",
  built: "What we built",
  live: "Live view · sample data",
  today: "Today",
  week: "7 days",
  alerts: "Alerts",
  brief: "The 07:00 brief",
  briefFrom: "Guidance AI",
  after: "Before and after",
  beforeCol: "Before",
  afterCol: "After",
  indexEyebrow: "Case studies",
  indexTitle: "How a deployment actually runs.",
  indexLead: "One example per industry, from the first day on site to the owner's daily brief. Client names are withheld.",
  read: "Read the case",
  all: "All case studies",
  next: "Next case",
  oneModel: "ONE MODEL",
  guard: "GUARDIAN CARE",
};

const factories: CaseStudy = {
  slug: "factories",
  client: "A 120-person packaging manufacturer, Eastern Thailand",
  title: "From end-of-shift spreadsheets to a live view of every line.",
  intro:
    "Three production lines, two shifts, and output tracked on paper and in Excel. The owner learned about downtime the next morning. In six weeks, one engineer on site connected what the plant already used and gave the owner a live view and a 07:00 brief in LINE.",
  stats: [
    { value: 6, suffix: " weeks", label: "from first visit to a live system" },
    { value: 31, suffix: "%", label: "less unplanned downtime after three months" },
    { value: 2, suffix: " hrs", label: "of daily retyping removed for supervisors" },
    { value: 15, suffix: " min", label: "to know a line has stopped, down from next morning" },
  ],
  before: {
    body: "Supervisors wrote output on paper. A clerk typed it into Excel after each shift, orders sat in the accounting system, and machine stops were reported in a LINE group, if at all.",
    sources: ["Paper shift sheets", "Excel output log", "Accounting & orders", "LINE supervisor group", "Stock counts", "Machine counters"],
    pains: ["Downtime discovered the next morning", "Two hours a day spent retyping numbers", "Stock-outs found when a line stopped"],
  },
  steps: [
    { when: "Week 1", name: "Discover", did: "Our engineer worked both shifts on the floor, shadowed supervisors and the clerk, and traced where every number came from.", artifact: "Process and data map" },
    { when: "Weeks 2–3", name: "Connect", did: "Connected the Excel log, the accounting system and a simple counter on each line. Supervisors moved from paper to a three-tap LINE form.", artifact: "6 sources connected, nothing replaced" },
    { when: "Weeks 3–4", name: "Model", did: "Built one model of the plant: lines, shifts, orders, materials and stops, so every number means the same thing on every screen.", artifact: "One shared model of the plant" },
    { when: "Weeks 4–6", name: "Decide", did: "Launched the live command view, downtime alerts in LINE, and the owner's 07:00 output brief.", artifact: "Command view, alerts, daily brief" },
    { when: "Ongoing", name: "Guard", did: "Monthly Guardian Care: alert thresholds tuned with supervisors, and a material-forecast view added in month two.", artifact: "Monitored and improved monthly" },
  ],
  model: ["Lines", "Shifts", "Orders", "Materials", "Stops"],
  outputs: ["Command view", "LINE alerts", "07:00 brief"],
  dash: {
    title: "Plant command view",
    kpis: [
      { label: "Output today", value: 18420, unit: " pcs", note: "+6% vs plan", live: true },
      { label: "Downtime", value: 42, unit: " min", note: "−18 min vs average" },
      { label: "Yield", value: 97.4, decimals: 1, unit: "%", note: "+0.8 pt this week" },
      { label: "Film stock", value: 4, unit: " days", note: "Reorder by Thursday" },
    ],
    barsTitle: "Output vs plan by line",
    bars: [{ name: "Line 1", pct: 96 }, { name: "Line 2", pct: 84 }, { name: "Line 3", pct: 67 }],
    trendTitle: "Output per hour",
    trend: { today: [1280, 1420, 1510, 1490, 1560, 1380, 900, 1450, 1530, 1600, 1580, 1620], week: [33800, 35200, 34100, 36900, 35800, 37400, 36200] },
    alerts: [
      { time: "09:42", text: "Line 3 stopped · film jam · 12 min", warn: true },
      { time: "11:05", text: "Line 2 running 8% below plan", warn: false },
      { time: "14:20", text: "Film stock: 4 days left at current rate", warn: true },
    ],
  },
  brief: [
    "Good morning. Yesterday: 36,900 pcs, 103% of plan.",
    "Line 3 lost 48 min to film jams, the third day this week. Maintenance is booked for 13:00 today.",
    "Order PK-2214 is on track to ship Thursday.",
    "Film stock covers 4 days. I've drafted the purchase order for your approval.",
  ],
  after: [
    { before: "Downtime found the next morning", after: "An alert in LINE within 15 minutes" },
    { before: "Two hours a day retyping shift sheets", after: "Supervisors tap in output; numbers flow on their own" },
    { before: "Stock-outs stop the line", after: "Four days' warning and a draft purchase order" },
  ],
};

const logistics: CaseStudy = {
  slug: "logistics",
  client: "A regional delivery company with about 40 trucks, Central Thailand",
  title: "Every truck and trip visible, before the customer calls.",
  intro:
    "Forty trucks, two depots, and dispatch run from LINE groups and a whiteboard. Late deliveries surfaced when customers phoned, and nobody could say what a trip really cost. In five weeks we connected GPS, dispatch sheets and fuel cards into one live view, with at-risk alerts sent to the right dispatcher.",
  stats: [
    { value: 5, suffix: " weeks", label: "from first visit to a live system" },
    { value: 38, suffix: "%", label: "fewer late deliveries after three months" },
    { value: 9, suffix: "%", label: "lower cost per trip" },
    { value: 45, suffix: " min", label: "average warning before a delivery runs late" },
  ],
  before: {
    body: "Dispatchers assigned trips on a whiteboard and in LINE groups. GPS lived in the tracker vendor's portal, fuel on card statements, and proof of delivery as photos on drivers' phones.",
    sources: ["Dispatch whiteboard", "Driver LINE groups", "GPS tracker portal", "Fuel card statements", "Delivery photos", "Customer orders (Excel)"],
    pains: ["Late deliveries found when customers called", "No real cost per trip or per customer", "Dispatchers' mornings spent on phone calls"],
  },
  steps: [
    { when: "Week 1", name: "Discover", did: "Rode along on morning runs, sat with dispatch from 5 a.m., and mapped how a trip is planned, tracked and billed.", artifact: "Trip lifecycle map" },
    { when: "Weeks 2–3", name: "Connect", did: "Pulled GPS from the tracker's API, imported fuel-card statements and order sheets, and gave drivers a LINE check-in for pickups and drops.", artifact: "6 sources connected, same trackers kept" },
    { when: "Week 3", name: "Model", did: "One model of trucks, drivers, trips, stops and customers, with planned versus actual time for every stop.", artifact: "One model of every trip" },
    { when: "Weeks 4–5", name: "Decide", did: "Launched the fleet view, at-risk alerts to the dispatcher responsible, and cost per trip, customer and route.", artifact: "Fleet view, alerts, cost per trip" },
    { when: "Ongoing", name: "Guard", did: "Monthly tuning of arrival estimates with dispatch, and a weekly on-time report for key customers added in month two.", artifact: "Monitored and improved monthly" },
  ],
  model: ["Trucks", "Drivers", "Trips", "Stops", "Customers"],
  outputs: ["Fleet view", "At-risk alerts", "Cost per trip"],
  dash: {
    title: "Fleet command view",
    kpis: [
      { label: "On time today", value: 94.2, decimals: 1, unit: "%", note: "+5.1 pt vs last month" },
      { label: "Deliveries done", value: 128, unit: "", note: "of 151 planned", live: true },
      { label: "Cost per trip", value: 1840, unit: " THB", note: "−9% since launch" },
      { label: "At risk now", value: 3, unit: "", note: "Rayong route after 15:00" },
    ],
    barsTitle: "On-time rate by route",
    bars: [{ name: "Bangkok E", pct: 97 }, { name: "Chonburi", pct: 93 }, { name: "Rayong", pct: 71 }],
    trendTitle: "Deliveries completed",
    trend: { today: [4, 9, 14, 17, 15, 12, 10, 13, 16, 11, 6, 2], week: [612, 640, 598, 655, 671, 702, 688] },
    alerts: [
      { time: "13:40", text: "Truck 27 · 35 min behind on the Rayong route", warn: true },
      { time: "14:05", text: "Customer B-114: 2 drops due before 16:00", warn: false },
      { time: "15:10", text: "Truck 12 idling 25 min at the depot", warn: true },
    ],
  },
  brief: [
    "Good morning. Yesterday: 142 deliveries, 95% on time.",
    "7 were late, 5 of them on the Rayong route after 15:00. Moving two afternoon drops to the morning run would fix most of them.",
    "Cost per trip is ฿1,840, down 9% since launch.",
    "Truck 12 is due for service on Friday. I've let the depot know.",
  ],
  after: [
    { before: "Late deliveries found when customers call", after: "The dispatcher is alerted 45 minutes ahead" },
    { before: "Cost per trip unknown", after: "Cost per trip, customer and route every morning" },
    { before: "Mornings spent chasing drivers by phone", after: "Drivers check in from LINE; status updates itself" },
  ],
};

const hotels: CaseStudy = {
  slug: "hotels",
  client: "A boutique hotel group with three properties, Southern Thailand",
  title: "Every guest answered in their language, and the GM briefed by 07:00.",
  intro:
    "Three properties, about 120 rooms, and guest messages arriving on LINE, WeChat, WhatsApp and email in Thai, English and Chinese. Front-desk staff spent hours on the same questions, and revenue sat in three booking channels. In six weeks we built a guest AI desk on the group's own policies and one revenue view for the owner.",
  stats: [
    { value: 6, suffix: " weeks", label: "from first visit to a live system" },
    { value: 72, suffix: "%", label: "of guest questions answered by the AI desk" },
    { value: 1, suffix: " min", label: "typical reply time to guests, at any hour" },
    { value: 3, suffix: " hrs", label: "of front-desk time freed per property, per day" },
  ],
  before: {
    body: "Guest questions came in on four channels and in three languages. Rates and availability sat in the booking engine and two online travel agents, and the owner saw occupancy once a week in a spreadsheet.",
    sources: ["LINE OA", "WeChat", "WhatsApp & email", "Booking engine", "Online travel agents", "House rules & FAQs"],
    pains: ["The same 20 questions answered all day", "Night-time messages waiting until morning", "Revenue split across channels, seen weekly"],
  },
  steps: [
    { when: "Week 1", name: "Discover", did: "Worked front-desk shifts at two properties, read three months of guest messages, and listed the questions that took the most time.", artifact: "Top 40 guest questions, by channel" },
    { when: "Weeks 2–3", name: "Connect", did: "Connected LINE OA, WeChat and WhatsApp to one inbox, and pulled reservations from the booking engine and travel-agent reports.", artifact: "4 channels, 3 booking sources" },
    { when: "Weeks 3–4", name: "Model", did: "One model of properties, rooms, bookings, guests and policies, with the hotel's own answers written in Thai, English and Chinese.", artifact: "One source of truth for guests and rooms" },
    { when: "Weeks 4–6", name: "Decide", did: "Launched the AI guest desk with hand-off to staff, the group revenue view, and the GM's 07:00 brief.", artifact: "Guest AI desk, revenue view, GM brief" },
    { when: "Ongoing", name: "Guard", did: "Monthly review of the questions the AI passed to staff, with new answers added ahead of high season.", artifact: "Monitored and improved monthly" },
  ],
  model: ["Properties", "Rooms", "Bookings", "Guests", "Policies"],
  outputs: ["Guest AI desk", "Revenue view", "GM brief"],
  dash: {
    title: "Group revenue & guest view",
    kpis: [
      { label: "Occupancy", value: 84.6, decimals: 1, unit: "%", note: "+4.2 pt vs last year" },
      { label: "Average rate", value: 3950, unit: " THB", note: "+6% vs last month" },
      { label: "Guest messages", value: 214, unit: "", note: "72% answered by AI", live: true },
      { label: "Arrivals today", value: 38, unit: "", note: "6 returning guests" },
    ],
    barsTitle: "Occupancy by property",
    bars: [{ name: "Beach", pct: 91 }, { name: "Old Town", pct: 86 }, { name: "Hillside", pct: 69 }],
    trendTitle: "Guest messages",
    trend: { today: [4, 2, 1, 3, 9, 18, 26, 22, 19, 24, 21, 15], week: [1310, 1420, 1380, 1490, 1560, 1720, 1650] },
    alerts: [
      { time: "07:15", text: "Hillside: 6 rooms unsold for Saturday", warn: true },
      { time: "10:40", text: "Airport transfer request in Chinese · passed to staff", warn: false },
      { time: "16:05", text: "Beach: 2 late check-ins after 23:00", warn: true },
    ],
  },
  brief: [
    "Good morning. Group occupancy last night: 85%, average rate ฿3,950.",
    "The AI desk answered 168 of 231 guest messages. 4 were complaints, now with the duty managers.",
    "Hillside is 69% full for Saturday. A weekend offer on LINE OA usually lifts that by about 10 points.",
    "38 arrivals today, including 6 returning guests.",
  ],
  after: [
    { before: "Staff answering the same questions all day", after: "72% answered by the AI desk, in the guest's language" },
    { before: "Night messages wait until morning", after: "A reply in about a minute, at any hour" },
    { before: "Revenue seen once a week", after: "Occupancy and rate per property every morning" },
  ],
};

const travel: CaseStudy = {
  slug: "travel",
  client: "An inbound tour agency with 18 staff, Bangkok",
  title: "From hours per quote to a first draft in minutes.",
  intro:
    "Inquiries from Chinese and English-speaking travellers arrived on WeChat, LINE and email. Building a quote meant checking hotel, transport and guide rates in five spreadsheets, and leads went cold between chats. In five weeks we built an inquiry AI and a quote assistant on the agency's own price lists.",
  stats: [
    { value: 5, suffix: " weeks", label: "from first visit to a live system" },
    { value: 80, suffix: "%", label: "less time to send a first quote" },
    { value: 35, suffix: "%", label: "more inquiries turned into bookings" },
    { value: 100, suffix: "%", label: "of leads tracked from first message to payment" },
  ],
  before: {
    body: "Sales staff answered the same package questions all day, then built each quote by hand from hotel, transport and guide sheets. Leads lived in personal chat histories.",
    sources: ["WeChat", "LINE", "Email inquiries", "Hotel rate sheets", "Transport & guide sheets", "Package PDFs"],
    pains: ["Quotes took two to four hours", "Leads lost between staff chats", "Pricing mistakes on peak dates"],
  },
  steps: [
    { when: "Week 1", name: "Discover", did: "Sat with the sales team for a week, timed how each quote was built, and collected every price list and package PDF.", artifact: "Quote process, step by step" },
    { when: "Week 2", name: "Connect", did: "Brought WeChat, LINE and email into one inbox, and turned the rate sheets into one maintained price list.", artifact: "3 channels, 1 price list" },
    { when: "Week 3", name: "Model", did: "Modelled packages, hotels, seasons, transport and leads, so every quote follows the same rules and dates.", artifact: "One model of packages and prices" },
    { when: "Weeks 4–5", name: "Decide", did: "Launched the inquiry AI, a quote assistant that drafts for staff to approve, and the booking pipeline.", artifact: "Inquiry AI, quote assistant, pipeline" },
    { when: "Ongoing", name: "Guard", did: "Monthly price-list updates, and a review of the quotes staff edited to keep improving the drafts.", artifact: "Monitored and improved monthly" },
  ],
  model: ["Packages", "Hotels", "Seasons", "Transport", "Leads"],
  outputs: ["Inquiry AI", "Quote drafts", "Booking pipeline"],
  dash: {
    title: "Sales pipeline",
    kpis: [
      { label: "Inquiries today", value: 63, unit: "", note: "41 answered by AI", live: true },
      { label: "First reply", value: 4, unit: " min", note: "was about 3 hours" },
      { label: "Quotes sent", value: 22, unit: "", note: "18 drafted by AI" },
      { label: "Pipeline, 60 days", value: 1.8, decimals: 1, unit: "M THB", note: "47 open leads" },
    ],
    barsTitle: "Inquiries by channel",
    barsAreShares: true,
    bars: [{ name: "WeChat", pct: 58 }, { name: "LINE", pct: 27 }, { name: "Email", pct: 15 }],
    trendTitle: "Inquiries",
    trend: { today: [2, 1, 3, 6, 9, 8, 7, 5, 6, 8, 5, 3], week: [48, 52, 61, 57, 66, 71, 63] },
    alerts: [
      { time: "10:20", text: "Group of 12 asking about Chiang Mai in March · quote drafted", warn: false },
      { time: "13:45", text: "Lead W-208 quiet for 3 days · follow-up suggested", warn: true },
      { time: "16:30", text: "Peak-season Phuket hotel rates updated", warn: false },
    ],
  },
  brief: [
    "Good morning. 58 inquiries yesterday, 41 answered by the AI desk.",
    "22 quotes went out. Staff changed 4 of the drafts.",
    "3 leads worth ฿420,000 have gone quiet. I've drafted follow-ups for your team.",
    "March is filling fast: Chiang Mai hotel rates rise next week.",
  ],
  after: [
    { before: "Two to four hours per quote", after: "A draft in minutes, approved by staff" },
    { before: "Leads lost in personal chats", after: "Every lead tracked from first message to payment" },
    { before: "Price mistakes on peak dates", after: "One price list with seasons built in" },
  ],
};

const restaurants: CaseStudy = {
  slug: "restaurants",
  client: "A casual-dining franchise with 12 branches, Bangkok and Chiang Mai",
  title: "Every branch compared and explained, before the morning meeting.",
  intro:
    "Twelve branches, two POS systems, and branch reports sent each night by LINE in different formats. Food cost crept up for weeks before anyone noticed. In six weeks we connected POS, purchasing and waste logs into one branch view and a short owner brief every morning.",
  stats: [
    { value: 6, suffix: " weeks", label: "from first visit to a live system" },
    { value: 2.4, decimals: 1, suffix: " pt", label: "lower food cost across branches after four months" },
    { value: 1, suffix: " day", label: "to spot a cost problem, down from about a month" },
    { value: 3, suffix: " hrs", label: "of area-manager reporting removed each day" },
  ],
  before: {
    body: "Each branch manager sent sales and stock figures in their own format on LINE. Purchasing lived in the central kitchen's spreadsheet, waste on paper, and the owner compared branches in a weekly Excel file.",
    sources: ["POS (two systems)", "Branch LINE reports", "Central kitchen orders", "Supplier invoices", "Waste logs", "Staff rosters"],
    pains: ["Food-cost problems found a month late", "No fair way to compare branches", "Area managers' evenings spent on reports"],
  },
  steps: [
    { when: "Week 1", name: "Discover", did: "Worked service shifts in four branches and the central kitchen, and mapped how sales, orders and waste were recorded.", artifact: "Branch data map" },
    { when: "Weeks 2–3", name: "Connect", did: "Connected both POS systems and the kitchen order sheet, and replaced paper waste logs with a quick LINE form.", artifact: "6 sources, both POS systems kept" },
    { when: "Weeks 3–4", name: "Model", did: "One model of branches, menu items, recipes, ingredients and suppliers, so food cost is calculated the same way everywhere.", artifact: "One recipe-level cost model" },
    { when: "Weeks 4–6", name: "Decide", did: "Launched the branch comparison view, cost and waste alerts per branch, and the owner's morning brief.", artifact: "Branch view, cost alerts, owner brief" },
    { when: "Ongoing", name: "Guard", did: "Monthly review with area managers, with recipe costs updated whenever supplier prices change.", artifact: "Monitored and improved monthly" },
  ],
  model: ["Branches", "Menu items", "Recipes", "Ingredients", "Suppliers"],
  outputs: ["Branch view", "Cost alerts", "Owner brief"],
  dash: {
    title: "Branch command view",
    kpis: [
      { label: "Sales today", value: 486200, unit: " THB", note: "+4% vs last Tuesday", live: true },
      { label: "Food cost", value: 31.8, decimals: 1, unit: "%", note: "−2.4 pt since launch" },
      { label: "Tickets", value: 1742, unit: "", note: "across 12 branches" },
      { label: "Average bill", value: 279, unit: " THB", note: "+฿12 vs last month" },
    ],
    barsTitle: "Sales vs target by branch",
    bars: [{ name: "Siam", pct: 97 }, { name: "Thonglor", pct: 92 }, { name: "Nimman", pct: 73 }],
    trendTitle: "Sales (thousand THB)",
    trend: { today: [8, 22, 61, 74, 38, 20, 18, 35, 68, 82, 57, 24], week: [3210, 3380, 3150, 3420, 3890, 4510, 4260] },
    alerts: [
      { time: "11:30", text: "Nimman: chicken cost 9% above recipe · check portions", warn: true },
      { time: "14:00", text: "Thonglor: waste up 18% this week", warn: true },
      { time: "20:15", text: "Siam: dinner sales +12% vs last Tuesday", warn: false },
    ],
  },
  brief: [
    "Good morning. Yesterday across 12 branches: ฿3.42M in sales, food cost 31.8%.",
    "Nimman is the outlier: chicken cost is 9% above recipe for the third day. Worth a portion check at lunch.",
    "Thonglor waste is up 18% this week, mostly rice. Prep levels may need resetting.",
    "Siam had its best Tuesday dinner this quarter.",
  ],
  after: [
    { before: "Food-cost problems found a month late", after: "A branch alert the next morning" },
    { before: "Branches compared in a weekly spreadsheet", after: "All 12 branches side by side every morning" },
    { before: "Area managers' evenings spent on reports", after: "Reports build themselves from POS and LINE" },
  ],
};

const en = { ui, cases: [factories, logistics, hotels, travel, restaurants] };
export type CaseContent = typeof en;

/** The translatable text of one case. Numbers, dates and chart data stay shared with English. */
export type CaseText = {
  client: string; title: string; intro: string;
  stats: { suffix: string; label: string }[];
  before: CaseStudy["before"];
  steps: CaseStudy["steps"];
  model: string[]; outputs: string[];
  dash: { title: string; kpis: { label: string; unit: string; note: string }[]; barsTitle: string; bars: string[]; trendTitle: string; alerts: string[] };
  brief: string[];
  after: CaseStudy["after"];
};
export type CaseLang = { ui: CaseUi; cases: Record<string, CaseText> };

const merge = (b: CaseStudy, t?: CaseText): CaseStudy => !t ? b : {
  ...b,
  client: t.client, title: t.title, intro: t.intro,
  stats: b.stats.map((s, i) => ({ ...s, ...t.stats[i] })),
  before: t.before, steps: t.steps, model: t.model, outputs: t.outputs,
  dash: {
    ...b.dash,
    title: t.dash.title,
    kpis: b.dash.kpis.map((k, i) => ({ ...k, ...t.dash.kpis[i] })),
    barsTitle: t.dash.barsTitle,
    bars: b.dash.bars.map((x, i) => ({ ...x, name: t.dash.bars[i] })),
    trendTitle: t.dash.trendTitle,
    alerts: b.dash.alerts.map((a, i) => ({ ...a, text: t.dash.alerts[i] })),
  },
  brief: t.brief, after: t.after,
};

const dict: Partial<Record<string, CaseLang>> = { th: thCases, "zh-Hans": zhHansCases, "zh-Hant": zhHantCases, ms: msCases, vi: viCases };

/** Case studies live under How we work, so the nav keeps "How we work" highlighted. */
export const casePath = (slug: string) => `/how-we-work/cases/${slug}`;

/** Case content for a language; anything not yet translated falls back to English. */
export const caseContent = (lang: string): CaseContent => {
  const tr = dict[lang];
  return tr ? { ui: tr.ui, cases: en.cases.map((c) => merge(c, tr.cases[c.slug])) } : en;
};
