// import

import {parseToHsl, toColorString} from 'polished';
import {mergeDeepRight, mergeWithKey, mean, values, pluck, pipe, reduce, __, omit, filter, is, mapObjIndexed, keys, map} from 'ramda';

import defaultTheme from './defaultTheme';

// vars

const getAvgHue = pipe(
  values,
  pluck('hue'),
  mean,
);

const parsedPalette = mapObjIndexed((palette, name) => ({
  name,
  hue: getAvgHue(map(parseToHsl, palette)),
  scale: map(parseToHsl, palette),
}), defaultTheme.palette);

const steps = keys(parsedPalette.gray.scale);

// fns

const getNearest = (color) => reduceNearest({color});
const reduceNearest = reduce(({color, below, above}, pal) => ({
  color,
  below:
    pal.hue > color.hue ? below :
    below && pal.hue < below.hue ? below : pal,
  above:
    pal.hue < color.hue ? above :
    above && pal.hue > above.hue ? above : pal,
}), __, values(omit(['gray'], parsedPalette)));

const keepString = filter(is(String));

const mixVals = (mix, a, b) => a + (mix * (b - a));

const makeGetStep = ({hue}, below, above) => (step) => {
  const bel = below.scale[step];
  const abv = above.scale[step];
  const mix = (hue - bel.hue) / (above.hue - bel.hue);

  return toColorString({
    hue,
    saturation: mixVals(mix, bel.saturation, abv.saturation),
    lightness: mixVals(mix, bel.lightness, abv.lightness),
  });
};

const makeSteps = (color, below, above) =>
  makeGetStep(color, below, above)
  |> steps.reduce((acc, step) => ({
    ...acc, [step]: #(step),
  }), {});

function makePalette(palette) {
  if (!is(String, palette)) {
    return palette;
  }

  const color = parseToHsl(palette);
  const {below, above} = getNearest(color);

  return makeSteps(color, below, above);
}

const makeReplacePalettes = (basePalette, newPalette) =>
  Object.keys(newPalette).reduce((base, key) => ({
    ...base,
    [key]: base[key] && is(String, newPalette[key]) ?
      makeSteps(parseToHsl(newPalette[key]), parsedPalette[key], parsedPalette[key]) :
      newPalette[key],
  }), basePalette);

// export

export default pipe(
  mergeWithKey((key, l, r) => (
    key === 'palette' ? makeReplacePalettes(l, r) :
    is(Object, l) ? mergeDeepRight(l, r) : r
  ))(defaultTheme),
  ({palette, color, ...rest}) => ({
    ...rest,
    color: {...color, ...keepString(palette)},
    palette: map(makePalette, palette),
  }),
);
