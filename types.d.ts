// import

import 'styled-components';

// extend

export type BreakPoint = 'xxs' | 'xs' | 's' | 'sm' | 'm' | 'ml' | 'l' | 'xl' |'xxl';
export type FontFam = 'serif' | 'sans' | 'mono' | 'logo' | 'head' | 'body';
export type ColorKey = 'black' | 'white' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';

export type ThemeObj = Record<string, string | number>;
export type InputTheme = Record<string, string | number | ThemeObj>;
export type Theme = {
  baseline: number;

  breakpoints: Record<BreakPoint, number> & Record<string, number>;

  layout: {
    [index: string]: string | number;
    headerHeight: string;
  };

  fx: {
    speed: number;
    delay: number;
    blur: number;
    spread: number;
  };

  font: Record<FontFam, string>;

  color: Record<ColorKey, string> & Record<string, string>;
  palette: Record<string, Record<string, string>>;
  rgb: Record<ColorKey, string> & Record<string, string>;
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

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

  export function xyz2rgb(...xyz: Xyz): Rgb;
  export function rgb2xyz(...rgb: Rgb): Xyz;

  export function xyz2lab(...xyz: Xyz): Lab;
  export function lab2xyz(...lab: Lab): Xyz;

  export function lch2lab(...lch: Lch): Lab;
  export function lab2lch(...lab: Lab): Lch;
}
