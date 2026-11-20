---
name: live-demo-engine
description: >-
  Architecture and implementation guide for the Native HTML Demonstration Engine.
  Use when creating or updating interactive HTML previews.
---

# Native HTML Demonstration Engine Skill

This skill explains how the Native HTML Demonstration Engine operates.

## Core Principle
HTML demonstrations must represent native browser HTML rendering. The preview document must not contain injected author CSS unless the lesson explicitly teaches CSS, in which case the styled demonstration must be separately labeled.

## Architecture & Data Flow

1. **Lesson Data:** Each lesson in `data/lessons/` specifies a `demo` property inside its sections:
   ```javascript
   demo: {
     title: 'Native Browser Output',
     html: '<button type="submit">Submit Form</button>',
     interactive: true
   }
   ```
2. **Native Rendering:** `HtmlDemoSandbox.jsx` receives the unstyled markup and renders it inside an isolated `<iframe>` with minimal `srcDoc`:
   - Zero injected author CSS.
   - Zero CSS resets (preserves browser User-Agent margins, typography, and element defaults).
   - High-contrast body background (`#ffffff` / `#000000`) for legibility in any parent theme.
3. **Controls:**
   - Full Viewport (default).
   - Mobile Viewport (375px width container around the iframe).
   - Reload button (remounts fresh DOM state).
   - Copy HTML button.
   - Expand full-screen preview.
