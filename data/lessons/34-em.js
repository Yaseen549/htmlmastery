export const emLesson = {
  slug: 'em',
  number: '34',
  title: '<em>',
  category: 'Inline Text Semantics',
  subtitle: 'Marks text that has stress emphasis, altering verbal tone and semantic meaning',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Emphasis',
      paragraphs: [
        'The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis.',
        'Unlike <i> (which represents alternate voice or idiomatic phrasing without semantic stress), <em> changes the meaning of the spoken sentence.',
        'User-agent stylesheets render <em> in italics by default (font-style: italic).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>I <em>love</em> writing clean HTML.</p>',
      syntaxNote: 'Normal inline element requiring both start and closing tags. Contains phrasing content.',
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
      title: 'Semantic Stress Demonstrations',
      type: 'code-example',
      codeTitle: 'How Emphasis Shifts the Sentence Meaning',
      code: `<!-- Stressing different words changes sentence meaning -->
<p><em>I</em> did not take your book. (Someone else took it)</p>
<p>I did not take <em>your</em> book. (I took someone else's book)</p>
<p>I did not take your <em>book</em>. (I took something else of yours)</p>

<!-- Nested emphasis for heightened stress -->
<p>You must <em>never, <em>ever</em></em> share your password.</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p><em>I</em> did not take your book. (Someone else took it)</p>
<p>I did not take <em>your</em> book. (I took someone else's book)</p>
<p>I did not take your <em>book</em>. (I took something else of yours)</p>
<p>You must <em>never, <em>ever</em></em> share your password.</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & Pronunciation Behavior',
      type: 'list',
      items: [
        'Screen readers capable of expressive speech synthesize stressed vocal inflection on text wrapped in <em>.',
        'Do not use <em> purely for visual italicization; if italics are needed without stress (e.g., Latin species name or ship title), use <i> or <cite>.',
      ],
      callout: {
        type: 'note',
        title: '<em> vs <i>',
        content: 'Use `<em>` when stressing the word changes the vocal meaning. Use `<i>` for technical terms, idiomatic phrases, or taxonomic designations.',
      },
    },
  ],
};
