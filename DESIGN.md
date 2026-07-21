---
name: Yun-Tang (Andrew) Chang — Portfolio
description: A calm, editorial systems-research portfolio in deep jade ink and copper ember on warm paper.
colors:
  copper-ember: "#b7643e"
  jade-ink: "#153f36"
  jade-bright: "#245f50"
  jade-showcase-deep: "#102f28"
  jade-showcase-surface: "#19483e"
  jade-showcase-surface-hover: "#1e5045"
  showcase-border: "#6b8b7f"
  showcase-copper-bright: "#d88b63"
  showcase-text: "#d5ded9"
  showcase-text-muted: "#9bb1a7"
  paper: "#f4f0e7"
  paper-light: "#fbf8f1"
  ink: "#17241f"
  muted: "#6f776f"
  line: "#cdd1c5"
typography:
  display:
    fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
    fontSize: "clamp(58px, 7vw, 104px)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  headline:
    fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
    fontSize: "clamp(38px, 4vw, 72px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
    fontSize: "clamp(25px, 2.6vw, 42px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-serif:
    fontFamily: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif"
    fontSize: "12px"
    fontWeight: 750
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  pill: "50%"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "36px"
  xl: "54px"
  2xl: "78px"
  3xl: "110px"
components:
  button-primary:
    backgroundColor: "{colors.jade-ink}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.none}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.jade-bright}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  nav-cv-button:
    textColor: "{colors.jade-ink}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  project-card:
    backgroundColor: "{colors.jade-showcase-surface}"
    textColor: "{colors.showcase-text}"
    rounded: "{rounded.none}"
    padding: "36px"
  project-card-hover:
    backgroundColor: "{colors.jade-showcase-surface-hover}"
---

# Design System: The Quiet Green Room

## 1. Overview

**Creative North Star: "The Quiet Green Room"**

A deep, still jade room where every surface is calm and considered — and one warm copper ember is the only thing allowed to flicker. The system is built for a systems researcher who ships real, measured engineering work: it earns trust through restraint and precision, not through spectacle. Large serif headlines carry the occasional moment of scale (a name, a page title), but the working register is quiet — generous whitespace, hairline borders, and a warm paper ground that never competes with the content sitting on it.

This system explicitly rejects generic SaaS/startup marketing-site energy — gradient hero blobs, identical icon-card grids, pill buttons stacked everywhere — and the "AI-generated template" tell of small all-caps eyebrow labels and reflexive 01/02/03 numbering slapped on every section regardless of whether the content is actually sequential. Where this site does number a section, it's because the content is genuinely ordered (a real chronological experience list), not because portfolios are expected to.

**Key Characteristics:**
- Warm, ink-tinted neutrals instead of true black-and-white
- One accent color, used sparingly and only with intent
- Flat by default: hairline borders and whitespace build hierarchy, not shadows or radius
- Serif display type for identity moments; sans for everything functional
- A deliberate light/dark reversal (the "showcase" surface) for the Projects section and footer, not a uniform single-toned page

## 2. Colors

Warm, ink-tinted neutrals carry almost the entire page; color is spent on purpose, not decoration.

