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
