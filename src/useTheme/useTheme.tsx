// import

import type {ReactNode} from 'react';
import {memo, createContext, useContext} from 'react';

import type {InputTheme} from './defaultTheme';
import {normalizeTheme} from './normalizeTheme';

// context

const ThemeContext = createContext(normalizeTheme());
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = memo(
  // eslint-disable-next-line prefer-arrow-callback
  function ThemeProvider(props: {theme?: InputTheme; children: ReactNode}) {
    const {theme, ...rest} = props;
    const value = normalizeTheme(theme);

    return <ThemeContext.Provider value={value} {...rest} />;
  },
);
