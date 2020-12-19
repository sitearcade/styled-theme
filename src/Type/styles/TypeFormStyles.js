// import

import {createGlobalStyle} from 'styled-components';

import {color, linear, fontFam, rpx, outset} from '../../api';

// export

export const TypeFormStyles = createGlobalStyle`
  .Type {
    & form {
      display: block;
      margin: 0;
    }

    & fieldset {
      border-radius: 0.25rem;
      margin: 0 0 1.5rem;
      border: 1px solid ${color('gray.50')};
      padding: 0.25rem 1rem 1rem;

      & > *:last-child {
        margin-bottom: 0;
      }
    }

    & legend {
      padding: 0 0.25rem;
    }

    & .required {
      color: ${color('burnout')};
    }

    & label:not(.option) {
      display: block;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }

    & label.option {
      display: block;
      font-size: 1.25rem;
      line-height: 2rem;
      margin-top: 0;
      font-weight: 300;
    }

    & .input,
    & input,
    & textarea,
    & select {
      color-adjust: exact;
      border-radius: 0.125rem;
    }

    & .input,
    & input:not([type]),
    & input[type="text"],
    & input[type="password"],
    & input[type="url"],
    & input[type="email"],
    & input[type="tel"],
    & input[type="number"],
    & input[type="color"],
    & input[type="file"],
    & input[type="date"],
    & input[type="time"],
    & input[type="datetime-local"],
    & input[type="month"],
    & input[type="week"],
    & input[type="search"],
    & textarea,
    & select {
      appearance: none;
      background-color: ${color('white')};
      border: ${rpx(1)} solid ${color('gray.60')};
      display: block;
      color: ${color('black')};
      font-family: ${fontFam('body')};
      letter-spacing: ${rpx(-0.25)}; 
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
      height: 2.5rem;
      margin: 0 0 1rem;
      padding: 0.5rem 0.75rem;
      width: 100%;
      transition: box-shadow ${linear(1)}, border-color ${linear(1)};

      &::placeholder {
        color: ${color('gray.50')};
      }

      &:hover {
        box-shadow: ${outset(1)} ${color('black', 0.333)};
      }

      &:focus {
        background-color: ${color('white')};
        border-color: ${color('gray.50')};
        box-shadow: ${outset(1)} ${color('black', 0.666)};
      }

      &:disabled {
        background-color: ${color('gray.80')};
        cursor: not-allowed;
      }

      &.invalid {
        border-color: ${color('burnout')};

        &:hover {
          box-shadow: ${outset(1)} ${color('burnout.70')};
        }

        &:focus {
          border-color: ${color('burnout.50')};
          box-shadow: ${outset(1)} ${color('burnout.50')};
        }
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        /* stylelint-disable property-no-vendor-prefix */
        -webkit-box-shadow: 0 0 0 ${rpx(100)} ${color('white')} inset;

        &:disabled {
          -webkit-box-shadow: 0 0 0 ${rpx(100)} ${color('gray.80')} inset;
        }
      }
    }

    & input[type="search"] {
      border-radius: 100rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    & input[type="file"] {
      padding: 0.25rem;

      &::-webkit-file-upload-button {
        letter-spacing: ${rpx(-0.25)}; 
      }
    }

    & input[type="color"] {
      padding: 0.25rem;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: none;
        border-radius: 0.125rem;
      }
    }

    & input[type="range"] {
      display: block;
      width: 100%;
      height: 2.5rem;
      margin: 0 0 1.5rem;
    }

    & textarea {
      resize: vertical;
      min-height: 5rem;
    }

    & input[type='checkbox'],
    & input[type='radio'] {
      display: inline-block;
    }
  }
`;
