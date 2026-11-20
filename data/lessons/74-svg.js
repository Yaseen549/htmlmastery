export const svgLesson = {
  slug: 'svg',
  number: '74',
  title: '<svg>',
  category: 'Images & Multimedia',
  subtitle: 'Scalable Vector Graphics container for vector illustrations, icons, diagrams, and shapes',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Vector Graphics',
      paragraphs: [
        'The <svg> HTML element defines a container for Scalable Vector Graphics (SVG). Standardized in HTML5, SVG elements can be embedded directly into HTML documents without an <img> or <iframe> wrapper.',
        'Because SVG is XML-based, every element inside <svg> (such as <path>, <circle>, <rect>, <polygon>, and <text>) is part of the document DOM and can be styled with CSS or scripted with JavaScript.',
        'SVG graphics scale infinitely to any screen density or resolution without pixelation, making them the industry standard for web icons, charts, and logos.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">\n  <circle cx="50" cy="50" r="40" fill="#f97316" />\n</svg>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains SVG graphic elements.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['viewBox', 'min-x min-y width height', 'none', 'Coordinate space and aspect ratio of the SVG viewport.'],
        ['width', 'Length / CSS pixels', 'none', 'Rendered width of the SVG container.'],
        ['height', 'Length / CSS pixels', 'none', 'Rendered height of the SVG container.'],
        ['xmlns', 'XML namespace URL', 'none', 'Specifies the SVG XML namespace (required when used as standalone file).'],
      ],
    },
    {
      id: 'code-example',
      title: 'Vector Shapes and Geometry',
      type: 'code-example',
      codeTitle: 'Circles, Rectangles, and Vector Stars',
      code: `<!-- Inline SVG vector graphics -->
<svg viewBox="0 0 300 100" width="300" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- Rounded rectangle background -->
  <rect x="10" y="10" width="280" height="80" rx="12" fill="#18181b" stroke="#f97316" stroke-width="2" />
  
  <!-- Colored circle -->
  <circle cx="60" cy="50" r="25" fill="#f97316" />
  
  <!-- Vector text label -->
  <text x="110" y="56" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="bold">
    Native Inline SVG
  </text>
</svg>`,
      demo: {
        title: 'Native Browser Output',
        html: `<svg viewBox="0 0 300 100" width="300" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="280" height="80" rx="12" fill="#18181b" stroke="#f97316" stroke-width="2" />
  <circle cx="60" cy="50" r="25" fill="#f97316" />
  <text x="110" y="56" fill="#ffffff" font-family="sans-serif" font-size="18" font-weight="bold">
    Native Inline SVG
  </text>
</svg>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'SVG Accessibility Guidelines',
      type: 'list',
      items: [
        'Include a `<title>` element as the first child of `<svg>` to provide an accessible label for screen readers.',
        'Add `role="img"` to the `<svg>` element for consistent assistive technology recognition.',
        'If the SVG is purely decorative, add `aria-hidden="true"` so screen readers bypass it.',
      ],
      callout: {
        type: 'tip',
        title: 'viewBox vs width/height',
        content: 'The `viewBox` sets the coordinate system, while `width` and `height` set the physical size on screen. Combining them makes graphics effortlessly responsive.',
      },
    },
  ],
};
