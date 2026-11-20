export const acronymLesson = {
  slug: 'acronym',
  number: '118',
  title: '<acronym>',
  category: 'Obsolete & Deprecated Reference',
  subtitle: 'Deprecated acronym element; obsolete in HTML5, completely replaced with <abbr>',
  sections: [
    {
      id: 'overview',
      title: 'Historical Background & Deprecation',
      type: 'text',
      badge: 'Obsolete in HTML5',
      paragraphs: [
        'The <acronym> HTML element allowed authors to clearly indicate a sequence of characters that composed an acronym or abbreviation for a longer phrase.',
        'It was deprecated in HTML 4 and is completely obsolete in HTML5.',
        'The distinction between acronyms (words pronounced as a single word like NASA or UNESCO) and initialisms/abbreviations (words spelled letter-by-letter like HTML or FBI) caused endless confusion among authors. The WHATWG unified both concepts under the standard `<abbr>` element.',
      ],
    },
    {
      id: 'syntax',
      title: 'Obsolete Syntax & Modern Replacement',
      type: 'syntax',
      syntax: '<!-- Obsolete Tag (Fails HTML5 Validation) -->\n<acronym title="National Aeronautics and Space Administration">NASA</acronym>\n\n<!-- Standard Modern HTML5 Replacement -->\n<abbr title="National Aeronautics and Space Administration">NASA</abbr>',
      syntaxNote: 'Obsolete element. Replaced completely by <abbr>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type', 'Status', 'Modern Equivalent'],
      rows: [
        ['title', 'String', 'Obsolete on acronym', 'title attribute on <abbr>'],
        ['Global attributes', 'Supported', 'Obsolete', 'Use on <abbr>'],
      ],
    },
    {
      id: 'code-example',
      title: 'Modern Replacement with <abbr>',
      type: 'code-example',
      codeTitle: 'Historical <acronym> vs Modern <abbr>',
      code: `<!-- Historical acronym in browser backwards-compatibility engine -->
<p>
  Historical: <acronym title="HyperText Markup Language">HTML</acronym>
</p>

<!-- Modern accessible standard -->
<p>
  Modern standard: <abbr title="HyperText Markup Language">HTML</abbr>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  Historical: <acronym title="HyperText Markup Language">HTML</acronym>
</p>
<p>
  Modern standard: <abbr title="HyperText Markup Language">HTML</abbr>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Why <abbr> Won the Standard',
      type: 'list',
      items: [
        'Languages and cultures differ on what counts as an acronym vs an initialism.',
        'Screen readers and accessibility tools have standardized support for <abbr>.',
        'Always use `<abbr title="...">` for all short forms.',
      ],
      callout: {
        type: 'important',
        title: 'Use <abbr> Exclusively',
        content: 'Never use `<acronym>`. Modern HTML5 validators will flag `<acronym>` as an error.',
      },
    },
  ],
};
