// import

import {setup} from 'goober';
import {prefix} from 'goober/prefixer';
import {shouldForwardProp as forward} from 'goober/should-forward-prop';
import type {PropsWithChildren} from 'react';
import {memo, createContext, useContext, createElement} from 'react';

import type {InputTheme} from './defaultTheme';
import {normalizeTheme} from './normalizeTheme';

// context

const ThemeContext = createContext(normalizeTheme());
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = memo(
  // eslint-disable-next-line prefer-arrow-callback
  function ThemeProvider(props: PropsWithChildren<{theme?: InputTheme}>) {
    const {theme, ...rest} = props;
    const value = normalizeTheme(theme);

    return <ThemeContext.Provider value={value} {...rest} />;
  },
);

// config

setup(
  createElement,
  prefix,
  useTheme,
  forward((prop: string) => !prop.startsWith('$')),
);
