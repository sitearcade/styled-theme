// import

import {mix, transparentize} from 'polished';
import {is, clamp, path} from 'ramda';

import {splitDots} from './utils';

// fns

const getColor = (props, loc, def) => (
  path(['theme', 'color', ...splitDots(loc)], props) ?? def ?? ''
);
const fromColors = (col, alphaOrDef) => (props) => (
  is(Number, alphaOrDef) ?
    transparentize(1 - alphaOrDef, getColor(col)(props)) :
    getColor(col, alphaOrDef)(props)
);

const reduceNear = (step) => (acc, key) => ({
  below: key > step ? acc.below :
  acc.below && key < acc.below ? acc.below : key,
  above: key < step ? acc.above :
  acc.above && key > acc.above ? acc.above : key,
});

const getNearest = (step, pal) =>
  Object.keys(pal)
    .map(parseFloat)
    .reduce(reduceNear(step), {below: 0, above: 100});

const mixStep = (step, pal) => {
  step = parseFloat(clamp(0, 100, step));
  const {below, above} = getNearest(step, pal);

  return step === 0 ? '#000000' :
    step === 100 ? '#ffffff' :
    mix(
      1 - ((step - below) / (above - below)),
      pal[below] ?? '#000000',
      pal[above] ?? '#ffffff',
    );
};

const fromPalette = ([pal, step], alphaOrDef) => (props) => {
  const palette = path(['theme', 'palette', pal], props) ?? {};
  const res = palette[step] ?? mixStep(step, palette) ?? null;

  return res && is(Number, alphaOrDef) ?
    transparentize(1 - alphaOrDef, res) :
    res ?? alphaOrDef ?? null;
};

// export

export const color = (col, alphaOrDef) => {
  col = splitDots(col);

  return col.length === 1 ?
    fromColors(col, alphaOrDef) :
    fromPalette(col, alphaOrDef);
};
