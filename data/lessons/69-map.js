export const mapLesson = {
  slug: 'map',
  number: '69',
  title: '<map>',
  category: 'Images & Multimedia',
  subtitle: 'Defines a client-side image map with clickable interactive geometric regions',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Image Map',
      paragraphs: [
        'The <map> HTML element is used with <area> elements to define an image map (a clickable link area).',
        'An image map allows different geometric sections of a single graphic image to link to different destination URLs.',
        'It is connected to an <img> element via the image\'s usemap attribute, matching the map\'s required name attribute: `<img usemap="#mapname">`.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<map name="primarymap">\n  <area shape="rect" coords="0,0,100,100" href="/page1" alt="Region 1">\n  <area shape="circle" coords="150,150,40" href="/page2" alt="Region 2">\n</map>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains one or more <area> elements. The name attribute is required.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['name', 'String', 'Required', 'The map name used by the img usemap attribute (e.g. usemap="#name").'],
        ['Global attributes', 'Supported', 'Standard', 'Supports class, id, title, lang, etc.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Clickable Graphic Regions',
      type: 'code-example',
      codeTitle: 'Interactive Image Map with Rectangles and Circles',
      code: `<!-- Image connected to client-side map via usemap -->
<img 
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Crect width='300' height='120' fill='%23e2e8f0'/%3E%3Crect x='20' y='20' width='100' height='80' fill='%23ef4444'/%3E%3Ctext x='70' y='65' fill='%23fff' text-anchor='middle'%3ERect%3C/text%3E%3Ccircle cx='220' cy='60' r='40' fill='%233b82f6'/%3E%3Ctext x='220' y='65' fill='%23fff' text-anchor='middle'%3ECircle%3C/text%3E%3C/svg%3E" 
  alt="Interactive diagram with clickable regions" 
  width="300" 
  height="120" 
  usemap="#graphicmap"
>

<map name="graphicmap">
  <area shape="rect" coords="20,20,120,100" href="#red-rectangle" alt="Red rectangle zone">
  <area shape="circle" coords="220,60,40" href="#blue-circle" alt="Blue circle zone">
</map>`,
      demo: {
        title: 'Native Browser Output',
        html: `<img 
  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='120'%3E%3Crect width='300' height='120' fill='%23e2e8f0'/%3E%3Crect x='20' y='20' width='100' height='80' fill='%23ef4444'/%3E%3Ctext x='70' y='65' fill='%23fff' text-anchor='middle'%3ERect%3C/text%3E%3Ccircle cx='220' cy='60' r='40' fill='%233b82f6'/%3E%3Ctext x='220' y='65' fill='%23fff' text-anchor='middle'%3ECircle%3C/text%3E%3C/svg%3E" 
  alt="Interactive diagram with clickable regions" 
  width="300" 
  height="120" 
  usemap="#graphicmap"
>
<map name="graphicmap">
  <area shape="rect" coords="20,20,120,100" href="#red-rectangle" alt="Red rectangle zone">
  <area shape="circle" coords="220,60,40" href="#blue-circle" alt="Blue circle zone">
</map>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Responsive Design Limitations',
      type: 'list',
      items: [
        'Image map coordinates are fixed in raw pixel values; when images scale down responsively via CSS, coordinates become misaligned unless dynamically recalculated.',
        'Every <area> element inside <map> must have an alt attribute describing the clickable destination.',
        'For modern responsive interactive diagrams, inline SVG with clickable <a> elements is generally preferred.',
      ],
      callout: {
        type: 'note',
        title: 'Modern Alternative: SVG',
        content: 'While `<map>` and `<area>` are standard HTML5, modern developers often prefer inline `<svg>` because SVG shapes scale vectors and links seamlessly across any screen resolution.',
      },
    },
  ],
};
