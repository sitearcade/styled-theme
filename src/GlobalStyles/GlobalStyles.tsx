// import

import pt from 'prop-types';

import {BaseStyles} from './BaseStyles';
import {Normalize} from './Normalize';
import {StyleVars} from './StyleVars';

// component

export function GlobalStyles({theme}) {
  return (
    <>
      <Normalize />
      <StyleVars theme={theme} />
      <BaseStyles />
    </>
  );
}

GlobalStyles.propTypes = {
  theme: pt.object,
};
