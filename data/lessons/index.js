import { doctypeLesson } from './01-doctype';
import { htmlLesson } from './02-html';
import { headLesson } from './03-head';
import { titleLesson } from './04-title';
import { metaLesson } from './05-meta';
import { linkLesson } from './06-link';
import { styleLesson } from './07-style';
import { baseLesson } from './08-base';
import { headerLesson } from './09-header';
import { navLesson } from './10-nav';
import { mainLesson } from './11-main';
import { articleLesson } from './12-article';
import { sectionLesson } from './13-section';
import { asideLesson } from './14-aside';
import { footerLesson } from './15-footer';
import { headingsLesson } from './16-headings';
import { hgroupLesson } from './17-hgroup';
import { addressLesson } from './18-address';
import { searchLesson } from './19-search';
import { pLesson } from './20-p';
import { hrLesson } from './21-hr';
import { preLesson } from './22-pre';
import { blockquoteLesson } from './23-blockquote';
import { olLesson } from './24-ol';
import { ulLesson } from './25-ul';
import { liLesson } from './26-li';
import { dlLesson } from './27-dl';
import { dtLesson } from './28-dt';
import { ddLesson } from './29-dd';
import { figureLesson } from './30-figure';
import { figcaptionLesson } from './31-figcaption';
import { divLesson } from './32-div';
import { aLesson } from './33-a';
import { emLesson } from './34-em';
import { strongLesson } from './35-strong';
import { smallLesson } from './36-small';
import { sLesson } from './37-s';
import { citeLesson } from './38-cite';
import { qLesson } from './39-q';
import { dfnLesson } from './40-dfn';
import { abbrLesson } from './41-abbr';
import { codeLesson } from './42-code';
import { varLesson } from './43-var';
import { sampLesson } from './44-samp';
import { kbdLesson } from './45-kbd';
import { subLesson } from './46-sub';
import { supLesson } from './47-sup';
import { iLesson } from './48-i';
import { bLesson } from './49-b';
import { uLesson } from './50-u';
import { markLesson } from './51-mark';
import { spanLesson } from './52-span';
import { brLesson } from './53-br';
import { wbrLesson } from './54-wbr';
import { dataLesson } from './55-data';
import { timeLesson } from './56-time';
import { bdiLesson } from './57-bdi';
import { bdoLesson } from './58-bdo';
import { rubyLesson } from './59-ruby';
import { rtLesson } from './60-rt';
import { rpLesson } from './61-rp';
import { rbLesson } from './62-rb';
import { imgLesson } from './63-img';
import { pictureLesson } from './64-picture';
import { sourceLesson } from './65-source';
import { videoLesson } from './66-video';
import { audioLesson } from './67-audio';
import { trackLesson } from './68-track';
import { mapLesson } from './69-map';
import { areaLesson } from './70-area';
import { iframeLesson } from './71-iframe';
import { embedLesson } from './72-embed';
import { objectLesson } from './73-object';
import { svgLesson } from './74-svg';
import { mathLesson } from './75-math';
import { canvasLesson } from './76-canvas';
import { tableLesson } from './77-table';
import { captionLesson } from './78-caption';
import { colgroupLesson } from './79-colgroup';
import { colLesson } from './80-col';
import { theadLesson } from './81-thead';
import { tbodyLesson } from './82-tbody';
import { tfootLesson } from './83-tfoot';
import { trLesson } from './84-tr';
import { thLesson } from './85-th';
import { tdLesson } from './86-td';
import { formLesson } from './87-form';
import { labelLesson } from './88-label';
import { inputLesson } from './89-input';
import { buttonLesson } from './90-button';
import { selectLesson } from './91-select';
import { datalistLesson } from './92-datalist';
import { optgroupLesson } from './93-optgroup';
import { optionLesson } from './94-option';
import { textareaLesson } from './95-textarea';
import { outputLesson } from './96-output';
import { progressLesson } from './97-progress';
import { meterLesson } from './98-meter';
import { fieldsetLesson } from './99-fieldset';
import { legendLesson } from './100-legend';
import { detailsLesson } from './101-details';
import { summaryLesson } from './102-summary';
import { dialogLesson } from './103-dialog';
import { menuLesson } from './104-menu';
import { templateLesson } from './105-template';
import { slotLesson } from './106-slot';
import { delLesson } from './107-del';
import { insLesson } from './108-ins';
import { scriptLesson } from './109-script';
import { noscriptLesson } from './110-noscript';
import { marqueeLesson } from './111-marquee';
import { blinkLesson } from './112-blink';
import { centerLesson } from './113-center';
import { fontLesson } from './114-font';
import { bigLesson } from './115-big';
import { strikeLesson } from './116-strike';
import { ttLesson } from './117-tt';
import { acronymLesson } from './118-acronym';
import { appletLesson } from './119-applet';
import { frameLesson } from './120-frame';
import { framesetLesson } from './121-frameset';
import { noframesLesson } from './122-noframes';
import { dirLesson } from './123-dir';
import { basefontLesson } from './124-basefont';
import { bodyLesson } from './125-body';
import { paramLesson } from './126-param';
import { keygenLesson } from './127-keygen';
import { bgsoundLesson } from './128-bgsound';
import { nobrLesson } from './129-nobr';
import { plaintextLesson } from './130-plaintext';
import { xmpLesson } from './131-xmp';
import { listingLesson } from './132-listing';
import { isindexLesson } from './133-isindex';
import { rtcLesson } from './134-rtc';

