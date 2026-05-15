# Design Language: About Our Clinic | Dentix

> Extracted from `https://dentix.framer.website/our-clinic` on May 15, 2026
> 1660 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#5b7a12` | rgb(91, 122, 18) | hsl(78, 74%, 27%) | 21 |
| Secondary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 458 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 2604 |
| `#ffffff` | hsl(0, 0%, 100%) | 193 |
| `#838996` | hsl(221, 8%, 55%) | 35 |
| `#6b7280` | hsl(220, 9%, 46%) | 26 |
| `#4b5363` | hsl(220, 14%, 34%) | 24 |
| `#f9fafb` | hsl(210, 20%, 98%) | 22 |
| `#e5e7eb` | hsl(220, 13%, 91%) | 3 |

### Background Colors

Used on large-area elements: `#f3f4f6`, `#ffffff`, `#f9fafb`, `#5b7a12`

### Text Colors

Text color palette: `#000000`, `#ffffff`, `#6b7280`, `#0000ee`, `#5b7a12`, `#838996`, `#4b5363`

### Gradients

```css
background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 2604 |
| `#0000ee` | text, border | 458 |
| `#ffffff` | background, text, border | 193 |
| `#838996` | text, border, background | 35 |
| `#6b7280` | text, border | 26 |
| `#4b5363` | text, border | 24 |
| `#f9fafb` | background | 22 |
| `#5b7a12` | background, text, border | 21 |
| `#e5e7eb` | background | 3 |

## Typography

### Font Families

