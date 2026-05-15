# Dentix Design System

Extracted from `dentix.framer.website` — compiled into clean, reusable fragments. Zero Framer bloat.

## Architecture

```
.design-system/
├── README.md                  # This file
└── fragments/
    ├── nav.html               # Global navigation bar
    ├── team.html              # Team member grid section
    ├── services.html          # How We Work accordion
    └── footer.html            # Global footer
```

All fragments share a single stylesheet: `css/styles.css`

## Global Design Tokens

### Colors
| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Brand olive | `#5b7a12` | `--accent` | Buttons, dots, links, accents |
| Brand dark | `#4A5A2B` | — | Logo, stat lines |
| Canvas | `#F3F4F6` | `--bg` | Page background |
| Card white | `#FFFFFF` | `--card-white` | Section surfaces |
| Card alt | `#F9FAFB` | — | Badges, accordion icons |
| Text black | `#000000` | `--text` | Headings, body |
| Text secondary | `#4B5363` | `--text-secondary` | Muted body |
| Text muted | `#6B7280` | `--text-muted` | Labels, meta |
| Text subtle | `#838996` | — | Step labels, treatments |
| Border | `#E5E7EB` | `--border` | Dividers, outlines |
| Border soft | `#F3F4F6` | — | Accordion rows, card borders |

### Typography Scale
| Preset | Size | Weight | Line Height | Letter Spacing | Usage |
|--------|------|--------|-------------|----------------|-------|
| `52a24e` | 72px | 600 | 1.1 | -0.04em | Page H1 hero |
| `12c1bil` | 48px | 600 | 1.2 | -0.04em | Section H2 headings |
| `97723i` | 40px | 600 | 1.2 | -0.05em | Accordion expanded H3 |
| `odkymz` | 32px | 600 | 1.2 | -0.04em | Promo cards, quotes, accordion collapsed |
| `14swtdy` | 24px | 600 | 1.3 | -0.05em | Team names, card titles |
| `103t3jt` | 20px | 600 | 1.2 | -0.03em | Advantage headings |
| `yn1awx` | 18px | 400 | 1.5 | 0em | Testimonial quotes |
| `1bc25ya` | 16px | 500 | 1.2 | 0em | Nav links, footer headers |
| `15bsyqz` | 16px | 400 | 1.5 | 0em | Body text, team titles |
| `1jasyq8` | 14px | 500 | 1.2 | 0em | Labels, footer links, step labels |
| `n8z36j` | 14px | 400 | 1.2 | 0em | Footer legal, treatment labels |
| `1xhiqvl` | 14px | 600 | 1.0 | 0em | CTA pill buttons |
| `1ss3mi8` | 12px | 600 | 1.2 | -0.02em | Slider labels |

**Font family:** `'Manrope', sans-serif` — universal, no fallback exceptions.

### Spacing Scale
**Base unit:** 2px  
**Scale:** 2 · 40 · 48 · 64 · 80 · 99 · 160

| Token | Value | Usage |
|-------|-------|-------|
| Section padding | 80px | All `.section-card` vertical |
| Card padding | 48px | `.section-card` horizontal |
| Container max-width | 1724px | `.container` |
| Section gap | 12px | Between sections (margin-bottom) |

### Border Radii
| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | 20px | Section cards, hero |
| `--radius-sm` | 16px | Accordion images, team photos |
| `--radius-pill` | 100px | Buttons, badges |

### Shadows
| Token | Value | Usage |
|-------|-------|-------|
| Card shadow | `0 0 12px rgba(0,0,0,0.04)` | `.section-card` |
| Button shadow | inset highlight + drop | `.btn-accent` |

---

## Fragment Catalog

### 1. nav.html — Global Navigation

**Structure:** Sticky nav inside a rounded white frame. Logo (SVG + text), centered text links, right-aligned pill CTA button. Mobile hamburger toggle.

**Class profile:**
- `.navbar` — sticky container, 12px padding
- `.nav-inner` — white rounded frame, flex row, 8/32px padding
- `.nav-logo` — 22px/800 weight, -0.02em tracking
- `.nav-links a` — 14px/500/1.2, hover → `#5b7a12`
- `.btn-accent` — 14px/600/1.0 pill, olive bg, white text

**Breakpoint:** 809px — links collapse to hamburger overlay

### 2. team.html — Team Member Grid

**Structure:** White card section. Pill badge header ("Our Team"), H2 heading, outline CTA button, 3-column photo grid with hover arrow buttons.

**Class profile:**
- `.label-badge` — inline-flex, 14px/500, #6B7280 text, #F9FAFB bg, 100px radius, green dot
- `.team-grid` — 3-column grid, 24px gap
- `.team-card` — transparent bg, vertical photo + info layout
- `.team-card-img` — 120% padding-bottom portrait container, 16px radius
- `.team-card-info h3` — 24px/600/1.3/-0.05em
- `.team-card-info p` — 16px/400/1.5, #4B5363
- `.btn-arrow` — 32px circle, border, hover fills olive

**Breakpoint:** < 1024px — cards wrap to 2 columns; < 809px — single column

### 3. services.html — How We Work Accordion

**Structure:** White card section. Pill badge + 48px H2 heading. 4-item single-open accordion with border-separated rows. Each row: step label + title (left), borderless 44px + icon (right). Expanded state: 400px image + content grid.

**Class profile:**
- `.story-heading` — 48px/600/1.2/-0.04em
- `.sa-item` — border-bottom 1px #E5E7EB
- `.sa-trigger` — full-width flex button, 24px vertical padding, no bg/border
- `.sa-step` — 14px/500/1.2, #838996, no text-transform
- `.sa-title` — 32px/600/1.2/-0.04em (collapsed), 40px/600/1.2/-0.05em (open)
- `.sa-icon` — 44px circle, #F9FAFB bg, borderless
- `.sa-icon-svg` — 16px, rotates 45deg when open
- `.sa-panel` — max-height 0 → scrollHeight, opacity 0 → 1, 0.35s ease
- `.sa-panel-inner` — grid: 400px 1fr, 40px gap
- `.sa-image` — max-width 400px, height auto, 16px radius, subtle shadow
- `.sa-check` — 18px circle, #F3F4F6 bg, 10px checkmark

**JS behavior:** Single-open state machine using `data-status` attributes. Resize listener recalculates open panel heights.

**Breakpoint:** 809px — grid collapses to single column

### 4. footer.html — Global Footer

**Structure:** White card section. 4-column grid: brand + social (left), SERVICES links, QUICK LINKS, CONTACT INFO (right). Legal credits bar below.

**Class profile:**
- `.footer-grid` — 4-column flex/grid, 40px gap
- `.footer-brand` — logo SVG + 24px/700 brand name
- `.footer-social a` — 40px circle icons, olive stroke, hover fills olive
- `.footer-col h4` — 16px/500/1.2, #6B7280
- `.footer-links a` — 14px/500/1.2, #000000, hover → olive
- `.contact-item` — flex row, 12px gap, 24px icon circles
- `.footer-bottom` — 14px/400/1.2, #4B5363

**Breakpoint:** < 809px — columns stack vertically

---

## Responsive Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| Desktop | ≥ 1200px | Full multi-column layouts |
| Tablet | 1024px | Grid collapses, font scaling begins |
| Mobile | 809px | Single column, hamburger nav, reduced headings |

---

## Integration

1. Copy the fragment HTML into your page
2. Ensure `css/styles.css` is linked
3. For accordion: include the JS router from `js/main.js`
4. Replace placeholder image URLs with your own assets

All fragments reference the same global CSS variables and class names — drop them into any page and they render consistently.
