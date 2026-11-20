# AGENTS.md — HTML5 Educational Documentation Platform
## Design System, Technical Guidelines & Behavioral Rules

This document defines the architectural conventions, design tokens, UI parity standards, and engineering rules for the **HTML5 Complete Reference & Educational Platform**. All developers and AI agents working in this repository must adhere strictly to these rules to prevent hallucination, style deviation, or incomplete tag coverage.

---

## 1. Core Principles & Non-Negotiable Directives

1. **100% Complete HTML5 Tag Coverage:**
   - Every single HTML element defined in the W3C and WHATWG HTML Living Standards must be documented.
   - Zero placeholders, zero "TODO", zero truncated lists, and zero summarizing.
   - Every tag entry must include: element name, semantic purpose, formal syntax, standard attributes table, accessibility (ARIA) role mapping, browser support matrix, Shiki-highlighted code block, and a **Native Browser Live Demo**.
2. **Modern Full-Page Documentation Layout:**
   - Full viewport documentation website (NO floating Mac-window cards, NO glowing ambient wallpapers, NO excessive border clutter).
   - Clean, sticky header toolbar with Official HTML5 Logo (from `terravidhal/logoforge`), Home, All Elements, About, Global Command Palette (`Ctrl+K`), and Theme Toggle.
   - Collapsible left sidebar with categorized elements, active indicator, and filter search.
   - Primary focus on the main reading canvas with generous whitespace and clear typography.
   - Contextual, non-intrusive "On this page" Table of Contents that never squeezes the reading area.
3. **MANDATORY PERMANENT RULE: NATIVE HTML DEMONSTRATIONS:**
   > [!IMPORTANT]
   > **HTML demonstrations must represent native browser HTML rendering. The preview document must not contain injected author CSS unless the lesson explicitly teaches CSS, in which case the styled demonstration must be separately labeled.**
   - HTML demonstrations must use pure HTML only.
   - NO injected CSS, NO Tailwind CSS, NO Bootstrap, NO custom component styling.
   - NO CSS reset, NO CSS normalization, NO artificial backgrounds, NO custom fonts.
   - NO artificial borders, NO shadows, NO rounded cards, NO flexbox or grid styling, NO custom spacing.
   - The browser must render the HTML using its own native User-Agent stylesheet.
   - Demonstration controls must support Full Preview (default) and optional Mobile Viewport (375px). Tablet preview preset is removed.
4. **Strict JavaScript Requirement (No TypeScript):**
   - Strictly write standard Modern JavaScript (`.js`, `.jsx`).
   - Do **NOT** create `.ts` or `.tsx` files.
5. **No External Backend / Zero Cloud Lock-in:**
   - Static client-side and server-rendered Next.js (App Router) only.
   - Highlighting is performed server-side with **Shiki** (`github-dark` theme).

---

## 2. Design Tokens & Color Palette

### HTML5 Brand Palette
Honoring HTML5's iconic signature (`#E34F26` / `#F97316`):

| Token | Hex | Tailwind Utility | Primary Usage |
|---|---|---|---|
| `brand-50` | `#FFF7ED` | `bg-brand-50`, `text-brand-50` | Active sidebar pills, soft callout tints |
| `brand-100` | `#FFEDD5` | `bg-brand-100` | Subtle hover states on light pills |
| `brand-200` | `#FED7AA` | `border-brand-200` | Accent borders, divider lines |
| `brand-300` | `#FDBA74` | `border-brand-300` | Focus rings |
| `brand-400` | `#FB923C` | `text-brand-400` | Dark-mode accent text |
| `brand-500` | `#F97316` | `bg-brand-500`, `text-brand-500` | **Primary Brand Orange** (buttons, active pills) |
| `brand-600` | `#EA580C` | `bg-brand-600`, `text-brand-600` | Primary focus hover, active links |
| `brand-700` | `#C2410C` | `text-brand-700` | High-contrast heading accents |
| `brand-950` | `#431407` | `bg-brand-950` | Dark mode active badge background |

### Surface Neutrals
- **Light Canvas Background:** `#FFFFFF` (Pure White) / `#FAFAFA` (Stone)
- **Light Borders:** `#E4E4E7` (Zinc 200)
- **Dark Canvas Background:** `#09090B` / `#18181B` (Zinc 950 / Zinc 900)
- **Dark Borders:** `#27272A` (Zinc 800)

---

## 3. Mandatory Component Architecture

- **Top Navigation Header:** `components/layout/Header.jsx`
- **Left Navigation Sidebar:** `components/layout/Sidebar.jsx` (categorized, searchable, collapsible)
- **Mobile Navigation Drawer:** `components/layout/MobileDrawer.jsx`
- **Table of Contents:** `components/layout/TableOfContents.jsx`
- **Search Palette:** `components/ui/SearchModal.jsx` (triggered via `Ctrl+K` / `⌘K`)
- **Theme Toggle:** `components/ui/ThemeToggle.jsx`
- **Official Brand Logo:** `components/ui/Logo.jsx` (from `terravidhal/logoforge`)
- **Center Reading Room:** `components/learning/LessonContent.jsx`
- **Code Block:** `components/learning/CodeBlock.jsx` (server-side Shiki pre-highlighted code with copy button)
- **Native HTML Sandbox:** `components/learning/HtmlDemoSandbox.jsx` (100% unstyled native User-Agent browser preview)
- **Educational Table:** `components/learning/EducationalTable.jsx`
- **Callout Cards:** `components/learning/Callout.jsx`
- **Topic Pagination:** `components/learning/TopicPagination.jsx`
- **Footer:** `components/layout/Footer.jsx`

---

## 4. Verification Checklist Before Committing

- [ ] `npm run build` succeeds with zero errors across all static routes (`/`, `/about`, `/topics`, `/topics/[slug]`).
- [ ] No TypeScript files (`.ts`, `.tsx`) exist in the project.
- [ ] Every HTML demonstration inside the iframe is 100% native unstyled HTML (zero injected author CSS or resets).
- [ ] Responsive design verified on Mobile, Tablet, and Desktop.
- [ ] "Made with 🧡 by Yaseen" attribution maintained in the footer.
