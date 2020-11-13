// import

import {parseToHsl, toColorString} from 'polished';
import * as R from 'ramda';

import defaultTheme from './defaultTheme';

// vars

const getAvgHue = R.pipe(
  R.values,
  R.pluck('hue'),
  R.mean,
);

const parsedPalette = R.mapObjIndexed((palette, name) => {
  const scale = R.map(parseToHsl, palette);

  return {name, hue: getAvgHue(scale), scale};
}, defaultTheme.palette);

const steps = R.keys(parsedPalette.gray.scale);

// fns

const getNearest = (color) => reduceNearest({color});
const reduceNearest = R.reduce(({color, below, above}, pal) => ({
  color,
  below:
    pal.hue > color.hue ? below :
    below && pal.hue < below.hue ? below : pal,
  above:
    pal.hue < color.hue ? above :
    above && pal.hue > above.hue ? above : pal,
}), R.__, R.values(R.omit(['gray'], parsedPalette)));

const keepString = R.filter(R.is(String));

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
  if (!R.is(String, palette)) {
    return palette;
  }

  const color = parseToHsl(palette);

  const {below, above} = parsedPalette[name] ? {
    below: parsedPalette[name], above: parsedPalette[name],
  } : getNearest(color);

  const getStep = makeGetStep(color, below, above);

  return steps.reduce((acc, step) => ({
    ...acc, [step]: getStep(step),
  }), {});
}

// export

export default R.pipe(
  R.mergeDeepRight(defaultTheme),
  ({palette, color, ...rest}) => ({
    ...rest,
    color: {...color, ...keepString(palette)},
    palette: R.mapObjIndexed(makePalette, palette),
  }),
);
