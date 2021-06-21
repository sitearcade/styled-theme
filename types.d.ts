// modules

declare module '@csstools/convert-colors' {
  type Hex = string;
  type Hwb = [number, number, number];
  type Rgb = [number, number, number];
  type Xyz = [number, number, number];
  type Lab = [number, number, number];
  type Lch = [number, number, number];
  type Hsv = [number, number, number];

  export function hex2hsv(hex: Hex): Hsv;
  export function hsv2hex(...hsv: Hsv): Hex;

  export function hex2rgb(hex: Hex): Rgb;
  export function rgb2hex(...rgb: Rgb): Hex;

  export function hwb2rgb(...hwb: Hwb): Rgb;
  export function rgb2hwb(...rgb: Rgb): Hwb;

  export function hwb2xyz(...hwb: Hwb): Xyz;
  export function xyz2hwb(...xyz: Xyz): Hwb;

  export function xyz2rgb(...xyz: Xyz): Rgb;
  export function rgb2xyz(...rgb: Rgb): Xyz;

  export function xyz2lab(...xyz: Xyz): Lab;
  export function lab2xyz(...lab: Lab): Xyz;

  export function lch2lab(...lch: Lch): Lab;
  export function lab2lch(...lab: Lab): Lch;
}
