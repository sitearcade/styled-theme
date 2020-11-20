// import

import {is} from 'ramda';

// vars

export const maxClip = 0.00125;

// fns

const isNumber = is(Number);

// export

export default function media({theme: {breakpoints}}, min = null, max = null) {
  min = isNumber(min) ? min : breakpoints[min];
  max = isNumber(max) ? max : breakpoints[max];

  return `@media (${[
    min && `min-width: ${min}em`,
    max && `max-width: ${max - maxClip}em`,
  ].filter(Boolean).join(') and (')})`;
}
