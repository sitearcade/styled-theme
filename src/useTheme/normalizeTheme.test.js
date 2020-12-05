// import

import {color} from '../api';

import normalizeTheme from './normalizeTheme';

// test

describe('normalizeTheme(theme)', () => {
  it('returns theme with correct shape and defaults', () => {
    const theme = normalizeTheme({});

    expect(theme).toContainAllKeys([
      'baseline',
      'breakpoints',
      'layout',
      'fx',
      'font',
      'color',
      'palette',
    ]);
  });

  it('should deep-merge regular properties', () => {
    const theme = normalizeTheme({
      baseline: 17,
      fx: {blur: 0.5},
      color: {white: '#f6f8f9'},
    });

    expect(theme.baseline).toStrictEqual(17);
    expect(theme.fx.blur).toStrictEqual(0.5);
    expect(theme.color.white).toStrictEqual('#f6f8f9');
  });

  it('adds steps for new `palette` colors related to nearby colors', () => {
    const theme = normalizeTheme({
      color: {verdant: '#4d995c'},
    });

    expect(theme.palette.verdant).toMatchInlineSnapshot(`
      Object {
        "0": "#001602",
        "10": "#002604",
        "100": "#c2ffca",
        "20": "#003b17",
        "30": "#005324",
        "40": "#1c6c33",
        "50": "#3a864b",
        "60": "#54a063",
        "70": "#6fbc7c",
        "80": "#8ad896",
        "90": "#a6f4b1",
      }
    `);
  });

  it('replaces steps for old `palette` colors using original luminance', () => {
    const theme = normalizeTheme({
      color: {
        gray: '#f6f8f9',
        green: '#4d995c',
      },
    });

    expect(color('green.62')({theme})).toStrictEqual('#5aa668');
    expect(color('green.30')({theme})).toStrictEqual('#005324');
    expect(color('gray.97')({theme})).toStrictEqual('#f5f7f8');
    expect(color('gray.9')({theme})).toStrictEqual('#181a1a');

    expect(theme.palette.gray).toMatchInlineSnapshot(`
      Object {
        "0": "#000102",
        "10": "#1a1c1c",
        "100": "#fdfeff",
        "20": "#2f3131",
        "30": "#454748",
        "40": "#5d5f5f",
        "50": "#757778",
        "60": "#8f9192",
        "70": "#aaabac",
        "80": "#c5c7c8",
        "90": "#e1e3e4",
      }
    `);

    expect(theme.palette.green).toMatchInlineSnapshot(`
      Object {
        "0": "#001602",
        "10": "#002604",
        "100": "#c2ffca",
        "20": "#003b17",
        "30": "#005324",
        "40": "#1c6c33",
        "50": "#3a864b",
        "60": "#54a063",
        "70": "#6fbc7c",
        "80": "#8ad896",
        "90": "#a6f4b1",
      }
    `);
  });
});
