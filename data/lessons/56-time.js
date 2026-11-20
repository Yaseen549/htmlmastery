export const timeLesson = {
  slug: 'time',
  number: '56',
  title: '<time>',
  category: 'Inline Text Semantics',
  subtitle: 'Represents a specific period in time or datetime with an optional machine-readable format',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Datetime',
      paragraphs: [
        'The <time> HTML element represents a specific period in time.',
        'It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders, calendar event generation, and localized formatting.',
        'Values can represent dates (2026-11-20), times (14:30), full timestamps with offsets (2026-11-20T14:30:00+05:30), durations (PT2H30M), or years/months.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<p>The conference starts on <time datetime="2026-11-20T09:00:00Z">November 20, 2026 at 9:00 AM UTC</time>.</p>',
      syntaxNote: 'Normal inline element requiring opening and closing tags. Contains phrasing content.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Format', 'Default', 'Description'],
      rows: [
        ['datetime', 'ISO 8601 date / time string', 'none', 'Machine-readable date, time, timestamp, or duration string.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Calendar Events, Timestamps, and Durations',
      type: 'code-example',
      codeTitle: 'Publication Dates and Duration Values',
      code: `<!-- Article publication date -->
<p>
  Published on <time datetime="2026-04-15">April 15, 2026</time> 
  by editorial staff.
</p>

<!-- Event timestamp with time zone -->
<p>
  Webinar begins at 
  <time datetime="2026-11-20T15:30:00-05:00">3:30 PM EST</time>.
</p>

<!-- Duration format (2 hours, 45 minutes) -->
<p>
  Movie runtime: <time datetime="PT2H45M">2h 45m</time>.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Published on <time datetime="2026-04-15">April 15, 2026</time> 
  by editorial staff.
</p>
<p>
  Webinar begins at 
  <time datetime="2026-11-20T15:30:00-05:00">3:30 PM EST</time>.
</p>
<p>
  Movie runtime: <time datetime="PT2H45M">2h 45m</time>.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Search Engine & Calendar Automation',
      type: 'list',
      items: [
        'Search engines parse <time datetime="..."> to show accurate publication and event dates in rich search snippets.',
        'Calendar apps and OS utilities can detect <time> to offer "Add to Calendar" shortcuts automatically.',
        'Always format the datetime attribute strictly following ISO 8601 (YYYY-MM-DD or YYYY-MM-DDThh:mm:ssZ).',
      ],
      callout: {
        type: 'tip',
        title: 'Relative Dates',
        content: 'When writing relative expressions like `<time datetime="2026-11-19">yesterday</time>`, the machine value ensures historical accuracy even years later.',
      },
    },
  ],
};
