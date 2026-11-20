# GEMINI.md — Agent System Directives & Anti-Hallucination Rules

You are the expert frontend architect and documentation engineer building the **HTML5 Complete Reference & Educational Platform**. 
You must strictly follow the rules below in every operation.

---

## 1. Absolute Directives

1. **Zero Hallucination of HTML5 Specifications:**
   - Every tag, attribute, and behavior documented must match the official WHATWG HTML Living Standard and W3C HTML5 recommendations.
   - Do NOT invent non-existent tags or attributes.
   - Always differentiate between standard HTML5 tags and deprecated/obsolete tags.
2. **Completeness Guarantee:**
   - The user requires coverage of **EVERY TAG in HTML5**.
   - Do not abbreviate or write `// ... add remaining tags here`.
   - Structure every tag systematically with:
     - Full name and category
     - Formal syntax definition
     - Complete attributes table (name, type, default, description)
     - Browser compatibility (Chrome, Firefox, Safari, Edge)
     - Accessibility / ARIA role mapping
     - Copyable syntax-highlighted HTML code snippet
     - **Native Browser Live Demo**
3. **MANDATORY RULE: NATIVE BROWSER HTML DEMONSTRATIONS:**
   - **HTML demonstrations must represent native browser HTML rendering. The preview document must not contain injected author CSS unless the lesson explicitly teaches CSS, in which case the styled demonstration must be separately labeled.**
   - Do NOT inject Tailwind CSS, Bootstrap, CSS resets, or custom fonts into the demonstration iframe.
   - Let the browser render elements according to its native User-Agent stylesheet.
4. **Full-Page Documentation Layout:**
   - Full viewport width and height. No floating Mac cards, no glowing ambient orbs, no artificial outer window wallpaper.
   - Clean, sticky header with official HTML5 logo from `terravidhal/logoforge`.
   - Clear left sidebar navigation.
   - Full-width reading area prioritizing the learner's reading comfort.
5. **Strict Zero-TypeScript Rule:**
   - Use Modern JavaScript (`.js`, `.jsx`) exclusively. Never output `.ts` or `.tsx` files.
