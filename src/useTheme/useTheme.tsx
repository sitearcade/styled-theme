// import

import type {PropsWithChildren} from 'react';
import {useMemo, createContext, useContext} from 'react';
import type {DefaultTheme} from 'styled-components';
import {ThemeProvider as Provider, useTheme} from 'styled-components';

import normalizeTheme from './normalizeTheme';

// context

const ThemeApiContext = createContext(undefined);

// hook

export {useTheme};

export function useThemeApi() {
  return useContext(ThemeApiContext);
}

// component

export function ThemeProvider(props: PropsWithChildren<{theme: DefaultTheme}>) {
  const {children, theme} = props;
  const boundTheme = useMemo(() => normalizeTheme(theme), [theme]);

  return (
    <Provider theme={boundTheme}>
      {children}
    </Provider>
  );
}
