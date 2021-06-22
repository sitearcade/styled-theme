// types

import type {PartialDeep} from 'type-fest';

export type BreakKey = 'l' | 'm' | 'ml' | 's' | 'sm' | 'xl' | 'xs' | 'xxl' | 'xxs';
export type Breaks = Record<BreakKey, number>;

export type FontFamKey = 'body' | 'head' | 'logo' | 'mono' | 'sans' | 'serif';
export type FontFams = Record<FontFamKey, string>;

export type ColorKey = 'black' | 'blue' | 'gray' | 'green' | 'orange' | 'purple' | 'red' | 'white' | 'yellow';
export type Colors = Record<ColorKey, string> & Record<string, string>;

export type Palette = Record<ColorKey, Record<string, string>> &
Record<string, Record<string, string>>;

export type DefaultTheme = {
  baseline: number;
  layout: Record<string, number | string>;
  breakpoints: Breaks;
  font: FontFams;
  color: Colors;
};

export type InputTheme = PartialDeep<DefaultTheme>;

export type Theme = DefaultTheme & {
  rgb: Record<ColorKey, string> & Record<string, string>;
  palette: Palette;
};

// export

export const defaultTheme: DefaultTheme = {
  baseline: 16,

  layout: {
    headerHeight: '4.5rem',
  },

  breakpoints: {
    xxs: 18,
    xs: 27,
    s: 36,
    sm: 45,
    m: 54,
    ml: 63,
    l: 72,
    xl: 81,
    xxl: 90,
  },

  font: {
    serif: 'serif',
    sans: 'sans-serif',
    mono: 'FiraCode-Retina, Fira Code, Menlo, Monaco, monospace',

    head: 'serif',
    body: 'sans-serif',
    logo: 'cursive',
  },

  color: {
    // palette alpha
    white: '#ffffff',
    black: '#000000',

    // palette lightness
    gray: '#7f7f7f',
    red: '#ff0000',
    orange: '#ff9900',
    yellow: '#ffff00',
    green: '#00ff00',
    blue: '#0099ff',
    purple: '#990099',
  },
};

