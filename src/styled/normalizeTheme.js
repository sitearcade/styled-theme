// import

import {parseToHsl, toColorString} from 'polished';
import {mergeDeepRight, mean, values, pluck, pipe, reduce, __, omit, filter, is, mapObjIndexed, keys, map} from 'ramda';

import defaultTheme from './defaultTheme';

// vars

const getAvgHue = pipe(
  values,
  pluck('hue'),
  mean,
);

const parsedPalette = mapObjIndexed((palette, name) => (
  map(parseToHsl, palette) |> {name, hue: getAvgHue(#), scale: #}
), defaultTheme.palette);

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

function makePalette(palette, name) {
  if (!is(String, palette)) {
    return palette;
  }

  const color = parseToHsl(palette);

  const {below, above} = name === 'gray' ? {
    below: parsedPalette.gray, above: parsedPalette.gray,
  } : getNearest(color);

  const getStep = makeGetStep(color, below, above);

  return steps.reduce((acc, step) => ({
    ...acc, [step]: getStep(step),
  }), {});
}

// export

export default pipe(
  mergeDeepRight(defaultTheme),
  ({palette, color, ...rest}) => ({
    ...rest,
    color: {...color, ...keepString(palette)},
    palette: mapObjIndexed(makePalette, palette),
  }),
);
