# Guidance Innovations - Design System Documentation

> **Version**: 1.0  
> **Last Updated**: January 2026  
> **Purpose**: This document captures all design details for the Guidance Innovations website to ensure consistency across all pages and components.

---

## 🎨 Design Philosophy

The design follows a **Dark Tech / Modern SaaS aesthetic** inspired by Linear and Vercel, featuring:
- Dark, sophisticated color palette
- Bold, gradient-driven visual hierarchy
- Glassmorphism and subtle blurred effects
- Clean, minimalist component design
- Technical, professional typography with monospace accents

---

## 🌈 Color System

### Core Colors (HSL Format)

#### Backgrounds & Surfaces
```css
--background: 240 10% 4%       /* Main dark background */
--foreground: 0 0% 95%         /* Primary text */
--card: 240 10% 6%             /* Card backgrounds */
--card-foreground: 0 0% 95%    /* Card text */
```

#### Primary Brand Colors
```css
--primary: 217 91% 60%         /* Bright blue - main brand */
--primary-foreground: 0 0% 100% /* Text on primary */
--accent: 217 91% 60%          /* Same as primary */
--accent-foreground: 0 0% 100%
```

#### Secondary & Muted
```css
--secondary: 240 10% 12%       /* Subtle backgrounds */
--secondary-foreground: 0 0% 95%
--muted: 240 10% 10%           /* Muted backgrounds */
--muted-foreground: 240 5% 55% /* Muted text */
```

#### Borders & Inputs
```css
--border: 240 10% 14%          /* Subtle borders */
--input: 240 10% 14%           /* Input borders */
--ring: 217 91% 60%            /* Focus rings */
```

#### Utility Colors
```css
--destructive: 0 72% 51%       /* Red for errors/destructive actions */
--destructive-foreground: 0 0% 98%
```

### Gradient Colors

Used for decorative elements and visual interest:

```css
--gradient-blue: 217 91% 60%
--gradient-indigo: 234 89% 63%
--gradient-purple: 258 90% 66%
--gradient-cyan: 192 91% 55%
```

### Pre-built Gradients

#### Primary Tech Gradient
```css
background: linear-gradient(135deg, hsl(217 91% 60%), hsl(234 89% 63%));
```

#### Purple Gradient
```css
background: linear-gradient(135deg, hsl(258 90% 66%), hsl(280 85% 55%));
```

#### Cyan Gradient
```css
background: linear-gradient(135deg, hsl(192 91% 55%), hsl(217 91% 60%));
```

---

## 📝 Typography

### Font Families

```css
--font-display: 'Inter', sans-serif      /* Headings */
--font-body: 'Inter', sans-serif         /* Body text */
--font-mono: 'JetBrains Mono', monospace /* Code/technical labels */
```

**Import**:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

### Heading Styles

All headings use:
- `font-family: var(--font-display)`
- `font-weight: 600`
- `letter-spacing: -0.02em` (tight tracking for modern feel)

### Type Scale & Usage

| Element | Size | Weight | Use Case |
|---------|------|--------|----------|
| H1 (Hero) | 5xl-7xl (48-72px) | 600 | Main hero headlines |
| H2 (Section) | 3xl-4xl (30-36px) | 600 | Section headings |
| H3 (Subsection) | 2xl (24px) | 600 | Subsection titles |
| Body Large | xl-2xl (20-24px) | 400-500 | Subheadlines, important text |
| Body Default | base (16px) | 400 | Regular body text |
| Body Small | sm (14px) | 400 | Secondary information |
| Caption | xs (12px) | 400 | Labels, captions |
| Mono Labels | xs (12px) | 400 | Technical labels, uppercase |

### Responsive Typography Example

```tsx
// Hero headline
<h1 className="text-5xl sm:text-6xl lg:text-7xl">

// Section heading
<h2 className="text-3xl sm:text-4xl">

// Subheadline
<p className="text-xl sm:text-2xl">
```

### Text Colors by Context

- **Primary text**: `text-foreground`
- **Secondary text**: `text-muted-foreground`
- **Reduced opacity**: `text-muted-foreground/60` or `text-foreground/80`
- **On colored backgrounds**: `text-primary-foreground`
- **Labels (uppercase mono)**: `text-muted-foreground font-mono uppercase tracking-wider`

