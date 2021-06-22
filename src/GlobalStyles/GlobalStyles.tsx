// import

import {GlobalBaseStyles} from './GlobalBaseStyles';
import {GlobalStyleVars} from './GlobalStyleVars';
import {Normalize} from './Normalize';

// component

export function GlobalStyles() {
  return (
    <>
      <Normalize />
      <GlobalStyleVars />
      <GlobalBaseStyles />
    </>
  );
}
