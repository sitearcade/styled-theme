// import

import {setup} from 'goober';
import {prefix} from 'goober/prefixer';
import {shouldForwardProp as forward} from 'goober/should-forward-prop';
import type {ReactNode} from 'react';
import {memo, createContext, useContext} from 'react';

import type {InputTheme, Theme} from './defaultTheme';
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

// config

export const setupTheme = (
  pragma: Parameters<typeof setup>[0],
  useThemeHook: () => Theme,
) =>
  setup(
    pragma,
    prefix,
    useThemeHook,
    forward((prop: string) => !prop.startsWith('$')),
  );