---

## 📏 Spacing & Layout

### Border Radius

```css
--radius: 0.5rem (8px)         /* Base radius */
```

Tailwind utilities:
- `rounded-lg`: `var(--radius)` (8px)
- `rounded-md`: `calc(var(--radius) - 2px)` (6px)
- `rounded-sm`: `calc(var(--radius) - 4px)` (4px)
- `rounded-xl`: 12px (for larger cards)
- `rounded-2xl`: 16px (for mobile menus)

### Container & Section Layout

#### Container Widths
```css
.section-container {
  max-width: 1280px (7xl);
  margin: 0 auto;
  padding: 1rem (mobile) → 1.5rem (sm) → 2rem (lg);
}
```

Usage: `className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"`

#### Section Padding
```css
/* Standard section padding */
.section-padding {
  padding-top/bottom: 4rem (mobile) → 5rem (sm) → 6rem (lg);
}

/* Smaller section padding */
.section-padding-sm {
  padding-top/bottom: 3rem (mobile) → 4rem (sm) → 5rem (lg);
}
```

### Responsive Breakpoints

Following Tailwind defaults:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1400px (custom container max)

### Grid Patterns

Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for feature cards and similar layouts.

---

## 🧩 Component Patterns

### Button Styles

#### Primary Button (Gradient CTA)
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.5rem;
  background: linear-gradient(135deg, hsl(217 91% 60%), hsl(234 89% 63%));
  color: white;
  transition: all 0.2s ease;
  box-shadow: 0 0 20px hsl(217 91% 60% / 0.3);
}

.btn-primary:hover {
  box-shadow: 0 0 30px hsl(217 91% 60% / 0.5);
  transform: translateY(-1px);
}
```

#### Secondary Button (Ghost/Outline)
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid hsl(var(--border));
  background: transparent;
  color: hsl(var(--foreground));
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: hsl(var(--muted));
  border-color: hsl(var(--muted-foreground) / 0.3);
}
```

### Card Styles

#### Standard Card
```tsx
<div className="rounded-lg border border-border bg-card p-6 shadow-sm">
  {/* Content */}
</div>
```

#### Info Card (Glass Effect)
```tsx
<div className="rounded-xl bg-card/80 p-5 border border-border backdrop-blur-sm">
  {/* Content */}
</div>
```

#### Feature Card (Gradient Button Style)
```tsx
<div className="feature-card min-w-[180px] cursor-pointer hover:scale-105 transition-all duration-300">
  {/* Content */}
</div>
```

### Form Elements

#### Input Fields
```tsx
<Input 
  className="bg-background border-border"
  placeholder="Enter value"
/>
```

#### Textarea
```tsx
<Textarea 
  className="bg-background border-border min-h-[120px] resize-none"
  placeholder="Enter message"
/>
```

#### Form Labels
```tsx
<FormLabel className="text-foreground">
  Label Text
</FormLabel>
```

### Navigation

#### Header
- Fixed positioning: `fixed top-0 left-0 right-0 z-50`
- Backdrop blur on scroll: `bg-background/95 backdrop-blur-xl`
- Max width: `max-w-7xl mx-auto`
- Padding: `px-6 py-4`

#### Mobile Menu
- Positioned absolute below header: `absolute left-4 right-4 top-20`
- Rounded card style: `rounded-2xl border border-border bg-card p-6 shadow-lg`
- Framer Motion animations for open/close

---

## ✨ Visual Effects

### Gradient Blobs (Decorative)

Used for atmospheric background effects:

```tsx
{/* Blue gradient blob */}
<div className="gradient-blob gradient-blob-blue absolute right-[-10%] top-1/4 h-[500px] w-[500px]" />

{/* Purple gradient blob */}
<div className="gradient-blob gradient-blob-purple absolute right-[15%] top-1/2 h-[400px] w-[400px]" />

{/* Cyan gradient blob */}
<div className="gradient-blob gradient-blob-cyan absolute left-[10%] bottom-0 h-[300px] w-[300px]" />
```

Properties:
```css
.gradient-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
  pointer-events: none;
}
```

### Grid Pattern Overlay

```tsx
<div className="absolute inset-0 grid-pattern opacity-30" />
```

