# Content review: does each section earn trust?

This review covers every page and section of the FDE site, checked on 2026-11-20 against two rules:

1. Each section gives an owner a concrete reason to trust us or take the next step.
2. Nothing is invented. Every claim is either a commitment we make or a fact from guidanceinnovations.tech: no made-up clients, numbers or testimonials.

## Promises that must stay the same everywhere

| Promise | Where it appears |
|---|---|
| Free 45-minute consultation | Home closing call to action, Engagement step 1, Consultation lead and next steps, FAQ |
| Reply within one business day | Consultation next steps, thank-you message, error message |
| Quoted after the consultation, fixed scope, no open-ended projects | Engagement lead, FAQ "How much does it cost?", Consultation next step 3 |
| Discovery is one week on site; first working system in 2–6 weeks | Method timeline, Engagement steps, FAQ |
| Data not used to train AI; Private / Hybrid / Managed; PDPA data processing agreement | Security page, Home security teaser, FAQ, demo chat answer |
| AI answers in Thai, English and Chinese | Capabilities, Hotels industry page, FAQ |

All of these agree in the English copy and in all five translations. If one changes, update every place listed.

## Page by page

| Page | Section | What builds trust | Status |
|---|---|---|---|
| Home | Hero | A plain promise ("AI that works inside your business") and a lead that explains forward-deployed engineering in owner terms; photo of a real-sized SME warehouse | ✓ |
| Home | Problem | Three problems owners recognise: scattered data, late reports, gut-feel decisions | ✓ |
| Home | Two paths | Clear split between companies and individual leaders, with who each is for (10–200 people; owners and executives) | ✓ |
| Home | Industries | Five industries with a photo and a sample dashboard each, linking to detail pages | ✓ |
| Home | Method | Five steps with week-by-week timing | ✓ |
| Home | Founder | Reed's real headshot and a real photo of him speaking at AI Summit; link to the proof on About | ✓ (link added in this review) |
| Home | Demo | Owner-style questions answered from data, clearly labelled "Demo · sample data" | ✓ |
| Home | Security teaser | Six written commitments plus a link to the full Security page | ✓ |
| Home | FAQ | Cost, timeline, replacing software, IT team, data safety, languages | ✓ |
| Business | Header, offers | Four concrete products (customer desk, command view, knowledge brain, briefings) | ✓ |
| Business | Industries, engagement | Where we work; four steps with fixed scope and pricing after consultation | ✓ |
| Business | FAQ | Same answers as Home | ✓ |
| Leaders | Day with your agent | A concrete day from 07:00 to 21:00 | ✓ |
| Leaders | Confidential by default | Who controls the infrastructure; nothing reused or used for training | ✓ |
| Leaders | Preview, booking | Demo chat; "Book a private demo" pre-selects "For Leaders" in the form | ✓ |
| Industries ×5 | Header photo, problems | Each industry's own pains, in owner language | ✓ |
| Industries ×5 | Dashboard | Labelled "Illustrative command view", so it isn't mistaken for a client's data | ✓ |
| Industries ×5 | What we build, booking | Three specific builds; the booking button pre-selects the industry | ✓ |
| How we work | Method, principles | On site, use what you have, we stay | ✓ |
| How we work | Engagement | Same four steps as Business, so pricing and timing are explained here too | ✓ (added in this review) |
| Security | Data-flow diagram | Shows exactly what stays inside and what masked text leaves, for each deployment mode | ✓ |
| Security | Modes, commitments, PDPA | Where data lives and AI runs; eight written commitments; data processor role under PDPA | ✓ |
| About | Founder | Real headshot and stage photo | ✓ |
| About | Proof of work | GuidanceStream and CareRouters, as described on guidanceinnovations.tech | ✓ |
| About | In the field | Four real event photos (AI Summit, Cursor meetup, two Brew & Build sessions) | ✓ |
| About | Capabilities, company | Legal name, Thailand, email, WhatsApp | ✓ |
| Consultation | Form | Working form (tested live on Netlify), consent box with a privacy link, honeypot | ✓ |
| Consultation | Next steps, contact | What happens after booking; direct email and WhatsApp; fallback if sending fails | ✓ |
| Consultation | FAQ | Answers the last questions before booking | ✓ |
| Every page | Footer | Legal name, Thailand, email, WhatsApp, privacy policy, terms | ✓ |

## Translations

All new copy exists in English, Thai, Simplified Chinese, Traditional Chinese, Malay and Vietnamese. I reviewed them and fixed the following:

- Sentence-ending punctuation after the privacy link: none in Thai, "。" in Chinese.
- More natural wording for "In the field" (Thai, Vietnamese).
- "No slides" (Chinese, Vietnamese).
- The Security diagram heading (Thai, Vietnamese).

A native speaker should still read the Thai, Chinese, Malay and Vietnamese copy before a wide launch. That needs a person and can't be checked in code.

## What would make it stronger (needs you)

- **Client results.** Real client names, quotes or numbers, with each client's permission, are the strongest trust signal still missing. None were added, because none could be confirmed.
- **Founder video.** A 60–90 second message from Reed. The frame is ready: put the file in `public/` and set `media.video` in `src/content.ts`.
- **Own domain.** Visitors trust a company domain more than a netlify.app address.
