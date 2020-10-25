// import

import createBy from './createBy';

// test

describe('createBy(pre)', () => {
  it('creates a func with signature by(props, prop, opts, def)', () => {
    const by = createBy();

    expect(by).toHaveLength(4);
  });

  describe('by(props, prop, opts: [null|undefined])', () => {
    it('retrieves `prop` of `props` when other args empty', () => {
      const by = createBy();
      const res = by({theme: {prop: 1}}, 'theme.prop');

      expect(res).toStrictEqual(1);
    });

    it('prefixes getter path with array or dot-string `pre`', () => {
      const by = createBy(['theme']);
      const res = by({theme: {prop: 1}}, 'prop');

      expect(res).toStrictEqual(1);
    });

    it('returns undefined when path invalid', () => {
      const by = createBy(['theme']);

      expect(by({}, 'prop')).toBeUndefined();
      expect(by({}, 'prop', null)).toBeUndefined();
    });
  });

  describe('by(props, prop, opts: [string|number|boolean|regexp])', () => {
    it('uses `opts` as fallback when path invalid', () => {
      const by = createBy(['theme']);
      const allRx = /.*/;

      expect(by({}, 'prop', '')).toStrictEqual('');
      expect(by({}, 'prop', 0)).toStrictEqual(0);
      expect(by({}, 'prop', false)).toStrictEqual(false);
      expect(by({}, 'prop', allRx)).toStrictEqual(allRx);
    });

    it('ignores `def` no matter what', () => {
      const by = createBy(['theme']);
      const props = {};

      expect(by(props, 'prop', null, true)).toBeUndefined();
      expect(by(props, 'prop', undefined, true)).toBeUndefined();
    });
  });

  describe('by(props, prop, opts: [function])', () => {
    it('returns `opts({props, prop, opts, def, val})` when path valid', () => {
      const by = createBy(['theme']);
      const props = {theme: {prop: 1}};

      expect(by(props, 'prop', ({val}) => val)).toStrictEqual(1);
      expect(by(props, 'prop', ({prop}) => prop)).toStrictEqual('prop');
    });

    it('returns `opts({props, prop, opts, def, val})` when path invalid', () => {
      const by = createBy(['theme']);
      const props = {};

      expect(by(props, 'prop', ({val}) => val)).toBeUndefined();
      expect(by(props, 'prop', ({prop}) => prop)).toStrictEqual('prop');
    });

    it('ignores `def` even when `opts(args)` returns nil', () => {
      const by = createBy(['theme']);
      const props = {};

      expect(by(props, 'prop', ({val}) => val, true)).toBeUndefined();
    });
  });

  describe('by(props, prop, opts: [object|array], def)', () => {
    it('returns `opts[val]` when path valid', () => {
      const by = createBy(['theme']);
      const props = {theme: {prop: 1}};

      expect(by(props, 'prop', {1: ''})).toStrictEqual('');
      expect(by(props, 'prop', {1: ({prop}) => prop})).toStrictEqual('prop');
      expect(by(props, 'prop', [0, 1])).toStrictEqual(1);
    });

    it('defaults to `def` when path invalid', () => {
      const by = createBy(['theme']);
      const props = {};

      expect(by(props, 'prop', {1: ''}, true)).toStrictEqual(true);
      expect(by(props, 'prop', [0, 1], true)).toStrictEqual(true);
    });

    it('supports fallback `def(args)` and `def[val]`', () => {
      const by = createBy(['theme']);
      const props = {theme: {prop: 2}};

      expect(by(props, 'prop', {1: ''}, ({prop}) => prop)).toStrictEqual('prop');
      expect(by(props, 'prop', {1: ''}, {2: true})).toStrictEqual(true);
    });
  });
});
