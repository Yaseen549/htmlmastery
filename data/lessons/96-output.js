export const outputLesson = {
  slug: 'output',
  number: '96',
  title: '<output>',
  category: 'Forms & Input Controls',
  subtitle: 'Container element into which calculated results or user action outputs are injected',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Calculation Output',
      paragraphs: [
        'The <output> HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.',
        'It is an inline phrasing element with an implicit ARIA role of status, meaning screen readers monitor it and automatically announce changes to its content (live region behavior).',
        'The for attribute links the output element to the IDs of the contributing input controls that produced the calculation.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">\n  <input type="range" id="b" name="b" value="50">\n  + <input type="number" id="a" name="a" value="10">\n  = <output name="result" for="a b">60</output>\n</form>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains phrasing content representing the calculated result.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['for', 'Space-separated list of IDs', 'none', 'List of element IDs whose values contributed to this output calculation.'],
        ['form', 'ID string', 'none', 'The form owner with which the output is associated.'],
        ['name', 'String', 'none', 'Name of the output element submitted with form data.'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, dir, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Live Interactive Form Calculation',
      type: 'code-example',
      codeTitle: 'Real-Time Calculation Without External Libraries',
      code: `<!-- Interactive real-time addition calculator -->
<form oninput="total.value = parseInt(price.value) + parseInt(shipping.value)">
  <p>
    <label for="price">Item Price ($):</label><br>
    <input type="number" id="price" name="price" value="45">
  </p>
  
  <p>
    <label for="shipping">Shipping Cost ($):</label><br>
    <input type="range" id="shipping" name="shipping" min="0" max="30" value="10" oninput="shipVal.value = shipping.value">
    $<output id="shipVal">10</output>
  </p>
  
  <p>
    <strong>Order Total: $</strong>
    <output name="total" for="price shipping">55</output>
  </p>
</form>`,
      demo: {
        title: 'Native Browser Output',
        html: `<form oninput="total.value = parseInt(price.value) + parseInt(shipping.value)">
  <p>
    <label for="price">Item Price ($):</label><br>
    <input type="number" id="price" name="price" value="45">
  </p>
  <p>
    <label for="shipping">Shipping Cost ($):</label><br>
    <input type="range" id="shipping" name="shipping" min="0" max="30" value="10" oninput="shipVal.value = shipping.value">
    $<output id="shipVal">10</output>
  </p>
  <p>
    <strong>Order Total: $</strong>
    <output name="total" for="price shipping">55</output>
  </p>
</form>`,
        interactive: true,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Live Region Semantics',
      type: 'list',
      items: [
        'Assistive technologies recognize <output> as a live calculation status region, speaking updated numbers to blind users.',
        'The for attribute formally documents the mathematical dependency chain for browsers and search engines.',
      ],
      callout: {
        type: 'tip',
        title: 'Native oninput Form Events',
        content: 'Attaching `oninput="..."` directly to the `<form>` element allows effortless real-time recalculations using pure native browser DOM APIs.',
      },
    },
  ],
};
