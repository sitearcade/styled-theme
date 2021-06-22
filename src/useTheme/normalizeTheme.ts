// import

import {mapObject} from 'src/GlobalStyles/GlobalStyleVars';

import type {DefaultTheme, Theme} from './defaultTheme';
import {tweakColorViaCache as tweakColor} from './tweakColor';

// vars

const stepSize = 5;
const steps = Array.from(
  {length: Math.round(100 / stepSize) + 1},
  (_, n) => n * stepSize,
);

// fns

const fixFont = (fam = '') => (
  fam.endsWith('sans-serif') ? {sans: fam} :
  fam.endsWith('serif') ? {serif: fam} :
  fam.endsWith('mono') ? {mono: fam} : {}
);

const makeAlphaSteps = (col: string): Record<string, string> =>
  steps.reduce((acc, a) => ({...acc, [a]: tweakColor(col, {a: a / 100})}), {});
const makeLumenSteps = (col: string): Record<string, string> =>
  steps.reduce<Record<string, string>>((acc, l) => ({
    ...acc, [`${l}`]: tweakColor(col, {l}),
  }), {});

const hex2rgb = (hex: string) => {
  const by = hex.length === 4 ? 1 : 2;
  const clip = hex.slice(1);

  return [
    clip.slice(0, by),
    clip.slice(by, by * 2),
    clip.slice(by * 2, by * 3),
  ].map((c) => parseInt(c, 16)).join(', ');
};

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

    rgb: mapObject(hex2rgb, raw.color),

    // @ts-expect-error It works...
    palette: {
      ...mapObject(makeLumenSteps, colors),
      white: makeAlphaSteps(white),
      black: makeAlphaSteps(black),
    },
  };
}
