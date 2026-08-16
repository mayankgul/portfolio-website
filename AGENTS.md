# Portfolio Website — Agent Instructions

## Project overview

This repository contains Mayank Gulati's personal portfolio website.

The application is a frontend-only React application built with:

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- Lucide React
- React Icons
- React Scroll
- React Simple Typewriter
- React Tooltip

The project is intended to be a polished personal portfolio rather than a generic starter application.

---

## Core engineering principles

Before making changes:

1. Inspect the existing implementation.
2. Understand the component hierarchy.
3. Reuse existing components, hooks, constants, and state management.
4. Prefer the smallest correct change.
5. Avoid introducing new dependencies unless there is a concrete reason.
6. Do not perform unrelated refactoring.
7. Preserve existing behavior unless the task explicitly requires changing it.

Do not rewrite an existing component merely because another implementation is stylistically preferable.

---

## Application architecture

The application currently follows this structure:

- `src/App.tsx`
  - Application root
  - Redux provider
  - Navbar
  - Hero section
  - Testimonials section
  - Project section is currently present but commented out

- `src/components/Navbar.tsx`
  - Responsive navigation
  - Mobile drawer
  - Desktop/tablet navigation
  - GitHub, LinkedIn and YouTube links

- `src/components/HomePage/HeroSection/`
  - Main portfolio hero
  - Greeting animation
  - About section
  - JSON-style animation
  - Technology skill displays
  - Responsive desktop/tablet/mobile implementations
  - Background/parallax behavior

- `src/components/HomePage/TestimonialsSection/`
  - Testimonial carousel
  - Responsive behavior
  - Framer Motion animations

- `src/components/HomePage/ProjectSection/`
  - Project listing implementation
  - Project cards
  - Filtering
  - Currently not rendered by `App.tsx`

- `src/hooks/`
  - Reusable React hooks

- `src/redux/`
  - Redux Toolkit store and slices
  - Screen-size state
  - Theme state

- `src/assets/`
  - Portfolio content
  - Images
  - Logos
  - Fonts
  - Social links

---

## Design principles

This is a personal portfolio.

Prioritize:

- polished visual design;
- strong typography;
- visual hierarchy;
- responsive layouts;
- smooth but restrained animations;
- accessibility;
- performance;
- consistency with the existing visual language.

Do not make the site look like a generic SaaS dashboard unless explicitly requested.

Do not replace the existing design system wholesale.

When changing UI, inspect surrounding components first and preserve:

- spacing conventions;
- typography;
- animation style;
- color palette;
- component composition;
- responsive behavior.

---

## Responsive design

The application explicitly distinguishes:

- mobile;
- tablet;
- desktop.

The Redux `screen` state currently determines these categories.

When changing a UI component:

1. Check mobile behavior.
2. Check tablet behavior.
3. Check desktop behavior.
4. Make sure text does not overflow.
5. Make sure interactive elements remain usable.
6. Check animations at each breakpoint.

Never assume that a desktop implementation automatically works on mobile.

---

## Styling

Tailwind CSS is the primary styling mechanism.

Prefer existing Tailwind utilities and existing project conventions.

Do not introduce another styling framework.

Do not create large CSS files for functionality that can reasonably be expressed using the existing Tailwind setup.

Use existing custom fonts and visual assets when appropriate.

---

## Animation

Framer Motion is already used extensively.

Prefer Framer Motion for component-level animation.

Avoid unnecessary animation.

Animations should:

- communicate state or hierarchy;
- remain smooth;
- avoid blocking interaction;
- avoid causing layout shifts;
- respect responsive layouts.

Do not add animation merely because an element can be animated.

---

## State management

Redux Toolkit is currently used for:

- screen-size state;
- theme state.

Do not introduce another global state-management library.

Use local React state for genuinely local component state.

---

## Content

This is Mayank's personal portfolio.

Do not invent:

- employers;
- clients;
- testimonials;
- projects;
- skills;
- achievements;
- education;
- social accounts;
- professional claims.

If content is missing, ask for the actual information or clearly mark placeholders.

In particular, existing sample testimonials and sample project entries must not be presented as genuine information unless they are explicitly replaced with real data.

---

## External links

Preserve the existing verified social links unless explicitly asked to change them.

Do not replace real portfolio URLs with placeholder URLs.

Do not invent project URLs.

---

## Images and assets

Prefer existing assets under `src/assets`.

Before adding a new image:

1. Check whether an existing asset can be reused.
2. Prefer appropriately sized assets.
3. Consider loading performance.
4. Provide meaningful `alt` text for informative images.

Do not add unnecessary copies of existing assets.

---

## Accessibility

Interactive elements must:

- be keyboard accessible;
- have meaningful accessible names;
- maintain sufficient contrast;
- provide appropriate focus states where necessary.

Images should have meaningful `alt` text unless they are genuinely decorative.

Do not rely solely on color to communicate state.

---

## Performance

Avoid unnecessary:

- rerenders;
- event listeners;
- timers;
- large dependencies;
- large image assets;
- expensive computations during render.

When modifying animation, scrolling, resize handling, or media-query logic, consider cleanup and performance.

---

## TypeScript

Use strict TypeScript.

Avoid:

- `any`;
- unnecessary type assertions;
- duplicated interfaces;
- unsafe non-null assertions.

Prefer explicit interfaces/types for reusable component APIs.

Reuse existing types where possible.

---

## Dependencies

Before adding a dependency:

1. Check whether the functionality already exists in the project.
2. Check whether an existing dependency can provide it.
3. Explain why the new dependency is necessary.

Do not add dependencies merely for convenience.

---

## Git workflow

Never work directly on `main` for feature development.

Use a dedicated feature branch and worktree.

Keep changes focused.

Do not:

- force push;
- rewrite unrelated commits;
- reset user changes;
- delete unrelated files;
- commit secrets.

Before committing:

```bash
git status
git diff
```

---

## Validation

The project currently provides:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

At minimum, after code changes run:

```bash
npm run lint
npm run build
```

For UI changes, also manually inspect the application in a browser at:

- mobile width;
- tablet width;
- desktop width.

Do not claim a task is complete if validation has not been performed.

---

## Completion Report

When a task is complete, report:

1. What changed.
2. Files changed.
3. Validation performed.
4. Any remaining concerns.
5. Any assumptions made.

Keep the report concise, and do not add it to git.
