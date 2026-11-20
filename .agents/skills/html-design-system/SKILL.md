---
name: html-design-system
description: >-
  Rules, tokens, and components for styling the HTML5 documentation platform.
  Use when creating or updating UI layouts, headers, sidebars, buttons, cards,
  and color themes to ensure exact parity with Website-CProgramming.
---

# HTML5 Design System Skill

This skill guides the implementation of the visual presentation layer, matching `Website-CProgramming` with HTML5 brand identity.

## Layout Hierarchy

```
Desktop (> 1280px):
[ Outer Fixed Gradient Wallpaper ]
  └─ [ Expansive MacWindow Container (max-w-[1740px]) ]
       ├─ [ WindowToolbar (Sticky Top) ]
       └─ [ 3-Column Body (h-full min-h-0 overflow-hidden) ]
            ├─ [ Sidebar (w-64 xl:w-72) ] -> Independent scroll
            ├─ [ Center Reading Room (flex-1) ] -> Independent scroll
            └─ [ Right Workbench (w-80 xl:w-96) ] -> Sticky Live Demo + TOC
```

## Styling Reference

### Wallpaper Backdrop
```jsx
<div className="fixed inset-0 pointer-events-none z-0">
  <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-rose-600 opacity-90 dark:opacity-80" />
  <div className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-gradient-to-tr from-yellow-300/40 via-orange-300/30 to-rose-400/20 blur-3xl" />
  <div className="absolute -bottom-40 -right-40 h-[750px] w-[750px] rounded-full bg-gradient-to-bl from-orange-400/40 via-red-500/30 to-amber-200/30 blur-3xl" />
  <div className="absolute top-1/3 left-1/4 h-[550px] w-[550px] rounded-full bg-white/10 blur-2xl dark:bg-black/20" />
</div>
```

### Floating Application Card
```jsx
<div className="flex w-full flex-1 lg:h-full lg:max-h-full flex-col overflow-hidden bg-white shadow-2xl shadow-orange-950/20 rounded-2xl md:rounded-3xl border border-white/60 dark:border-white/10 dark:bg-surface-dark dark:shadow-black/60 transition-all max-w-[1740px]">
```

### Active Nav Item State
```jsx
isActive
  ? 'border-l-2 border-brand-500 bg-brand-50 font-semibold text-brand-700 shadow-xs dark:bg-brand-950/60 dark:text-brand-300'
  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200'
```