```css
.grid-pattern {
  background-image: 
    linear-gradient(hsl(var(--border)) 1px, transparent 1px),
    linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### Glow Effects

#### Card Hover Glow
```tsx
<div className="glow-hover">
  {/* Card content */}
</div>
```

```css
.glow-hover {
  transition: box-shadow 0.3s ease;
}

.glow-hover:hover {
  box-shadow: 0 0 40px hsl(217 91% 60% / 0.15);
}
```

### Glassmorphism

For modal/dialog backgrounds:
```css
background: hsl(var(--card) / 0.8);
backdrop-filter: blur(12px);
```

---

## 🎬 Animations & Transitions

### Standard Transitions

```css
transition: all 0.2s ease;  /* Fast interactions (buttons, links) */
transition: all 0.3s ease;  /* Medium (cards, hover effects) */
```

### Framer Motion Patterns

#### Fade In from Bottom
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

#### Fade In from Right
```tsx
<motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
```

#### Scroll-Triggered Animation
```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
  ref={ref}
>
```

#### Staggered Delays
Use incremental delays for sequential elements:
```tsx
transition={{ duration: 0.6, delay: 0.2 }}  // First element
transition={{ duration: 0.6, delay: 0.3 }}  // Second element
transition={{ duration: 0.6, delay: 0.4 }}  // Third element
```

### Hover Transforms

```css
/* Lift on hover */
hover:transform hover:translateY(-1px)

/* Scale on hover */
hover:scale-105

/* Combination */
className="transition-all duration-300 hover:scale-105"
```

---

## 🎯 Interactive States

### Link Hover States

```tsx
// Navigation links
<a className="text-muted-foreground transition-colors hover:text-foreground">

// Footer links
<a className="text-muted-foreground hover:text-foreground transition-colors">
```

### Button States

- **Hover**: Increased glow, slight translateY
- **Disabled**: `disabled:pointer-events-none disabled:opacity-50`
- **Focus**: `focus-visible:ring-2 focus-visible:ring-ring`

### Form Input States

- **Default**: `border-border bg-background`
- **Focus**: Ring with primary color
- **Error**: Red border + error message below

---

## 📱 Responsive Design Approach

### Mobile-First Strategy

Always start with mobile layout, then scale up:

```tsx
// Default = mobile
className="text-5xl sm:text-6xl lg:text-7xl"
className="py-16 sm:py-20 lg:py-24"
className="px-4 sm:px-6 lg:px-8"
```

### Layout Shifts

```tsx
// Stack on mobile, side-by-side on desktop
className="grid lg:grid-cols-2 gap-10"

// Center on mobile, left-align on desktop
className="text-center lg:text-left"
className="justify-center lg:justify-start"
```

### Navigation Breakpoint

Desktop navigation shows at `lg` (1024px+):
- Below 1024px: Show hamburger menu
- Above 1024px: Show full navigation

### Common Responsive Patterns

```tsx
// Hero spacing
className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24"

// Section gaps
className="gap-8 md:gap-10 lg:gap-16"

// Hide/show at breakpoints
className="hidden lg:flex"
className="flex lg:hidden"
```

---

## 🔖 Component Tags & Badges

### Mono Label (Small Uppercase)
```tsx
<p className="text-xs font-mono tracking-wider uppercase text-muted-foreground">
  Label Text
</p>
```

### Info Badge/Pill
```tsx
<span className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-mono">
  Badge Text
</span>
```

### Feature Tag (On Gradient)
```tsx
<span className="px-3 py-1.5 rounded-md bg-primary-foreground/10 text-primary-foreground text-xs font-mono border border-primary-foreground/20">
  Tag Text
</span>
```

---

## 🎨 Section Background Patterns

### Standard Dark Background
```tsx
<section className="bg-background">
```

### Muted Background (Alternate Sections)
```tsx
<section className="bg-muted section-padding">
```

### Full Gradient Background
```tsx
<section className="bg-gradient-tech">
  {/* Add grid pattern overlay */}
  <div className="absolute inset-0 grid-pattern opacity-15" />
