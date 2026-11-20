# Native HTML Demonstration Engine Specification

This rule defines the core standards for all HTML previews on the platform.

## 1. The Core Rule: Pure Native Unstyled HTML
**HTML demonstrations must represent native browser HTML rendering. The preview document must not contain injected author CSS unless the lesson explicitly teaches CSS, in which case the styled demonstration must be separately labeled.**

- Demonstrations must use pure, valid HTML only.
- NO injected CSS.
- NO Tailwind CSS.
- NO Bootstrap or UI frameworks.
- NO custom component styling.
- NO CSS resets (`margin: 0`, `padding: 0`, `box-sizing: border-box`).
- NO CSS normalizations.
- NO artificial backgrounds or gradients.
- NO custom fonts.
- NO artificial borders, shadows, or rounded cards inside the preview document.
- NO flexbox or grid layout rules unless demonstrating HTML elements that natively use them or in a labeled CSS lesson.
- NO custom spacing.
- The browser must render the HTML using its own native User-Agent stylesheet.

## 2. Technical Implementation
- Demonstrations render inside an isolated `<iframe>` using `srcDoc`.
- Minimal `srcDoc` template:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Native HTML Preview</title>
  </head>
  <body style="background-color: #ffffff; color: #000000;">
    <!-- Raw unstyled HTML here -->
  </body>
  </html>
  ```
- Sandbox: `sandbox="allow-forms allow-modals allow-scripts"`.
- Viewport modes supported:
  1. **Full Preview** (100% natural container width, default).
  2. **Mobile Preview** (max-width: 375px).
- **Tablet preview preset is permanently removed.**
