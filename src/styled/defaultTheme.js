// import

import palette from './defaultPalette';

// export

export default {
  rem: {
    px: 16,
    mx: 1.5,
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

  fx: {
    trans: {speed: 0.1, curve: 'linear', delay: 0.1},
    outset: {x: 0, y: 0, blur: 0.25, spread: 0},
    inset: {x: 0, y: 0, blur: 0.25, spread: 0},
    outline: {x: 0, y: 0, blur: 0.0625, spread: 0.0625},
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

