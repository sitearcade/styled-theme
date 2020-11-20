// import

import * as R from 'ramda';

import {tweakColor} from '../api/color';

import defaultTheme from './defaultTheme';

// vars

const stepSize = 10;
const steps = R.times((n) => n * stepSize, stepSize + 1);

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

  return theme;
}
