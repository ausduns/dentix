---
name: designlang-tokens
description: Use when styling UI for dentix.framer.website — references the extracted design system tokens instead of inventing colors, spacing, or typography.
---

# designlang tokens
Source: https://dentix.framer.website/our-clinic
Extracted by designlang v7.0.0 on 2026-05-15T14:15:42.459Z

## Semantic tokens (use these)
- color.action.primary: #5b7a12
- color.surface.default: #f3f4f6
- color.text.body: #000000
- radius.control: 10px
- typography.body.fontFamily: Manrope

## Regions
- testimonials
- content
- testimonials
- hero
- content
- testimonials
- testimonials
- nav
- nav
- footer
- footer

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
