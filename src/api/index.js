// import

import colorFn from './color';
import createBy from './createBy';
import createIs from './createIs';
import * as fxFns from './fx';
import mediaFn, {maxClip} from './media';

// api

const api = {
  // by
  by: createBy(),
  get: createBy(['theme']),
  layout: createBy(['theme', 'layout']),
  fontFam: createBy(['theme', 'font']),

  // special
  color: colorFn,
  media: mediaFn,
  breakSize: ({theme}, bp, pos) =>
    theme.breakpoints[bp] -
    (pos === 'max' ? maxClip : 0) +
    (pos && pos !== 'rem' ? 'em' : 'rem'),
  rpx: ({theme: {baseline}}, n = 0) => `${n / baseline}rem`,

  // is
  is: createIs('every', true),
  isNot: createIs('every', false),
  isSome: createIs('some', true),
  isSomeNot: createIs('some', false),

  // fx
  ...fxFns,
};

const styledApi = Object.keys(api).reduce((acc, key) => ({
  ...acc, [key]: (...args) => (props) => api[key](props, ...args),
}), {});

// export

export * from './themeCache';

export const bindThemeToApi = (theme) =>
  Object.keys(api).reduce((acc, key) => ({
    ...acc, [key]: (...args) => api[key]({theme}, ...args),
  }), {});

export const by = styledApi.by;
by.func = (fn) => ({props, val}) => fn(val)(props);

export const get = styledApi.get;
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
