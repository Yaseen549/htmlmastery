export const iLesson = {
  slug: 'i',
  number: '48',
  title: '<i>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents idiomatic text, technical terms, taxonomic names, or an alternate voice/mood',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Idiomatic Text',
      paragraphs: [
        'The <i> HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, transliterations, a thought, or a ship name in Western texts.',
        'User-agent stylesheets render <i> in italics by default (font-style: italic).',
        'Unlike <em> (which indicates semantic stress emphasis), <i> indicates an alternate voice or mood without changing the verbal stress.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The domestic cat is scientifically known as <i>Felis catus</i>.</p>',
      syntaxNote: 'Normal inline element requiring start and closing tags. Contains phrasing content.',
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
      title: 'Alternate Voice and Scientific Names',
      type: 'code-example',
      codeTitle: 'Foreign Idioms, Taxonomic Names, and Internal Thoughts',
      code: `<!-- Taxonomic species designation -->
<p>
  The modern human species is classified as <i>Homo sapiens</i>.
</p>

<!-- Foreign phrase or idiom -->
<p>
  The agreement was reached <i lang="la">ad hoc</i> without formal negotiations.
</p>

<!-- Internal monologue or thought in narrative -->
<p>
  She stared at the blank screen. <i>Where did all my files go?</i> she wondered.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  The modern human species is classified as <i>Homo sapiens</i>.
</p>
<p>
  The agreement was reached <i lang="la">ad hoc</i> without formal negotiations.
</p>
<p>
  She stared at the blank screen. <i>Where did all my files go?</i> she wondered.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Semantic Choice Guide',
      type: 'list',
      items: [
        'Use <em> for stress emphasis that affects sentence meaning.',
        'Use <cite> for the title of a creative work (book, movie, song).',
        'Use <dfn> for the defining instance of a term.',
        'Use <i> for idiomatic phrases, scientific binomials, foreign words, and character thoughts.',
      ],
      callout: {
        type: 'note',
        title: 'Icon Fonts Warning',
        content: 'While icon libraries historically used `<i class="fa fa-star"></i>`, this is non-standard markup abuse. Modern accessible practices recommend inline SVGs with accessible titles or spans.',
      },
    },
  ],
};
