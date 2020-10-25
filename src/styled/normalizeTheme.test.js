// import

import {color} from '../api';

import normalizeTheme from './normalizeTheme';

// test

describe('normalizeTheme(theme)', () => {
  it('returns theme with correct shape and defaults', () => {
    const theme = normalizeTheme({});

    expect(theme).toContainAllKeys(['color', 'palette', 'remPx', 'breakpoints', 'fx', 'fontFam']);
  });

  it('should deep-merge regular properties', () => {
    const theme = normalizeTheme({
      remPx: 17,
      fx: {blur: 0.5},
      color: {white: '#f6f8f9'},
    });

    expect(theme.remPx).toStrictEqual(17);
    expect(theme.fx.blur).toStrictEqual(0.5);
    expect(theme.color.white).toStrictEqual('#f6f8f9');
  });

  it('copies `palette` string vals into `color`', () => {
    const theme = normalizeTheme({
      palette: {verdant: '#4d995c'},
    });

    expect(theme.color.verdant).toStrictEqual('#4d995c');
  });

  it('adds steps for new `palette` colors related to nearby colors', () => {
    const theme = normalizeTheme({
      palette: {verdant: '#4d995c'},
    });

    expect(theme.palette.verdant).toMatchSnapshot();
  });

  it('replaces steps for old `palette` colors using original luminance', () => {
    const theme = normalizeTheme({
      palette: {
        gray: '#f6f8f9',
        green: '#4d995c',
      },
    });

    expect(color('green.62')({theme})).toStrictEqual('#41c95c');
    expect(color('green.30')({theme})).toStrictEqual('#046c19');
    expect(color('gray.94')({theme})).toStrictEqual('#f6f8f9');
    expect(color('gray.10')({theme})).toStrictEqual('#16262e');
    expect(theme.palette).toMatchSnapshot();
  });
});
