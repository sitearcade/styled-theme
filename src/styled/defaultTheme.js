// import

import palette from './defaultPalette';

// export

export default {
  remPx: 16,

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

  fx: {
    speed: 0.1,
    delay: 0.1,
    blur: 0.125,
    spread: 0.0625,

    outset: {blur: 0.25, spread: 0.0625},
    inset: {blur: 0.25, spread: 0.0625},
    outline: {blur: 0.0625, spread: 0.0625},
  },

  fontFam: {
    serif: 'Georgia, Times New Roman, serif',
    sans: 'Roboto, Lato, Open Sans, san-serif',
    mono: 'FiraCode-Retina, Fira Code, Menlo, Monaco, monospace',
  },

  color: {
    auto: 'auto',
    inherit: 'inherit',
    transparent: 'transparent',
    current: 'currentColor',

    white: '#ffffff',
    black: '#000000',
  },

  palette,
};

