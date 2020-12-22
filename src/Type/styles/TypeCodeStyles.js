// import

import {createGlobalStyle} from 'styled-components';

import {color, fontFam, rpx} from '../../api';

// styles

export const TypeCodeStyles = createGlobalStyle`
  .Type {
    pre,
    code,
    samp,
    kbd,
    var {
      font-family: ${fontFam('mono')};
      font-variant-ligatures: common-ligatures;
      font-style: normal;
    }

    code,
    samp,
    kbd,
    var {
      font-size: 0.75em;
      border-width: ${rpx(1)};
      border-style: solid;
      border-radius: 0.25rem;
      padding: 0.125rem 0.25rem;
      position: relative;
      top: -0.125rem;
    }

    code {
      background-color: ${color('gray.80')};
      border-color: ${color('gray.70')};
    }

    samp {
      background-color: ${color('orange.85')};
      border-color: ${color('orange.75')};
    }

    kbd {
      background-color: ${color('yellow.90')};
      border-color: ${color('yellow.80')};
    }

    var {
      background-color: ${color('red.80')};
      border-color: ${color('red.70')};
    }

    pre {
      padding: 0.5rem;
      margin: 0 0 1.5rem;
      border-left: 0.25rem solid ${color('blue')};
      background-color: ${color('gray.80')};
      font-size: 1rem;
      line-height: 1.5rem;
      overflow-x: auto;
      overflow-y: hidden;
      tab-size: 2;

      code {
        display: block;
        font-size: 1rem;
        line-height: 1.5rem;
        border-width: 0;
        border-radius: 0;
        padding: 0;
        top: 0;
      }
    }
  }
`;
