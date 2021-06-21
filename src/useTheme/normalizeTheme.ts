// import

import * as R from 'ramda';

import type {DefaultTheme, ColorKey, Theme} from './defaultTheme';
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

const makeAlphaSteps = (col: string): Record<string, string> =>
  steps.reduce((acc, a) => ({...acc, [a]: tweakColor(col, {a: a / 100})}), {});
const makeLumenSteps = (col: string): Record<string, string> =>
  steps.reduce((acc, l) => ({...acc, [l]: tweakColor(col, {l})}), {});

const hex2rgb = (hex: string) =>
  R.splitEvery(hex.length === 4 ? 1 : 2, hex.slice(1))
    .map((c) => parseInt(c, 16))
    .join(', ');

// export

export default function normalizeTheme(raw: DefaultTheme): Theme {
  const {head, body} = raw.font;
  const {white, black, ...colors} = raw.color;

  return {
    ...raw,

    font: {
      ...raw.font,
      ...fixFont(head),
      ...fixFont(body),
    },

    rgb: R.map(hex2rgb, raw.color),

    palette: {
      ...R.map(
        (col: string) => makeLumenSteps(col),
        R.pickBy(R.startsWith('#'), colors),
      ) as unknown as Record<ColorKey, Record<string, string>>,

      white: makeAlphaSteps(white),
      black: makeAlphaSteps(black),
    },
  };
}
