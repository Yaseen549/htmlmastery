export const meterLesson = {
  slug: 'meter',
  number: '98',
  title: '<meter>',
  category: 'Forms & Input Controls',
  subtitle: 'Represents a scalar measurement within a known range or a fractional value (gauge meter)',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Gauge Meter',
      paragraphs: [
        'The <meter> HTML element represents either a scalar value within a known range or a fractional value.',
        'Examples include disk usage, the relevance of a query result, battery level, or the fraction of a voting population to have registered.',
        'Browsers render <meter> with native colored bars (typically green for optimal range, yellow/orange for warning thresholds, and red for critical states) based on low, high, and optimum attributes.',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<meter min="0" max="100" low="30" high="80" optimum="90" value="85">85 out of 100</meter>',
      syntaxNote: 'Normal element requiring opening and closing tags. Contains fallback text inside.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['value', 'Floating point number', '0', 'The current measured numeric value (Required).'],
        ['min', 'Floating point number', '0', 'The lower bound of the measured range.'],
        ['max', 'Floating point number', '1.0', 'The upper bound of the measured range.'],
        ['low', 'Floating point number', 'min', 'Upper bound of the low range.'],
        ['high', 'Floating point number', 'max', 'Lower bound of the high range.'],
        ['optimum', 'Floating point number', 'midpoint', 'Indicates the ideal or target value within the range.'],
      ],
    },
    {
      id: 'code-example',
      title: 'Gauges with Warning Thresholds',
      type: 'code-example',
      codeTitle: 'Optimal, Warning, and Critical Gauge Levels',
      code: `<!-- Optimal storage level (green) -->
<p>
  <label for="disk-a">Server A Disk Usage (Safe):</label><br>
  <meter id="disk-a" value="25" min="0" max="100" low="30" high="80" optimum="20">25%</meter>
</p>

<!-- Warning threshold (yellow/orange) -->
<p>
  <label for="disk-b">Server B Disk Usage (Warning):</label><br>
  <meter id="disk-b" value="75" min="0" max="100" low="30" high="80" optimum="20">75%</meter>
</p>

<!-- Critical danger threshold (red) -->
<p>
  <label for="disk-c">Server C Disk Usage (Critical):</label><br>
  <meter id="disk-c" value="92" min="0" max="100" low="30" high="80" optimum="20">92%</meter>
</p>`,
      demo: {
        title: 'Native Browser Output',
        html: `<p>
  <label for="disk-a">Server A Disk Usage (Safe):</label><br>
  <meter id="disk-a" value="25" min="0" max="100" low="30" high="80" optimum="20">25%</meter>
</p>
<p>
  <label for="disk-b">Server B Disk Usage (Warning):</label><br>
  <meter id="disk-b" value="75" min="0" max="100" low="30" high="80" optimum="20">75%</meter>
</p>
<p>
  <label for="disk-c">Server C Disk Usage (Critical):</label><br>
  <meter id="disk-c" value="92" min="0" max="100" low="30" high="80" optimum="20">92%</meter>
</p>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Automatic Color State Changes',
      type: 'list',
      items: [
        'The browser automatically computes whether the bar should be green, orange, or red based on the relationship between value, low, high, and optimum.',
        'Screen readers announce current value and bounds (e.g., "75%, Gauge, minimum 0, maximum 100").',
        'Do not use <meter> to indicate progress over time; use <progress> instead.',
      ],
      callout: {
        type: 'tip',
        title: 'Smart Inversion',
        content: 'If `optimum` is set higher than `high`, higher values turn green and low values turn red (good for battery levels). If `optimum` is lower than `low`, low values turn green (good for server load).',
      },
    },
  ],
};
