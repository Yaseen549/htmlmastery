export const areaLesson = {
  slug: 'area',
  number: '70',
  title: '<area>',
  category: 'Images & Multimedia',
  subtitle: 'Defines a clickable geometric region (rect, circle, poly) within an image map (<map>)',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Map Area',
      paragraphs: [
        'The <area> HTML element defines a area inside an image map that has predefined clickable areas.',
        'An <area> element must always be nested inside a <map> element.',
        'It supports four distinct geometric shapes: rect (rectangle defined by four coordinates), circle (center point and radius), poly (polygon with pairs of x,y vertices), and default (the entire remaining image area).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<area shape="rect" coords="34,44,270,350" href="https://example.com" alt="Product details">',
      syntaxNote: 'Void element with no closing tag. Never write </area>. Must reside inside a <map> tag.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['shape', 'rect | circle | poly | default', 'rect', 'The shape of the hot-spot area.'],
        ['coords', 'Comma-separated coordinates', 'none', 'Coordinates defining the shape in pixels relative to top-left of image.'],
        ['href', 'URL', 'none', 'Hyperlink destination URL activated on click.'],
        ['alt', 'String', 'Required if href present', 'Accessible text describing the target destination of the area.'],
        ['target', '_self | _blank | _parent | _top', '_self', 'Browsing context where destination URL opens.'],
        ['download', 'Filename string / Boolean', 'none', 'Prompts the browser to download the linked target.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Area Shapes and Coordinates',
      type: 'code-example',
      codeTitle: 'Rectangles, Circles, and Polygons',
      code: `<!-- Image connected to image map -->
<img 
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='100'%3E%3Crect width='280' height='100' fill='%23f1f5f9'/%3E%3Crect x='10' y='10' width='80' height='80' fill='%233b82f6'/%3E%3Ccircle cx='140' cy='50' r='40' fill='%2310b981'/%3E%3Cpolygon points='230,10 270,90 190,90' fill='%23f97316'/%3E%3C/svg%3E" 
  alt="Geometric shapes diagram" 
  width="280" 
  height="100" 
  usemap="#shapesmap"
>

<map name="shapesmap">
  <!-- Rectangle: left, top, right, bottom -->
  <area shape="rect" coords="10,10,90,90" href="#square" alt="Blue square link">
  <!-- Circle: center-x, center-y, radius -->
  <area shape="circle" coords="140,50,40" href="#circle" alt="Green circle link">
  <!-- Polygon: x1,y1, x2,y2, x3,y3 -->
  <area shape="poly" coords="230,10,270,90,190,90" href="#triangle" alt="Orange triangle link">
</map>`,
      demo: {
        title: 'Native Browser Output',
        html: `<img 
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='100'%3E%3Crect width='280' height='100' fill='%23f1f5f9'/%3E%3Crect x='10' y='10' width='80' height='80' fill='%233b82f6'/%3E%3Ccircle cx='140' cy='50' r='40' fill='%2310b981'/%3E%3Cpolygon points='230,10 270,90 190,90' fill='%23f97316'/%3E%3C/svg%3E" 
  alt="Geometric shapes diagram" 
  width="280" 
  height="100" 
  usemap="#shapesmap"
>
<map name="shapesmap">
  <area shape="rect" coords="10,10,90,90" href="#square" alt="Blue square link">
  <area shape="circle" coords="140,50,40" href="#circle" alt="Green circle link">
  <area shape="poly" coords="230,10,270,90,190,90" href="#triangle" alt="Orange triangle link">
</map>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Accessibility & Keyboard Navigation',
      type: 'list',
      items: [
        'Each <area> with an href attribute is focusable using the Tab key.',
        'The alt attribute is mandatory whenever href is used, so screen readers can announce the link purpose.',
        'Browsers render focus rings around the active geometric shape during keyboard tab navigation.',
      ],
      callout: {
        type: 'warning',
        title: 'Mandatory alt Attribute',
        content: 'Omitting the `alt` attribute on an `<area>` that has an `href` attribute is an HTML5 validation error and completely breaks screen reader accessibility.',
      },
    },
  ],
};
