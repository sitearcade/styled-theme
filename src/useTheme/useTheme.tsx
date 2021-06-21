// import

import {setup} from 'goober';
import {prefix} from 'goober/prefixer';
import {shouldForwardProp as forward} from 'goober/should-forward-prop';
import type {PropsWithChildren} from 'react';
import {createContext, useContext, createElement} from 'react';

import type {Theme} from './defaultTheme';
import {defaultTheme} from './defaultTheme';
import normalizeTheme from './normalizeTheme';

// context

export const theme = normalizeTheme(defaultTheme);
const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider(props: PropsWithChildren<{theme: Theme}>) {
  const {theme, ...rest} = props;

  return <ThemeContext.Provider value={theme} {...rest} />;
}

// config

setup(
  createElement,
  prefix,
  useTheme,
  forward((prop: string) => !prop.startsWith('$')),
);
