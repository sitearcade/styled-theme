// import

import pt from 'prop-types';
import {useMemo, createContext, useContext} from 'react';
import {ThemeProvider as Provider, useTheme} from 'styled-components';

import normalizeTheme from './normalizeTheme';

// context

const ThemeApiContext = createContext();

// hook

export {useTheme};

export function useThemeApi() {
  return useContext(ThemeApiContext);
}

// component

export function ThemeProvider(props) {
  const {children, theme} = props;
  const boundTheme = useMemo(() => normalizeTheme(theme), [theme]);

  return (
    <Provider theme={boundTheme}>
      {children}
    </Provider>
  );
}

ThemeProvider.propTypes = {
  children: pt.node,
  theme: pt.object.isRequired,
};
