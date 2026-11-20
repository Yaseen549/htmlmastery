export const trackLesson = {
  slug: 'track',
  number: '68',
  title: '<track>',
  category: 'Images & Multimedia',
  subtitle: 'Provides timed text tracks such as subtitles, closed captions, and chapter markers for media',
  sections: [
    {
      id: 'overview',
      title: 'Overview & Semantic Meaning',
      type: 'text',
      badge: 'Timed Text',
      paragraphs: [
        'The <track> HTML element is used as a child of the media elements, <audio> and <video>.',
        'It lets you specify timed text tracks (e.g. to automatically handle subtitles, closed captions for accessibility, chapter markers, or audio descriptions).',
        'Tracks are formatted in WebVTT (Web Video Text Tracks, .vtt files).',
      ],
    },
    {
      id: 'syntax',
      title: 'Formal Syntax',
      type: 'syntax',
      syntax: '<video controls src="interview.mp4">\n  <track src="captions_en.vtt" kind="captions" srclang="en" label="English (CC)" default>\n  <track src="subs_es.vtt" kind="subtitles" srclang="es" label="Español">\n</video>',
      syntaxNote: 'Void element with no closing tag. Must be a direct child of <audio> or <video>.',
    },
    {
      id: 'attributes',
      title: 'Attributes & Properties',
      type: 'attributes-table',
      headers: ['Attribute', 'Type / Values', 'Default', 'Description'],
      rows: [
        ['src', 'URL', 'Required', 'URL of the timed text file (.vtt). Must be valid WebVTT format.'],
        ['kind', 'subtitles | captions | descriptions | chapters | metadata', 'subtitles', 'How the text track is meant to be used.'],
        ['srclang', 'Language tag', 'none', 'Language of the text track data (required if kind="subtitles").'],
        ['label', 'String', 'none', 'User-visible label for the track inside the player track selection menu.'],
        ['default', 'Boolean', 'false', 'Enables this track by default unless user preferences dictate otherwise.'],
      ],
    },
    {
      id: 'code-example',
      title: 'WebVTT Captions and Chapters',
      type: 'code-example',
      codeTitle: 'Multi-Language Tracks and Chapters',
      code: `<!-- Video player configured with subtitles and chapter tracks -->
<video controls width="340" height="190">
  <source src="lecture.mp4" type="video/mp4">
  <track 
    kind="captions" 
    src="captions_en.vtt" 
    srclang="en" 
    label="English Closed Captions" 
    default
  >
  <track 
    kind="subtitles" 
    src="subs_es.vtt" 
    srclang="es" 
    label="Spanish Subtitles"
  >
  <track 
    kind="chapters" 
    src="chapters.vtt" 
    srclang="en" 
    label="Chapters"
  >
</video>`,
      demo: {
        title: 'Native Browser Output',
        html: `<video controls width="340" height="190">
  <source src="lecture.mp4" type="video/mp4">
  <track 
    kind="captions" 
    src="captions_en.vtt" 
    srclang="en" 
    label="English Closed Captions" 
    default
  >
  <track 
    kind="subtitles" 
    src="subs_es.vtt" 
    srclang="es" 
    label="Spanish Subtitles"
  >
</video>`,
        interactive: false,
      },
    },
    {
      id: 'accessibility',
      title: 'Captions vs Subtitles',
      type: 'list',
      items: [
        'subtitles provide translation of dialogue for viewers who can hear audio but do not speak the language.',
        'captions provide transcriptions of dialogue plus audio sound cues (e.g., "[applause]", "[door slams]") for deaf or hard-of-hearing viewers.',
        'WebVTT files must be served with the proper Content-Type: text/vtt HTTP header.',
      ],
      callout: {
        type: 'important',
        title: 'CORS Requirement',
        content: 'When loading `<track>` files from another domain or CDN, the server must provide valid CORS headers (`Access-Control-Allow-Origin: *`) and the video tag must include `crossorigin="anonymous"`.',
      },
    },
  ],
};
