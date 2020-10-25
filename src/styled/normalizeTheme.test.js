// import

import normalizeTheme from './normalizeTheme';

// test

describe('normalizeTheme(theme)', () => {
  it('returns theme with correct shape and defaults', () => {
    const res = normalizeTheme({});

    expect(res).toContainAllKeys(['color', 'palette', 'remPx', 'breakpoints', 'fx', 'fontFam']);
  });

  it('should deep-merge regular properties', () => {
    const res = normalizeTheme({
      remPx: 17,
      fx: {blur: 0.5},
      color: {white: '#f6f8f9'},
    });

    expect(res.remPx).toStrictEqual(17);
    expect(res.fx.blur).toStrictEqual(0.5);
    expect(res.color.white).toStrictEqual('#f6f8f9');
  });

  it('copies `palette` string vals into `color`', () => {
    const res = normalizeTheme({
      palette: {verdant: '#4d995c'},
    });

    expect(res.color.verdant).toStrictEqual('#4d995c');
  });

  it('adds steps for new `palette` colors related to nearby colors', () => {
    const res = normalizeTheme({
      palette: {verdant: '#4d995c'},
    });

    expect(res.palette.verdant).toMatchSnapshot();
  });

  it('replaces steps for old `palette` colors using original luminance', () => {
    const res = normalizeTheme({
      palette: {gray: '#5d5f60'},
    });

    expect(res.palette.gray).toMatchSnapshot();
  });
});
