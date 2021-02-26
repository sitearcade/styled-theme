// import

import {createGlobalStyle} from 'styled-components';

// export

export const TypeFormStyles = createGlobalStyle`
  .Type {
    form {
      display: block;
      margin: 0;
    }

    fieldset {
      border-radius: 0.25rem;
      margin: 0 0 1.5rem;
      border: 1px solid var(--gray-50);
      padding: 0.25rem 1rem 1rem;

      > :last-child {
        margin-bottom: 0;
      }
    }

    legend {
      padding: 0 0.25rem;
    }

    .required {
      color: var(--red);
    }

    label:not(.option) {
      display: block;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }

    label.option {
      display: block;
      font-size: 1.25rem;
      line-height: 2rem;
      margin-top: 0;
      font-weight: 300;
    }

    .input,
    input,
    textarea,
    select {
      color-adjust: exact;
      border-radius: 0.125rem;
    }

    .input,
    input:not([type]),
    input[type="text"],
    input[type="password"],
    input[type="url"],
    input[type="email"],
    input[type="tel"],
    input[type="number"],
    input[type="color"],
    input[type="file"],
    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"],
    input[type="week"],
    input[type="search"],
    textarea,
    select {
      appearance: none;
      background-color: var(--white);
      border: var(--rpx) solid var(--gray-60);
      display: block;
      color: var(--black);
      font-family: var(--font-body);
      letter-spacing: calc(var(--rpx) / -4); 
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
      height: 2.5rem;
      margin: 0 0 1rem;
      padding: 0.5rem 0.75rem;
      width: 100%;
      transition: box-shadow 0.1s linear, border-color 0.1s linear;

      &::placeholder {
        color: var(--gray-50);
      }

      &:hover {
        box-shadow: 0 0 var(--fx-blur) var(--black-30);
      }

      &:focus {
        background-color: var(--white);
        border-color: var(--gray-50);
        box-shadow: 0 0 var(--fx-blur) var(--black-70);
      }

      &.disabled,
      &:disabled {
        background-color: var(--gray-80);
        cursor: not-allowed;
      }

      &.invalid {
        border-color: var(--red);

        &:hover {
          box-shadow: 0 0 var(--fx-blur) var(--red-70);
        }

        &:focus {
          border-color: var(--red-50);
          box-shadow: 0 0 var(--fx-blur) var(--red-50);
        }
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        /* stylelint-disable property-no-vendor-prefix */
        -webkit-box-shadow: 0 0 0 100rem var(--white) inset;

        &.disabled,
        &:disabled {
          -webkit-box-shadow: 0 0 0 100rem var(--gray-80) inset;
        }
      }
    }

    input[type="search"] {
      border-radius: 100rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }

    input[type="file"] {
      padding: 0.25rem;

      &::-webkit-file-upload-button {
        letter-spacing: calc(var(--rpx) / -4); 
      }
    }

    input[type="color"] {
      padding: 0.25rem;

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      &::-webkit-color-swatch {
        border: none;
        border-radius: 0.125rem;
      }
    }

    input[type="range"] {
      display: block;
      width: 100%;
      height: 2.5rem;
      margin: 0 0 1.5rem;
    }

    textarea {
      resize: vertical;
      min-height: 5rem;
    }

    input[type='checkbox'],
    input[type='radio'] {
      display: inline-block;
    }

    .select {
      position: relative;

      select {
        padding-right: 1.75rem;
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        width: 0.75rem;
        height: 1.25rem;
        right: 0.5rem;
        top: 0.625rem;
        clip-path: polygon(50% 0, 100% 40%, 50% 40%, 50% 60%, 100% 60%, 50% 100%, 0 60%, 50% 60%, 50% 40%, 0 40%);
        background-color: var(--gray-30);
      }
    }
  }
`;
