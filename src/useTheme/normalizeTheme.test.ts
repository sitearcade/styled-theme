// import

import type {DefaultTheme} from 'styled-components';

import normalizeTheme from './normalizeTheme';

// test

describe('normalizeTheme(theme)', () => {
  it('returns theme with correct shape and defaults', () => {
    const theme = normalizeTheme({});

    [
      'baseline',
      'breakpoints',
      'layout',
      'fx',
      'font',
      'color',
      'palette',
      'rgb',
    ].forEach((v) => expect(theme).toHaveProperty(v));
  });

  it('should deep-merge regular properties', () => {
    const theme = normalizeTheme({
      baseline: 17,
      fx: {blur: 0.5},
      color: {white: '#f6f8f9'},
    } as DefaultTheme);

    expect(theme.baseline).toStrictEqual(17);
    expect(theme.fx.blur).toStrictEqual(0.5);
    expect(theme.color.white).toStrictEqual('#f6f8f9');
  });

  it('adds steps for new `palette` colors related to nearby colors', () => {
    const theme = normalizeTheme({
      color: {verdant: '#4d995c'},
    } as unknown as DefaultTheme);

    expect(theme.palette.verdant).toMatchInlineSnapshot(`
      Object {
        "0": "#001602",
        "10": "#002604",
        "100": "#c2ffca",
        "15": "#00300b",
        "20": "#003b17",
        "25": "#00471f",
        "30": "#005324",
        "35": "#086028",
        "40": "#1c6c33",
        "45": "#2b793f",
        "5": "#001f02",
        "50": "#3a864b",
        "55": "#479357",
        "60": "#54a063",
        "65": "#62ae6f",
        "70": "#6fbc7c",
        "75": "#7dca89",
        "80": "#8ad896",
        "85": "#98e6a4",
        "90": "#a6f4b1",
        "95": "#b4ffbe",
      }
    `);
  });

  it('replaces steps for old `palette` colors using original luminance', () => {
    const theme = normalizeTheme({
      color: {
        gray: '#f6f8f9',
        green: '#4d995c',
      },
    } as DefaultTheme);

    expect(theme.palette.gray).toMatchInlineSnapshot(`
      Object {
        "0": "#000102",
        "10": "#1a1c1c",
        "100": "#fdfeff",
        "15": "#242627",
        "20": "#2f3131",
        "25": "#3a3c3c",
        "30": "#454748",
        "35": "#515353",
        "40": "#5d5f5f",
        "45": "#696b6c",
        "5": "#0f1112",
        "50": "#757778",
        "55": "#828485",
        "60": "#8f9192",
        "65": "#9c9e9f",
        "70": "#aaabac",
        "75": "#b7b9ba",
        "80": "#c5c7c8",
        "85": "#d3d5d6",
        "90": "#e1e3e4",
        "95": "#eff1f2",
      }
    `);

    expect(theme.palette.green).toMatchInlineSnapshot(`
      Object {
        "0": "#001602",
        "10": "#002604",
        "100": "#c2ffca",
        "15": "#00300b",
        "20": "#003b17",
        "25": "#00471f",
        "30": "#005324",
        "35": "#086028",
        "40": "#1c6c33",
        "45": "#2b793f",
        "5": "#001f02",
        "50": "#3a864b",
        "55": "#479357",
        "60": "#54a063",
        "65": "#62ae6f",
        "70": "#6fbc7c",
        "75": "#7dca89",
        "80": "#8ad896",
        "85": "#98e6a4",
        "90": "#a6f4b1",
        "95": "#b4ffbe",
      }
    `);
  });
});
