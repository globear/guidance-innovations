export const opsDashboardKpis = [
  {
    id: "requests",
    labelKey: "products.dashboard.kpis.messages",
    value: "847",
    trend: "+ 3.1%",
    trendUp: true,
  },
  {
    id: "resolved",
    labelKey: "products.dashboard.kpis.solved",
    value: "612",
    trend: "+ 12.4%",
    trendUp: true,
  },
  {
    id: "active",
    labelKey: "products.dashboard.kpis.active",
    value: "13",
    trend: "- 0.4%",
    trendUp: false,
  },
  {
    id: "response",
    labelKey: "products.dashboard.kpis.response",
    value: "16s",
    trend: "+ 8.7%",
    trendUp: true,
  },
];

export const opsDashboardNavGroups = [
  {
    id: "product",
    labelKey: "products.dashboard.navGroups.product",
    items: [
      { id: "dashboard", labelKey: "products.dashboard.nav.dashboard", active: true },
      { id: "conversations", labelKey: "products.dashboard.nav.conversations" },
      { id: "bookings", labelKey: "products.dashboard.nav.bookings" },
    ],
  },
  {
    id: "workspace",
    labelKey: "products.dashboard.navGroups.workspace",
    items: [
      { id: "leads", labelKey: "products.dashboard.nav.leads" },
      { id: "kpi", labelKey: "products.dashboard.nav.kpi" },
      { id: "ai", labelKey: "products.dashboard.nav.ai" },
    ],
  },
  {
    id: "admin",
    labelKey: "products.dashboard.navGroups.admin",
    items: [
      { id: "settings", labelKey: "products.dashboard.nav.settings" },
      { id: "billing", labelKey: "products.dashboard.nav.billing" },
    ],
  },
];

/** Weekly assistance volume for dark bar chart */
export const opsDashboardWeeklyVolume = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 58 },
  { day: "Wed", value: 51 },
  { day: "Thu", value: 72 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 64 },
  { day: "Sun", value: 47 },
];

/** Dual-series channel activity for step/line chart */
export const opsDashboardChannelSeries = [
  { day: "Apr 7", web: 28, line: 12 },
  { day: "Apr 8", web: 34, line: 15 },
  { day: "Apr 9", web: 31, line: 18 },
  { day: "Apr 10", web: 45, line: 14 },
  { day: "Apr 11", web: 52, line: 22 },
  { day: "Apr 12", web: 48, line: 19 },
  { day: "Apr 13", web: 61, line: 24 },
];

export const opsDashboardResolution = [
  { labelKey: "products.dashboard.resolution.ai", value: "72%", color: "bg-emerald-400" },
  { labelKey: "products.dashboard.resolution.escalated", value: "10%", color: "bg-amber-400" },
  { labelKey: "products.dashboard.resolution.human", value: "14%", color: "bg-rose-400" },
];

export const opsDashboardConversations = [
  {
    customer: "AG-1042",
    channel: "LINE",
    booking: "AG-8821",
    flight: "TG-412",
    statusKey: "products.dashboard.status.done",
    assigneeKey: "products.dashboard.assignee.ai",
    duration: "12 min",
  },
  {
    customer: "AG-1038",
    channel: "Web",
    booking: "AG-8814",
    flight: "—",
    statusKey: "products.dashboard.status.done",
    assigneeKey: "products.dashboard.assignee.ai",
    duration: "8 min",
  },
  {
    customer: "AG-1031",
    channel: "WhatsApp",
    booking: "AG-8802",
    flight: "FD-301",
    statusKey: "products.dashboard.status.active",
    assigneeKey: "products.dashboard.assignee.human",
    duration: "24 min",
  },
];
