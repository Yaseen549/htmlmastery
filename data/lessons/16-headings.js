export const headingsLesson = {
  slug: 'headings',
  number: '16',
  title: '<h1>-<h6>',
  category: 'Sectioning & Landmarks',
  subtitle: 'The six levels of document headings establishing the structural outline and hierarchy',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Document Outline',
      paragraphs: [
        'The <h1> through <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.',
        'Headings are foundational for web accessibility and search engine optimization. Screen readers and automated web indexers use heading tags to construct a table of contents and navigate content hierarchical structures.',
        'Headings should reflect the logical structure of your document, never be chosen solely for their default visual font size.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<h1>Primary Title</h1> <h2>Major Subheading</h2> <h3>Topic Section</h3>',
      syntaxNote: 'Normal elements requiring opening and closing tags (<h1>...</h1>). Enclose phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Heading Hierarchy Levels Table',
      type: 'attributes-table',
      headers: ['Element', 'Level', 'Recommended Max Per Page', 'Standard Purpose'],
      rows: [
        ['<h1>', 'Level 1 (Highest)', '1', 'Primary topic or title of the entire document.'],
        ['<h2>', 'Level 2', 'Multiple', 'Major section divisions across the page.'],
        ['<h3>', 'Level 3', 'Multiple', 'Subsections nested inside <h2>.'],
        ['<h4>', 'Level 4', 'Multiple', 'Detailed subsections under <h3>.'],
        ['<h5>', 'Level 5', 'Multiple', 'Deeply nested subsections under <h4>.'],
        ['<h6>', 'Level 6 (Lowest)', 'Multiple', 'Lowest structural division under <h5>.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Browser Heading Renderings',
      type: 'code-example',
      codeTitle: 'Default Browser Heading Scale',
      code: `<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Screen Reader Rules',
      type: 'list',
      items: [
        'Never skip heading levels (e.g. going from <h1> directly to <h3>). This confuses screen reader users who rely on the heading hierarchy to understand content relationships.',
        'Limit pages to a single <h1> element representing the page title. While HTML5 technically allowed multiple <h1> elements inside nested sectioning elements, the outline algorithm was never implemented by browser vendors.',
        'Never use heading tags just to make text bold or large. Use CSS (font-weight and font-size) on regular <p> or <span> tags instead.',
      ],
      callout: {
        type: 'accessibility',
        title: 'WCAG 2.1 Criterion 1.3.1 (Info and Relationships)',
        content: 'Screen reader users frequently press the "H" key to jump between headings to scan a page. Broken heading hierarchies severely degrade usability for assistive tech users.',
      },
    },
  ],
};
