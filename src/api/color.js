// import

import * as R from 'ramda';

import {themeCache} from './themeCache';
import {tweakColor as tweak} from './tweakColor';
import {splitDots} from './utils';

// vars

const alphas = ['white', 'black'];

// export

export function tweakColor(base = '#000000', mod = {}) {
  const key = [base, mod.a, mod.l, mod.c, mod.h].join('-');
  const found = themeCache.get(key);

  if (found) {
    return found;
  }

  return themeCache.set(key, tweak(base, mod));
}

export default function color({theme}, req, mod = {}) {
  if (!Array.isArray(req) && R.type(req) === 'Object') {
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
