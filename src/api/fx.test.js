// import

import {linear, easeIn, easeOut, easeInOut, shadow, outset, inset, outline} from './fx';

// vars

const props = {
  theme: {
    fx: {
      speed: 0.1,
      delay: 0.1,
      blur: 0.0625,
      spread: 0.0625,
    },
  },
};

// test

[
  {fn: linear, trans: 'linear'},
  {fn: easeIn, trans: 'ease-in'},
  {fn: easeOut, trans: 'ease-out'},
  {fn: easeInOut, trans: 'ease-in-out'},
].forEach(({fn, trans}) => {
  describe(`${fn.name}(props, speed, delay)`, () => {
    it('returns correct transition options, with defaults', () => {
      expect(fn(props)).toStrictEqual(`0s ${trans} 0s`);
      expect(fn(props, 1)).toStrictEqual(`0.1s ${trans} 0s`);
      expect(fn(props, 2, 2)).toStrictEqual(`0.2s ${trans} 0.2s`);
    });
  });
});

[
  {fn: outset},
  {fn: outline},
].forEach(({fn}) => {
  describe(`${fn.name}(props, blur, spread)`, () => {
    it(`returns correct ${fn.name} options, with defaults`, () => {
      expect(fn(props)).toStrictEqual('0 0 0rem 0rem');
      expect(fn(props, 1)).toStrictEqual('0 0 0.0625rem 0rem');
      expect(fn(props, 2, 2)).toStrictEqual('0 0 0.125rem 0.125rem');
    });
  });
});

describe('shadow(props, blur, spread)', () => {
  it('returns correct shadow options, with defaults', () => {
    expect(shadow(props)).toStrictEqual('0rem 0rem');
    expect(shadow(props, 1)).toStrictEqual('0.0625rem 0rem');
    expect(shadow(props, 2, 2)).toStrictEqual('0.125rem 0.125rem');
  });
});

describe('inset(props, blur, spread)', () => {
  it('returns correct inset options, with defaults', () => {
    expect(inset(props)).toStrictEqual('inset 0 0 0rem 0rem');
    expect(inset(props, 1)).toStrictEqual('inset 0 0 0.0625rem 0rem');
    expect(inset(props, 2, 2)).toStrictEqual('inset 0 0 0.125rem 0.125rem');
  });
});
