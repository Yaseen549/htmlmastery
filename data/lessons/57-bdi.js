export const bdiLesson = {
  slug: 'bdi',
  number: '57',
  title: '<bdi>',
  category: 'Inline Text Semantics',
  subtitle: 'Tells the browser\'s bidirectional algorithm to isolate the text from its surroundings',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'BiDi Isolate',
      paragraphs: [
        'The <bdi> (Bidirectional Isolate) HTML element tells the browser\'s bidirectional algorithm to treat the text in isolation from its surroundings.',
        'It is particularly useful when embedding user-generated content (such as usernames, comments, or product names) where the language and text direction (LTR or RTL) is unknown in advance.',
        'Without <bdi>, an Arabic or Hebrew username could invert adjacent numbers, exclamation marks, or punctuation in an otherwise English sentence.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>User <bdi>إيان</bdi>: 15 points</p>',
      syntaxNote: 'Normal inline element requiring start and closing tags. Contains phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Description'],
      rows: [
        ['dir', 'ltr | rtl | auto', 'auto (default)', 'Explicit text direction; defaults to auto which infers direction from character contents.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Isolating Dynamic User Names',
      type: 'code-example',
      codeTitle: 'High-Score Leaderboard with LTR and RTL Names',
      code: `<!-- Without <bdi>, the Arabic name alters punctuation flow -->
<p>
  User without isolation: إيان: 3 points.
</p>

<!-- With <bdi>, the direction is cleanly isolated -->
<p>
  User with &lt;bdi&gt;: <bdi>إيان</bdi>: 3 points.
</p>

<ul>
  <li>User <bdi>Alex</bdi>: 100 points</li>
  <li>User <bdi>سارة</bdi>: 95 points</li>
  <li>User <bdi>דוד</bdi>: 90 points</li>
</ul>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  User without isolation: إيان: 3 points.
</p>
<p>
  User with &lt;bdi&gt;: <bdi>إيان</bdi>: 3 points.
</p>
<ul>
  <li>User <bdi>Alex</bdi>: 100 points</li>
  <li>User <bdi>سارة</bdi>: 95 points</li>
  <li>User <bdi>דוד</bdi>: 90 points</li>
</ul>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Internationalization (i18n) Directive',
      type: 'list',
      items: [
        'Always wrap untrusted dynamic strings in <bdi> in internationalized user interfaces.',
        '<bdi> isolates text bidirectionally, whereas <bdo> overrides text direction explicitly.',
        'User-agent stylesheets render unicode-bidi: isolate by default on <bdi>.',
      ],
      callout: {
        type: 'tip',
        title: 'Default dir="auto"',
        content: '`<bdi>` defaults to `dir="auto"`, allowing the browser to inspect the first strong directional character to determine if the isolated snippet is LTR or RTL.',
      },
    },
  ],
};
