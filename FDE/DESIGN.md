# Guidance Innovation: design system

This file is the source of truth for how Guidance Innovation pages and apps look, move and read.
Any new module page, landing page or application should follow it. Every value below is taken
from the live site (`src/styles.css`, `src/motion.ts`, `index.html`). If you change a value in the
code, change it here too.

---

## 1. Character

- **Engineering, not marketing.** The look is a technical document: dark ink, thin rules, monospace
  labels, numbered steps, real-looking data. No gradients on buttons, no glossy cards, no stock
  illustrations.
- **One accent.** A single orange (`--accent`) marks what matters: the current step, the primary
  action, the active state, a key number. If everything is orange, nothing is.
- **Lines, not boxes.** Structure comes from 1px hairlines between rows and columns. Cards exist,
  but they are flat panels with a hairline border and no shadow.
- **Plain words.** Copy talks to a busy owner in short sentences: what we do, what you get, what
  it costs, what happens next.
- **Calm motion.** Things reveal as you scroll, once, quickly. Nothing bounces, spins for fun or
  loops forever except small "live" signals.

---

## 2. Colour

### 2.1 Tokens (`:root`)

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0a0a0b` | Page background (dark). Text on orange and on light sections. |
| `--ink-2` | `#111113` | Raised panels on dark: cards, dashboards, chat, dropdown list. |
| `--ink-3` | `#1a1a1d` | Third level: hovered list rows, video placeholder, image wells. |
| `--paper` | `#efeee9` | Light section background. Main text colour on dark. |
| `--paper-2` | `#e4e3dc` | Raised panels inside light sections. |
| `--fg` | `#efeee9` (dark) / `--ink` (light) | Main text. Always use `--fg`, never a raw colour, so light sections flip automatically. |
| `--muted` | `#8b8b86` (dark) / `#5f5f5a` (light) | Secondary text, labels, captions, body copy under headings. |
| `--line` | `rgba(239,238,233,.12)` (dark) / `rgba(10,10,11,.12)` (light) | Hairlines, card borders, table rules. |
| `--line-strong` | `rgba(239,238,233,.24)` (dark) / `rgba(10,10,11,.28)` (light) | Button outlines, inputs, emphasised borders. |
| `--accent` | `#ff5a1f` | Brand orange. Primary buttons, active states, step numbers, bullets, key figures. |

### 2.2 Light sections

Add `class="section light"` to flip a section to paper. `.light` redefines `--fg`, `--line`,
`--line-strong` and `--muted`, so components inside need no extra rules as long as they use tokens.
Things that are drawn as **devices** (the phone mock, the terminal, the video call) stay dark inside
a light section; `.light .phone` resets the tokens back to dark values for that reason.

**Rhythm:** alternate dark and light sections down a page. Never stack two light sections. Two
dark sections in a row are fine only when one is a full-bleed visual (hero, pinned scroller).

### 2.3 Accent tints

| Value | Use |
|---|---|
| `rgba(255,90,31,.05)`–`.06` | Background of an active card or layer (`.lm-job.on`, `.ag-stack li.on`). |
| `rgba(255,90,31,.12)` | Soft halo around an accent disc (`box-shadow: 0 0 0 10px …`). |
| `rgba(255,90,31,.45)`–`.5` | Accent strokes and "masked data" pipes. |

### 2.4 Fixed colours (only where listed)

| Value | Where | Why |
|---|---|---|
| `#0f1011` | `.phone` body | A phone stays dark in any section. |
| `#1d1e21` | Chat bubbles (incoming) | Readable grey bubble on the phone. |
| `#141416` | Obsidian vault panel | Matches Obsidian's own dark UI. |
| `#0d0d0f`, `#070708` | Video-call mock, terminal | Device screens. |
| `#2a2b2f` | Avatar initials, terminal dots | Neutral chips on device screens. |
| `#a78bfa` | `[[wiki links]]` in notes | Obsidian's link colour; only for note links. |
| `#8fd18a` | Terminal "ok" lines | Success in a terminal log only. |
| `#d33` | "End call" button | Only on the call mock. |

Do not introduce other colours. Status, charts and highlights use `--fg`, `--muted` and `--accent`.

### 2.5 Data colours

- **Series:** primary series in `--fg`, the series that needs attention (late, low, over budget) in
  `--accent`, background bars and grid in `--line`.
- **Targets:** a dashed line (`stroke-dasharray`) in `--muted`.
- **Alerts:** left border 2px `--line-strong`; a warning swaps the border to `--accent`.
- Never use red/green pairs for good/bad. Use orange for "needs you" and neutral for "fine".

