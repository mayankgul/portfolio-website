---
applyTo: "**/*.css,**/tailwind.config.ts,**/index.html"
---

# Styling Instructions

The portfolio uses Tailwind CSS as its primary styling system.

## Preserve the design language

Before changing styles:

- inspect nearby components;
- reuse existing classes;
- preserve typography;
- preserve spacing conventions;
- preserve the existing dark/light visual treatment.

Do not replace the styling architecture.

## Responsive behavior

Always consider:

- mobile;
- tablet;
- desktop.

Do not optimize only for the current viewport.

## Typography

The project contains custom fonts under:

`src/assets/fonts/`

Prefer existing fonts before introducing another font.

## Colors

Prefer the existing color palette and Tailwind utilities.

Do not introduce arbitrary colors unless they are necessary for the design.

## Animation

Visual motion should be purposeful and subtle.

Avoid animations that:

- cause layout shifts;
- interfere with navigation;
- make text difficult to read;
- run unnecessarily on mobile.

## Accessibility

Maintain:

- readable contrast;
- visible interactive states;
- usable focus states;
- meaningful image alternatives.
