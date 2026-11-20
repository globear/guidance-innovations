# Image prompts: FDE site backgrounds

Realistic photo backgrounds for the Guidance Innovation FDE site. Every image sits **behind text on a near-black page** (`#0a0a0b`, accent orange `#ff5a1f`).

**Look (v3):** real, **present-day** small and medium Thai businesses, plus the private spaces of high-end individuals.

- **Today, not the future:** laptops, smartphones, a tablet, barcode scanners, forklifts, printed order sheets, a whiteboard plan. No robots or automation. That gap is the room we help them improve.
- **Not the past either:** spaces are modern, tidy, well organised and well lit. Nothing old, worn or dirty.
- **Right-sized:** one warehouse unit, a small factory floor, a boutique hotel, a shopfront office, a single restaurant branch, a condo study. No huge halls or mega-sites.
- **Dark-mode colours, but bright enough:** charcoal and graphite tones, clean white light, one warm orange accent, crisp detail.

---

## 1. Output specs (apply to every image)

| Item | Spec |
|---|---|
| Aspect ratio | **16:9** for all backgrounds, plus one **9:16** for the mobile home hero, and **1.91:1** for the social share image |
| Resolution | Use the model's highest setting, then upscale to **at least 2560 × 1440** (3840 × 2160 is better). Minimum accepted: 1920 × 1080 |
| Mobile hero | **1080 × 1920** minimum (1440 × 2560 is better) |
| Social share | **1200 × 630** |
| Export format | **PNG** (lossless master). Don't hand me pre-compressed JPGs. I'll convert to WebP at 2560 / 1280 px for the site |
| Where to put them | `FDE/public/images/` using the exact filenames below |
| Colour | sRGB |

**Model settings cheat sheet**

- Midjourney: add `--ar 16:9 --style raw --v 7` (mobile: `--ar 9:16`, OG: `--ar 191:100`), then Upscale (Subtle).
- ChatGPT / GPT-image: pick the landscape size, then say "make it 16:9 widescreen" in the prompt; upscale afterwards.
- Flux / Imagen / Ideogram / Nano Banana: set aspect ratio 16:9 and the largest size (2K or 4K).
- If the model has a negative prompt field, paste the **Negative prompt** below into it. If not, the prompts already say "no text, no logos".

**Light rule:** dark-mode colours, but the scene is **properly lit** with clean white light. Subjects are bright and crisp, shadows still show detail. Not dim or smoky.

**Composition rule:** headlines sit on the **left / lower-left**. Keep that side calmer, darker and uncluttered; put the main subject in the **right half**. Inner pages get cropped to a wider strip (about 21:9), so keep the subject in the **middle band** vertically.

**People rule:** no faces looking at the camera and no clear, identifiable faces. Show backs, hands, side views, or people slightly out of focus. That keeps the photos from implying they're your real staff or customers.

### Negative prompt (paste where supported)

```text
text, letters, words, signage, logos, brand names, watermark, readable screen UI, readable labels, people looking at camera, posed stock-photo smiles, handshake, futuristic, sci-fi, robots, robotic arms, automated warehouse, holograms, glowing HUD, huge warehouse, giant factory, vast hall, mega distribution centre, old, worn, dirty, rusty, cluttered, messy, vintage, film grain, haze, smoke, murky, underexposed, oversaturated, neon, plastic skin, extra fingers, distorted hands, cartoon, illustration, 3D render
```

---

## 2. Prompts

Each prompt is complete. Copy the whole block.

### 2.1 Home hero (desktop): `hero-home.png`, 16:9

Used behind the home hero ("AI that works inside your business"), under the animated network graphic.

```text
Realistic present-day photograph of the tidy warehouse of a small Thai trading company in the evening, a single warehouse unit in an industrial estate. On the right side of the frame, a few rows of standard steel pallet racking with neatly stacked cartons, one parked electric forklift, and a packing table with a laptop, a barcode scanner and printed order sheets; one staff member in a company polo shirt, seen from behind, checks a clipboard. Clean concrete floor, bright white LED ceiling lights, a warm orange forklift light as the single accent. The left side of the frame is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Dark charcoal palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, labels not readable.
```

### 2.2 Home hero (mobile): `hero-home-mobile.png`, 9:16

Same scene, vertical. Text sits in the lower half on mobile, so the subject goes in the upper part.

```text
Vertical realistic present-day photograph of the tidy warehouse of a small Thai trading company in the evening, looking down a short aisle of standard steel pallet racking with neatly stacked cartons. In the upper half of the frame, a parked electric forklift and a staff member in a company polo shirt, seen from behind, checking a clipboard. Clean concrete floor, bright white LED ceiling lights, a warm orange forklift light as the single accent. The lower part of the image is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Dark charcoal palette but well lit, crisp detail. 9:16 portrait, no text, no logos, labels not readable.
```