---

## 3. Typography

### 3.1 Families (Google Fonts, loaded in `index.html`)

| Token | Stack | Use |
|---|---|---|
| `--sans` | `"Inter Tight"`, `"IBM Plex Sans Thai"`, CJK stack, `system-ui`, `sans-serif` | Headings and body. |
| `--mono` | `"IBM Plex Mono"`, `"IBM Plex Sans Thai"`, CJK stack, `ui-monospace`, `monospace` | Labels, eyebrows, buttons, numbers in lists, data, nav. |
| `--cjk` | `"PingFang SC"`, `"Hiragino Sans GB"`, `"Microsoft YaHei"`, `"Noto Sans SC"` (Traditional Chinese swaps in the TC fonts) | Chinese fallback. |

Weights loaded: Inter Tight 300/400/500/600/700, IBM Plex Mono 400/500, IBM Plex Sans Thai 300/400/500/600.
**Headings use 500.** 600 is only for the brand name and avatar letters. Never use 700+ for text.

### 3.2 Scale

| Class | Size | Line height | Tracking | Use |
|---|---|---|---|---|
| `.h-display` | `clamp(44px, 8.2vw, 128px)` | .95 | -.035em | Home hero, closing CTA. One per page at most. |
| `.h1` | `clamp(40px, 6vw, 88px)` | 1 | -.03em | Page title in the page header. |
| `.h2` | `clamp(32px, 4.4vw, 64px)` | 1.04 | -.025em | Section title. |
| `.h3` | `clamp(22px, 2vw, 28px)` | 1.2 | -.01em | Card and step titles. |
| `.lead` | `clamp(18px, 1.6vw, 22px)` | 1.5 | 0 | Intro paragraph under an h1/h2. `--muted`, max 640px wide. |
| body | 17px | 1.55 | 0 | Default text. |
| small body | 15px | 1.45–1.5 | 0 | Card lists, captions, secondary paragraphs. |
| `.mono` | 13px | inherit | .04em | Inline technical text. |
| `.eyebrow` | 12px mono, uppercase | — | .14em | Section label with an 8px orange square before it. |
| micro label | 10–11px mono, uppercase | — | .08–.12em | Table heads, chips, dashboard labels, footer headings. |
| big number | `clamp(44px, 5.4vw, 84px)`, 500, tabular figures | .95 | -.035em | Case study results (`.case-stats b`). |

