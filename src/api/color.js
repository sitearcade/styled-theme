// import

import {transparentize} from 'polished';
import * as R from 'ramda';

import {lch2hex, hex2lch} from './convertColor';
import {themeCache} from './themeCache';
import {splitDots} from './utils';

// vars

const alphas = ['white', 'black'];

// export

export function tweakColor(base, {a, ...lch} = {}) {
  base ??= '#000000';
  const key = [base, a, lch.l, lch.c, lch.h].join('-');
  const found = themeCache.get(key);

  if (found) {
    return found;
  }

  base = R.isEmpty(lch) ? base :
    lch2hex({...hex2lch(base), ...lch});
  base = R.isNil(a) ? base :
    transparentize(1 - a, base);

  return themeCache.set(key, base);
}

export default function color({theme}, req, mod = {}) {
  if (R.type(req) === 'Object') {
    return tweakColor('#000000', req);
  }

  const [col, adj] = splitDots(req);
  let base = adj ? theme.palette[col][adj] : theme.color[col];
  mod = R.is(Number, mod) ? {a: mod} : mod;

  if (!base) {
    base = theme.color[col];

    if (alphas.includes(col)) {
      mod = {a: parseFloat(adj) / 100, ...mod};
    } else {
      mod = {l: parseFloat(adj), ...mod};
    }
  }

  return R.isNil(base) || R.isEmpty(mod) ? base : tweakColor(base, mod);
}
