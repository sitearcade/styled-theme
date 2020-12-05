// import

import {createGlobalStyle} from 'styled-components';

import {color, linear, fontFam, rpx, outset} from '../../api';

// export

export const TypeButtonStyles = createGlobalStyle`
  .Type {
    & a.button,
    & button:not(.link),
    & input[type="button"],
    & input[type="submit"],
    & input[type="reset"] {
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
      background-color: ${color('pacific.70')};
      box-shadow: 0 ${rpx(1)} 0 ${color('pacific.50')}, 
        ${outset(1)} ${color('pacific.40', 0.5)};

      &:hover {
        background-color: ${color('pacific.75')};
        box-shadow: 0 0.125rem 0 ${color('pacific.50')}, 
          ${outset(1)} ${color('pacific.40', 0.5)};
      }

      &:active {
        background-color: ${color('pacific.80')};
        box-shadow: 0 0.125rem 0 ${color('pacific.60')}, 
          ${outset(1)} ${color('pacific.40', 0.5)};
      }

      &.teal {
        color: ${color('white')};
        background-color: ${color('pacific')};
        box-shadow: 0 ${rpx(1)} 0 ${color('pacific.35')}, 
          ${outset(1)} ${color('pacific.30', 0.5)};

        &:hover {
          background-color: ${color('pacific.57')};
          box-shadow: 0 0.125rem 0 ${color('pacific.40')}, 
            ${outset(1)} ${color('pacific.35', 0.5)};
        }

        &:active {
          background-color: ${color('pacific.65')};
          box-shadow: 0 0.125rem 0 ${color('pacific.45')}, 
            ${outset(1)} ${color('pacific.40', 0.5)};
        }
      }

      &.blue {
        background-color: ${color('prussia.70')};
        box-shadow: 0 ${rpx(1)} 0 ${color('prussia.50')}, 
          ${outset(1)} ${color('prussia.40', 0.5)};

        &:hover {
          background-color: ${color('prussia.75')};
          box-shadow: 0 0.125rem 0 ${color('prussia.50')}, 
            ${outset(1)} ${color('prussia.40', 0.5)};
        }

        &:active {
          background-color: ${color('prussia.80')};
          box-shadow: 0 0.125rem 0 ${color('prussia.60')}, 
            ${outset(1)} ${color('prussia.40', 0.5)};
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
        background-color: ${color('maizola')};
        box-shadow: 0 ${rpx(1)} 0 ${color('maizola.60')}, 
          ${outset(1)} ${color('maizola.45', 0.5)};

        &:hover {
          background-color: ${color('maizola.85')};
          box-shadow: 0 0.125rem 0 ${color('maizola.60')}, 
            ${outset(1)} ${color('maizola.45', 0.5)};
        }

        &:active {
          background-color: ${color('maizola.90')};
          box-shadow: 0 0.125rem 0 ${color('maizola.70')}, 
            ${outset(1)} ${color('maizola.45', 0.5)};
        }
      }

      &.orange {
        background-color: ${color('harvest.70')};
        box-shadow: 0 ${rpx(1)} 0 ${color('harvest.50')}, 
          ${outset(1)} ${color('harvest.40', 0.5)};

        &:hover {
          background-color: ${color('harvest.75')};
          box-shadow: 0 0.125rem 0 ${color('harvest.50')}, 
            ${outset(1)} ${color('harvest.40', 0.5)};
        }

        &:active {
          background-color: ${color('harvest.80')};
          box-shadow: 0 0.125rem 0 ${color('harvest.60')}, 
            ${outset(1)} ${color('harvest.40', 0.5)};
        }
      }

      &.red {
        color: ${color('white')};
        background-color: ${color('burnout.55')};
        box-shadow: 0 ${rpx(1)} 0 ${color('burnout.35')}, 
          ${outset(1)} ${color('burnout.30', 0.5)};

        &:hover {
          background-color: ${color('burnout.60')};
          box-shadow: 0 0.125rem 0 ${color('burnout.40')}, 
            ${outset(1)} ${color('burnout.35', 0.5)};
        }

        &:active {
          background-color: ${color('burnout.65')};
          box-shadow: 0 0.125rem 0 ${color('burnout.45')}, 
            ${outset(1)} ${color('burnout.40', 0.5)};
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

      & + a.button,
      & + button:not(.link),
      & + input[type="button"],
      & + input[type="submit"],
      & + input[type="reset"] {
        margin-left: 0.5rem;
      }
    }
  }
`;
