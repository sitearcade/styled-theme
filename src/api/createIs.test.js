// import

import * as R from 'ramda';

import createIs from './createIs';

// vars

const is = createIs('every', true);

// test

describe('createIs(method, condition, pre)', () => {
  it('creates a func with signature is(props, match, trueVal, falseVal)', () => {
    expect(createIs('every', true)).toHaveLength(4);
    expect(createIs('every', false)).toHaveLength(4);
    expect(createIs('some', true)).toHaveLength(4);
    expect(createIs('some', false)).toHaveLength(4);
  });

  describe('is(props, match: [string], trueVal, falseVal)', () => {
    it('returns vals based on the existence of `match`', () => {
      expect(is({prop: true}, 'prop', true, false)).toStrictEqual(true);
      expect(is({prop: true}, 'not', true, false)).toStrictEqual(false);
    });

    it('returns supports `trueVal` and `falseVal` as funcs', () => {
      expect(is({prop: true}, 'prop', R.T, R.F)).toStrictEqual(true);
      expect(is({prop: true}, 'not', R.T, R.F)).toStrictEqual(false);
    });
  });
});
