# AI Prompt Library for Guidance Innovations

> Quick-reference prompts for maintaining design consistency when building new components with AI assistance.
> Always reference @DESIGN_SYSTEM.md to ensure adherence to established design patterns.

---

## 🎯 Master Prompt (Full Detail)

```
Build a [COMPONENT_NAME] component following @DESIGN_SYSTEM.md guidelines:

- Use dark tech aesthetic with HSL color tokens (primary: hsl(217 91% 60%))
- Apply responsive spacing (px-4 sm:px-6 lg:px-8, section-padding classes)
- Use Inter font for headings (font-display, tight tracking), JetBrains Mono for labels
- Implement Framer Motion scroll animations (fade in from bottom, y: 30)
- Follow mobile-first responsive design (sm/md/lg breakpoints)
- Use .btn-primary/.btn-secondary for buttons with gradient/outline styles
- Apply proper text hierarchy (text-foreground → text-muted-foreground)
- Include hover states (glow effects, scale-105, translateY transitions)
- Add glassmorphism where appropriate (bg-card/80, backdrop-blur-sm)
- Use i18n translation keys (useLanguage hook)
- Ensure accessibility (ARIA labels, focus-visible states)

Match the existing component patterns from the design system documentation.
```

---

## ⚡ Quick Prompt (One-Liner)

```
Create a [COMPONENT_NAME] following @DESIGN_SYSTEM.md: dark tech aesthetic, responsive spacing, Inter/JetBrains Mono fonts, Framer Motion animations, mobile-first design, gradient buttons, proper text hierarchy, hover effects, glassmorphism, i18n support, and accessibility standards.
```

---

## 📦 Component-Specific Prompts

### New Page
```
Create a [PAGE_NAME] page following @DESIGN_SYSTEM.md with:
- Hero section (gradient blobs, grid pattern overlay, min-h-[600px])
- Features/Content sections (section-padding, max-w-7xl container)
- CTA section (btn-primary/secondary with ArrowRight icon)
- Proper spacing (pt-28 sm:pt-32 lg:pt-40 for hero)
- Mobile-first responsive grid layouts
- Framer Motion scroll animations with useInView
```

### Card Component
```
Build a [CARD_TYPE] card following @DESIGN_SYSTEM.md:
- Base: rounded-xl border border-border bg-card p-6 shadow-sm
- Add glow-hover effect for interactive cards
- Text hierarchy: heading (text-foreground), body (text-muted-foreground)
- Responsive padding and grid layout (md:grid-cols-2 lg:grid-cols-3)
- Optional: glassmorphism (bg-card/80 backdrop-blur-sm)
```

### Form Component
```
Create a [FORM_NAME] form following @DESIGN_SYSTEM.md:
- Use react-hook-form with zod validation
- Inputs: bg-background border-border with focus states
- Labels: FormLabel with text-foreground
- Textarea: min-h-[120px] resize-none
- Submit button: btn-primary with loading state (Loader2 icon)
- Error states: FormMessage for validation
- i18n: All text via useLanguage hook
- Responsive layout with proper spacing
```

### Button Component
```
Create a [BUTTON_TYPE] button following @DESIGN_SYSTEM.md:
- Primary: .btn-primary class (gradient with glow effect)
- Secondary: .btn-secondary class (outline with hover state)
- Include icon support (lucide-react, h-4 w-4)
- Hover: box-shadow glow + translateY(-1px)
- Disabled state: opacity-50 pointer-events-none
- Focus: focus-visible:ring-2 focus-visible:ring-ring
```

### Modal/Dialog
```
Build a [MODAL_NAME] modal following @DESIGN_SYSTEM.md:
- Use shadcn Dialog component
- DialogContent: sm:max-w-[SIZE] rounded-2xl
- Background: glassmorphism (bg-card/80 backdrop-blur)
- Header: DialogTitle with font-display text-xl
- Border: border border-border
- Framer Motion: AnimatePresence for enter/exit
- Responsive padding and mobile-friendly
```

