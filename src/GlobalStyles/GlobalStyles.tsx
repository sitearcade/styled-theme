// import

import type {Theme} from 'src/useTheme';

import {GlobalBaseStyles} from './GlobalBaseStyles';
import {GlobalStyleVars} from './GlobalStyleVars';
import {Normalize} from './Normalize';

// component

export function GlobalStyles(props: {theme: Theme}) {
  const {theme} = props;

  return (
    <>
      <Normalize />
      <GlobalStyleVars theme={theme} />
      <GlobalBaseStyles />
    </>
  );
}
