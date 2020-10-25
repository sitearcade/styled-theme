// import

import color from './color';

// vars

const props = {
  theme: {
    color: {white: '#ffffff'},
    palette: {
      gray: {
        0: '#000000',
        100: '#ffffff',
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

  it('parsed undefined `palette` steps, if requested', () => {
    const res = color(props, 'gray.50');

    expect(res).toStrictEqual('#7f7f7f');
  });

  it('adjusts alpha of `palette`, if specified', () => {
    const res = color(props, 'gray.100', 0.5);

    expect(res).toStrictEqual('rgba(255,255,255,0.5)');
  });
});
