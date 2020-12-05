// import

import pt from 'prop-types';
import {useMemo, createContext, useContext} from 'react';
import {ThemeProvider as Provider, useTheme} from 'styled-components';

import {bindThemeToApi} from '../api';

import normalizeTheme from './normalizeTheme';

// helpers

export const keepProps = (props, useDef = true) => ({
  shouldForwardProp: (prop, defFn) => props.includes(prop) && (!useDef || defFn(prop)),
});

export const omitProps = (props, useDef = true) => ({
  shouldForwardProp: (prop, defFn) => !props.includes(prop) && (!useDef || defFn(prop)),
});

export const snuffProps = (props) =>
  Object.keys(props).reduce((acc, k) => ({...acc, [`$${k}`]: props[k]}), {});

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
  const [boundTheme, boundApi] = useMemo(() => {
    const normalTheme = normalizeTheme(theme);

    return [normalTheme, bindThemeToApi(normalTheme)];
  }, [theme]);

  return (
    <Provider theme={boundTheme}>
      <ThemeApiContext.Provider value={boundApi}>
        {children}
      </ThemeApiContext.Provider>
    </Provider>
  );
}

ThemeProvider.propTypes = {
  children: pt.node,
  theme: pt.object.isRequired,
};
