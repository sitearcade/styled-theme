// import

import colorFn from './color';
import createBy from './createBy';
import createIs from './createIs';
import mediaFn from './media';

// api

const api = {
  // by
  by: createBy(),
  layout: createBy(['theme', 'layout']),
  fontFam: createBy(['theme', 'fontFam']),

  // special
  color: colorFn,
  media: mediaFn,
  breakSize: ({theme}, bp, unit = 'rem') => theme.breakpoints[bp] + unit,
  rpx: ({theme: remPx}, n = 0) => `${n / remPx}rem`,

  // is
  is: createIs('every', true),
  isNot: createIs('every', false),
  isSome: createIs('some', true),
  isSomeNot: createIs('some', false),

  // transition
  linear: ({theme: {fx}}, s = 0, d = 0) =>
    `${s * fx.speed}s linear ${d * fx.delay}s`,
  easeIn: ({theme: {fx}}, s = 0, d = 0) =>
    `${s * fx.speed}s ease-in ${d * fx.delay}s`,
  easeOut: ({theme: {fx}}, s = 0, d = 0) =>
    `${s * fx.speed}s ease-out ${d * fx.delay}s`,
  easeInOut: ({theme: {fx}}, s = 0, d = 0) =>
    `${s * fx.speed}s ease-in-out ${d * fx.delay}s`,

  // shadow
  shadow: ({theme: {fx}}, b = 0, s = 0) =>
    `${b * fx.blur}rem ${s * fx.spread}rem`,
  outset: ({theme: {fx}}, b = 0, s = 0) =>
    `0 0 ${b * fx.outset.blur}rem ${s * fx.outset.spread}rem`,
  inset: ({theme: {fx}}, b = 0, s = 0) =>
    `inset 0 0 ${b * fx.inset.blur}rem ${s * fx.inset.spread}rem`,
  outline: ({theme: {fx}}, b = 0, s = 0) =>
    `0 0 ${b * fx.outline.blur}rem ${s * fx.outline.spread}rem`,
};

const styledApi = Object.keys(api).reduce((acc, key) => ({
  ...acc, [key]: (...args) => (props) => api[key](props, ...args),
}), {});

// export

export const bindThemeToApi = (theme) =>
  Object.keys(api).reduce((acc, key) => ({
    ...acc, [key]: (...args) => api[key]({theme}, ...args),
  }), {});

export const by = styledApi.by;
export const layout = styledApi.layout;
export const fontFam = styledApi.fontFam;

export const color = styledApi.color;
export const media = styledApi.media;
export const breakSize = styledApi.breakSize;
export const rpx = styledApi.rpx;

export const is = styledApi.is;
is.not = styledApi.isNot;
is.some = styledApi.isSome;
is.someNot = styledApi.isSomeNot;

export const linear = styledApi.linear;
export const easeIn = styledApi.easeIn;
export const easeOut = styledApi.easeOut;
export const easeInOut = styledApi.easeInOut;

export const shadow = styledApi.shadow;
export const outset = styledApi.outset;
export const inset = styledApi.inset;
export const outline = styledApi.outline;
