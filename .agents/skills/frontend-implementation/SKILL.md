---
name: frontend-implementation
description: Implements polished React and TypeScript portfolio UI changes while preserving the existing design system, responsive behavior, accessibility, and animation conventions.
---

# Frontend Implementation Skill

Use this skill when implementing or substantially modifying portfolio UI.

## Before implementation

Inspect:

1. The target component.
2. Its parent component.
3. Related constants/data.
4. Existing responsive implementations.
5. Existing animations.
6. Existing styling conventions.
7. Existing assets.

Do not immediately rewrite the target component.

## Implementation process

1. Understand the requested behavior.
2. Identify the smallest set of files that should change.
3. Reuse existing components and utilities.
4. Implement the change.
5. Check mobile behavior.
6. Check tablet behavior.
7. Check desktop behavior.
8. Run linting.
9. Run the production build.
10. Review the final diff.

## Design requirements

The result should feel like part of the existing portfolio.

Do not introduce:

- generic SaaS dashboard aesthetics;
- unrelated design systems;
- unnecessary component libraries;
- arbitrary animations;
- unnecessary dependencies.

## Content requirements

Never invent personal or professional information.

Use explicit placeholders if information is genuinely unavailable.

## Completion criteria

The implementation is complete only after:

- functionality works;
- responsive behavior has been considered;
- accessibility has been considered;
- `npm run lint` passes;
- `npm run build` passes;
- the final diff has been reviewed.
