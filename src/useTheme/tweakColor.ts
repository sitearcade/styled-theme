// import

import type {Hwb} from '@csstools/convert-colors';
import {
  hex2rgb, rgb2xyz, xyz2lab, lab2lch,
  lch2lab, lab2xyz, xyz2hwb, hwb2rgb, rgb2hex,
} from '@csstools/convert-colors';
import {transparentize} from 'polished';

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

const isNum = (x: unknown): x is number =>
  typeof x === 'number';

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
  const clamp = hwb.map((v, i) => (
    i ? Math.max(0, Math.min(100, v)) : v
  )) as Hwb;
  const rgb = hwb2rgb(...clamp);
  const hex = rgb2hex(...rgb);

  return hex;
}

// export

export function tweakColor(base = '#000000', {a, ...lch}: Mod = {}) {
  if (lch.l || lch.c || lch.h) {
    base = lch2hex({...hex2lch(base), ...lch});
  }

  if (isNum(a)) {
    base = transparentize(1 - a, base);
  }

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