</section>
```

### Split Background (Contact Section)
```tsx
<section className="relative">
  {/* Split backgrounds */}
  <div className="absolute inset-0 grid lg:grid-cols-2">
    <div className="bg-gradient-tech" />
    <div className="bg-card" />
  </div>
  
  {/* Grid pattern overlay */}
  <div className="absolute inset-0 grid-pattern opacity-15" />
  
  {/* Content */}
  <div className="relative">
    {/* ... */}
  </div>
</section>
```

---

## 🎭 Specific Component Examples

### Hero Section Structure

```tsx
<section className="relative min-h-[600px] overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-background" />
  
  {/* Grid pattern */}
  <div className="absolute inset-0 grid-pattern opacity-30" />
  
  {/* Gradient blobs */}
  <div className="absolute right-0 top-0 bottom-0 w-2/3">
    <div className="gradient-blob gradient-blob-blue absolute right-[-10%] top-1/4 h-[500px] w-[500px]" />
    {/* More blobs */}
  </div>
  
  {/* Content */}
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
    {/* Hero content */}
  </div>
</section>
```

### Features Grid

```tsx
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {features.map((feature) => (
    <div key={feature.id} className="rounded-xl bg-card border border-border p-6 glow-hover">
      {/* Feature content */}
    </div>
  ))}
</div>
```

### CTA Section

```tsx
<div className="flex flex-wrap justify-center lg:justify-start gap-4">
  <a href="#contact" className="btn-primary">
    Get Started
    <ArrowRight className="h-4 w-4" />
  </a>
  <a href="#products" className="btn-secondary">
    Learn More
  </a>
</div>
```

---

## 🌐 Internationalization (i18n)

All text uses the translation system:

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

const MyComponent = () => {
  const { t } = useLanguage();
  
  return <h1>{t("section.key")}</h1>;
};
```

**Always use** translation keys instead of hardcoded text for consistency.

---

## 🎯 Accessibility Guidelines

### Focus States
- All interactive elements have visible focus states
- Use `focus-visible:ring-2 focus-visible:ring-ring`

### ARIA Labels
```tsx
<button aria-label="Open menu" aria-expanded={isMenuOpen}>
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<nav>`, `<section>`, `<footer>` appropriately

### Scroll Behavior
```css
html {
  scroll-behavior: smooth;
}
```

---

## 🔧 Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(var(--background));
}

::-webkit-scrollbar-thumb {
  background: hsl(var(--border));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--muted-foreground));
}
```

---

## 📋 Quick Reference Checklist

When creating a new component or page, ensure:

- [ ] Uses dark background (`bg-background` or `bg-muted`)
- [ ] Implements responsive spacing (`px-4 sm:px-6 lg:px-8`)
- [ ] Uses section padding classes (`section-padding` or `section-padding-sm`)
- [ ] Text colors follow hierarchy (`text-foreground` → `text-muted-foreground`)
- [ ] Headings use Inter font with tight tracking
- [ ] Labels use mono font when technical/uppercase
- [ ] Buttons use `.btn-primary` or `.btn-secondary` classes
- [ ] Cards have border, rounded corners, and shadow
- [ ] Hover states have appropriate transitions
- [ ] Uses Framer Motion for scroll animations
- [ ] Mobile-first responsive design
- [ ] All text uses i18n translation keys
- [ ] Proper ARIA labels on interactive elements
- [ ] Focus states are visible

---

## 🎨 Design Tokens Summary

```typescript
// For use in TypeScript/JavaScript
export const designTokens = {
  colors: {
    primary: 'hsl(217 91% 60%)',
    background: 'hsl(240 10% 4%)',
    foreground: 'hsl(0 0% 95%)',
    border: 'hsl(240 10% 14%)',
  },
  fonts: {
    display: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
  spacing: {
    sectionPadding: { mobile: '4rem', tablet: '5rem', desktop: '6rem' },
    containerPadding: { mobile: '1rem', tablet: '1.5rem', desktop: '2rem' },
  },
  borderRadius: {
    base: '0.5rem',
    card: '0.75rem',
    large: '1rem',
  },
  animations: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.6s ease',
  },
};
```

---

**End of Design System Documentation**

---

## 📝 Maintenance Notes

- Update this document when adding new components or design patterns
- Keep color values in HSL format for consistency
- Document any new animation patterns
- Add examples for complex layouts
- Version this document with the project

---

*For questions or suggestions about the design system, contact the design team.*
