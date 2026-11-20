// "How your agent is built" on the Leaders page: an example personal-agent setup.
// Tool facts (checked Nov 2026 on each project's own site): OpenClaw and Hermes Agent are MIT-licensed,
// self-hosted agent gateways; both support WhatsApp and Telegram natively; neither lists LINE or a native
// calendar integration, so those go through connectors we build. Obsidian stores notes as local Markdown.
// English is the source; other languages fall back to English until translated.

import { thAgent } from "./locales/th";
import { zhHansAgent } from "./locales/zh-hans";
import { zhHantAgent } from "./locales/zh-hant";
import { msAgent } from "./locales/ms";
import { viAgent } from "./locales/vi";

export type AgentContent = {
  eyebrow: string; title: string; lead: string; label: string;
  layers: { key: string; title: string; sub: string }[];
  note: string;
  chatTitle: string;
  chat: { time: string; me?: boolean; text: string }[];
  vaultTitle: string;
  folders: string[];
  noteTitle: string;
  noteLines: string[];
  noteLinks: string[];
  guardTitle: string;
  guards: string[];
};

const en: AgentContent = {
  eyebrow: "How your agent is built",
  title: "Open tools. Your hardware. Your memory.",
  lead: "One example: an owner who runs three companies. The agent lives on a small computer in their office, keeps its memory as notes they can read, and answers on the chat apps they already use.",
  label: "Example setup · tools are chosen to fit each client",
  layers: [
    { key: "phone", title: "Your phone", sub: "WhatsApp · Telegram · LINE*" },
    { key: "gateway", title: "Agent gateway", sub: "OpenClaw or Hermes Agent · open source (MIT)" },
    { key: "box", title: "Mac mini in your office", sub: "Runs around the clock · you hold the keys" },
    { key: "vault", title: "Second brain", sub: "Obsidian vault · plain Markdown notes" },
    { key: "tools", title: "Your tools", sub: "Email · calendar* · documents · company data" },
    { key: "model", title: "AI model", sub: "Local, or an enterprise API that doesn't train on your data" },
  ],
  note: "* LINE and calendar connect through connectors we build and maintain.",
  chatTitle: "Your agent",
  chat: [
    { time: "07:00", text: "Morning. 3 meetings today. At 10:30 Khun Somchai is waiting for the Q1 forecast you promised on 12 Nov. A draft is ready." },
    { time: "10:15", text: "Prep for 10:30: your last two meetings, his open points and this year's volumes, on one page." },
    { time: "14:00", me: true, text: "Compare the three packaging quotes against last year." },
    { time: "14:01", text: "Quote B is cheapest but 6% above last year's price for the same volume. Quote C matches last year and delivers faster." },
    { time: "18:00", text: "4 follow-ups from today are drafted. Approve and I'll send them." },
  ],
  vaultTitle: "Second brain",
  folders: ["People/", "Meetings/", "Daily/", "Follow-ups/", "Companies/"],
  noteTitle: "People / Khun Somchai.md",
  noteLines: ["Role: CFO, supplier group", "Last met: 12 Nov · pricing review", "Prefers: short emails, in Thai", "Open: send the Q1 volume forecast"],
  noteLinks: ["Meetings/2026-11-12 Pricing", "Companies/Supplier Group"],
  guardTitle: "Built to stay private",
  guards: [
    "Runs on hardware you own. You can unplug it.",
    "Memory is plain notes you can read, edit or delete.",
    "Only your paired phone can talk to it.",
    "Tools run in a sandbox with the least access they need.",
    "Nothing is used to train AI models.",
  ],
};

const dict: Partial<Record<string, AgentContent>> = { en, th: thAgent, "zh-Hans": zhHansAgent, "zh-Hant": zhHantAgent, ms: msAgent, vi: viAgent };

export const agentContent = (lang: string): AgentContent => dict[lang] ?? en;
