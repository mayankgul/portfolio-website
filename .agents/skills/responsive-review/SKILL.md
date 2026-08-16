---
name: responsive-review
description: Reviews portfolio UI changes for mobile, tablet, desktop, accessibility, layout stability, and visual consistency.
---

# Responsive Review

Use this skill when reviewing UI changes or when a task involves responsive behavior.

## Review dimensions

### Mobile

Check:

- navigation;
- text wrapping;
- horizontal overflow;
- image sizing;
- touch target sizes;
- animation behavior;
- spacing.

### Tablet

Check:

- intermediate layouts;
- navigation;
- columns;
- image proportions;
- text width;
- spacing.

### Desktop

Check:

- visual hierarchy;
- maximum widths;
- alignment;
- large-screen spacing;
- animation placement.

## General checks

Look for:

- overflow;
- layout shifts;
- clipped text;
- inaccessible controls;
- missing alt text;
- insufficient contrast;
- excessive animation;
- unnecessary viewport-specific hacks.

## Validation

Run:

```bash
npm run lint
npm run build
```

If browser tooling is available, inspect the actual rendered page rather than relying only on source-code reasoning.

## Output

Report:

- Critical issues
- Important issues
- Minor issues
- Passed checks
