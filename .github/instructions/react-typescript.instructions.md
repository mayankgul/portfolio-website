---
applyTo: "**/*.ts,**/*.tsx"
---

# React + TypeScript Instructions

Follow the project's existing React architecture.

## Components

- Prefer functional components.
- Keep component responsibilities focused.
- Reuse existing components before creating new ones.
- Keep reusable data in constants/modules rather than embedding large datasets inside components.

## Props

Define explicit interfaces for reusable component props.

Avoid `any`.

Prefer existing project types when available.

## Hooks

Follow React hook rules.

Clean up:

- event listeners;
- intervals;
- timeouts;
- observers;
- subscriptions.

When using browser APIs, make sure cleanup occurs on unmount.

## Redux

Use Redux Toolkit only where state is genuinely global.

Do not move local component state into Redux without justification.

## Memoization

Use `memo`, `useMemo`, and `useCallback` when they provide a concrete benefit.

Do not add memoization mechanically.

## Animations

Use the existing Framer Motion setup.

Avoid animation patterns that create layout shifts or interfere with interaction.

## Type safety

The project uses strict TypeScript.

Do not weaken compiler settings to make a change pass.

Do not introduce `any` merely to bypass a type error.

Fix the underlying type problem.
