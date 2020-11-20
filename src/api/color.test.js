// import

import color from './color';

// vars

const props = {
  theme: {
    color: {
      white: '#ffffff',
      black: '#000000',
      gray: '#7f7f7f',
    },
    palette: {
      gray: {
        0: '#000000',
        100: '#ffffff',
      },
      white: {
        50: 'rgba(255,255,255,0.5)',
      },
      black: {
        50: 'rgba(0,0,0,0.5)',
      },
    },
  },
};

// test

describe('color(props, col, alphaOrDef)', () => {
  it('returns specific `color`, if requested', () => {
    const res = color(props, 'white');

    expect(res).toStrictEqual('#ffffff');
  });

  it('adjusts alpha of `color`, if specified', () => {
    const res = color(props, 'white', 0.5);

    expect(res).toStrictEqual('rgba(255,255,255,0.5)');
  });

  it('returns `palette` step, if requested', () => {
    const res = color(props, 'gray.100');

    expect(res).toStrictEqual('#ffffff');
  });

  it('adjusts alpha of `palette` step, if specified', () => {
    const res = color(props, 'gray.100', 0.5);

    expect(res).toStrictEqual('rgba(255,255,255,0.5)');
  });

  it('parses undefined `palette` steps, if requested', () => {
    expect(color(props, 'gray.1')).toStrictEqual('#040404');
    expect(color(props, 'gray.99')).toStrictEqual('#fcfcfc');
  });

  it('parses arbitrary changes, using constant values', () => {
    expect(color(props, 'gray', {h: 60, c: 50})).toStrictEqual('#b36d34');
    expect(color(props, 'gray', {c: 50, a: 0.5})).toStrictEqual('rgba(89,126,213,0.5)');
  });

  it('creates new colors from object, using constant values', () => {
    expect(color(props, {h: 0, c: 50, l: 50})).toStrictEqual('#c14e79');
    expect(color(props, {h: 0, c: 50, l: 50, a: 0.5})).toStrictEqual('rgba(193,78,121,0.5)');
  });

  it('allows adjustment of alpha-based palette steps (white & black)', () => {
    expect(color(props, 'white.25')).toStrictEqual('rgba(255,255,255,0.25)');
    expect(color(props, 'black.75')).toStrictEqual('rgba(0,0,0,0.75)');
  });
});
