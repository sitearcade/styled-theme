// import

import {map, memoizeWith, equals, is} from 'ramda';

// fns

const clipMax = (remPx, v) => v - (0.02 / remPx) ?? null;

const getMediaRanges = memoizeWith(equals, ([bps, remPx]) => {
  const clip = 0.02 / remPx;
  const mins = map((v) => v ?? null, bps);
  const maxs = map((v) => v - clip ?? null, bps);

  return [mins, maxs];
});

// export

const media = ({theme: {remPx, breakpoints: bps}}, min = null, max = null) => {
  const [mins, maxs] = getMediaRanges([bps, remPx]);

  min = is(Number, min) ? min : mins[min];
  max = is(Number, max) ? clipMax(remPx, max) : maxs[max];

  return min && !max ? `@media (min-width: ${min}em)` :
    !min && max ? `@media (max-width: ${max}em)` :
    min && max ? `@media (min-width: ${min}em) and (max-width: ${max}em)` :
    '@media ()';
};

export default media;
