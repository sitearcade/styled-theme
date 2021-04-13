// import

import * as R from 'ramda';

import defaultTheme from './defaultTheme';
import {tweakColorViaCache as tweakColor} from './tweakColor';

// vars

const stepSize = 5;
const steps = R.times((n) => n * stepSize, Math.round(100 / stepSize) + 1);

// fns

const fixFont = (fam = '') => (
  fam.endsWith('sans-serif') ? {sans: fam} :
  fam.endsWith('serif') ? {serif: fam} :
  fam.endsWith('mono') ? {mono: fam} : {}
);

const makeAlphaSteps = (col) =>
  steps.reduce((acc, a) => ({...acc, [a]: tweakColor(col, {a: a / 100})}), {});
const makeLumenSteps = (col) =>
  steps.reduce((acc, l) => ({...acc, [l]: tweakColor(col, {l})}), {});

const hex2rgb = (hex) =>
  R.splitEvery(hex.length === 4 ? 1 : 2, hex.slice(1))
    .map((c) => parseInt(c, 16))
    .join(', ');

// export

export default function normalizeTheme(raw) {
  const theme = R.mergeDeepRight(defaultTheme, raw);
  const {font: {head, body}, color: {white, black, ...colors}} = theme;

  theme.font = {
    ...theme.font,
    ...fixFont(head),
    ...fixFont(body),
  };

  theme.palette = {
    white: makeAlphaSteps(white),
    black: makeAlphaSteps(black),
    ...R.map(
      (col) => makeLumenSteps(col),
      R.pickBy(R.startsWith('#'), colors),
    ),
  };

  theme.rgb = R.map(hex2rgb, theme.color);

  return theme;
}
