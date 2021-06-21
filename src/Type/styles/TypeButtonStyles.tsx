// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

// export

export const TypeButtonStyles = createGlobalStyle`
  .Type {
    button.unstyled {
      appearance: none;
    }

    a.button,
    button:not(.unstyled),
    input[type="button"],
    input[type="submit"],
    input[type="reset"] {
      appearance: none;
      align-items: flex-start;
      display: inline-block;
      font-family: var(--font-body);
      font-weight: 400;
      letter-spacing: calc(var(--rpx) / -4); 
      line-height: 2rem;
      padding: 0.25rem 1rem;
      border-radius: 0.25rem;
      border: none;
      cursor: pointer;
      user-select: none;
      font-size: 1rem;
      transition: box-shadow 0.1s linear, background-color 0.1s linear;
      color: var(--black);

      background-color: var(--blue-75);
      box-shadow: 0 0.125rem 0.125rem var(--blue-50);

      &:hover {
        background-color: var(--blue-80);
        box-shadow: 0 0.125rem 0.125rem var(--blue-50);
      }

      &:active {
        background-color: var(--blue-80);
        box-shadow: 0 var(--rpx) var(--rpx) var(--blue-60);
      }

      &.blue {
        background-color: var(--blue-75);
        box-shadow: 0 0.125rem 0.125rem var(--blue-50);

        &:hover {
          background-color: var(--blue-80);
          box-shadow: 0 0.125rem 0.125rem var(--blue-50);
        }

        &:active {
          background-color: var(--blue-80);
          box-shadow: 0 var(--rpx) var(--rpx) var(--blue-60);
        }
      }

      &.purple {
        background-color: var(--purple-70);
        box-shadow: 0 0.125rem 0.125rem var(--purple-50);

        &:hover {
          background-color: var(--purple-75);
          box-shadow: 0 0.125rem 0.125rem var(--purple-50);
        }

        &:active {
          background-color: var(--purple-75);
          box-shadow: 0 var(--rpx) var(--rpx) var(--purple-60);
        }
      }

      &.green {
        background-color: var(--green-75);
        box-shadow: 0 0.125rem 0.125rem var(--green-50);

        &:hover {
          background-color: var(--green-80);
          box-shadow: 0 0.125rem 0.125rem var(--green-50);
        }

        &:active {
          background-color: var(--green-80);
          box-shadow: 0 var(--rpx) var(--rpx) var(--green-60);
        }
      }

      &.yellow {
        background-color: var(--yellow-85);
        box-shadow: 0 0.125rem 0.125rem var(--yellow-65);

        &:hover {
          background-color: var(--yellow-100);
          box-shadow: 0 0.125rem 0.125rem var(--yellow-65);
        }

        &:active {
          background-color: var(--yellow-100);
          box-shadow: 0 var(--rpx) var(--rpx) var(--yellow-75);
        }
      }

      &.orange {
        background-color: var(--orange-80);
        box-shadow: 0 0.125rem 0.125rem var(--orange-60);

        &:hover {
          background-color: var(--orange-90);
          box-shadow: 0 0.125rem 0.125rem var(--orange-60);
        }

        &:active {
          background-color: var(--orange-90);
          box-shadow: 0 var(--rpx) var(--rpx) var(--orange-70);
        }
      }

      &.red {
        background-color: var(--red-70);
        box-shadow: 0 0.125rem 0.125rem var(--red-50);

        &:hover {
          background-color: var(--red-80);
          box-shadow: 0 0.125rem 0.125rem var(--red-50);
        }

        &:active {
          background-color: var(--red-80);
          box-shadow: 0 var(--rpx) var(--rpx) var(--red-60);
        }
      }

      &.gray {
        background-color: var(--gray-75);
        box-shadow: 0 0.125rem 0.125rem var(--gray-50);

        &:hover {
          background-color: var(--gray-80);
          box-shadow: 0 0.125rem 0.125rem var(--gray-50);
        }

        &:active {
          background-color: var(--gray-80);
          box-shadow: 0 var(--rpx) var(--rpx) var(--gray-60);
        }
      }

      &.disabled,
      &.disabled:hover,
      &.disabled:active,
      &:disabled,
      &:disabled:hover,
      &:disabled:active {
        cursor: not-allowed;
        color: var(--black-50);
        background-color: var(--gray-75);
        box-shadow: 0 0.125rem 0.125rem var(--gray-50);
      }

      + a.button,
      + button:not(.unstyled),
      + input[type="button"],
      + input[type="submit"],
      + input[type="reset"] {
        margin-left: 0.5rem;
      }
    }
  }
`;
