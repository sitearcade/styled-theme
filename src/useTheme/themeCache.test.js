// import

import {themeCache} from './themeCache';

// test

beforeEach(() => themeCache.reset());

describe('themeCache{}', () => {
  it('gets and sets value in hidden cache', () => {
    themeCache.set('key', 'val');

    expect(themeCache.get('key')).toStrictEqual('val');
  });

  it('allows reset of cache', () => {
    themeCache.set('key', 'val');

    expect(themeCache.get('key')).toStrictEqual('val');

    themeCache.reset();

    expect(themeCache.get('key')).toBeNull();
  });
});
