// import

import {renderHook, matchMediaMock} from '@sitearcade/jest-preset/tools';

import {useMediaMinMax} from './useMediaMinMax';
import {ThemeProvider} from './useTheme';

// vars

const theme = {};

// test

afterEach(() => {
  matchMediaMock.clear();
});

describe('useMediaMinMax(min, max)', () => {
  it('returns bool if query matches', () => {
    const {result, rerender} = renderHook(({min, max}) => (
      useMediaMinMax(min, max)
    ), {
      // eslint-disable-next-line react/display-name
      wrapper: (props) => (<ThemeProvider theme={theme} {...props} />),
      initialProps: {},
    });

    expect(result.current).toBeFalse();

    matchMediaMock.useMediaQuery('(max-width: 35.99875em)');
    rerender({max: 's'});

    expect(result.current).toBeTrue();
  });
});
