# Plan: case studies, team, founder video, personal agent

## 1. Home: founder video

- Put back the founder **video frame** on Home, instead of the AI Summit photo.
- Keep it as a placeholder until you send the video. Visitors see a play button and "Founder message · video coming soon", translated. They no longer see the developer note ("drop file in /public").
- When the video arrives: put it in `public/` and set `media.video`. The frame starts playing it automatically.
- Reed's headshot, name and role stay beside the quote, with the link to Proof of work.

## 2. About: photo and team

- Keep the AI Summit stage photo in the About founder section.
- Add **"The team"** using the people from guidanceinnovations.tech, with their real photos taken from the main site:

  | Name | Role |
  |---|---|
  | Reed | Founder & Lead Builder |
  | Denis | Backend Engineer |
  | Best | Marketing & Growth |
  | Ye | UX/UI Designer |

- Each card shows a photo, name, role and three skills. Roles and skills are translated into all six languages.

## 3. How we work: five case studies, modelled on Palantir's

### What Palantir's pages do

Each Palantir impact page follows the same pattern:
1. **Client + Palantir** headline, with a one-line mission and a hero video or image.
2. **"Impact so far"**: four or five large numbers in big type.
3. **The challenge**: scattered data in plain language.
4. **The approach**: which data was connected into one model, then which apps and predictive models were built on it.
5. **Get in touch**.

### Our version, anonymised

There is one case per industry, each on its own page (`/cases/factories`, `/cases/logistics`, and so on). How we work gets a **case-study index** of five cards, and each industry page links to its case.

Each case page has these sections:

| # | Section | What it shows | Visual and motion |
|---|---|---|---|
| 1 | Hero | "A 120-person packaging manufacturer, Eastern Thailand + Guidance": a description, never a name | Industry photo with a slow zoom, label "Client name withheld" |
| 2 | Impact so far | 4 large result numbers | Numbers count up when scrolled into view |
| 3 | Before | Where the data lived: Excel, LINE groups, POS, paper | Animated map of scattered sources, with problem points pulsing |
| 4 | How we deployed | The 5-step forward-deployed flow, week by week (Discover → Connect → Model → Decide → Guard), with what the engineer did on site at each step | Timeline that advances as you scroll; the scattered sources come together into one business model |
| 5 | What we built | The owner's live command view for that industry | Animated dashboard: KPI tiles, trend line, alert list, filters you can click |
| 6 | The daily brief | The 07:00 message the owner receives | A LINE-style phone mock-up with the message typing itself out |
| 7 | After | What changed for staff and for the owner (qualitative) | Before and after side by side |
| 8 | Book | Book a consultation, with the industry pre-selected | Existing booking flow |

The five cases (subject to your real facts; see Question 1):

| Industry | Client description | Core build |
|---|---|---|
| Factories | Packaging manufacturer, about 120 people | Production command view, downtime alerts, daily output brief |
| Logistics | Regional delivery fleet, about 40 trucks | Fleet and delivery view, late-delivery alerts, cost per trip |
| Hotels | Boutique hotel group, 3 properties | Multilingual guest AI desk, revenue view, morning GM brief |
| Travel | Inbound tour agency | Inquiry AI on LINE and WeChat, quote assistant, booking pipeline |
| Restaurants | Casual-dining franchise, 12 branches | Branch comparison view, food-cost alerts, owner brief |

## 4. Leaders: "A personal AI agent, built around you"

Add a **"How your agent is built"** section with a single worked example: an owner who runs three companies.

- **Diagram:** owner's phone (WhatsApp / Telegram; LINE through a connector we build) → **agent gateway** (OpenClaw or Hermes Agent, open-source, MIT) on a **Mac mini in the owner's office** → **Obsidian vault as the second brain** (People / Meetings / Daily / Follow-ups, plain Markdown the owner can open) → email, calendar, documents. The AI model runs locally, or through an enterprise API that doesn't train on the owner's data.
- **Motion:** a message travels from the phone to the agent to the vault and back. The Obsidian-style graph of linked notes grows as the "day" plays out.
- **Mock-ups:**
  - Obsidian-style vault with a person note and a meeting note.
  - Chat thread with the 07:00 brief, a 10:30 meeting prep and an 18:00 follow-up drafts.
- **Accuracy notes**, taken from the projects' own pages:
  - WhatsApp and Telegram are supported natively. LINE and calendar need a connector or skill we build.
  - Inbound messages are treated as untrusted: only paired senders are accepted.
  - Tools run in a sandbox.
- Tool names appear as plain text. No third-party logos.

## Build order

1. Home video frame and the About team section (small).
2. Case page framework plus the **Factories** case, for your review of look and tone.
3. The other four cases.
4. Leaders agent section.
5. Translations into all six languages, mobile check, then deploy to the live Netlify site.
