export const marqueeLesson = {
  slug: 'marquee',
  number: '111',
  title: '<marquee>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated scrolling text container; obsolete in HTML5, replaced with CSS animations',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <marquee> HTML element was introduced by Microsoft in early versions of Internet Explorer to create an area containing moving or scrolling text or images.',
        'It is non-standard and completely obsolete in the HTML Living Standard. Web authors must not use it. It is maintained by browser engines purely for backwards compatibility with legacy web pages.',
        'Modern web standards replace <marquee> with smooth, hardware-accelerated CSS keyframe animations (@keyframes) and transform translations.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Non-Standard HTML -->\n<marquee behavior="scroll" direction="left">Scrolling announcement...</marquee>\n\n/* Modern Standard CSS Alternative */\n@keyframes marquee {\n  from { transform: translateX(100%); }\n  to { transform: translateX(-100%); }\n}',
      syntaxNote: 'Obsolete element. Fails modern W3C/WHATWG HTML validation checks.',
    },
    {
      id: 'attributes',
      title: 'Obsolete Attributes Matrix',
      type: 'attributes-table',
      headers: ['Attribute', 'Historical Purpose', 'Status', 'Modern Alternative'],
      rows: [
        ['behavior', 'scroll | slide | alternate', 'Obsolete', 'CSS animation-timing-function and animation-direction'],
        ['direction', 'left | right | up | down', 'Obsolete', 'CSS translateX() or translateY() translation'],
        ['loop', 'Number of repetitions', 'Obsolete', 'CSS animation-iteration-count'],
        ['scrollamount', 'Speed of scrolling in pixels', 'Obsolete', 'CSS animation-duration'],
      ],
    },
    {
      id: 'code-example',
      title: 'Legacy Browser Behavior vs CSS',
      type: 'code-example',
      codeTitle: 'Historical Marquee in Modern Browser Engines',
      code: `<!-- Historical <marquee> rendering in modern browser user-agent -->
<marquee behavior="scroll" direction="left">
  Notice: This is legacy scrolling text rendered natively by browser backwards-compatibility engines.
</marquee>

<p>
  <em>Modern replacement: Use CSS animations with transforms to create accessible, pauseable tickers.</em>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<marquee behavior="scroll" direction="left">
  Notice: This is legacy scrolling text rendered natively by browser backwards-compatibility engines.
</marquee>
<p>
  <em>Modern replacement: Use CSS animations with transforms to create accessible, pauseable tickers.</em>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Critical Accessibility Hazards',
      type: 'list',
      items: [
        'Moving or scrolling text creates severe reading difficulties for users with visual, cognitive, or attention disorders (ADHD).',
        'WCAG 2.1 Guideline 2.2.2 requires moving content that starts automatically and lasts more than five seconds to have a mechanism for the user to pause, stop, or hide it.',
        '<marquee> provides no native pause controls or accessible reduction hooks.',
      ],
      callout: {
        type: 'warning',
        title: 'Do Not Use in Production',
        content: 'Never use `<marquee>` in production websites. Use CSS animations paired with `@media (prefers-reduced-motion: reduce)` to respect user motion preferences.',
      },
    },
  ],
};