### Primary
- **Copper Ember** (#b7643e): The system's only spark. Reserved for hover states, active nav underlines, link emphasis, list-item marks, and the small eyebrow/label accents that need to catch the eye for a beat. It never fills a surface — it marks a moment.

### Secondary
- **Deep Jade Ink** (#153f36): The brand's "ink" color — used everywhere a true black would normally go: headline type, primary borders, the CV button outline, dividers under section headings. It reads as considered rather than stark.
- **Jade Bright** (#245f50): A lifted variant of Jade Ink used for hover states on the primary button, secondary link color (e.g. "advised by Prof. Ashvin Goel"), and supporting labels like experience focus lines.

### Tertiary (Dark Showcase Surface)
A deliberate reversal used for exactly two places on the site — the Projects section and the footer — where the page inverts to a deep jade "showcase" surface instead of the warm paper ground.
- **Jade Showcase Deep** (#102f28): Footer background, the darkest surface on the site.
- **Jade Showcase Surface** (#19483e): Default project-card background within the dark section.
- **Jade Showcase Surface (Hover)** (#1e5045): Project-card background on hover, paired with a Copper Ember border.
- **Showcase Border** (#6b8b7f): Hairline borders within the dark showcase (card edges, section-heading divider, icon-link boxes).
- **Showcase Copper Bright** (#d88b63): Copper Ember's brighter sibling, used only on the dark showcase surface where the base copper would read too muddy (e.g. the project-type label).
- **Showcase Text** (#d5ded9): Primary body-text tint on the dark showcase surface.
- **Showcase Text (Muted)** (#9bb1a7): Secondary/footer text tint on the dark showcase surface.

### Neutral
- **Warm Paper** (#f4f0e7): The default page background.
- **Paper Light** (#fbf8f1): Raised-surface tint — project-card hover states on light pages, the mobile-nav dropdown, education/note cards.
- **Ink** (#17241f): Default body text color on the paper ground.
- **Muted** (#6f776f): Secondary text — captions, metadata, supporting copy.
- **Line** (#cdd1c5): Hairline borders and dividers on the paper ground.

### Named Rules
**The One Ember Rule.** Copper Ember is the only saturated accent on the page at any moment. If a second bright color feels necessary, the answer is more restraint, not a second accent.

## 3. Typography

**Display Font:** "Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif
**Body Font:** Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
**Label Font:** same Inter stack as body, distinguished by size, weight, and uppercase tracking rather than a separate family

**Character:** A classic book serif carries every identity moment (names, page titles, section headings) against a plain, highly legible grotesque for everything functional. The pairing reads as "researcher's notebook," not "marketing deck" — confidence comes from restraint, not display-weight bravado.

### Hierarchy
- **Display** (400, `clamp(58px, 7vw, 104px)`, line-height .98): Page-level `<h1>` on sub-pages (Experience, Projects, Writing). The one place the serif is allowed to be genuinely large.
- **Headline** (400, `clamp(38px, 4vw, 72px)`, line-height ~1.0): Section headings on the homepage (`Selected experience`, `Featured projects`) and the About page's `<h2>`.
- **Title** (400, `clamp(25px, 2.6vw, 42px)`, line-height 1.1): The homepage name treatment, plus card- and row-level headings (project cards, timeline items, education card, note cards). Deliberately restrained relative to Headline — this tier reads as "a name" or "a label," not "a statement."
- **Body** (400, 16px, line-height 1.65, sans): Default running text — nav, metadata, card copy, footer.
- **Body (Serif)** (400, 16px, line-height 1.5): Long-form prose inside the About section (research description, research interests). Signals "this is being told to you," distinct from the sans used for UI chrome. Cap at ~70ch.
- **Label** (750, 12px, letter-spacing 0.14em, uppercase, sans): Nav items, eyebrow tags, section-heading index numbers, project metadata, button text.

### Named Rules
**The Serif-Means-Identity Rule.** Serif type is reserved for names, headings, and long-form prose — never for UI chrome (buttons, nav, labels, metadata). If it's serif, it's meant to be read as content; if it's sans, it's meant to be scanned as interface.

## 4. Elevation

Flat by default. There is no shadow vocabulary on this site — depth and hierarchy come entirely from hairline borders (`1px solid` in Line, Jade Ink, or Showcase Border) and the light/dark surface reversal between the paper ground and the jade showcase. The one exception is a soft ambient shadow on the mobile navigation dropdown, used because it's a floating overlay that must visually separate from the page beneath it, not because floating panels are a house style. This flat posture wasn't a hard design law going in — box-radius and shadow are open to revisit later — but as it stands today, the page never fakes elevation it doesn't structurally have.

### Shadow Vocabulary
- **Overlay** (`box-shadow: 0 16px 40px rgba(23,36,31,.12)`): Mobile nav dropdown only. A diffuse, warm-tinted shadow (using the Ink color, not neutral black) so it stays consistent with the palette even at low opacity.

## 5. Components

### Buttons
- **Shape:** Square corners throughout (0px radius) — no button on the site is rounded.
- **Primary:** Jade Ink background, Paper Light text, `13px 20px` padding, letter-spacing 0.04em uppercase label type.
- **Hover:** Background lifts to Jade Bright and the button lifts 3px on the Y-axis — a physical, not just chromatic, response.
- **Text Link:** No fill at all — an underline in Copper Ember beneath 13px uppercase label type. Paired with an inline arrow glyph (↗) that shifts diagonally on hover.
- **Nav CV Button:** A bare Jade Ink outline (no fill), the only bordered "button" in the primary nav — visually distinct from the plain text nav items beside it.

### Cards
- **Corner Style:** Square (0px radius) across every card variant — project cards, note cards, education card, timeline rows.
- **Light-surface cards** (note card, education card): Paper Light background, Line-color 1px border, Muted body text, Jade Ink heading.
- **Dark-surface cards** (project card, within the Tertiary showcase section): Jade Showcase Surface background, Showcase Border 1px border, Showcase Text body copy; hover swaps to Jade Showcase Surface (Hover) background with the border turning Copper Ember, plus a 6px upward lift.
- **Shadow Strategy:** None — see Elevation. Hierarchy comes from the border and background-color shift alone.
- **Internal Padding:** 28–36px, tightening slightly (`{spacing.lg}`) on mobile.

### Navigation
- **Style:** Plain uppercase label-type links with no background; the active/hover state is a thin Copper Ember underline that scales in from the left (`transform: scaleX`), not a color change on the text itself.
- **Sticky header:** A translucent Paper background (`color-mix` at 92%) with backdrop blur, so content scrolling beneath stays legible without a hard edge.
- **Mobile:** Collapses into a bordered icon-toggle (`<details>`/`<summary>`) that reveals a bordered dropdown panel — the one place on the site that uses a shadow.

### Social Icons
A row of bare SVG icon links (GitHub, LinkedIn, mail) in Jade Ink, no border or background at rest, transitioning to Copper Ember on hover/focus. Sit inline with the primary nav on desktop; drop into their own bordered row at the bottom of the mobile nav panel.

### Hero Portrait
The signature visual device: a photograph offset from a Copper Ember outline frame (the frame sits behind and to the upper-left of the image, `inset: -16px 16px 16px -16px`), so the portrait reads as "placed on top of" a copper mat rather than simply bordered. Desaturated slightly (`saturate(.82) contrast(.98)`) so it sits quietly within the jade/copper/paper palette instead of introducing competing photographic color.

### Section Heading
A recurring three-column pattern (index/label — title — optional "view all" link) sitting on a Jade Ink hairline rule. Only used where the numbering is real (e.g., a genuinely ordered flow); not applied reflexively to every section as generic scaffolding.

## 6. Do's and Don'ts

### Do:
- **Do** keep Copper Ember (#b7643e) to hover states, underlines, small labels, and single accent marks — it should never fill a surface.
- **Do** use Deep Jade Ink (#153f36) as the de facto "black" for headings, borders, and primary UI ink instead of true black.
- **Do** build hierarchy with hairline borders (1px, Line or Jade Ink) and whitespace, not shadows or radius.
- **Do** reserve the serif ("Iowan Old Style" stack) for names, headings, and long-form About prose; keep everything functional (nav, buttons, labels, metadata) in the Inter sans stack.
- **Do** treat the dark "showcase" reversal (Jade Showcase Deep/Surface) as a deliberate, occasional device for Projects and the footer — not a general dark-mode toggle.
- **Do** number a section only when its content is genuinely sequential (a real timeline), matching PRODUCT.md's rule that numbering must earn its place.

### Don't:
- **Don't** introduce a second saturated accent color alongside Copper Ember — that's the "One Ember Rule" from Colors.
- **Don't** add gradient hero blobs, identical icon-card grids, or stacked pill buttons — PRODUCT.md names this generic SaaS/startup-marketing energy as an explicit anti-reference.
- **Don't** add small all-caps eyebrow labels or 01/02/03 numbering to every section by reflex — PRODUCT.md calls this out by name as the "AI-generated template" tell.
- **Don't** add drop shadows to cards, buttons, or hero elements to fake elevation — this system conveys depth through borders and surface-color reversal, and the mobile-nav overlay shadow is the sole, deliberate exception.
- **Don't** set serif type in nav items, buttons, or metadata labels — serif signals "read me," sans signals "scan me," and mixing the two breaks that signal.
