// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

import type {Theme} from '../useTheme';
import {theme} from '../useTheme';

// types

export type Json =
  | Json[]
  | boolean
  | number
  | string
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  | {[key: string]: Json}
  | null;

// vars

export const maxClip = 0.00125;

// fns

// eslint-disable-next-line @typescript-eslint/ban-types
export const mapObject = <T extends object, U>(
  mappingFn: (value: T[keyof T]) => U,
  obj: T,
): Record<keyof T, U> => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const newObj = {} as Record<keyof T, U>;

  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      const oldValue = obj[i];
      newObj[i] = mappingFn(oldValue);
    }
  }

  return newObj;
};

const reduceVar = (key: string, val: number | string) => (
  typeof val === 'object' ?
    reduceStyleVars(val, `${key}-`) :
    `--${key}: ${val};\n`
);

// eslint-disable-next-line @typescript-eslint/ban-types
const reduceStyleVars = (obj: Json & object, pre = '') =>
  Object.keys(obj).reduce((acc, key) => (
    acc + reduceVar(pre + key, obj[key])
  ), '');

export const makeStyleVars = (input: Theme) => {
  const {color, palette, breakpoints, baseline, ...rest} = input;

  return [
    ':root {',
    reduceStyleVars({
      ...rest,
      rpx: `${1 / baseline}rem`,
      baseline: `${baseline}px`,
      bp: {
        ...mapObject((v) => `${v}rem`, breakpoints) as Record<string, string>,
        min: mapObject((v) => `${v}em`, breakpoints),
        max: mapObject((v) => `${v - maxClip}em`, breakpoints),
      },
    }),
    reduceStyleVars(color),
    reduceStyleVars(palette),
    '}',
  ].join('');
};

// styles

export const GlobalStyleVars = createGlobalStyle`
  ${makeStyleVars(theme)}
`;
