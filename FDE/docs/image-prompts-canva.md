# Image prompts: Canva Dream Lab version

Same 14 images as [image-prompts.md](image-prompts.md), set up for **Canva Dream Lab** so you can compare its results with the other models.

**The prompt text is word-for-word identical to the other file.** What's added is Canva's Style preset for each image, so the comparison is "same prompt, each tool at its best". If you also want a pure model-against-model test, generate a few with Style **None** as well.

---

## 1. Canva settings

Set these three dropdowns under the prompt box before each generation.

| Dropdown | Setting | Why |
|---|---|---|
| **Style** | Per image, see the table below (mostly **Cinematic**) | Canva's style presets are its main strength, so each image gets the preset that fits its scene |
| **Aspect ratio** | As listed per image (16:9 for most) | Matches the other set |
| **Model** | **Canva Craft 1** (the default) | Keep the same model for all 14 so the set looks consistent |

### Style per image

The look is a real, present-day small or medium business: modern and tidy, dark-mode colours, but well lit. The picks lean on two presets:

- **Cinematic:** crisp contrast, rich colour, clean highlights. The default for every scene.
- **Bokeh:** sharp subject with a softly blurred background. Used where the prompt puts a city skyline or people behind the subject.

Backups, only if the main style misses:

- **Stock Photo:** bright, clean, everyday business look. Good for warehouses, offices, hotels and meeting rooms, but check the left side is still dark enough for white text and the people don't look posed.

| # | Image | Style | Backup style (if the first try misses) |
|---|---|---|---|
| 1 | Home hero (desktop) | **Cinematic** | Stock Photo |
| 2 | Home hero (mobile) | **Cinematic** | Use whichever wins for #1 |
| 3 | Factories | **Cinematic** | Stock Photo |
| 4 | Logistics | **Cinematic** | None |
| 5 | Hotels | **Cinematic** | Stock Photo |
| 6 | Travel agencies | **Bokeh** | Cinematic |
| 7 | Franchise restaurants | **Cinematic** | Stock Photo |
| 8 | Other industries | **Cinematic** | Stock Photo |
| 9 | For Business | **Cinematic** | Stock Photo |
| 10 | For Leaders | **Cinematic** | Bokeh |
| 11 | How we work | **Cinematic** | Bokeh |
| 13 | About | **Bokeh** | Cinematic |
| 14 | Consultation | **Bokeh** | Stock Photo |
| 15 | Social share | **Cinematic** | Use whichever wins for #1 |