- **Manrope** — used for all (543 elements)
- **Times** — used for body (28 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 72px | 4.5rem | 600 | 79.2px | -2.88px | h1, span |
| 48px | 3rem | 500 | 48px | -1.44px | span, h2 |
| 40px | 2.5rem | 600 | 48px | -2px | h3 |
| 32px | 2rem | 600 | 38.4px | -1.28px | p, span |
| 24px | 1.5rem | 600 | 31.2px | -1.2px | p |
| 18px | 1.125rem | 400 | 27px | normal | p |
| 16px | 1rem | 400 | normal | normal | html, head, meta, script |
| 14px | 0.875rem | 500 | 16.8px | normal | p, a |
| 12px | 0.75rem | 400 | normal | normal | body, script, div, style |

### Heading Scale

```css
h1 { font-size: 72px; font-weight: 600; line-height: 79.2px; }
h2 { font-size: 48px; font-weight: 500; line-height: 48px; }
h3 { font-size: 40px; font-weight: 600; line-height: 48px; }
```

### Body Text

```css
body { font-size: 32px; font-weight: 600; line-height: 38.4px; }
```

### Font Weights in Use

`400` (1148x), `600` (463x), `500` (49x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-40 | 40px | 2.5rem |
| spacing-48 | 48px | 3rem |
| spacing-64 | 64px | 4rem |
| spacing-80 | 80px | 5rem |
| spacing-99 | 99px | 6.1875rem |
| spacing-160 | 160px | 10rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| md | 10px | 1 |
| lg | 16px | 9 |
| xl | 20px | 43 |
| full | 40px | 2 |
| full | 100px | 79 |

## Box Shadows

**sm (inset)** — blur: 0px
```css
box-shadow: rgb(0, 0, 0) 0px 0px 0px 1px inset;
```

**xs** — blur: 1.56569px
```css
box-shadow: rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px;
```

**xs (inset)** — blur: 2px
```css
box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px, rgba(255, 255, 255, 0.25) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0.25) 0px -1px 1px 1px inset;
```

**sm** — blur: 3px
```css
box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 3px 0px;
```

**md** — blur: 12px
```css
box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 12px 0px;
```

## CSS Custom Properties

### Other

```css
--one-if-corner-shape-supported: 1;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 809px | max-width |
| md | 810px | min-width |
| 900px | 900px | min-width |
| lg | 999px | max-width |
| 1199px | 1199px | max-width |
| 1200px | 1200px | max-width |

## Transitions & Animations

### Common Transitions

```css
transition: all;
```

### Keyframe Animations

**__framer-loading-spin**
```css
@keyframes __framer-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (2 instances)

```css
.button {
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 40px;
}
```

### Cards (6 instances)

```css
.card {
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 12px 0px;
  padding-top: 80px;
  padding-right: 48px;
}
```

### Links (36 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

### Navigation (1 instances)

```css
.navigatio {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 20px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 12px 0px;
}
```

### Footer (2 instances)

```css
.foote {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding-top: 0px;
  padding-bottom: 12px;
  font-size: 12px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0.2);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 40px;
  border: 0px none rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

## Layout System

**2 grid containers** and **307 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1700px | 48px |
| 400px | 0px |
| 800px | 0px |
| 750px | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 4-column | 1x |
| 3-column | 1x |

### Grid Templates

```css
grid-template-columns: 376px 376px 376px;
gap: 16px;
grid-template-columns: 170px 170px 170px 170px;
gap: 160px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 193x |
| row/nowrap | 114x |

**Gap values:** `1.5px`, `10px`, `12px`, `160px`, `16px`, `16px normal`, `20px`, `24px`, `28px`, `32px`, `40px`, `48px`, `4px`, `64px 20px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 91/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 92/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- 23 !important rules — prefer specificity over overrides
- 64% of CSS is unused — consider purging
- 2637 duplicate CSS declarations

## Gradients

**1 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |

```css
background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
```

## Z-Index Map

**10 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | div, iframe.s.t.a.t.u.s._.h.i.d.d.e.n |
| base | 0,8 | div.f.r.a.m.e.r.-.r.m.3.9.r.1.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.k.l.k.k.e.t, div.f.r.a.m.e.r.-.z.m.d.l.q.a |

**Issues:**
- [object Object]

## SVG Icons

**18 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| xs | 2 |
| sm | 6 |
| md | 8 |
| xl | 2 |

**Icon colors:** `var(--token-37d5415f-9acb-49ff-aefc-6879c954182d, rgb(255, 255, 255))`, `rgb(0, 0, 0)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Inter | self-hosted | 400, 600, 700 | normal, italic |
| Manrope | self-hosted | 400, 500, 600, 700 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| avatar | 13 | objectFit: cover, borderRadius: 100px, shape: circular |
| general | 11 | objectFit: cover, borderRadius: 0px, shape: square |
| thumbnail | 3 | objectFit: cover, borderRadius: 16px, shape: rounded |
| hero | 1 | objectFit: cover, borderRadius: 20px, shape: pill |

**Aspect ratios:** 3:4 (15x), 1:1 (6x), 16:9 (5x), 1.17:1 (1x), 4:3 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

## Component Anatomy

### button — 2 instances

**Slots:** label, icon

## Brand Voice

**Tone:** friendly · **Pronoun:** you-only · **Headings:** Title Case (balanced)

### Sample Headings

> 20 Years Of Dental Excellence
> Meet The Hands That Transform Smiles
> What Sets Us Apart
> Diagnosis Before Decisions
> What Our Patients Say About Their Experience
> 20 Years Of Dental Excellence
> Meet The Hands That Transform Smiles
> What Sets Us Apart
> Diagnosis Before Decisions
> What Our Patients Say About Their Experience

## Page Intent

**Type:** `legal` (confidence 0.26)
**Description:** A restorative dental practice built around complex cases. Meet the specialist team, see how we work, and learn why every case starts with a full diagnosis before any treatment begins.

Alternates: blog-post (0.35)

## Section Roles

Reading order (top→bottom): testimonial → content → nav → nav → testimonial → testimonial → testimonial → testimonials → testimonial → footer → footer

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | testimonial | 20 Years Of Dental Excellence | 0.8 |
| 1 | content | 20 Years Of Dental Excellence | 0.3 |
| 2 | testimonial | — | 0.8 |
| 3 | testimonial | Meet The Hands That Transform Smiles | 0.8 |
| 4 | testimonial | — | 0.8 |
| 5 | testimonials | What Sets Us Apart | 0.4 |
| 6 | testimonial | What Our Patients Say About Their Experience | 0.8 |
| 7 | nav | — | 0.4 |
| 8 | nav | — | 0.9 |
| 9 | footer | — | 0.95 |
| 10 | footer | — | 0.95 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.269 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 100px |
| backdrop-filter in use | no |
| Gradients | 1 |

## Imagery Style

**Label:** `photography` (confidence 0.196)
**Counts:** total 28, svg 2, icon 0, screenshot-like 0, photo-like 11
**Dominant aspect:** portrait
**Radius profile on images:** rounded

## Component Library

**Detected:** `vuetify` (confidence 0.54)

Evidence:
- 12 v-* classes

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Manrope` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
