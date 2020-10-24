// import

import {path, is, map, memoizeWith, equals} from 'ramda';

import color from './color';
import createBy from './createBy';
import createIs from './createIs';
import {splitDots} from './utils';

// fns

const createGet = (pre = []) => (props, loc, def) => (
  path([...pre, ...splitDots(loc)], props) ?? def ?? ''
);

const getMediaRanges = memoizeWith(equals, ([bps, px]) => {
  const clip = 0.02 / px;
  const mins = map((v) => v ?? null, bps);
  const maxs = map((v) => v - clip ?? null, bps);

  return [mins, maxs];
});

// export

export const api = {
  // get
  prop: createGet(),
  theme: createGet(['theme']),
  layout: createGet(['theme', 'layout']),
  fontFam: createGet(['theme', 'fontFam']),
  color,

  // by
  by: createBy(),
  thy: createBy(['theme']),

  // is
  is: createIs('every', true),
  isNot: createIs('every', false),
  isSome: createIs('some', true),
  isSomeNot: createIs('some', false),

  tis: createIs('every', true, ['theme']),
  tisNot: createIs('every', false, ['theme']),
  tisSome: createIs('some', true, ['theme']),
  tisSomeNot: createIs('some', false, ['theme']),

  // size
  rpx: ({theme: {rem: {px}}}, n = 0) =>
    `${n * px}rem`,
  breakSize: ({theme: {breakpoints}}, bp, unit = 'rem') =>
    breakpoints[bp] + unit,
  media: (min = null, max = null) =>
    ({theme: {rem: {px}, breakpoints: bps}}) => {
      const [mins, maxs] = getMediaRanges([bps, px]);

      min = is(Number, min) ? min : mins[min];
      max = is(Number, max) ? max : maxs[max];

      return min && !max ? `@media (min-width: ${min}em)` :
        !min && max ? `@media (max-width: ${max}em)` :
        min && max ? `@media (min-width: ${min}em) and (max-width: ${max}em)` :
        '@media ()';
    },

  // transition
  linear: ({theme: {fx: {trans: {speed, delay}}}}, s = 0, d = 0) =>
    `${s * speed}s linear ${d * delay}s`,
  easeIn: ({theme: {fx: {trans: {speed, delay}}}}, s = 0, d = 0) =>
    `${s * speed}s ease-in ${d * delay}s`,
  easeOut: ({theme: {fx: {trans: {speed, delay}}}}, s = 0, d = 0) =>
    `${s * speed}s ease-out ${d * delay}s`,
  easeInOut: ({theme: {fx: {trans: {speed, delay}}}}, s = 0, d = 0) =>
    `${s * speed}s ease-in-out ${d * delay}s`,

  // shadow
  shadow: ({theme: {fx: {outset: {blur, spread}}}}, b = 0, s = 0) =>
    `${b * blur}rem ${s * spread}rem`,
  outset: ({theme: {fx: {outset: {x, y, blur, spread}}}}, b = 0, s = 0) =>
    `${x}rem ${y}rem ${b * blur}rem ${s * spread}rem`,
  inset: ({theme: {fx: {inset: {x, y, blur, spread}}}}, b = 0, s = 0) =>
    `inset ${x}rem ${y}rem ${b * blur}rem ${s * spread}rem`,
};

export const curryArgs = (funcs) =>
  Object.keys(funcs).reduce((acc, key) => ({
    ...acc, [key]: (...args) => (props) => funcs[key](props, ...args),
  }), {});

export const curryProps = (funcs) =>
  Object.keys(funcs).reduce((acc, key) => ({
    ...acc, [key]: (props) => (...args) => funcs[key](props, ...args),
  }), {});

export const curryTheme = (funcs) =>
  Object.keys(funcs).reduce((acc, key) => ({
    ...acc, [key]: (theme) => (...args) => funcs[key]({theme}, ...args),
  }), {});

export const bindTheme = (funcs, theme) =>
  Object.keys(funcs).reduce((acc, key) => ({
    ...acc, [key]: (...args) => funcs[key]({theme}, ...args),
  }), {});
