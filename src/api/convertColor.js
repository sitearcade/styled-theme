// import

import {
  hex2rgb, rgb2xyz, xyz2lab, lab2lch,
  lch2lab, lab2xyz, xyz2hwb, hwb2rgb, rgb2hex,
} from '@csstools/convert-colors';
import * as R from 'ramda';

// fns

// export

export function hex2lch(hex) {
  const rgb = hex2rgb(hex);
  const xyz = rgb2xyz(...rgb);
  const lab = xyz2lab(...xyz);
  const lch = lab2lch(...lab);

  // console.log({hex, rgb, xyz, lab, lch});

  return {l: lch[0], c: lch[1], h: lch[2]};
}

export function lch2hex(lch) {
  const lab = lch2lab(lch.l, lch.c, lch.h);
  const xyz = lab2xyz(...lab);
  const hwb = xyz2hwb(...xyz);
  const rgb = hwb2rgb(hwb[0], ...hwb.slice(1).map(R.clamp(0, 100)));
  const hex = rgb2hex(...rgb);

  // console.log({lch, lab, xyz, hwb, rgb, hex});

  return hex;
}