---

### Industry pages (`/industries/...`)

Each one is the page header background and can also be cropped as the industry card thumbnail. Keep the subject in the **centre-right** so both crops work.

### 2.3 Factories: `industry-factories.png`, 16:9

```text
Realistic present-day photograph of the production floor of a small Thai factory that makes packaged consumer goods, about thirty workers in size. On the right side of the frame, a short conveyor line with two standard filling and sealing machines, stainless steel work tables and neatly stacked finished cartons; two workers in clean uniforms and hairnets, seen from the side and slightly out of focus, and a supervisor holding a clipboard beside a whiteboard production plan. Clean painted floor with yellow walkway lines, bright white LED lighting, one warm orange machine status light as accent. The left side is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic, not a huge plant. Dark graphite palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, whiteboard not readable.
```

### 2.4 Logistics: `industry-logistics.png`, 16:9

```text
Realistic present-day photograph of a small Thai transport and delivery company's depot at dusk. On the right side of the frame, three white six-wheel delivery trucks and a pickup truck parked neatly in front of a single warehouse unit with its roller door open and lit inside; two staff load boxes onto a truck from a pallet, and a dispatcher holding a smartphone stands beside them, all seen from behind or the side. Clean concrete yard, bright white floodlights on the building, a warm orange truck light as the single accent. The left side of the frame is calm dusk sky and open yard, darker and uncluttered for text. Tidy, well organised, ordinary modern business, not futuristic, not a large distribution centre. Deep navy and charcoal palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no company names on trucks, no license plates.
```

### 2.5 Hotels: `industry-hotels.png`, 16:9

```text
Realistic present-day photograph of the lobby of a small boutique hotel in Thailand with about thirty rooms, in the evening. On the right side of the frame, a compact wooden reception desk with a laptop, a desk phone and a small vase of orchids; a receptionist in a neat dark uniform, seen from the side and slightly out of focus, helps a guest whose back is to the camera. Modern Thai interior with dark wood, plants and warm lamps, a glimpse of a small lit garden through the glass door. Clean, bright interior light with one warm orange-amber lamp as accent. The left side is calmer and darker, uncluttered space for text. Tidy, welcoming, ordinary modern business, not a grand luxury resort. Charcoal and warm wood palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no readable screen.
```

### 2.6 Travel agencies: `industry-travel.png`, 16:9

```text
Realistic present-day photograph of a small travel agency shopfront office in Bangkok in the early evening, with three desks. On the right side of the frame, a travel consultant seen from behind works at a desk with a laptop, a smartphone and printed itineraries, a customer seated across the desk shown from the side and out of focus; a neat brochure rack on the wall and a glass shopfront behind showing the lit street outside. Clean white interior lighting with a warm orange accent lamp. The left side of the room is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Charcoal and slate palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no readable screens, brochures or documents.
```

### 2.7 Franchise restaurants: `industry-restaurants.png`, 16:9

```text
Realistic present-day photograph of one branch of a Thai casual-dining restaurant chain during evening service, about forty seats. On the right side of the frame, a compact open kitchen counter with stainless steel surfaces, a few plated Thai dishes at the pass, a cook in a clean dark apron and cap plating a dish, and a staff member taking an order on a tablet at the counter, both seen from the side. Clean bright kitchen lighting with warm orange pendant lights over the counter as accent. The left side is the small modern dining area, darker and uncluttered for text. Tidy, well run, ordinary modern business, not futuristic. Charcoal and steel palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no menu boards, tablet screen not readable.
```

### 2.8 Other industries: `industry-other.png`, 16:9

General small company office. There's no "Other" industry page on the site yet (it's only an option in the consultation form), so this one can go on a future "Other industries" card or the For Business page.

```text
Realistic present-day photograph of the office of a small Thai company with about fifteen staff, in the evening. On the right side of the frame, a few desks with laptops and monitors, neat shelves of labelled binders, a printer and a whiteboard with a weekly plan; the owner seen from behind stands at a desk reviewing printed reports. Clean white ceiling lights and one warm orange desk lamp as accent. The left side is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic, not a large corporate office. Graphite palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no readable documents, whiteboard or screens.
```

---

### Other pages

### 2.9 For Business: `page-business.png`, 16:9

```text
Realistic present-day photograph of a Thai business owner in the small office beside their company's warehouse, seen from behind, holding a smartphone and looking through a large interior window onto the warehouse floor. Beyond the window on the right side of the frame, a few rows of pallet racking, a forklift and two staff packing orders under bright white LED lights. Inside the office, a desk with a laptop and a folder of printed reports. One warm orange desk lamp as accent. The left side of the frame is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic, not a huge site. Charcoal palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, screens not readable.
```

