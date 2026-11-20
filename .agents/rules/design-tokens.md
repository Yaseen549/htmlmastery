# Design Tokens & UI Rules

## 1. Palette Specification

### Primary Brand Orange (HTML5 Identity)
- `brand-50`: `#FFF7ED` (Warmest tint for callout and active item backgrounds)
- `brand-100`: `#FFEDD5` (Subtle pill hover)
- `brand-200`: `#FED7AA` (Border highlight, subtle pill border)
- `brand-300`: `#FDBA74` (Active border state)
- `brand-400`: `#FB923C` (Dark mode link & accent text)
- `brand-500`: `#F97316` (Primary interactive color, button background, active indicators)
- `brand-600`: `#EA580C` (Button hover, active heading text)
- `brand-700`: `#C2410C` (Deep contrast text on orange tints)
- `brand-800`: `#9A3412` (Dark contrast)
- `brand-900`: `#7C2D12` (Deepest orange text)
- `brand-950`: `#431407` (Dark mode active badge background)

### Neutral Surface Tokens
- **Canvas Light:** `#FAFAF9` (Stone Canvas)
- **Canvas Dark:** `#18181B` (Zinc 900)
- **Surface Light:** `#FFFFFF` (Card background)
- **Surface Dark:** `#27272A` (Card background dark)
- **Border Light:** `#E4E4E7` (Zinc 200)
- **Border Dark:** `#3F3F46` (Zinc 700)

---

## 2. Layout Geometry

- **Floating Application Card:**
  - `max-w-[1740px]` centered horizontally
  - Padding wrapper: `p-2.5 sm:p-4 md:p-5 lg:p-6 xl:p-7`
  - Border radius: `rounded-2xl md:rounded-3xl`
  - Shadow: `shadow-2xl shadow-orange-950/20 dark:shadow-black/60`
  - Backdrop wallpaper: Fixed fullscreen gradient with specular ambient blurred orbs
- **3-Column Reading Workspace:**
  - Left Sidebar: Fixed width `w-64 xl:w-72`, shrink-0, independent vertical scroll
  - Center Reading Room: `flex-1 min-w-0 max-w-4xl xl:max-w-5xl`, independent vertical scroll
  - Right Demo Workbench: Fixed width `w-80 xl:w-96 2xl:w-[420px]`, shrink-0, sticky live preview + table of contents
