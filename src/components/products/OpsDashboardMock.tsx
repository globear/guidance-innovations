import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Bell,
  Bot,
  CalendarDays,
  CreditCard,
  LayoutDashboard,
  Menu,
  MessageSquare,
  PanelLeft,
  Settings,
  Sparkles,
  Target,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  opsDashboardChannelSeries,
  opsDashboardConversations,
  opsDashboardKpis,
  opsDashboardNavGroups,
  opsDashboardResolution,
  opsDashboardWeeklyVolume,
} from "@/data/opsDashboardDemo";
import { cn } from "@/lib/utils";

const navIcons: Record<string, typeof LayoutDashboard> = {
  dashboard: LayoutDashboard,
  conversations: MessageSquare,
  bookings: CalendarDays,
  leads: Target,
  kpi: Sparkles,
  ai: Bot,
  settings: Settings,
  billing: CreditCard,
};

function AetherGateMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="7" fill="#18181B" stroke="#27272A" />
      <path
        d="M9 21V11l7 5.5L23 11v10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2" fill="#22C55E" />
    </svg>
  );
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useLanguage();

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2.5 px-4 py-5">
        <AetherGateMark className="h-8 w-8 shrink-0" />
        <div>
          <p className="text-sm font-semibold tracking-tight text-white">
            {t("products.dashboard.brand")}
          </p>
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">
            {t("products.dashboard.brandSub")}
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-5 overflow-y-auto px-3 pb-4">
        {opsDashboardNavGroups.map((group) => (
          <div key={group.id}>
            <p className="mb-1.5 px-2 text-[10px] font-medium uppercase tracking-wider text-zinc-600">
              {t(group.labelKey as any)}
            </p>
            <div className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = navIcons[item.id] ?? LayoutDashboard;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={onNavigate}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors",
                      item.active
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span>{t(item.labelKey as any)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-zinc-800 px-4 py-3 text-[10px] text-zinc-600">
        {t("products.dashboard.demoNote")}
      </div>
    </div>
  );
}

const chartTooltipStyle = {
  backgroundColor: "#18181B",
  border: "1px solid #27272A",
  borderRadius: 8,
  fontSize: 12,
  color: "#FAFAFA",
};

const shellVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeSlide: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const kpiContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const kpiItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

interface OpsDashboardMockProps {
  animate?: boolean;
}

const OpsDashboardMock = ({ animate = true }: OpsDashboardMockProps) => {
  const { t } = useLanguage();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  // Stay "hidden" until parent reports in-view; never mount as already-visible
  // or the stagger reveal will skip. Reduced-motion still fades the shell, but
  // skips nested stagger / chart draw.
  const phase = animate ? "show" : "hidden";
  const chartsLive = animate && !prefersReducedMotion;

  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-2xl shadow-black/50 sm:rounded-2xl"
      variants={shellVariants}
      initial={prefersReducedMotion ? "show" : "hidden"}
      animate={phase}
    >
      <div className="flex min-h-[520px] md:min-h-[600px]">
        <motion.aside
          variants={sidebarVariants}
          className="hidden w-56 shrink-0 border-r border-zinc-800 bg-black md:flex md:flex-col"
        >
          <SidebarNav />
        </motion.aside>

        <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
          <SheetContent
            side="left"
            className="w-[280px] border-zinc-800 bg-black p-0 text-white [&>button]:text-zinc-400"
          >
            <SheetTitle className="sr-only">
              {t("products.dashboard.brand")}
            </SheetTitle>
            <SidebarNav onNavigate={() => setMobileNavOpen(false)} />
          </SheetContent>
        </Sheet>

        <div className="flex min-w-0 flex-1 flex-col bg-black">
          <motion.header
            variants={fadeSlide}
            className="flex items-center justify-between gap-3 border-b border-zinc-800 px-3 py-3 sm:px-5"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-900 hover:text-white md:hidden"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
              <PanelLeft className="hidden h-4 w-4 text-zinc-500 md:block" />
              <LayoutDashboard className="h-3.5 w-3.5 text-zinc-500" />
              <span className="text-sm font-medium text-white">
                {t("products.dashboard.nav.dashboard")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="hidden border-0 bg-zinc-900 text-[10px] text-zinc-400 hover:bg-zinc-900 sm:inline-flex">
                {t("products.dashboard.viewBadge")}
              </Badge>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-500">
                <Bell className="h-4 w-4" />
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-semibold text-zinc-300">
                AG
              </span>
            </div>
          </motion.header>

          <div className="flex-1 space-y-3 overflow-y-auto p-3 sm:space-y-4 sm:p-4 lg:p-5">
            <motion.div
              variants={kpiContainer}
              className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4"
            >
              {opsDashboardKpis.map((kpi) => (
                <motion.div
                  key={kpi.id}
                  variants={kpiItem}
                  className="rounded-xl border border-zinc-800 bg-black p-3 sm:p-4"
                >
                  <p className="text-[11px] text-zinc-500 sm:text-xs">
                    {t(kpi.labelKey as any)}
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {kpi.value}
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 text-[10px] sm:text-xs",
                      kpi.trendUp ? "text-emerald-400" : "text-rose-400",
                    )}
                  >
                    {kpi.trend}{" "}
                    <span className="text-zinc-600">
                      {t("products.dashboard.vsLastWeek")}
                    </span>
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeSlide}
              className="grid gap-2 sm:gap-3 lg:grid-cols-2"
            >
              <div className="rounded-xl border border-zinc-800 bg-black p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h4 className="text-sm font-medium text-white">
                    {t("products.dashboard.weeklyVolume")}
                  </h4>
                  <Badge className="border-0 bg-emerald-500/15 text-[10px] text-emerald-400 hover:bg-emerald-500/15">
                    + 66.9%
                  </Badge>
                </div>
                <div className="h-40 w-full sm:h-48">
                  {/* Remount charts when reveal starts so recharts animations play */}
                  <ResponsiveContainer
                    key={chartsLive ? "charts-live-bar" : "charts-idle-bar"}
                    width="100%"
                    height="100%"
                  >
                    <BarChart
                      data={opsDashboardWeeklyVolume}
                      barCategoryGap="28%"
                    >
                      <defs>
                        <linearGradient
                          id="agBar"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#A1A1AA" />
                          <stop offset="100%" stopColor="#27272A" />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#71717A", fontSize: 11 }}
                      />
                      <YAxis hide />
                      <Tooltip
                        cursor={{ fill: "rgba(39,39,42,0.5)" }}
                        contentStyle={chartTooltipStyle}
                      />
                      <Bar
                        dataKey="value"
                        fill="url(#agBar)"
                        radius={[4, 4, 0, 0]}
                        isAnimationActive={chartsLive}
                        animationBegin={200}
                        animationDuration={900}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-black p-3 sm:p-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h4 className="text-sm font-medium text-white">
                    {t("products.dashboard.channelVolume")}
                  </h4>
                  <Badge className="border-0 bg-emerald-500/15 text-[10px] text-emerald-400 hover:bg-emerald-500/15">
                    + 58.3%
                  </Badge>
                </div>
                <div className="h-40 w-full sm:h-48">
                  <ResponsiveContainer
                    key={chartsLive ? "charts-live-line" : "charts-idle-line"}
                    width="100%"
                    height="100%"
                  >
                    <LineChart data={opsDashboardChannelSeries}>
                      <CartesianGrid
                        stroke="#18181B"
                        vertical={false}
                        horizontal={false}
                      />
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "#71717A", fontSize: 10 }}
                      />
                      <YAxis hide />
                      <Tooltip contentStyle={chartTooltipStyle} />
                      <Line
                        type="stepAfter"
                        dataKey="web"
                        stroke="#FAFAFA"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={chartsLive}
                        animationBegin={280}
                        animationDuration={1000}
                      />
                      <Line
                        type="stepAfter"
                        dataKey="line"
                        stroke="#71717A"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={chartsLive}
                        animationBegin={380}
                        animationDuration={1000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeSlide}
              className="grid gap-2 sm:gap-3 lg:grid-cols-3"
            >
              <div className="rounded-xl border border-zinc-800 bg-black p-3 sm:p-4 lg:col-span-1">
                <h4 className="mb-3 text-sm font-medium text-white">
                  {t("products.dashboard.resolutionTitle")}
                </h4>
                <div className="space-y-3">
                  {opsDashboardResolution.map((item, index) => (
                    <motion.div
                      key={item.labelKey}
                      initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
                      animate={
                        phase === "show"
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -8 }
                      }
                      transition={{
                        delay: phase === "show" ? 0.35 + index * 0.08 : 0,
                        duration: 0.35,
                      }}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2 text-zinc-400">
                        <span
                          className={cn("h-2 w-2 rounded-full", item.color)}
                        />
                        <span className="text-xs sm:text-sm">
                          {t(item.labelKey as any)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-white">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-black lg:col-span-2">
                <div className="flex items-center justify-between border-b border-zinc-800 px-3 py-3 sm:px-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-medium text-white">
                      {t("products.dashboard.recentConversations")}
                    </h4>
                    <Badge className="border-0 bg-emerald-500/15 text-[10px] text-emerald-400 hover:bg-emerald-500/15">
                      1 {t("products.dashboard.activeLabel")}
                    </Badge>
                  </div>
                  <span className="text-[11px] text-zinc-500">
                    {t("products.dashboard.allConversations")}
                  </span>
                </div>

                <div className="space-y-2 p-3 sm:hidden">
                  {opsDashboardConversations.map((row, index) => (
                    <motion.div
                      key={row.customer}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                      animate={
                        phase === "show"
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 10 }
                      }
                      transition={{
                        delay: phase === "show" ? 0.45 + index * 0.08 : 0,
                        duration: 0.35,
                      }}
                      className="rounded-lg border border-zinc-800 p-3"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-zinc-200">
                          {row.customer}
                        </span>
                        <Badge
                          className={cn(
                            "border-0 text-[10px]",
                            row.statusKey.includes("active")
                              ? "bg-amber-500/15 text-amber-400 hover:bg-amber-500/15"
                              : "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/15",
                          )}
                        >
                          {t(row.statusKey as any)}
                        </Badge>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-zinc-500">
                        <span>{row.channel}</span>
                        <span className="font-mono">{row.booking}</span>
                        <span>{row.flight}</span>
                        <span className="text-emerald-400">
                          {t(row.assigneeKey as any)}
                        </span>
                        <span>{row.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="hidden overflow-x-auto sm:block">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-zinc-800 text-zinc-500">
                        <th className="px-4 py-2.5 font-medium">
                          {t("products.dashboard.table.customer")}
                        </th>
                        <th className="px-4 py-2.5 font-medium">
                          {t("products.dashboard.table.channel")}
                        </th>
                        <th className="px-4 py-2.5 font-medium">
                          {t("products.dashboard.table.booking")}
                        </th>
                        <th className="px-4 py-2.5 font-medium">
                          {t("products.dashboard.table.flight")}
                        </th>
                        <th className="px-4 py-2.5 font-medium">
                          {t("products.dashboard.table.status")}
                        </th>
                        <th className="px-4 py-2.5 font-medium">
                          {t("products.dashboard.table.assignee")}
                        </th>
                        <th className="px-4 py-2.5 font-medium">
                          {t("products.dashboard.table.duration")}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {opsDashboardConversations.map((row, index) => (
                        <motion.tr
                          key={row.customer}
                          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                          animate={
                            phase === "show"
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 8 }
                          }
                          transition={{
                            delay: phase === "show" ? 0.5 + index * 0.08 : 0,
                            duration: 0.35,
                          }}
                          className="border-b border-zinc-900 last:border-0"
                        >
                          <td className="px-4 py-3 font-mono text-zinc-200">
                            {row.customer}
                          </td>
                          <td className="px-4 py-3 text-zinc-400">
                            {row.channel}
                          </td>
                          <td className="px-4 py-3 font-mono text-zinc-400">
                            {row.booking}
                          </td>
                          <td className="px-4 py-3 text-zinc-400">
                            {row.flight}
                          </td>
                          <td className="px-4 py-3">
                            <Badge
                              className={cn(
                                "border-0 text-[10px]",
                                row.statusKey.includes("active")
                                  ? "bg-amber-500/15 text-amber-400 hover:bg-amber-500/15"
                                  : "bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/15",
                              )}
                            >
                              {t(row.statusKey as any)}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-emerald-400">
                            {t(row.assigneeKey as any)}
                          </td>
                          <td className="px-4 py-3 text-zinc-500">
                            {row.duration}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OpsDashboardMock;
