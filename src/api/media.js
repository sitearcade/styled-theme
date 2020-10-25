// import

import {map, memoizeWith, equals, is} from 'ramda';

// fns

const getMediaRanges = memoizeWith(equals, ([bps, px]) => {
  const clip = 0.02 / px;
  const mins = map((v) => v ?? null, bps);
  const maxs = map((v) => v - clip ?? null, bps);

  return [mins, maxs];
});

// export

const media = (min = null, max = null) =>
  ({theme: {rem: {px}, breakpoints: bps}}) => {
    const [mins, maxs] = getMediaRanges([bps, px]);

    min = is(Number, min) ? min : mins[min];
    max = is(Number, max) ? max : maxs[max];

    return min && !max ? `@media (min-width: ${min}em)` :
      !min && max ? `@media (max-width: ${max}em)` :
      min && max ? `@media (min-width: ${min}em) and (max-width: ${max}em)` :
      '@media ()';
  };

export default media;
