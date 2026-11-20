// English copy. Thai lives in content.th.ts with the same shape.
// Shared, non-translated settings are at the top.

export const brand = { name: "Guidance Innovation", legal: "Guidance Innovation Co., Ltd." };

// Drop real assets into /public and set these paths.
export const media = {
  headshot: "", // e.g. "/founder.jpg"
  video: "", // e.g. "/founder.mp4"
  poster: "",
};

export const contact = {
  line: "#", // LINE OA link
  wechat: "#", // WeChat QR / ID
  email: "#",
};

export const en = {
  meta: {
    title: "Guidance Innovation | AI Forward-Deployed Engineering",
    description: "We embed with your team, connect your operations data, and build private AI systems that help owners see clearly and decide faster.",
  },

  founder: {
    name: "Founder name",
    role: "Founder & Forward-Deployed Engineer",
    message:
      "Most owners I meet don't need more software. They need to see their business clearly, today, not at the end of the month. I come into your operation, learn how it really runs, and build the AI systems around it myself.",
  },

  problems: [
    { k: "01", title: "Data in ten places", body: "Excel files, LINE groups, POS, accounting, paper. Nobody sees the whole picture." },
    { k: "02", title: "Reports arrive too late", body: "By the time the monthly report lands, the problem has already cost you money." },
    { k: "03", title: "Decisions run on gut feel", body: "Owners spend their time chasing numbers instead of acting on them." },
  ],

  method: [
    { k: "01", name: "Discover", time: "Week 1", body: "We sit with your team on site. Shadow operations, interview staff, map how work and data actually flow, and find where time and money leak." },
    { k: "02", name: "Connect", time: "Weeks 2–3", body: "We connect your existing systems: Excel, ERP, accounting, POS, GPS, LINE OA, WeChat and APIs. No rip-and-replace." },
    { k: "03", name: "Model", time: "Weeks 3–4", body: "We structure your business into one model: orders, customers, assets, staff, stock. The system finally understands how you work." },
    { k: "04", name: "Decide", time: "Weeks 4–6", body: "A live command view for owners, AI that answers questions in plain language, daily briefings and alerts delivered to LINE." },
    { k: "05", name: "Guard", time: "Ongoing", body: "We stay. Monitoring, improvements and new use cases every month, so the system grows with the business." },
  ],

  industries: [
    {
      slug: "factories",
      name: "Factories",
      forTitle: "For factories.",
      short: "Output, downtime and stock in one live view.",
      headline: "See the whole factory floor from one screen.",
      pains: ["Production numbers collected by hand", "Downtime discovered hours later", "Stock and orders out of sync"],
      builds: [
        { title: "Production command view", body: "Output, downtime and yield per line, updated through the day." },
        { title: "Daily output brief", body: "An AI summary in LINE every morning: what was produced, what stopped, why." },
        { title: "Stock & order alerts", body: "Warnings before materials run out or orders slip." },
      ],
      metrics: ["Output / line", "Downtime", "Yield", "Stock days"],
    },
    {
      slug: "logistics",
      name: "Logistics",
      forTitle: "For logistics.",
      short: "Every truck, trip and delivery, tracked and costed.",
      headline: "Know where every delivery stands, before the customer calls.",
      pains: ["Status updates scattered across driver chats", "Late deliveries found too late", "No clear cost per trip"],
      builds: [
        { title: "Fleet & delivery view", body: "Live status of trucks, trips and deliveries from GPS and dispatch data." },
        { title: "Late-delivery alerts", body: "AI flags at-risk deliveries and tells the right person in LINE." },
        { title: "Cost per trip", body: "Fuel, tolls and time rolled up per route, customer and driver." },
      ],
      metrics: ["On-time %", "Trips today", "Cost / trip", "Fuel"],
    },
    {
      slug: "hotels",
      name: "Hotels",
      forTitle: "For hotels.",
      short: "Occupancy, revenue and a 24/7 multilingual guest AI.",
      headline: "Run the hotel on numbers, and answer every guest instantly.",
      pains: ["Guest questions flood staff in three languages", "Revenue data split across channels", "Slow reaction to occupancy changes"],
      builds: [
        { title: "Guest AI desk", body: "Answers guests on LINE, WeChat and web, in Thai, English and Chinese, from your own policies." },
        { title: "Revenue view", body: "Occupancy, ADR and channel mix in one place." },
        { title: "Daily GM brief", body: "Arrivals, issues and revenue delivered every morning." },
      ],
      metrics: ["Occupancy", "ADR", "RevPAR", "Guest msgs"],
    },
    {
      slug: "travel",
      name: "Travel agencies",
      forTitle: "For travel agencies.",
      short: "AI that answers inquiries and builds quotes.",
      headline: "Turn every inquiry into a fast, accurate answer.",
      pains: ["Same questions answered all day", "Quotes take hours to build", "Leads lost between chats"],
      builds: [
        { title: "Inquiry AI", body: "Answers customers correctly from your packages, rules and FAQs, on LINE and WeChat." },
        { title: "Quote assistant", body: "Drafts quotes from your price lists for staff to approve." },
        { title: "Booking pipeline", body: "Every lead and booking tracked from first message to payment." },
      ],
      metrics: ["Inquiries", "Reply time", "Quotes sent", "Bookings"],
    },
    {
      slug: "restaurants",
      name: "Franchise restaurants",
      forTitle: "For franchise restaurants.",
      short: "Every branch compared, every morning.",
      headline: "Every branch, compared and explained, every morning.",
      pains: ["Branch reports arrive in different formats", "Food cost creeps up unnoticed", "No quick way to compare branches"],
      builds: [
        { title: "Branch command view", body: "Sales, traffic and food cost per branch, side by side." },
        { title: "Cost alerts", body: "AI spots unusual food cost, waste or sales drops per branch." },
        { title: "Owner brief", body: "Yesterday's results across all branches, in one LINE message." },
      ],
      metrics: ["Sales / branch", "Food cost %", "Tickets", "Avg bill"],
    },
  ],

  businessOffers: [
    { title: "AI Customer Desk", body: "A private AI assistant on LINE OA, WeChat and web that answers customers correctly from your own documents, prices and policies." },
    { title: "Business Command View", body: "Your scattered data connected into one live dashboard for owners and managers." },
    { title: "Knowledge Brain", body: "Your SOPs, contracts and price lists made searchable. Staff ask in plain language and get the right answer." },
    { title: "Briefings & Alerts", body: "A daily AI summary of the business in LINE, plus alerts the moment something goes wrong." },
  ],

  leaderDay: [
    { time: "07:00", title: "Morning brief", body: "Today's meetings with context on every person, urgent messages, and key numbers across your businesses." },
    { time: "10:30", title: "Meeting prep", body: "One-page brief before each meeting, drawn from your email, documents and past notes." },
    { time: "14:00", title: "Ask anything", body: "“Compare these three supplier quotes against last year's prices.” Answered in seconds." },
    { time: "18:00", title: "Follow-ups", body: "Draft replies and action items from the day, ready for you to approve." },
    { time: "21:00", title: "Evening summary", body: "What moved today, what needs you tomorrow." },
  ],

  capabilities: [
    "RAG & private knowledge systems",
    "LINE OA & WeChat integration",
    "API & data integration",
    "Dashboards & data visualisation",
    "AI agents & automation",
    "Thai · English · Chinese",
  ],

  deploymentModes: [
    { name: "Private", tag: "", where: "Your server or private cloud", ai: "Open-source AI models run on your own infrastructure. Nothing leaves.", fit: "Highly sensitive financial or personal data" },
    { name: "Hybrid", tag: "Recommended", where: "Your server", ai: "Only the minimum, masked text needed for each task is processed through enterprise AI APIs, under terms that exclude training on your data.", fit: "Most growing businesses" },
    { name: "Managed", tag: "", where: "Secure cloud managed by Guidance", ai: "Enterprise AI APIs under terms that exclude training on your data.", fit: "The fastest, lowest-cost start" },
  ],

  commitments: [
    "You own 100% of your data and the systems we build for you",
    "Your business data is not used to train AI models",
    "Encryption in transit and at rest",
    "Role-based access: staff see only what they need",
    "Audit logs of who accessed what, and when",
    "Personal data minimised and masked before AI processing",
    "A data processing agreement aligned with Thailand's PDPA",
    "Full data return or deletion when the engagement ends",
  ],

  // Scripted preview for the on-site demo chat (not connected to a model yet).
  demoChat: [
    { q: "What were yesterday's late deliveries?", a: "7 of 142 deliveries were late (4.9%). 5 were on the Rayong route after 15:00. The pattern started on Monday, when two trucks moved to the morning shift." },
    { q: "Which customers haven't ordered in 30 days?", a: "12 accounts. The 3 largest made up 8% of last quarter's revenue. I've drafted a follow-up list for your sales team." },
    { q: "Is my data sent to ChatGPT?", a: "Not your raw data. Your databases and documents stay on your server. In Hybrid mode only masked, minimal text is processed through enterprise APIs that don't train on it, and in Private mode nothing leaves at all." },
  ],

  ui: {
    nav: { business: "Business", leaders: "Leaders", industries: "Industries", how: "How we work", security: "Security", about: "About", book: "Book consultation", menu: "Menu", close: "Close" },
    footer: {
      blurb: "AI forward-deployed engineering for growing businesses and the people who lead them.",
      solutions: "Solutions", forBusiness: "For Business", forLeaders: "For Leaders", howWeWork: "How we work", securityPdpa: "Security & PDPA",
      industries: "Industries", contact: "Contact", about: "About", base: "Your data stays yours · PDPA aligned", language: "Language",
    },
    hero: {
      status1: "AI forward-deployed engineering",
      status2: "Private by design · PDPA aligned",
      title: "AI that works inside your business.",
      lead: "We embed with your team, connect your scattered data, and build private AI systems that help owners see clearly and decide faster.",
      book: "Book a consultation",
      how: "How we work",
      core: "ONE MODEL OF YOUR BUSINESS",
    },
    problem: { eyebrow: "The problem", title: "Most businesses have the data. Almost none can see it." },
    paths: {
      business: { num: "01 / FOR BUSINESS", title: "An AI operating layer for your company.", items: ["One live view of operations", "AI customer desk on LINE & WeChat", "Daily briefings and alerts"], foot: "For SMEs with 10–200 people" },
      leaders: { num: "02 / FOR LEADERS", title: "A personal AI agent built around you.", items: ["Morning brief across all your businesses", "Meeting prep and follow-ups", "Decision support on your own data"], foot: "For owners & executives" },
    },
    industriesSection: { eyebrow: "Industries", title: "Built for how your industry runs.", lead: "Small and mid-sized businesses with real operations, and owners who need to see them clearly.", view: "View →" },
    method: { eyebrow: "How we work", title: "From the shop floor to the owner's screen.", step: "STEP" },
    founderUi: { eyebrow: "A message from the founder", watch: "Watch the founder's message", placeholder: "Founder video · drop file in /public", photo: "PHOTO" },
    demo: {
      eyebrow: "Try it", title: "Ask your business a question.",
      lead: "Owners don't open dashboards at 7am. They open LINE. Our agents answer in plain language, from your own data, wherever you already work.",
      buildWith: "What we build with", head: "Ask your business", tag: "Demo · sample data",
      empty: "Pick a question below to see how an owner talks to their business.",
    },
    securityTeaser: {
      eyebrow: "Security & PDPA", title: "Your data stays yours.",
      lead: "Your databases and documents stay on your server. Choose Private, Hybrid or Managed deployment, with a PDPA-aligned data processing agreement on every project.",
      link: "Security & privacy",
    },
    cta: {
      eyebrow: "Start here", title: "Tell us one problem.",
      lead: "Book a free 45-minute AI Opportunity Session. We'll map where AI fits in your business and what it would take. No pressure, no slides.",
      button: "Book a consultation",
    },
    business: {
      eyebrow: "For Business", title: "An AI operating layer for your company.",
      lead: "For small and mid-sized businesses with real operations: factories, logistics, hotels, travel agencies and restaurant groups. We connect what you already use and build the AI on top.",
      indEyebrow: "Industries", indTitle: "Where we work.",
    },
    engagement: {
      eyebrow: "How you start", title: "Small steps. Clear results.",
      lead: "Every engagement is quoted after the consultation, based on your scope. No open-ended projects.",
      steps: [
        { t: "Consultation", b: "A free 45-minute session. We learn your business and show where AI fits." },
        { t: "Discovery", b: "A fixed-scope week on site. You get a clear map of problems, data and opportunities." },
        { t: "Build", b: "A fixed-scope project, usually 2–6 weeks, delivering one working system." },
        { t: "Guardian Care", b: "Monthly monitoring, support and improvements as your business grows." },
      ],
    },
    leaders: {
      eyebrow: "For Leaders", title: "A personal AI agent, built around you.",
      lead: "For owners, executives and investors. Your agent connects to your email, calendar, documents, chats and company data, then works for you, privately.",
      dayEyebrow: "A day with your agent", dayTitle: "More signal. Less noise.",
      confEyebrow: "Confidential by default", confTitle: "Built for one person. Seen by one person.",
      confLead: "Your agent runs on infrastructure you control, with access only you approve. Nothing is shared, reused or used to train AI models.",
      demoBtn: "Book a private demo", prevEyebrow: "Preview", prevTitle: "Ask in plain language.",
    },
    industry: { hear: "What we hear", illus: "Illustrative command view", build: "What we build" },
    how: {
      eyebrow: "How we work", title: "We don't sell software. We deploy engineers.",
      lead: "Forward-deployed engineering means we work inside your operation, not from a distance. We find the real problem first, then build the system around how your business actually runs.",
      principles: [
        { t: "On site, not on slides", b: "We sit with the people doing the work, because that's where the real problems are." },
        { t: "Use what you have", b: "Excel, LINE, your ERP, your POS. We connect it rather than replace it." },
        { t: "We stay", b: "Guardian Care keeps the system running and improving every month." },
      ],
    },
    security: {
      eyebrow: "Security & PDPA", title: "Your data stays yours.",
      lead: "Your business data belongs to you. We design every system so you choose where data lives, who sees it, and what reaches an AI model.",
      modesEyebrow: "Deployment modes", modesTitle: "You choose where AI runs.",
      dataLives: "Data lives", aiProc: "AI processing", bestFor: "Best for",
      comEyebrow: "Our commitments", comTitle: "Written into every contract.",
      pdpaEyebrow: "PDPA",
      pdpaText: "We act as your data processor under Thailand's Personal Data Protection Act (PDPA). Every project includes a data processing agreement, documented data flows, and controls for consent, access and deletion.",
    },
    about: {
      eyebrow: "About", title: "A small team that works like your own engineers.",
      lead: "Guidance Innovation is an AI forward-deployed engineering company. You work directly with the engineer who builds your system, from the first conversation to every update after.",
      bringEyebrow: "What we bring", bringTitle: "Hands-on, end to end.",
    },
    consult: {
      eyebrow: "Book a consultation", title: "Tell us one problem.",
      lead: "A free 45-minute AI Opportunity Session. We'll learn how your business runs and show you where AI can save time and money. Pricing is shared after we understand your scope.",
      direct: "Or reach us directly", thanks: "Thank you.", thanksLead: "We'll reply within one business day.",
      name: "Name", company: "Company", contact: "Email or LINE ID", interest: "I'm interested in",
      interestOpts: ["For Business", "For Leaders (personal agent)", "Not sure yet"],
      industry: "Industry", other: "Other", problem: "The one problem you'd solve first", submit: "Request session",
    },
    notFound: { title: "This page doesn't exist.", lead: "Head back to the homepage." },
  },
};

export type Content = typeof en;
export type Industry = Content["industries"][number];
