export const imgLesson = {
  slug: 'img',
  number: '63',
  title: '<img>',
  category: 'Images & Multimedia',
  subtitle: 'Embeds an image into the document with responsive attributes and lazy loading support',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Image Embed',
      paragraphs: [
        'The <img> HTML element embeds an image into the document. It is an inline replaced element whose dimensions are determined by the intrinsic width and height of the referenced graphic resource.',
        'The src attribute is required and contains the URL path to the image file (supporting PNG, JPEG, SVG, WebP, AVIF, and GIF formats). The alt attribute is mandatory for accessibility, providing alternative text for screen readers or when the image fails to load.',
        'Modern HTML5 adds native loading="lazy", decoding="async", and responsive attributes (srcset and sizes) for optimized mobile performance.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<img src="photo.webp" alt="Descriptive text" width="800" height="600" loading="lazy">',
      syntaxNote: 'Void element with no closing tag. Never write </img>. Self-closing <img /> is acceptable for XHTML.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['src', 'URL', 'Required', 'The image URL to load.'],
        ['alt', 'String', 'Required for a11y', 'Alternative descriptive text if the image cannot be displayed or for assistive tech.'],
        ['width', 'Integer (pixels)', 'none', 'Intrinsic width of the image in CSS pixels (prevents layout shift CLS).'],
        ['height', 'Integer (pixels)', 'none', 'Intrinsic height of the image in CSS pixels.'],
        ['loading', 'eager | lazy', 'eager', 'Defers loading of off-screen images until the user scrolls near them.'],
        ['decoding', 'sync | async | auto', 'auto', 'Hints to the browser whether to decode the image asynchronously off the main thread.'],
        ['srcset', 'URL width/density pairs', 'none', 'List of image candidate files for high-DPI displays or different screen widths.'],
        ['sizes', 'Media queries with widths', 'none', 'Defines the intended layout display size of the image across breakpoints.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Responsive and Standalone Images',
      type: 'code-example',
      codeTitle: 'Basic Image with Dimensions and Alt Text',
      code: `<!-- Standard image with explicit width/height and alt text -->
<img 
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Crect width='300' height='150' fill='%23ea580c'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='20'%3EHTML5 Native Image%3C/text%3E%3C/svg%3E" 
  alt="Orange banner with HTML5 Native Image label" 
  width="300" 
  height="150"
>

<!-- Image with decorative alt="" and lazy loading -->
<p>
  The image above is loaded with an inline SVG data URI.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<img 
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='150' viewBox='0 0 300 150'%3E%3Crect width='300' height='150' fill='%23ea580c'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='20'%3EHTML5 Native Image%3C/text%3E%3C/svg%3E" 
  alt="Orange banner with HTML5 Native Image label" 
  width="300" 
  height="150"
>
<p>
  The image above is loaded with an inline SVG data URI.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Cumulative Layout Shift (CLS)',
      type: 'list',
      items: [
        'Always provide width and height attributes so the browser reserves layout space before download completes, preventing layout shift.',
        'If an image is purely decorative, provide an empty alt="" attribute so screen readers skip it cleanly.',
        'Never omit the alt attribute entirely; missing alt causes screen readers to read the raw image URL aloud.',
      ],
      callout: {
        type: 'tip',
        title: 'Aspect Ratio Reservation',
        content: 'Specifying `width="800" height="600"` on the `<img>` tag allows modern browsers to calculate the aspect-ratio automatically, eliminating Cumulative Layout Shift (CLS).',
      },
    },
  ],
};