Rules:
- Headings are sentence case and usually end with a full stop ("Tell us one problem.").
- Mono labels are UPPERCASE via CSS (`text-transform`), written in sentence case in the content.
- Keep headings short: page title max ~16ch (`.page-title`), hero title ~13ch.
- Body paragraphs: max ~46–68ch. Use `--muted` for paragraphs under a heading, `--fg` for the
  one line that must be read (e.g. a card's promise).
- Numbers that change or line up (KPIs, prices, times) use `font-variant-numeric: tabular-nums`.

### 3.3 Language overrides (already in the CSS, keep them working)

| Language | What changes |
|---|---|
| Thai (`th`) | Body line height 1.75; headings smaller and taller (h2 `clamp(28px,3.6vw,52px)`, line height 1.3, no negative tracking); mono labels tracking .02em; nav in sans 14px. |
| Chinese (`zh-Hans`, `zh-Hant`) | Body line height 1.75; same smaller heading scale as Thai; tracking 0 on headings, .06em on labels; Traditional uses TC fonts. |
| Vietnamese, Malay (`vi`, `ms`) | Slightly smaller display/h1; wider title max-widths (20–22ch) for longer words; extra top padding for stacked accents. |

Any new heading or label class must get the same overrides, or add the class to the existing
selector lists in `styles.css`.

---

## 4. Layout

### 4.1 Container and spacing

| Token / class | Value |
|---|---|
| `--max` | `1440px` content width |
| `--gutter` | `clamp(16px, 4vw, 56px)` side padding (16px on phones) |
| `.wrap` | `max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter)` |
| `.section` | `padding: clamp(96px, 14vw, 180px) 0` |
| `.section.tight` | `padding: clamp(64px, 9vw, 120px) 0` |
| `.page-head` | `padding: 180px 0 clamp(64px, 8vw, 110px)`; with photo: `min-height: min(78svh, 760px)` |
| Nav height | 68px, fixed; content below it never sits under it (sticky items use `top ≥ 96px`). |

Spacing steps used across the site: **6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 48, 56, 64, 72, 80, 96px.**
Typical gaps: heading → lead 24px; section header block → content 56–64px; card padding 22–28px;
list row padding 14–28px; button group gap 12px. Large gaps use `clamp()` so they shrink on phones.

### 4.2 Grids

| Class | Columns | Notes |
|---|---|---|
| `.split` | `1fr 1.2fr`, gap `clamp(32px, 6vw, 96px)` | Default section header: eyebrow left, h2 + lead right. One column under 900px. |
| `.cols-2/3/4` | equal columns with hairline dividers | Cells (`.cell`) separated by `--line`; one column under 900px. |
| `.checks` | 2 CSS columns | Checklist with orange outline squares; `.checks.one` forces one column. |
| `.lm` | `1fr minmax(260px,380px) 1fr` | Hub-and-spoke map (Leaders). 2 columns under 1000px, 1 under 640px. |

### 4.3 Breakpoints

| Width | What happens |
|---|---|
| ≤ 1180px | Nav links hide, MENU button shows. |
| ≤ 1000–1023px | Pinned scroll sections stop pinning; wide grids drop to 2 columns. |
| ≤ 900px | **Main breakpoint.** Splits, column grids, checklists and most two-panel layouts go to one column. |
| ≤ 700–760px | Forms go to one column; photo shades switch to a vertical gradient; small dashboards go 2-up. |
| ≤ 480px | Smallest tweaks (dashboard 2-up, hide optional hints). |

Pinned "scrollytelling" only runs when `(min-width: 1024px) and (min-height: 760px)`. Below that,
use tap-to-switch tabs. Every page must work at 375px wide with no sideways scroll.

---

## 5. Surfaces, borders, radius

- **Border:** always 1px. `--line` for structure, `--line-strong` for controls and emphasis,
  `--accent` for the active or recommended item.
- **Radius:** **0 everywhere.** Exceptions: circles (avatars, play button, dots, the map hub), the
  phone mock (28px) and chat bubbles (4px 16px 16px 16px; outgoing mirrored).
- **Shadow:** none, except the dropdown list (`0 24px 48px rgba(0,0,0,.45)`) and the accent halo.
  Depth comes from `--ink` → `--ink-2` → `--ink-3`.
- **Panels:** `border: 1px solid var(--line); background: var(--ink-2)` (or `--paper-2` in light).
- **Grid background:** `.grid-bg` draws an 80px hairline grid with a radial fade; used behind page
  headers without a photo.

---

## 6. Components

Use these before inventing new ones. Class names are the real ones in `styles.css`.

### Eyebrow
`<span class="eyebrow">Section label</span>` → 12px mono uppercase, `--muted`, 8px orange square
before it. Every section starts with one, top-left of a `.split`.

### Buttons (`.btn`)
- Mono 13px uppercase, tracking .08em, padding 16px 22px, 1px `--line-strong` border, no radius.
- Hover: a fill wipes up from the bottom (`::after`, `scaleY` 0 → 1, .45s `cubic-bezier(.7,0,.2,1)`),
  text flips to `--ink` (to `--paper` in light sections). The arrow moves 4px right.
- `.btn.primary`: orange fill, ink text. **One primary button per view.**
- Always end a call to action with the `<Arrow />` component (→).

### Navigation
Fixed 68px bar. Transparent at top; after scrolling, `rgba(10,10,11,.78)` with a 14px backdrop blur
and a bottom hairline. Links are mono 12px uppercase `--muted`; the active link is `--fg` with a 1px
orange underline 6px below. Right side: language switch (globe icon + code), then the primary
"Book consultation" button.

### Page header (`PageHead`)
Eyebrow (scramble reveal) → `.h1.page-title` (split reveal) → `.lead`. With a photo: the image at
70% opacity under a left-to-right and bottom shade that ends in `--ink`. It also sets the tab title
(`<page name> | Guidance Innovation`).

### Section header
```
<div class="split">
  <span class="eyebrow">Label</span>
  <div><h2 class="h2" data-split>Title.</h2><p class="lead" data-fade>One or two sentences.</p></div>
</div>
```

### Numbered items
Step numbers are mono 12px `--accent`, written `01`, `02`… (`.k`). Use them on cells, steps,
timelines and cards. Rows are separated by hairlines, not boxes.

### Cards
- **Cell** (`.cell`): open cell in a `.cols-*` grid; number, h3, muted paragraph.
- **Panel card** (e.g. `.lm-job`): `--ink-2` fill, `--line` border, 26px padding, number → h3 →
  one `--fg` promise line → 3–4 short bullets (7px orange outline squares). Active state: accent
  border + 5% accent tint.

### Checklist (`.checks`)
Rows with a top hairline and a 10px orange outline square. For guarantees and commitments.

### Timeline (`.timeline`)
Mono orange time, h3, muted text. `.timeline.compact` for narrow columns.

### FAQ (`.faq`)
`<details>` rows with hairlines; summary 18–21px 500; an orange mono `+` that turns 45° when open.

### Forms
- Fields are underlined, not boxed: label (mono 11px uppercase muted) above an input with no border;
  the row's bottom hairline turns orange on focus.
- Input text 18px. Placeholders `--muted` at 55% opacity.
- Dropdowns use `components/Select.tsx` (site-styled list, keyboard support), never a native
  `<select>`.
- Consent checkbox uses `accent-color: var(--accent)`.
- Errors: a box with an orange border and a plain-language fix.
- Success: a `--ink-2` panel with a 48px orange square check mark.

### Chips and tags
- `.chip`: 1px `--line-strong` border, 13px text; hover turns border and text orange.
- `.tag`: mono 10px uppercase on solid orange (e.g. "Recommended").
- `.case-label`: mono 11px uppercase in a `--line-strong` outline, for "Example setup", "Illustrative data".

### Data displays
- KPI strip: mono 10px label, value `clamp(22px,2.2vw,30px)` 500 tabular, small unit in `--muted`.
- Bars: 6px track in `--line`, fill `--fg`, problem bars `--accent`.
- Line charts draw in on first view (`stroke-dashoffset` animation).
- Always label sample numbers as sample/illustrative.

### Devices (mock-ups)
- **Phone** (`.phone`): 28px radius, `#0f1011`, header with an orange "G" avatar, bubbles that
  arrive one by one with a typing indicator. Outgoing bubbles are orange with ink text.
- **Obsidian vault** (`.ag-vault`): folder list + 3D note graph (draggable) + a note card with
  purple `[[links]]`.
- **Terminal, video call, dashboard**: dark device frames inside any section.

### Closing CTA (`CTA`)
Every page ends with it: `.h-display` "Tell us one problem." plus the primary booking button.

### Footer
Hairline on top; 4 columns (`2fr 1fr 1fr 1.2fr`, 2 columns under 800px); mono 11px uppercase
headings; links 15px, hover orange; base row in mono 11px with the legal name, Privacy and Terms.

---

## 7. Icons

- Inline SVG only, drawn with strokes: `fill: none; stroke: currentColor` (or `--accent`),
  `stroke-width` 1.1–1.4, round joins. Sizes 12–18px.
- Arrows are the `<Arrow />` component (text →), not an icon font.
- No emoji in the UI. Simple text glyphs are fine where already used: ▶ play, + FAQ, ✕ marquee
  separator, ✓ success.

---

## 8. Imagery

- Real photos of operations (factories, fleets, hotels, kitchens, offices, Bangkok events), in
  `public/images/` as `.webp`, with a `-1280` version for smaller screens and a mobile crop where
  needed.
- Photos always sit under a dark shade so text stays readable: hero/page header at 55–70% opacity
  with `rgba(10,10,11,…)` gradients; industry cards at 50% (70% on hover, slow 1.04 zoom).
- No illustrations, no 3D renders, no AI-generated people. Diagrams are drawn in SVG with the
  tokens above.
- Team photos: square, slight desaturation (`grayscale(.15)`) that lifts on hover.

---

## 9. Motion

### 9.1 Engine
- Smooth scroll: **Lenis**, `duration: 1.15`, ease-out quart. Programmatic scrolling must go through
  `lenis.scrollTo`.
- Scroll reveals: **GSAP + ScrollTrigger**, wired automatically by data attributes (`src/motion.ts`).
  Each reveal runs **once**.

### 9.2 Data attributes

| Attribute | Effect |
|---|---|
| `data-split` | Headline splits into words that rise from a mask (1.1s, `power4.out`, .04s stagger). `data-split="now"` runs on load. |
| `data-fade` | Fades up 40px (1.1s, `power3.out`). Optional number = delay. |
| `data-stagger` | Children fade up 50px one after another (1s, .1s stagger). Use on lists and grids. |
| `data-scramble` | Text decodes from random characters. Eyebrows in page headers only. |
| `data-count` | Number counts up (1.8s). |
| `data-bar` | Bar grows to the given % (1.6s). |
| `data-draw` | SVG path draws itself (2s). |
| `data-parallax` | Slow vertical parallax. Photos only, small values. |

### 9.3 Timing and easing

| Curve | Use |
|---|---|
| `cubic-bezier(.7,0,.2,1)` | Wipes: button fill, menu slide, page curtain. |
| `cubic-bezier(.2,.7,.2,1)` | Soft settle: image zoom, hover scale. |
| `cubic-bezier(.6,0,.2,1)` | Data: bars filling, lines drawing. |
| `ease` | Colour and border changes. |

Durations: hovers .3–.45s; reveals 1–1.1s; data 1.2–2s; looping "live" signals 1–1.8s (pulse dot,
typing dots, flowing pipe dots). Auto-cycling highlights (map jobs, stack layers) step every
0.7–2.6s and **stop when the user points at an item**.

### 9.4 Reduced motion
`prefers-reduced-motion: reduce` turns off all animations and transitions. Anything that only
appears through an animation (drawn lines, chat messages, graph nodes) must render in its final
state instead. Check this for every new animated component.

---

## 10. Writing

- **Voice:** "we" (Guidance Innovation) talking to "you" (the owner or leader). Short sentences.
  No jargon a business owner wouldn't use; explain technical names once ("Obsidian vault: plain
  notes on your own private server").
- **Promise, then proof:** say what changes for them, then show a number, a step or an example.
- **Be honest:** sample data is labelled as sample; tools are "chosen to fit each client"; we never
  promise what isn't built.
- **Control lines:** where AI acts for someone, say they stay in charge ("Nothing is sent, booked
  or agreed without your OK.").
- **Formatting:** sentence case; full stops on headings; middle dot `·` to separate short items in
  labels ("WhatsApp · LINE · Telegram"); no exclamation marks.
- **Names:** "Guidance Innovation" in copy; "Guidance Innovation Co., Ltd." for the legal entity
  (footer, homepage registration line, legal pages); "Guardian Care" for the monthly support plan;
  "Guardian Inno Interface" for the analysis tool.
- **Contact (use these exact values from `src/content.ts`):** info@guidanceinnovations.tech ·
  WhatsApp +66 98 486 2094 · guidanceinnovations.tech.

---

## 11. Languages

The site ships in six languages: English (source), Thai, Simplified Chinese, Traditional Chinese,
Malay, Vietnamese.

- All visible text lives in content files (`content*.ts`, `src/locales/*.ts`, `agent.ts`,
  `journey.ts`, `legal.ts`), never hard-coded in components. Add every new string in all six.
- Chinese uses the formal 您.
- Thai keeps established English terms where the Thai copy already does ("AI Agent",
  "Forward-Deployed").
- Design for the longest language: Malay and Vietnamese run ~30% longer than English; Thai needs
  taller lines. Test new layouts in Thai and Vietnamese at 375px.

---

## 12. Accessibility

- Contrast: `--fg` on `--ink` and `--ink` on `--paper` pass AA. `--muted` is for secondary text
  only, never for anything a user must read to act.
- Ink text on orange (buttons, tags, avatars), never white on orange.
- Focus: visible orange outline or underline (`:focus-visible`), never removed without a replacement.
- Interactive custom controls (Select, tabs, dialogs) need keyboard support and ARIA roles, like
  `Select.tsx` and the journey tabs.
- Decorative SVGs get `aria-hidden`. Images get real `alt` text.
- Tap targets ≥ 40px on phones.

---

## 13. Do / don't

| Do | Don't |
|---|---|
| Use tokens (`var(--fg)`, `var(--line)`) so light sections work. | Hard-code `#fff`, `#000` or a new grey. |
| Separate content with hairlines and numbered rows. | Wrap every block in a shadowed rounded card. |
| Keep one orange focus per view. | Colour several things orange "to make them pop". |
| Start each section with an eyebrow + h2. | Use centred hero-style headings mid-page. |
| Show a real-looking example (chat, dashboard, note). | Use stock icons grids or generic illustrations. |
| Label sample data as sample. | Present invented numbers as client results. |
| Reuse `.btn`, `.checks`, `.timeline`, `Select`, `PageHead`, `CTA`. | Build a new button or dropdown style. |
| Test at 375px, 768px and 1440px, in Thai. | Check only the English desktop view. |

---

## 14. Checklist for a new page or module

1. Page uses `PageHead` (eyebrow, h1, lead, optional photo) and ends with `CTA`.
2. Sections alternate dark / light; each opens with `.split` → eyebrow + `.h2` (+ `.lead`).
3. Only tokens for colour; only the listed type classes; spacing from the steps in §4.1.
4. One primary button in view; all CTAs end with `<Arrow />`.
5. Reveals via data attributes; anything animated also renders correctly with reduced motion.
6. All text in the content files, in six languages.
7. No sideways scroll at 375px; layout checked at ≤900px and ≥1024px; Thai and Vietnamese checked.
8. Tab title set (via `PageHead` or `useTitle`), no console errors, links go to real routes.
