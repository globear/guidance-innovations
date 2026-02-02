import { Bot, Workflow, Smartphone, Code, Globe, Database } from "lucide-react";

export type ProjectCategory = "Product" | "Service" | "Function" | "Internal Tool";
export type ProjectStatus = "Live" | "Beta" | "Development" | "Concept";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  shortDescription: string;
  fullDescription: string;
  url?: string;
  tags: string[];
  features: string[];
  icon: any; // Lucide icon component
  date?: string;
  image?: string;
}

import n8nWorkflow from "@/assets/n8n-workflow.webp";
import aiAgentsChat from "@/assets/ai-agents-chat.webp";
import supabaseEdgeFunctions from "@/assets/supabase-edge-functions.webp";
import guidanceStreamHomepage from "@/assets/guidancestream-homepage.webp";
import careRouterHomeScreen from "@/assets/care-router-home-screen.webp";
import aiOrderProfitEstimation from "@/assets/ai-order-profit-estimation.webp";
import fixMyTextApp from "@/assets/fix-my-text-app.webp";

export const projects: Project[] = [
  {
    id: "guidancestream",
    name: "GuidanceStream",
    category: "Product",
    status: "Beta",
    shortDescription: "Flagship AI Platform: Enterprise-grade AI orchestration and customer intelligence platform.",
    fullDescription: `Enterprise-grade AI orchestration and customer intelligence platform built from real business needs.

GuidanceStream is our proprietary SaaS platform designed to help small businesses and online sellers automate, structure, and elevate customer communication using AI that understands their products, policies, data, and brand voice.

### The Problem We Address
Through founder experience and direct qualitative research with online sellers, we identified recurring pain points:
- High volumes of repetitive customer questions handled manually
- No unified system across email, marketplaces, social DMs
- Many platforms lack usable APIs, forcing inefficient workflows
- No visibility into customer history or recurring issues

### What We Built (Real System, Not a Concept)
GuidanceStream is a fully implemented working prototype demonstrating production-level architecture:
- **RAG Architecture**: Responses grounded in real business data (not hallucinations)
- **Browser Overlay**: Works where users work (dashboards, email)
- **Human-in-the-loop**: AI drafts, humans review and send
- **Mini-CRM**: Tracks customer history and sentiment

### Implemented Product Features
- **Onboarding System**: Auto-ingest orders, products, and FAQs
- **Brand Control**: Define tone, personality, and constraints
- **Multi-Channel**: Browser extension, website chat, email connectors
- **Analytics**: Sentiment tracking, issue categorization, volume heatmaps

### Commercial Readiness
- Free tier, Pro ($19/mo), and Business ($49/mo) plans defined
- Target LTV:CAC ≈ 5:1
- Roadmap extends to 2027 for global expansion

GuidanceStream proves we can translate business operations into scalable AI systems.`,
    url: "https://guidancestream.com",
    tags: ["AI Orchestration", "SaaS", "RAG", "Customer Intelligence", "Browser Extension"],
    features: [
      "RAG-powered Responses",
      "Browser Overlay Integration",
      "Human-in-the-loop Workflow",
      "Customer Sentiment Analytics",
      "Multi-channel Support"
    ],
    icon: Workflow,
    date: "2025",
    image: guidanceStreamHomepage
  },
  {
    id: "carerouters",
    name: "CareRouters",
    category: "Product",
    status: "Development",
    shortDescription: "Healthcare logistics platform optimizing patient transportation and care delivery.",
    fullDescription: `**CareRouters** connects healthcare providers with specialized transportation services. It simplifies the complex logistics of non-emergency medical transportation (NEMT), ensuring patients get to their appointments on time while optimizing fleet efficiency for providers.

### The Problem
Patients and healthcare providers struggle with reliable transportation coordination.
- **Patients**: Missed appointments due to unreliable transport.
- **Providers**: Inefficient routing and lack of real-time visibility.
- **Fleets**: Manual dispatching and underutilized capacity.

### Our Solution
A centralized platform that streamlines the booking, dispatching, and tracking of medical transport.
- **For Patients/Caregivers**: Easy booking and real-time tracking.
- **For Providers**: Dashboard to manage transport requests and view status.
- **For Fleets**: Optimized routing and digital dispatching.

### Key Benefits
- **Reduced Missed Appointments**: Reliable transport ensures patients arrive on time.
- **Operational Efficiency**: Automated dispatch reduces manual work.
- **Better Patient Experience**: Transparent tracking and updates.`,
    url: "https://carerouters.com",
    tags: ["Healthcare", "Logistics", "Mobile App", "Marketplace", "NEMT"],
    features: [
      "Real-time Booking & Tracking",
      "Automated Dispatching",
      "Provider Dashboard",
      "Patient Mobile App",
      "HIPAA Compliant Security"
    ],
    icon: Smartphone,
    date: "2024",
    image: careRouterHomeScreen
  },
  {
    id: "packpilot",
    name: "PackPilot",
    category: "Internal Tool",
    status: "Live",
    shortDescription: "Internal shipping & packaging estimation module with AI agent automation and real-time ops alerts.",
    fullDescription: `PackPilot is an internal operations module built for online sellers and fulfillment teams to **standardize packaging data collection** and **automate shipping cost estimation** end-to-end.

### How It Works
The workflow starts with a simple 3-step interface:
1. **Lookup** by tracking number (or internal order reference)
2. **Confirm package dimensions & weight** (L / W / H / kg) and optional shipping cost inputs
3. **Submit** to generate a structured shipping result and recommended dispatch channel

Once submitted, an **n8n automation** triggers an AI agent to validate inputs, apply business rules (volumetric weight, country routing, channel selection), and log results to Google Sheets for auditing and cost tracking. Critical outcomes are pushed instantly to Telegram, creating an **ops-grade notification loop** that reaches both iPhone and Apple Watch.

### Why We Built It
Manual packaging estimation is a common bottleneck:
- Inconsistent L/W/H inputs across staff
- Missed volumetric weight rules leading to unexpected carrier fees
- Slow back-and-forth between packaging and shipping teams
- No reliable audit trail for cost + profit decisions

PackPilot turns this into a **repeatable, trackable, automation-first workflow**—designed for high-frequency operational use.

### Outcome
PackPilot reduces packaging-to-shipping handoff friction and gives the team:
- **Consistency** (same inputs, same rules, same outputs)
- **Speed** (submit → estimate → log → alert)
- **Accountability** (sheet-based traceability)
- **Scalability** (add channels/rules without changing the UI)`,
    tags: ["Automation", "Logistics", "AI Agent", "n8n", "Ops Tooling"],
    features: [
      "3-Step Packaging Interface",
      "AI Agent-Assisted Estimation",
      "n8n Orchestration Pipeline",
      "Telegram Ops Alerts",
      "Google Sheets Integration"
    ],
    icon: Bot,
    date: "2025",
    image: aiOrderProfitEstimation
  },
  {
    id: "fixmytext",
    name: "FixMyText",
    category: "Product",
    status: "Live",
    shortDescription: "AI message rewriter for non-native English speakers—paste any text and get a clearer, more natural version.",
    fullDescription: `FixMyText is a one-page AI message rewriter designed for non-native English speakers. It helps improve grammar, clarity, and naturalness while preserving the original meaning.

### What It Does
Users paste their original message and click Rewrite. The AI returns a polished version that:
- Fixes grammar and improves wording
- Sounds more natural (closer to native English)
- Preserves the user’s original intent and meaning

### Key Features
- **Customizable Tone**: Choose from Neutral, Casual, Professional, Formal, and more.
- **Length Control**: Make messages shorter, longer, or keep the same length.
- **Translation**: Optional translation to 6 major languages.
- **History**: Save and review past rewrites (persistent for registered users).

Built with React, Supabase, and DeepSeek V3.`,
    url: "https://app.guidanceinnovations.tech/fixmytext",
    tags: ["AI", "Writing Assistant", "SaaS", "Supabase", "DeepSeek"],
    features: [
      "AI Rewriting",
      "Tone & Length Adjustment",
      "Multi-language Support",
      "History Tracking",
      "Guest & User Modes"
    ],
    icon: Code,
    date: "2026",
    image: fixMyTextApp
  },
  {
    id: "api-gateway",
    name: "Unified API Gateway",
    category: "Function",
    status: "Development",
    shortDescription: "Single entry point for all Guidance Innovation services and data streams.",
    fullDescription: "A scalable API gateway that handles authentication, rate limiting, and routing for all our microservices. It simplifies client integration and enhances security across our entire platform.",
    tags: ["Backend", "Infrastructure", "API"],
    features: [
      "JWT Authentication",
      "Rate Limiting",
      "Service Discovery"
    ],
    icon: Globe,
    date: "2026",
    image: supabaseEdgeFunctions
  }
];