### Navigation Component
```
Create a [NAV_TYPE] navigation following @DESIGN_SYSTEM.md:
- Fixed header: fixed top-0 z-50 with backdrop-blur-xl on scroll
- Desktop nav: hidden lg:flex with gap-8
- Mobile: hamburger menu with AnimatePresence
- Links: text-muted-foreground hover:text-foreground transition-colors
- CTA button: btn-primary with icon
- Max width: max-w-7xl mx-auto
- Language switcher integration
```

### Section Component
```
Build a [SECTION_NAME] section following @DESIGN_SYSTEM.md:
- Container: section-container (max-w-7xl, responsive padding)
- Padding: section-padding (py-16 sm:py-20 lg:py-24)
- Background options: bg-background, bg-muted, or bg-gradient-tech
- Optional: gradient blobs for atmosphere
- Optional: grid-pattern overlay (opacity-30 or opacity-15)
- Heading structure: h2 text-3xl sm:text-4xl with text-primary accent
- Framer Motion: useInView for scroll animations
```

### Grid/List Component
```
Create a [GRID_NAME] grid following @DESIGN_SYSTEM.md:
- Base grid: grid gap-8 md:grid-cols-2 lg:grid-cols-3
- Card items: rounded-xl bg-card border border-border p-6
- Hover effects: glow-hover or hover:scale-105 transition-all duration-300
- Responsive gaps: gap-4 md:gap-6 lg:gap-8
- Staggered animations with delay increments (0.2s, 0.3s, 0.4s)
```

### Feature Showcase
```
Build a [FEATURE_NAME] showcase following @DESIGN_SYSTEM.md:
- Feature cards with gradients: gradient-blob backgrounds
- Icons: lucide-react, w-16 h-16 with brand colors
- Gradient overlays: from-primary/20 via-primary/10 to-background
- Interactive: cursor-pointer with hover:scale-105
- Modal integration: Dialog with image/description
- Badge tags: feature-card class with min-w-[180px]
```

### Hero Section
```
Create a [HERO_TYPE] hero following @DESIGN_SYSTEM.md:
- Structure: relative min-h-[600px] overflow-hidden
- Background layers: bg-background + grid-pattern + gradient blobs
- Heading: text-5xl sm:text-6xl lg:text-7xl with tight tracking
- Subheading: text-primary for emphasis
- CTA buttons: btn-primary + btn-secondary with flex gap-4
- Spacing: pt-28 sm:pt-32 lg:pt-40 (account for fixed header)
- Animation: initial opacity 0, y: 30 with staggered delays
- Info stats: font-mono uppercase text-xs with muted colors
```

### Footer Component
```
Build a footer following @DESIGN_SYSTEM.md:
- Border top: border-t border-border bg-background
- Container: section-container with py-12 sm:py-16
- Grid layout: grid sm:grid-cols-2 lg:grid-cols-4 gap-8
- Links: text-muted-foreground hover:text-foreground transition-colors
- Bottom bar: border-t pt-8 with copyright and legal links
- Responsive: flex-col sm:flex-row for bottom content
```

---

## 🎨 Style-Specific Prompts

### Glassmorphism Effect
```
Add glassmorphism to [ELEMENT] per @DESIGN_SYSTEM.md:
- Background: bg-card/80 or bg-background/80
- Backdrop: backdrop-blur-sm (or backdrop-blur-xl for stronger)
- Border: border border-border
- Shadow: shadow-lg for depth
```

### Gradient Background
```
Apply gradient background to [SECTION] per @DESIGN_SYSTEM.md:
- Primary tech gradient: bg-gradient-tech
- Custom: linear-gradient(135deg, hsl(217 91% 60%), hsl(234 89% 63%))
- Add grid-pattern overlay with opacity-15
- Include gradient blobs for atmosphere
```

### Animation Pattern
```
Add Framer Motion animation to [COMPONENT] per @DESIGN_SYSTEM.md:
- Setup: const ref = useRef(null); const isInView = useInView(ref, { once: true, margin: "-100px" });
- Motion: initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
- Stagger children with incremental delays (0.2s, 0.3s, 0.4s)
```

---

## 🔧 Modification Prompts

