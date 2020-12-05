// vars

const brRx = /\n/g;
const paraRx = /\n\n/g;
const pStartRx = /^<p>/;
const pEndRx = /<\/p>$/;
const pInnerRx = /<\/?p>\s+<p>/g;

// export

export const addBreaks = (str) =>
  str.trim()
    .replace(brRx, '<br />');

export const addParas = (str) => [
  '<p>',
  str.trim()
    .replace(paraRx, '</p><p>')
    .replace(brRx, '<br />'),
  '</p>',
].join('');

export const paraToBreaks = (str) =>
  str.trim()
    .replace(pStartRx, '')
    .replace(pEndRx, '')
    .replace(pInnerRx, '<br />');
