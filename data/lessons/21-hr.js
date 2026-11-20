export const hrLesson = {
  slug: 'hr',
  number: '21',
  title: '<hr>',
  category: 'Text Content & Grouping',
  subtitle: 'Represents a thematic break between paragraph-level elements in an HTML page',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Thematic Break',
      paragraphs: [
        'The <hr> HTML element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic within a section).',
        'In historical HTML versions, <hr> was purely a presentational horizontal rule (a 3D shaded line). In HTML5, it was redefined with semantic meaning: it indicates a thematic break or transition between content.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<hr>',
      syntaxNote: 'Void element with no closing tag and no children. <hr /> is valid in HTML5 and XHTML.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Historical Replacements',
      type: 'attributes-table',
      headers: ['Attribute', 'Historical Usage', 'Status in HTML5', 'Modern CSS Replacement'],
      rows: [
        ['align', 'left | center | right', 'Obsolete', 'Use margin: 0 auto or text-align.'],
        ['color', 'Color name or hex', 'Obsolete', 'Use border-color or background-color.'],
        ['noshade', 'Boolean (flat line)', 'Obsolete', 'Use border: none; border-top: 1px solid.'],
        ['size', 'Line thickness in px', 'Obsolete', 'Use border-width or height.'],
        ['width', 'Rule width (px or %)', 'Obsolete', 'Use width: 50% or max-width.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Thematic Scene Transition Example',
      type: 'code-example',
      codeTitle: 'Thematic Shift in a Narrative',
      code: `<h2>Chapter 1: The Departure</h2>
<p>
  The ship hoisted its sails at dawn, cutting through the calm morning waters
  as the shoreline slowly dissolved into the mist.
</p>

<hr>

<h2>Chapter 2: The Open Ocean</h2>
<p>
  Three days had passed with no land in sight. The sky turned a threatening
  shade of slate gray as the winds picked up.
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<h2>Chapter 1: The Departure</h2>
<p>
  The ship hoisted its sails at dawn, cutting through the calm morning waters
  as the shoreline slowly dissolved into the mist.
</p>

<hr>

<h2>Chapter 2: The Open Ocean</h2>
<p>
  Three days had passed with no land in sight. The sky turned a threatening
  shade of slate gray as the winds picked up.
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & ARIA Roles',
      type: 'list',
      items: [
        'The <hr> element has an implicit ARIA role="separator", signaling a content divider to screen readers.',
        'Screen readers announce "separator" or "horizontal line" to assistive tech users when traversing through content.',
        'Do not use <hr> purely for visual lines when no shift in topic occurs; use CSS border properties on other elements instead.',
      ],
      callout: {
        type: 'tip',
        title: 'Semantic Purpose in HTML5',
        content: 'Remember that in HTML5, <hr> carries the semantic meaning of a thematic topic transition, not just a decorative graphic line.',
      },
    },
  ],
};
