// import

import * as R from 'ramda';
import type {DefaultTheme} from 'styled-components';
import {createGlobalStyle} from 'styled-components';

import {normalizeTheme} from '../useTheme';

// types

type Obj = Record<string, string>;
type DeepObj = Record<string, string | Obj>;

// vars

export const maxClip = 0.00125;

// fns

const reduceVar = (key: string, val: string | Obj) => (
  typeof val === 'object' ?
    reduceStyleVars(val, `${key}-`) :
    `--${key}: ${val};\n`
);

const reduceStyleVars = (obj: DeepObj, pre = '') =>
  Object.keys(obj).reduce((acc, key) => (
    acc + reduceVar(pre + key, obj[key])
  ), '');

export const makeStyleVars = (input: DefaultTheme) => {
  const theme = normalizeTheme(input) as any;
  const {color, palette, breakpoints} = theme;

  theme.bp = {
    ...R.map((v) => `${v}rem`, breakpoints),
    min: R.map((v) => `${v}em`, breakpoints),
    max: R.map((v) => `${v - maxClip}em`, breakpoints),
  };

  theme.rpx = `${1 / theme.baseline}rem`;
  theme.baseline += 'px';

  theme.fx.speed += 's';
  theme.fx.delay += 's';
  theme.fx.blur += 'rem';
  theme.fx.spread += 'rem';

  return [
    ':root {',
    reduceStyleVars(theme),
    reduceStyleVars(color),
    reduceStyleVars(palette),
    '}',
  ].join('');
};

// styles

export const StyleVars = createGlobalStyle`
  ${({theme}) => makeStyleVars(theme)}
`;