### 2.10 For Leaders: `page-leaders.png`, 16:9

Personal AI agent for owners, executives and high-end individuals. A private, personal space, not a corporate tower.

```text
Realistic present-day photograph of the private home study of a successful business owner in a high-end Bangkok condominium, early morning. On the right side of the frame, a dark wood desk with a cup of coffee, a laptop, a smartphone and a leather notebook; a large window behind shows the city waking up in soft dawn light, with the first warm orange glow on the horizon. The owner's hand rests near the phone, the person mostly out of frame. A bookshelf and a reading chair in a comfortable, personal room. Clean, soft interior light. The left side of the room is calmer and darker, uncluttered space for text. Tidy, refined, modern, not futuristic. Charcoal and warm wood palette but well lit, crisp detail, 35mm lens. 16:9 widescreen, no text, no logos.
```

### 2.11 How we work: `page-how-we-work.png`, 16:9

Forward-deployed: the engineer works on site with the team, not from an office.

```text
Realistic present-day photograph of an engineer working on site in the warehouse of a small Thai company. On the right side of the frame, the engineer in a plain dark shirt, seen from behind, sits with an open laptop at a packing table beside a staff member in a company polo shirt who points to a printed order sheet and a clipboard; pallet racking with neatly stacked cartons behind them. Both slightly out of focus, faces not visible. Bright white LED lighting, clean concrete floor, one warm orange accent light. The left side is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Graphite palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, laptop screen and papers not readable.
```

### 2.12 Security & PDPA: skip

Not needed. The Security page now uses a data-flow diagram built into the site (it shows what stays inside the company and what masked text reaches an AI provider), so don't generate a photo for it.

### 2.13 About: `page-about.png`, 16:9

"A small team that works like your own engineers." Shows the work, not staged portraits, so nobody reads them as your actual team.

```text
Realistic present-day photograph of a small engineering team working in the evening in a compact modern office on an upper floor of a Bangkok shophouse. On the right side of the frame, two people seen from behind and slightly out of focus sit at a shared wooden table with laptops and coffee cups, a whiteboard with hand-drawn system diagrams on the wall behind them, city lights through the window. Clean white light and one warm orange desk lamp as accent. The left side is calmer and darker, uncluttered space for text. Tidy, focused, ordinary modern small business, not futuristic. Charcoal palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, whiteboard writing not readable.
```

### 2.14 Consultation: `page-consultation.png`, 16:9

The free 45-minute session. Two people at a table, a conversation, no slides.

```text
Realistic present-day photograph of a one-to-one conversation in the small meeting room of a Thai business owner's office. On the right side of the frame, two people's hands and forearms across a wooden table: one sketching a simple flow diagram on paper with a pen, the other holding a cup of coffee; a laptop to the side. Faces out of frame. Bright late-afternoon light through the window with a warm orange glow, simple modern interior. The left side is calmer and darker, uncluttered space for text. Tidy, relaxed, ordinary modern business, not futuristic. Charcoal and warm wood palette but well lit, crisp detail, 50mm lens. 16:9 widescreen, no text, no logos, sketch not readable.
```

### 2.15 Social share image: `og-share.png`, 1.91:1 (1200 × 630)

Shown when the site link is shared on LINE, Facebook, WeChat etc. I'll put the title text on top in code, so the image itself stays text-free.

```text
Realistic present-day wide photograph of the tidy warehouse of a small Thai trading company in the evening, a few rows of standard steel pallet racking with neatly stacked cartons, a parked electric forklift and a packing table with a laptop on the right side of the frame, bright white LED ceiling lights and a warm orange forklift light as the single accent. The left 60 percent is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Dark charcoal palette but well lit, crisp detail. 1.91:1 wide banner, no text, no logos, labels not readable.
```

---

## 3. Don't generate these

- **Founder photo and founder video** (`media.headshot`, `media.video` in `src/content.ts`). These must be real. An AI face presented as the founder would be misleading. Use a real photo: **4:5 portrait, at least 1600 × 2000, PNG or high-quality JPG**, dark background, clean even light, to match the rest of the site.
- **Dashboard / screen images.** The site draws its own illustrative dashboards in code (`MiniDash`), so keep every screen in the photos unreadable.

## 4. Checklist before you drop them in

- [ ] 14 files, named exactly as above, in `FDE/public/images/`
- [ ] Each 16:9 file is at least 2560 px wide (1920 minimum)
- [ ] Left / lower-left area is calm and dark enough that white text stays readable
- [ ] Looks like today: modern and tidy, but no robots, automation or sci-fi
- [ ] Right-sized for an SME or a private individual: no giant halls or mega-sites
- [ ] No text, logos, readable screens, licence plates, or warped hands
- [ ] Consistent look across the set: dark-mode colours, clean white light, one warm orange accent
