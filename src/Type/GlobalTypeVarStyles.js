// import

import {createGlobalStyle} from 'styled-components';

import {TypeBlockStyles} from './vars/TypeBlockStyles';
import {TypeButtonStyles} from './vars/TypeButtonStyles';
import {TypeCodeStyles} from './vars/TypeCodeStyles';
import {TypeFormStyles} from './vars/TypeFormStyles';
import {TypeHeadingStyles} from './vars/TypeHeadingStyles';
import {TypeInlineStyles} from './vars/TypeInlineStyles';
import {TypeLinkStyles} from './vars/TypeLinkStyles';
import {TypeListStyles} from './vars/TypeListStyles';
import {TypeMediaStyles} from './vars/TypeMediaStyles';
import {TypeTableStyles} from './vars/TypeTableStyles';

// component

export function GlobalTypeVarStyles() {
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
