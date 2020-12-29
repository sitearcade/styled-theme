// import

import * as R from 'ramda';
import {createGlobalStyle} from 'styled-components';

import {maxClip} from '../api/media';

// fns

const reduceVar = (key, val) => (
  R.type(val) === 'Object' ?
    reduceStyleVars(val, `${key}-`) :
    `--${key}: ${val};\n`
);

const reduceStyleVars = (obj, pre = '') =>
  Object.keys(obj).reduce((acc, key) => (
    acc + reduceVar(pre + key, obj[key])
  ), '');

export const makeStyleVars = ({color, palette, breakpoints, ...theme}) => {
  theme = R.clone(theme);

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
    reduceStyleVars(theme),
    reduceStyleVars(color),
    reduceStyleVars(palette),
  ].join('');
};

// styles

// INFO: Splitting into multiple components has worse performance.

export const StyleVars = createGlobalStyle`
  :root {${({theme}) => makeStyleVars(theme)}}
`;