// Master lesson registry
export const lessonRegistry = {
  doctype: doctypeLesson,
  html: htmlLesson,
  head: headLesson,
  title: titleLesson,
  meta: metaLesson,
  link: linkLesson,
  style: styleLesson,
  base: baseLesson,
  header: headerLesson,
  nav: navLesson,
  main: mainLesson,
  article: articleLesson,
  section: sectionLesson,
  aside: asideLesson,
  footer: footerLesson,
  headings: headingsLesson,
  hgroup: hgroupLesson,
  address: addressLesson,
  search: searchLesson,
  p: pLesson,
  hr: hrLesson,
  pre: preLesson,
  blockquote: blockquoteLesson,
  ol: olLesson,
  ul: ulLesson,
  li: liLesson,
  dl: dlLesson,
  dt: dtLesson,
  dd: ddLesson,
  figure: figureLesson,
  figcaption: figcaptionLesson,
  div: divLesson,
  a: aLesson,
  em: emLesson,
  strong: strongLesson,
  small: smallLesson,
  s: sLesson,
  cite: citeLesson,
  q: qLesson,
  dfn: dfnLesson,
  abbr: abbrLesson,
  code: codeLesson,
  var: varLesson,
  samp: sampLesson,
  kbd: kbdLesson,
  sub: subLesson,
  sup: supLesson,
  i: iLesson,
  b: bLesson,
  u: uLesson,
  mark: markLesson,
  span: spanLesson,
  br: brLesson,
  wbr: wbrLesson,
  data: dataLesson,
  time: timeLesson,
  bdi: bdiLesson,
  bdo: bdoLesson,
  ruby: rubyLesson,
  rt: rtLesson,
  rp: rpLesson,
  rb: rbLesson,
  img: imgLesson,
  picture: pictureLesson,
  source: sourceLesson,
  video: videoLesson,
  audio: audioLesson,
  track: trackLesson,
  map: mapLesson,
  area: areaLesson,
  iframe: iframeLesson,
  embed: embedLesson,
  object: objectLesson,
  svg: svgLesson,
  math: mathLesson,
  canvas: canvasLesson,
  table: tableLesson,
  caption: captionLesson,
  colgroup: colgroupLesson,
  col: colLesson,
  thead: theadLesson,
  tbody: tbodyLesson,
  tfoot: tfootLesson,
  tr: trLesson,
  th: thLesson,
  td: tdLesson,
  form: formLesson,
  label: labelLesson,
  input: inputLesson,
  button: buttonLesson,
  select: selectLesson,
  datalist: datalistLesson,
  optgroup: optgroupLesson,
  option: optionLesson,
  textarea: textareaLesson,
  output: outputLesson,
  progress: progressLesson,
  meter: meterLesson,
  fieldset: fieldsetLesson,
  legend: legendLesson,
  details: detailsLesson,
  summary: summaryLesson,
  dialog: dialogLesson,
  menu: menuLesson,
  template: templateLesson,
  slot: slotLesson,
  del: delLesson,
  ins: insLesson,
  script: scriptLesson,
  noscript: noscriptLesson,
  marquee: marqueeLesson,
  blink: blinkLesson,
  center: centerLesson,
  font: fontLesson,
  big: bigLesson,
  strike: strikeLesson,
  tt: ttLesson,
  acronym: acronymLesson,
  applet: appletLesson,
  frame: frameLesson,
  frameset: framesetLesson,
  noframes: noframesLesson,
  dir: dirLesson,
  basefont: basefontLesson,
  body: bodyLesson,
  param: paramLesson,
  keygen: keygenLesson,
  bgsound: bgsoundLesson,
  nobr: nobrLesson,
  plaintext: plaintextLesson,
  xmp: xmpLesson,
  listing: listingLesson,
  isindex: isindexLesson,
  rtc: rtcLesson,
};

export function getLessonData(slug) {
  return lessonRegistry[slug] || null;
}

export function getAllLessonSlugs() {
  return Object.keys(lessonRegistry);
}
