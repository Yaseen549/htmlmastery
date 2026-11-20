export const navLesson = {
  slug: 'nav',
  number: '10',
  title: '<nav>',
  category: 'Sectioning & Landmarks',
  subtitle: 'Defines a section of a page whose purpose is to provide navigation links',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Navigation Landmark',
      paragraphs: [
        'The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and pagination.',
        'Not all groups of links must be inside a <nav> element; it is intended primarily for major navigation blocks. For instance, a list of footer links (terms, privacy) does not require a <nav>, though a site-wide navigation bar or paginator does.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<nav aria-label="Primary Navigation"> <ul>...</ul> </nav>',
      syntaxNote: 'Normal element requiring both start and closing tags. Typically contains an unordered list (<ul>) of links (<a>).',
    },
    {
      id: 'attributes',
      title: 'ARIA Roles & Labeling Rules',
      type: 'attributes-table',
      headers: ['Attribute / Role', 'Default', 'Accessibility Requirement', 'Description'],
      rows: [
        ['Implicit ARIA role', 'navigation', 'Automatic', 'Screen readers announce the element as a navigation landmark.'],
        ['aria-label', 'None', 'Mandatory if >1 nav', 'Distinguishes between multiple navs (e.g. aria-label="Main", aria-label="Pagination").'],
        ['aria-current', 'None', 'Recommended', 'Set aria-current="page" on the active link to inform screen readers.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Native Navigation List Example',
      type: 'code-example',
      codeTitle: 'Semantic Navigation with Accessible State',
      code: `<nav aria-label="Main Navigation">
  <ul>
    <li><a href="#" aria-current="page">Dashboard (Current)</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Team</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</nav>`,
      demo: {
        title: 'Native Browser Output',
        html: `<nav aria-label="Main Navigation">
  <ul>
    <li><a href="#" aria-current="page">Dashboard (Current)</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">Team</a></li>
    <li><a href="#">Settings</a></li>
  </ul>
</nav>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Screen Reader & WCAG Guidelines',
      type: 'list',
      items: [
        'When multiple <nav> elements are present on a single page, always provide unique aria-label attributes (e.g. aria-label="Primary" vs aria-label="Footer Navigation").',
        'Use aria-current="page" on the link corresponding to the current URL. Screen readers will announce "Dashboard, current page, link".',
        'Wrap links inside a <ul> or <ol> list so screen readers announce "Navigation, list 4 items", giving users context on how many links are available.',
      ],
      callout: {
        type: 'accessibility',
        title: 'aria-current vs active class',
        content: 'Styling active links with class="active" only works visually. Screen readers require aria-current="page" to convey current page status to non-sighted users.',
      },
    },
  ],
};
