---
name: html-tag-authoring
description: >-
  Standardized runbook for writing comprehensive, zero-hallucination HTML5 tag
  lessons in data/lessons/. Use whenever creating or modifying lesson modules.
---

# HTML5 Tag Authoring Runbook

Use this runbook to structure lesson data modules without missing critical sections.

## Lesson File Structure
File path: `data/lessons/<number>-<slug>.js`

Every lesson module must provide:
1. **Metadata:** `slug`, `number`, `title`, `subtitle`, `category`.
2. **Overview Section (`id: 'overview'`):** Clear definition, semantic purpose, when to use, and when NOT to use.
3. **Syntax Section (`id: 'syntax'`):** Opening tag, closing tag, void element status (self-closing or normal).
4. **Attributes Table (`id: 'attributes'`):** All tag-specific attributes plus relevant global attributes.
5. **Code Example (`id: 'example'`):** Realistic, semantic code snippet.
6. **Live Demo Configuration (`demo` object):** Markup and options consumed by the Right-Side Live Demo panel.
7. **Accessibility & Best Practices (`id: 'accessibility'`):** Default ARIA role, screen reader considerations, keyboard navigation rules.
8. **Browser Support Matrix (`id: 'support'`):** Baseline compatibility across major browsers.

## Verification Checklist
- [ ] No placeholder text or empty paragraphs.
- [ ] Code examples use realistic content (not "foo bar").
- [ ] Live demo payload matches the Shiki code block.
- [ ] Attributes table specifies correct types (`string`, `boolean`, `URL`, `number`).