### Update Existing Component
```
Update [COMPONENT_NAME] to match @DESIGN_SYSTEM.md:
- Review current implementation
- Apply correct color tokens (hsl values)
- Fix responsive spacing if needed
- Add missing hover/focus states
- Ensure i18n compliance
- Verify accessibility standards
```

### Refactor for Consistency
```
Refactor [COMPONENT_NAME] for consistency with @DESIGN_SYSTEM.md:
- Replace hardcoded colors with CSS variables
- Update spacing to use standard classes
- Standardize button styles (btn-primary/secondary)
- Add Framer Motion if missing
- Ensure mobile-first responsive design
- Apply proper text hierarchy
```

---

## 📱 Responsive Design Prompts

### Mobile-First Layout
```
Make [COMPONENT] mobile-first per @DESIGN_SYSTEM.md:
- Base styles for mobile (320px+)
- sm: breakpoint at 640px
- md: breakpoint at 768px
- lg: breakpoint at 1024px
- Pattern: text-base sm:text-lg lg:text-xl
- Layout: flex-col lg:flex-row
- Spacing: px-4 sm:px-6 lg:px-8
```

### Responsive Grid
```
Create responsive grid for [CONTENT] per @DESIGN_SYSTEM.md:
- Base: grid gap-4
- Columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gaps: gap-4 md:gap-6 lg:gap-8
- Container: max-w-7xl mx-auto
```

---

## 🌐 i18n Integration Prompt

```
Add internationalization to [COMPONENT] per @DESIGN_SYSTEM.md:
- Import: import { useLanguage } from "@/contexts/LanguageContext";
- Hook: const { t } = useLanguage();
- Replace all hardcoded text with: {t("section.key")}
- Add translation keys to src/i18n/translations.ts
- Support both English and Chinese
```

---

## ♿ Accessibility Prompt

```
Enhance accessibility for [COMPONENT] per @DESIGN_SYSTEM.md:
- Add ARIA labels: aria-label="Description" aria-expanded={state}
- Ensure focus states: focus-visible:ring-2 focus-visible:ring-ring
- Semantic HTML: use proper tags (nav, section, button vs div)
- Heading hierarchy: h1 → h2 → h3 (no skipping)
- Keyboard navigation: ensure all interactive elements are accessible
- Color contrast: verify text meets WCAG standards
```

---

## 🚀 Quick Start Examples

### Example 1: Create a Pricing Section
```
Create a pricing section following @DESIGN_SYSTEM.md with three tier cards (basic/pro/enterprise), each using rounded-xl bg-card border-border p-6, feature lists with checkmarks, btn-primary for CTA, responsive grid (lg:grid-cols-3), and Framer Motion fade-in animations.
```

### Example 2: Create a Testimonial Component
```
Build a testimonial component following @DESIGN_SYSTEM.md with avatar images, quote text (text-muted-foreground), author name (text-foreground font-medium), company label (font-mono text-xs uppercase), glassmorphism card style, and carousel navigation.
```

### Example 3: Create a Stats Section
```
Create a stats section following @DESIGN_SYSTEM.md with large numbers (text-4xl font-display text-primary), descriptive labels (font-mono uppercase text-xs), grid layout (md:grid-cols-4), animated counter effect, and gradient background with grid-pattern overlay.
```

---

## 💡 Pro Tips

1. **Always start prompts with**: "Following @DESIGN_SYSTEM.md..."
2. **Reference specific sections**: Color System, Typography, Component Patterns
3. **Include examples**: "Like the HeroSection component..."
4. **Be specific about variants**: Primary vs secondary buttons, card vs glass effect
5. **Mention responsive behavior**: Mobile-first, breakpoints, layout shifts
6. **Don't forget i18n**: Always use translation keys
7. **Consider accessibility**: ARIA labels, focus states, semantic HTML

---

## 📚 Related Files

- Main documentation: `@DESIGN_SYSTEM.md`
- Color tokens: `src/index.css` (CSS variables)
- Tailwind config: `tailwind.config.ts`
- Translation keys: `src/i18n/translations.ts`
- Example components: `src/components/`

---

*Last Updated: January 2026*
*Keep this file updated as new patterns emerge*
