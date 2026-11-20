export const blinkLesson = {
  slug: 'blink',
  number: '112',
  title: '<blink>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated blinking text element; obsolete in HTML5, replaced with CSS opacity animations',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <blink> HTML element was introduced by Netscape Navigator in 1994 as a proprietary tag that caused enclosed text to flash or blink continuously on and off.',
        'It was never standardized by the W3C and is completely obsolete. Modern browser engines have removed support or render it as inert static text to prevent visual distress.',
        'Flashing content triggers seizures in individuals with photosensitive epilepsy and severe distraction for cognitive readers.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Proprietary Tag -->\n<blink>Flashing warning message</blink>\n\n/* Modern CSS alternative (if subtle pulsing is required) */\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.2; }\n}',
      syntaxNote: 'Obsolete element. Not supported by modern browser standards.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['Global attributes', 'Ignored', 'Obsolete', 'No proprietary attributes existed; tag operated via tag name alone.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Inert Rendering in Modern Browsers',
      type: 'code-example',
      codeTitle: 'Modern Browser Handling of <blink>',
      code: `<!-- Modern browsers render <blink> as ordinary unstyled text -->
<p>
  Status: <blink>CRITICAL ALERT</blink> (In modern browsers, blink is intentionally disabled).
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Status: <blink>CRITICAL ALERT</blink> (In modern browsers, blink is intentionally disabled).
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Photosensitive Epilepsy Warning (WCAG 2.3)',
      type: 'list',
      items: [
        'WCAG Guideline 2.3 strictly forbids web content from flashing more than three times per second to prevent triggering seizures in photosensitive individuals.',
        'Use polite visual badges, strong semantic emphasis (<strong>), or warning icons instead of flashing text.',
      ],
      callout: {
        type: 'warning',
        title: 'Completely Removed',
        content: 'All major modern browsers (Chrome, Safari, Firefox, Edge) have permanently removed the flashing functionality of `<blink>`. It renders as ordinary static text.',
      },
    },
  ],
};