**Keep the industry set consistent.** The six industry images (#3–#8) show side by side as cards on the Home and For Business pages. If they look uneven next to each other, regenerate the odd one out (travel, on Bokeh) with **Cinematic** so all six match.

**Styles to skip, and why:**

| Style | Why it doesn't fit |
|---|---|
| Moody | Adds haze, smoke and murky shadows. That's the old-school look we're moving away from |
| Portrait | Pulls a face to the centre, looking at the camera. Breaks the no-identifiable-faces rule |
| Minimalist | Light grey, empty backgrounds. Too pale behind white text |
| Vibrant, Pop Art | Saturated colour that clashes with the dark site |
| Ray Traced | Glossy, computer-generated shine. Makes ordinary spaces look high-tech and fake |
| Illustration, Vector, Sketch (both), 3D Render | Not photographs |
| Fashion | Styled, posed people |
| Cinematic Concept, Creative | Drift toward dramatic, fantasy scenes. Less believable as a real Thai business |
| Macro | Extreme close-up. You lose the scene that tells the visitor which industry this is |
| Smart | Canva picks the style for you, so results vary from image to image |

I've judged these from the style names and Canva's preview thumbnails, not from test runs. If a recommended style keeps missing for an image, try its backup before giving up on it.

**Recording what you used:** add the style to the filename, e.g. `industry-logistics-canva-cinematic.png`, so you know which preset produced each image.

**No negative prompt field:** Canva has no box for "things to avoid". The prompts already end with "no text, no logos", which does the same job. If Canva still adds text, signs, robots, an old worn look or a huge space, regenerate rather than editing.

**Long prompts:** if Canva cuts the prompt off or refuses it as too long, delete the sentence starting "Tidy, …" first. It's the least important line.

## 2. Download settings

| Item | Spec |
|---|---|
| Format | **PNG** (Share → Download → PNG). Not JPG |
| Size | The largest size Canva offers. If you're on Canva Pro, use the size slider / Upscale to reach **2560 px wide** or more |
| Filenames | Same names as the other set, with **`-canva`** added, e.g. `hero-home-canva.png` |
| Folder | `FDE/public/images/` next to the other set |

Write down the pixel size of each download. Canva may give you a smaller image than the other model, and that's part of the comparison.

**Social share image:** Canva Dream Lab probably won't offer 1.91:1. Generate it at **16:9** and I'll crop it to 1200 × 630.

**Mobile hero:** use **9:16**. If that isn't in the list, pick the tallest portrait option and note which one you used.

---

## 3. Prompts

Set the Style shown in each heading, then paste the whole block into the Canva prompt box.

### 3.1 Home hero (desktop): `hero-home-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of the tidy warehouse of a small Thai trading company in the evening, a single warehouse unit in an industrial estate. On the right side of the frame, a few rows of standard steel pallet racking with neatly stacked cartons, one parked electric forklift, and a packing table with a laptop, a barcode scanner and printed order sheets; one staff member in a company polo shirt, seen from behind, checks a clipboard. Clean concrete floor, bright white LED ceiling lights, a warm orange forklift light as the single accent. The left side of the frame is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Dark charcoal palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, labels not readable.
```

### 3.2 Home hero (mobile): `hero-home-mobile-canva.png`, 9:16, Style: **Cinematic**

```text
Vertical realistic present-day photograph of the tidy warehouse of a small Thai trading company in the evening, looking down a short aisle of standard steel pallet racking with neatly stacked cartons. In the upper half of the frame, a parked electric forklift and a staff member in a company polo shirt, seen from behind, checking a clipboard. Clean concrete floor, bright white LED ceiling lights, a warm orange forklift light as the single accent. The lower part of the image is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Dark charcoal palette but well lit, crisp detail. 9:16 portrait, no text, no logos, labels not readable.
```

### 3.3 Factories: `industry-factories-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of the production floor of a small Thai factory that makes packaged consumer goods, about thirty workers in size. On the right side of the frame, a short conveyor line with two standard filling and sealing machines, stainless steel work tables and neatly stacked finished cartons; two workers in clean uniforms and hairnets, seen from the side and slightly out of focus, and a supervisor holding a clipboard beside a whiteboard production plan. Clean painted floor with yellow walkway lines, bright white LED lighting, one warm orange machine status light as accent. The left side is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic, not a huge plant. Dark graphite palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, whiteboard not readable.
```

### 3.4 Logistics: `industry-logistics-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of a small Thai transport and delivery company's depot at dusk. On the right side of the frame, three white six-wheel delivery trucks and a pickup truck parked neatly in front of a single warehouse unit with its roller door open and lit inside; two staff load boxes onto a truck from a pallet, and a dispatcher holding a smartphone stands beside them, all seen from behind or the side. Clean concrete yard, bright white floodlights on the building, a warm orange truck light as the single accent. The left side of the frame is calm dusk sky and open yard, darker and uncluttered for text. Tidy, well organised, ordinary modern business, not futuristic, not a large distribution centre. Deep navy and charcoal palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no company names on trucks, no license plates.
```

### 3.5 Hotels: `industry-hotels-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of the lobby of a small boutique hotel in Thailand with about thirty rooms, in the evening. On the right side of the frame, a compact wooden reception desk with a laptop, a desk phone and a small vase of orchids; a receptionist in a neat dark uniform, seen from the side and slightly out of focus, helps a guest whose back is to the camera. Modern Thai interior with dark wood, plants and warm lamps, a glimpse of a small lit garden through the glass door. Clean, bright interior light with one warm orange-amber lamp as accent. The left side is calmer and darker, uncluttered space for text. Tidy, welcoming, ordinary modern business, not a grand luxury resort. Charcoal and warm wood palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no readable screen.
```

### 3.6 Travel agencies: `industry-travel-canva.png`, 16:9, Style: **Bokeh**

```text
Realistic present-day photograph of a small travel agency shopfront office in Bangkok in the early evening, with three desks. On the right side of the frame, a travel consultant seen from behind works at a desk with a laptop, a smartphone and printed itineraries, a customer seated across the desk shown from the side and out of focus; a neat brochure rack on the wall and a glass shopfront behind showing the lit street outside. Clean white interior lighting with a warm orange accent lamp. The left side of the room is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Charcoal and slate palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no readable screens, brochures or documents.
```

### 3.7 Franchise restaurants: `industry-restaurants-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of one branch of a Thai casual-dining restaurant chain during evening service, about forty seats. On the right side of the frame, a compact open kitchen counter with stainless steel surfaces, a few plated Thai dishes at the pass, a cook in a clean dark apron and cap plating a dish, and a staff member taking an order on a tablet at the counter, both seen from the side. Clean bright kitchen lighting with warm orange pendant lights over the counter as accent. The left side is the small modern dining area, darker and uncluttered for text. Tidy, well run, ordinary modern business, not futuristic. Charcoal and steel palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no menu boards, tablet screen not readable.
```

### 3.8 Other industries: `industry-other-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of the office of a small Thai company with about fifteen staff, in the evening. On the right side of the frame, a few desks with laptops and monitors, neat shelves of labelled binders, a printer and a whiteboard with a weekly plan; the owner seen from behind stands at a desk reviewing printed reports. Clean white ceiling lights and one warm orange desk lamp as accent. The left side is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic, not a large corporate office. Graphite palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, no readable documents, whiteboard or screens.
```

### 3.9 For Business: `page-business-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of a Thai business owner in the small office beside their company's warehouse, seen from behind, holding a smartphone and looking through a large interior window onto the warehouse floor. Beyond the window on the right side of the frame, a few rows of pallet racking, a forklift and two staff packing orders under bright white LED lights. Inside the office, a desk with a laptop and a folder of printed reports. One warm orange desk lamp as accent. The left side of the frame is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic, not a huge site. Charcoal palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, screens not readable.
```

### 3.10 For Leaders: `page-leaders-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of the private home study of a successful business owner in a high-end Bangkok condominium, early morning. On the right side of the frame, a dark wood desk with a cup of coffee, a laptop, a smartphone and a leather notebook; a large window behind shows the city waking up in soft dawn light, with the first warm orange glow on the horizon. The owner's hand rests near the phone, the person mostly out of frame. A bookshelf and a reading chair in a comfortable, personal room. Clean, soft interior light. The left side of the room is calmer and darker, uncluttered space for text. Tidy, refined, modern, not futuristic. Charcoal and warm wood palette but well lit, crisp detail, 35mm lens. 16:9 widescreen, no text, no logos.
```

### 3.11 How we work: `page-how-we-work-canva.png`, 16:9, Style: **Cinematic**

```text
Realistic present-day photograph of an engineer working on site in the warehouse of a small Thai company. On the right side of the frame, the engineer in a plain dark shirt, seen from behind, sits with an open laptop at a packing table beside a staff member in a company polo shirt who points to a printed order sheet and a clipboard; pallet racking with neatly stacked cartons behind them. Both slightly out of focus, faces not visible. Bright white LED lighting, clean concrete floor, one warm orange accent light. The left side is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Graphite palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, laptop screen and papers not readable.
```

### 3.12 Security & PDPA: skip

Not needed. The Security page now uses a data-flow diagram built into the site (it shows what stays inside the company and what masked text reaches an AI provider), so don't generate a photo for it.

### 3.13 About: `page-about-canva.png`, 16:9, Style: **Bokeh**

```text
Realistic present-day photograph of a small engineering team working in the evening in a compact modern office on an upper floor of a Bangkok shophouse. On the right side of the frame, two people seen from behind and slightly out of focus sit at a shared wooden table with laptops and coffee cups, a whiteboard with hand-drawn system diagrams on the wall behind them, city lights through the window. Clean white light and one warm orange desk lamp as accent. The left side is calmer and darker, uncluttered space for text. Tidy, focused, ordinary modern small business, not futuristic. Charcoal palette but well lit, crisp detail, 28mm lens. 16:9 widescreen, no text, no logos, whiteboard writing not readable.
```

### 3.14 Consultation: `page-consultation-canva.png`, 16:9, Style: **Bokeh**

```text
Realistic present-day photograph of a one-to-one conversation in the small meeting room of a Thai business owner's office. On the right side of the frame, two people's hands and forearms across a wooden table: one sketching a simple flow diagram on paper with a pen, the other holding a cup of coffee; a laptop to the side. Faces out of frame. Bright late-afternoon light through the window with a warm orange glow, simple modern interior. The left side is calmer and darker, uncluttered space for text. Tidy, relaxed, ordinary modern business, not futuristic. Charcoal and warm wood palette but well lit, crisp detail, 50mm lens. 16:9 widescreen, no text, no logos, sketch not readable.
```

### 3.15 Social share image: `og-share-canva.png`, 16:9 (I'll crop to 1200 × 630), Style: **Cinematic**

```text
Realistic present-day wide photograph of the tidy warehouse of a small Thai trading company in the evening, a few rows of standard steel pallet racking with neatly stacked cartons, a parked electric forklift and a packing table with a laptop on the right side of the frame, bright white LED ceiling lights and a warm orange forklift light as the single accent. The left 60 percent is calmer and darker, uncluttered space for text. Tidy, well organised, ordinary modern business, not futuristic. Dark charcoal palette but well lit, crisp detail. 1.91:1 wide banner, no text, no logos, labels not readable.
```

---

## 4. Comparison sheet

Fill this in as you go. Score 1–5 (5 = best). "Dark left side" means white headline text would be readable there.

| # | Image | Tool | Pixel size | Looks like a real photo | Dark left side | No text / logos | Hands & faces OK | Matches site look | Pick |
|---|---|---|---|---|---|---|---|---|---|
| 1 | hero-home | Canva | | | | | | | |
| 1 | hero-home | Other | | | | | | | |
| 2 | hero-home-mobile | Canva | | | | | | | |
| 2 | hero-home-mobile | Other | | | | | | | |
| 3 | industry-factories | Canva | | | | | | | |
| 3 | industry-factories | Other | | | | | | | |
| 4 | industry-logistics | Canva | | | | | | | |
| 4 | industry-logistics | Other | | | | | | | |
| 5 | industry-hotels | Canva | | | | | | | |
| 5 | industry-hotels | Other | | | | | | | |
| 6 | industry-travel | Canva | | | | | | | |
| 6 | industry-travel | Other | | | | | | | |
| 7 | industry-restaurants | Canva | | | | | | | |
| 7 | industry-restaurants | Other | | | | | | | |
| 8 | industry-other | Canva | | | | | | | |
| 8 | industry-other | Other | | | | | | | |
| 9 | page-business | Canva | | | | | | | |
| 9 | page-business | Other | | | | | | | |
| 10 | page-leaders | Canva | | | | | | | |
| 10 | page-leaders | Other | | | | | | | |
| 11 | page-how-we-work | Canva | | | | | | | |
| 11 | page-how-we-work | Other | | | | | | | |
| 13 | page-about | Canva | | | | | | | |
| 13 | page-about | Other | | | | | | | |
| 14 | page-consultation | Canva | | | | | | | |
| 14 | page-consultation | Other | | | | | | | |
| 15 | og-share | Canva | | | | | | | |
| 15 | og-share | Other | | | | | | | |

When you've picked the winners, tell me which file wins for each row. I'll use those on the site and ignore the rest.

Founder photo: same rule as the other file. Use a real photo, don't generate it.
