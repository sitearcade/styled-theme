// import

import {
  hex2rgb, rgb2xyz, xyz2lab, lab2lch,
  lch2lab, lab2xyz, xyz2hwb, hwb2rgb, rgb2hex,
} from '@csstools/convert-colors';
import {transparentize} from 'polished';
import * as R from 'ramda';

// types

type Lch = {
  h: number;
  c: number;
  l: number;
};

type Mod = {
  a?: number;
  h?: number;
  c?: number;
  l?: number;
};

// vars

const cache = new Map<string, string>();

// fns

function hex2lch(hex: string): Lch {
  const rgb = hex2rgb(hex);
  const xyz = rgb2xyz(...rgb);
  const lab = xyz2lab(...xyz);
  const lch = lab2lch(...lab);

  return {l: lch[0], c: lch[1], h: lch[2]};
}

function lch2hex(lch: Lch): string {
  const lab = lch2lab(lch.l, lch.c, lch.h);
  const xyz = lab2xyz(...lab);
  const hwb = xyz2hwb(...xyz);
  const rgb = hwb2rgb(hwb[0], ...hwb.slice(1).map(R.clamp(0, 100)));
  const hex = rgb2hex(...rgb);

  return hex;
}

// export

export function tweakColor(base = '#000000', {a, ...lch}: Mod = {}) {
  base = R.isEmpty(lch) ? base :
    lch2hex({...hex2lch(base), ...lch});
  base = R.isNil(a) ? base :
    transparentize(1 - a, base);

  return base;
}

export function tweakColorViaCache(base = '#000000', mod: Mod = {}) {
  const key = [base, mod.a, mod.l, mod.c, mod.h].join('-');
  const found = cache.get(key);

  if (found) {
    return found;
  }

  const val = tweakColor(base, mod);
  cache.set(key, val);

  return val;
}
