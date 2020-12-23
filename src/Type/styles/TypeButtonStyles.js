// import

import {createGlobalStyle} from 'styled-components';

import {color, linear, fontFam, rpx, outset} from '../../api';

// export

export const TypeButtonStyles = createGlobalStyle`
  .Type {
    a.button,
    button:not(.link),
    input[type="button"],
    input[type="submit"],
    input[type="reset"] {
      appearance: none;
      align-items: flex-start;
      display: inline-block;
      font-family: ${fontFam('body')};
      font-weight: 400;
      letter-spacing: ${rpx(-0.25)}; 
      line-height: 2rem;
      padding: 0.25rem 1rem;
      border-radius: 0.25rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      transition: box-shadow ${linear(1)}, background-color ${linear(1)};
      color: ${color('black')};
      background-color: ${color('blue.70')};
      box-shadow: 0 ${rpx(1)} 0 ${color('blue.50')}, 
        ${outset(1)} ${color('blue.40', 0.5)};

      &:hover {
        background-color: ${color('blue.75')};
        box-shadow: 0 0.125rem 0 ${color('blue.50')}, 
          ${outset(1)} ${color('blue.40', 0.5)};
      }

      &:active {
        background-color: ${color('blue.80')};
        box-shadow: 0 0.125rem 0 ${color('blue.60')}, 
          ${outset(1)} ${color('blue.40', 0.5)};
      }

      &.blue {
        color: ${color('white')};
        background-color: ${color('blue')};
        box-shadow: 0 ${rpx(1)} 0 ${color('blue.35')}, 
          ${outset(1)} ${color('blue.30', 0.5)};

        &:hover {
          background-color: ${color('blue.57')};
          box-shadow: 0 0.125rem 0 ${color('blue.40')}, 
            ${outset(1)} ${color('blue.35', 0.5)};
        }

        &:active {
          background-color: ${color('blue.65')};
          box-shadow: 0 0.125rem 0 ${color('blue.45')}, 
            ${outset(1)} ${color('blue.40', 0.5)};
        }
      }

      &.purple {
        background-color: ${color('purple.70')};
        box-shadow: 0 ${rpx(1)} 0 ${color('purple.50')}, 
          ${outset(1)} ${color('purple.40', 0.5)};

        &:hover {
          background-color: ${color('purple.75')};
          box-shadow: 0 0.125rem 0 ${color('purple.50')}, 
            ${outset(1)} ${color('purple.40', 0.5)};
        }

        &:active {
          background-color: ${color('purple.80')};
          box-shadow: 0 0.125rem 0 ${color('purple.60')}, 
            ${outset(1)} ${color('purple.40', 0.5)};
        }
      }

      &.green {
        background-color: ${color('green.70')};
        box-shadow: 0 ${rpx(1)} 0 ${color('green.50')}, 
          ${outset(1)} ${color('green.40', 0.5)};

        &:hover {
          background-color: ${color('green.75')};
          box-shadow: 0 0.125rem 0 ${color('green.50')}, 
            ${outset(1)} ${color('green.40', 0.5)};
        }

        &:active {
          background-color: ${color('green.80')};
          box-shadow: 0 0.125rem 0 ${color('green.60')}, 
            ${outset(1)} ${color('green.40', 0.5)};
        }
      }

      &.yellow {
        background-color: ${color('yellow')};
        box-shadow: 0 ${rpx(1)} 0 ${color('yellow.60')}, 
          ${outset(1)} ${color('yellow.45', 0.5)};

        &:hover {
          background-color: ${color('yellow.85')};
          box-shadow: 0 0.125rem 0 ${color('yellow.60')}, 
            ${outset(1)} ${color('yellow.45', 0.5)};
        }

        &:active {
          background-color: ${color('yellow.90')};
          box-shadow: 0 0.125rem 0 ${color('yellow.70')}, 
            ${outset(1)} ${color('yellow.45', 0.5)};
        }
      }

      &.orange {
        background-color: ${color('orange.70')};
        box-shadow: 0 ${rpx(1)} 0 ${color('orange.50')}, 
          ${outset(1)} ${color('orange.40', 0.5)};

        &:hover {
          background-color: ${color('orange.75')};
          box-shadow: 0 0.125rem 0 ${color('orange.50')}, 
            ${outset(1)} ${color('orange.40', 0.5)};
        }

        &:active {
          background-color: ${color('orange.80')};
          box-shadow: 0 0.125rem 0 ${color('orange.60')}, 
            ${outset(1)} ${color('orange.40', 0.5)};
        }
      }

      &.red {
        color: ${color('white')};
        background-color: ${color('red.55')};
        box-shadow: 0 ${rpx(1)} 0 ${color('red.35')}, 
          ${outset(1)} ${color('red.30', 0.5)};

        &:hover {
          background-color: ${color('red.60')};
          box-shadow: 0 0.125rem 0 ${color('red.40')}, 
            ${outset(1)} ${color('red.35', 0.5)};
        }

        &:active {
          background-color: ${color('red.65')};
          box-shadow: 0 0.125rem 0 ${color('red.45')}, 
            ${outset(1)} ${color('red.40', 0.5)};
        }
      }

      &.gray {
        background-color: ${color('gray.75')};
        box-shadow: 0 ${rpx(1)} 0 ${color('gray.55')}, 
          ${outset(1)} ${color('gray.45', 0.5)};

        &:hover {
          background-color: ${color('gray.80')};
          box-shadow: 0 0.125rem 0 ${color('gray.55')}, 
            ${outset(1)} ${color('gray.45', 0.5)};
        }

        &:active {
          background-color: ${color('gray.85')};
          box-shadow: 0 0.125rem 0 ${color('gray.65')}, 
            ${outset(1)} ${color('gray.45', 0.5)};
        }
      }

      &.disabled,
      &.disabled:hover,
      &.disabled:active,
      &:disabled,
      &:disabled:hover,
      &:disabled:active {
        cursor: not-allowed;
        background-color: ${color('gray.80')};
        box-shadow: 0 0.125rem 0 ${color('gray.60')}, 
          ${outset(1)} ${color('gray.40', 0.5)};
      }

      + a.button,
      + button:not(.link),
      + input[type="button"],
      + input[type="submit"],
      + input[type="reset"] {
        margin-left: 0.5rem;
      }
    }
  }
`;
