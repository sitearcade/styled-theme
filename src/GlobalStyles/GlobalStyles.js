// import

import {BaseStyles} from './BaseStyles';
import {Normalize} from './Normalize';
import {StyleVars} from './StyleVars';

// component

export function GlobalStyles() {
  return (
    <>
      <Normalize />
      <StyleVars />
      <BaseStyles />
    </>
  );
}
