// import

import {createGlobalStyle} from 'styled-components';

import {TypeBlockStyles} from './styles/TypeBlockStyles';
import {TypeButtonStyles} from './styles/TypeButtonStyles';
import {TypeCodeStyles} from './styles/TypeCodeStyles';
import {TypeFormStyles} from './styles/TypeFormStyles';
import {TypeHeadingStyles} from './styles/TypeHeadingStyles';
import {TypeInlineStyles} from './styles/TypeInlineStyles';
import {TypeLinkStyles} from './styles/TypeLinkStyles';
import {TypeListStyles} from './styles/TypeListStyles';
import {TypeMediaStyles} from './styles/TypeMediaStyles';
import {TypeTableStyles} from './styles/TypeTableStyles';

// component

export function GlobalTypeStyles() {
  return (
    <>
      <TypeStyles />
      <TypeBlockStyles />
      <TypeButtonStyles />
      <TypeCodeStyles />
      <TypeFormStyles />
      <TypeHeadingStyles />
      <TypeInlineStyles />
      <TypeListStyles />
      <TypeMediaStyles />
      <TypeTableStyles />
      <TypeLinkStyles />
    </>
  );
}

// styles

const TypeStyles = createGlobalStyle`
  .Type {
    margin: 0;
    
    &.trimTop > :first-child {
      margin-top: 0;
    }

    &.trimEnd > :last-child {
      margin-bottom: 0;
    }
  }
`;
