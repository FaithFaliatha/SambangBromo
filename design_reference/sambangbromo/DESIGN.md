---
name: Sambangbromo
colors:
  surface: '#121416'
  surface-dim: '#121416'
  surface-bright: '#37393b'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1e'
  surface-container: '#1e2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e5'
  on-surface-variant: '#dac2b1'
  inverse-surface: '#e2e2e5'
  inverse-on-surface: '#2f3133'
  outline: '#a28d7d'
  outline-variant: '#544337'
  surface-tint: '#ffb77c'
  primary: '#ffc495'
  on-primary: '#4d2700'
  primary-container: '#ff9d42'
  on-primary-container: '#6c3900'
  inverse-primary: '#904d00'
  secondary: '#e7c433'
  on-secondary: '#3b2f00'
  secondary-container: '#c1a100'
  on-secondary-container: '#453800'
  tertiary: '#b3dc9c'
  on-tertiary: '#173809'
  tertiary-container: '#98c082'
  on-tertiary-container: '#2d4f1e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc2'
  primary-fixed-dim: '#ffb77c'
  on-primary-fixed: '#2e1500'
  on-primary-fixed-variant: '#6d3900'
  secondary-fixed: '#ffe174'
  secondary-fixed-dim: '#e7c433'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#c5efad'
  tertiary-fixed-dim: '#a9d293'
  on-tertiary-fixed: '#062100'
  on-tertiary-fixed-variant: '#2d4f1e'
  background: '#121416'
  on-background: '#e2e2e5'
  surface-variant: '#333537'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is engineered for a premium, adventurous travel experience focusing on East Java's volcanic landscapes. The brand personality is authoritative yet immersive, combining the ruggedness of volcanic expeditions with the refinement of high-end concierge services.

The design style utilizes **Modern Minimalism** with **Glassmorphic** overlays to simulate the misty, atmospheric quality of a Bromo sunrise. High-quality, hyper-realistic photography is the primary driver of the visual experience, with UI elements acting as sophisticated wayfinding tools that sit "on top" of the landscape. The emotional response should be one of awe, reliability, and exclusive access.

## Colors
The palette is derived from the "Golden Triangle" of East Java (Bromo, Ijen, and the surrounding rainforests). 

- **Primary (Sunrise Orange):** #FF9D42. Used for calls to action and primary wayfinding. It represents the first light over the caldera.
- **Secondary (Sulfur Yellow):** #F4D03F. Used for highlights, badges, and critical status indicators, inspired by the Ijen crater.
- **Tertiary (Jungle Green):** #2D4F1E. Used for backgrounds of natural-themed sections and secondary accents.
- **Neutral (Volcanic Gray):** #1A1C1E. The foundational surface color, providing a deep, high-contrast backdrop that allows imagery to pop.
- **Functional Accents:** Success and safety states should lean into the Tertiary green, while warnings utilize the Secondary yellow.

## Typography
The typography strategy balances modern tech-savviness with rugged legibility. 

- **Headlines:** Use **Sora** for its geometric, futuristic, and bold character. It provides the necessary "weight" to compete with dramatic volcanic photography.
- **Body:** Use **Inter** for maximum readability across all lighting conditions, especially for long-form itinerary descriptions.
- **Data/Labels:** Use **Geist** for technical details (altitude, temperature, coordinates). Its mono-spaced influence lends an air of precision and professional gear aesthetics.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a generous 12-column structure for desktop. 

- **Rhythm:** Use an 8px base unit. Vertical spacing between sections should be aggressive (96px+) to create a sense of scale and "breathing room" reflective of the vast landscapes.
- **Mobile:** Transition to a 4-column grid. Margins shrink to 16px to maximize the impact of full-bleed imagery.
- **Reflow:** Cards and itinerary steps should stack vertically on mobile, but use horizontal "peek" scrolling for image galleries to maintain the immersive feel without excessive page length.

## Elevation & Depth
To achieve a "hyper-realistic" feel, this design system avoids heavy traditional shadows in favor of **Tonal Layers** and **Atmospheric Blurs**.

- **Surfaces:** Use semi-transparent dark fills (80% opacity) with a background blur (20px - 40px) to create "frosted volcanic glass" panels.
- **Depth:** Elements closer to the user are lighter in tone, not necessarily shadow-heavy.
- **Interactions:** Subtle inner glows in Primary Orange should be used for active states, mimicking the glow of magma or embers.

## Shapes
The shape language is **Soft (0.25rem)**. This choice maintains a professional, precision-engineered look that avoids the "cuddliness" of fully rounded components while softening the harshness of the terrain.

- **Large Containers:** Use `rounded-lg` (0.5rem) for main content cards to subtly differentiate from the screen edge.
- **Interactive Elements:** Buttons and inputs use the base 0.25rem radius for a sharp, tactical feel.

## Components
- **Buttons:** Primary buttons use a solid Sunrise Orange fill with dark text. Secondary buttons use a glassmorphic ghost style with a subtle white border.
- **Chips/Badges:** Small, high-contrast labels using the Sulfur Yellow background for "Difficulty Level" or "Exclusive" tags.
- **Input Fields:** Dark, semi-transparent backgrounds with thin (1px) borders that glow Sunrise Orange on focus.
- **Itinerary Cards:** Utilize the glassmorphic style with a blurred background image of the specific destination. Content is left-aligned with "Geist" labels for technical stats (e.g., "ALT: 2,329M").
- **Specialty Component - Adventure Gauges:** Visual indicators for physical intensity or temperature ranges, using the Secondary yellow to draw the eye to essential safety info.