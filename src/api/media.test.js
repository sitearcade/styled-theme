// import

import media from './media';

// vars

const props = {
  theme: {
    remPx: 16,
    breakpoints: {
      xxs: 18,
      xs: 27,
      s: 36,
      sm: 45,
      m: 54,
      ml: 63,
      l: 72,
      xl: 81,
      xxl: 90,
    },
  },
};

// test

describe('media(props, min, max)', () => {
  it('returns specific min-width `media`', () => {
    expect(media(props, 'm', null))
      .toStrictEqual('@media (min-width: 54em)');
  });

  it('returns specific max-width `media`', () => {
    expect(media(props, null, 'l'))
      .toStrictEqual('@media (max-width: 71.99875em)');
  });

  it('returns both min-width and max-width `media`', () => {
    expect(media(props, 'm', 'l'))
      .toStrictEqual('@media (min-width: 54em) and (max-width: 71.99875em)');
  });

  it('supports specific em-values', () => {
    expect(media(props, 54, 72))
      .toStrictEqual('@media (min-width: 54em) and (max-width: 71.99875em)');
  });

  it('returns empty query when args unspecified', () => {
    expect(media(props, null, null))
      .toStrictEqual('@media ()');
  });
});
