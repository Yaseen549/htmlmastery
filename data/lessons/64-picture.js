export const pictureLesson = {
  slug: 'picture',
  number: '64',
  title: '<picture>',
  category: 'Images & Multimedia',
  subtitle: 'Responsive image wrapper providing multiple <source> options for art direction and format fallback',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Art Direction',
      paragraphs: [
        'The <picture> HTML element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios.',
        'It solves two major responsive design challenges: Art Direction (delivering cropped or re-framed images tailored for narrow mobile screens) and Next-Gen Format Switching (serving AVIF or WebP to supporting browsers while gracefully falling back to PNG/JPEG).',
        'The browser examines each child <source> element in order and selects the first one that matches its media query or MIME type format, rendering it through the mandatory <img> element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<picture>\n  <source srcset="hero-dark.webp" media="(prefers-color-scheme: dark)">\n  <source srcset="hero-wide.avif" media="(min-width: 800px)" type="image/avif">\n  <img src="hero-fallback.jpg" alt="Hero illustration">\n</picture>',
      syntaxNote: 'Normal element requiring opening and closing tags. Must contain an <img> element as its final child.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Format Selection and Fallbacks',
      type: 'code-example',
      codeTitle: 'Format Switching with Next-Gen Image Types',
      code: `<!-- Format selection: AVIF -> WebP -> Fallback SVG -->
<picture>
  <source 
    srcset="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='100'%3E%3Crect width='320' height='100' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff'%3ENarrow Viewport Match%3C/text%3E%3C/svg%3E" 
    media="(max-width: 500px)"
  >
  <source 
    srcset="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='450' height='120'%3E%3Crect width='450' height='120' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff'%3EDesktop Viewport Match%3C/text%3E%3C/svg%3E" 
    media="(min-width: 501px)"
  >
  <!-- Mandatory fallback img tag -->
  <img 
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='100'%3E%3Crect width='300' height='100' fill='%236b7280'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff'%3EDefault Fallback%3C/text%3E%3C/svg%3E" 
    alt="Responsive picture demonstration"
  >
</picture>`,
      demo: {
        title: 'Native Browser Output',
        html: `<picture>
  <source 
    srcset="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='100'%3E%3Crect width='320' height='100' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff'%3ENarrow Viewport Match%3C/text%3E%3C/svg%3E" 
    media="(max-width: 500px)"
  >
  <source 
    srcset="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='450' height='120'%3E%3Crect width='450' height='120' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff'%3EDesktop Viewport Match%3C/text%3E%3C/svg%3E" 
    media="(min-width: 501px)"
  >
  <img 
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='100'%3E%3Crect width='300' height='100' fill='%236b7280'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff'%3EDefault Fallback%3C/text%3E%3C/svg%3E" 
    alt="Responsive picture demonstration"
  >
</picture>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Mandatory <img> Requirement',
      type: 'list',
      items: [
        'A <picture> element without an inner <img> tag will display nothing at all on screen.',
        'The alt attribute belongs on the child <img>, NOT on the <picture> or <source> elements.',
        'CSS styles applied to the image must target the inner <img> tag, which actually renders the pixel canvas.',
      ],
      callout: {
        type: 'warning',
        title: 'Order Matters in <source>',
        content: 'Browsers evaluate `<source>` elements top-to-bottom and select the first match. Place the most restrictive or modern format (e.g. AVIF with narrow media queries) first.',
      },
    },
  ],
};
