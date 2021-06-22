// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';
import {useMemo} from 'react';

import type {Theme} from '../useTheme';
import type {Json} from '../utils';
import {mapObject, maxClip} from '../utils';

// fns

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

export const GlobalStyleVars = createGlobalStyle(`
${(props: {theme: Theme}) => useMemo(
    () => makeStyleVars(props.theme),
    [props.theme],
  )}
`);
