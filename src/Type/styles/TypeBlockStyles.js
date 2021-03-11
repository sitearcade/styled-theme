// import

import {createGlobalStyle} from 'styled-components';

// styles

export const TypeBlockStyles = createGlobalStyle`
  .Type {
    main {
      display: block;
    }

    p,
    address {
      margin: 0 0 1.5rem;
      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
    }

    address {
      display: block;
      font-style: normal;
    }

    blockquote {
      margin: 3rem 1.5rem 3rem 4.5rem;
      position: relative;

      &::before {
        color: var(--blue);
        content: '“';
        font-family: var(--font-serif);
        font-size: 7rem;
        left: -3.5rem;
        line-height: 0;
        position: absolute;
        top: 2rem;
      }

      blockquote {
        margin: 1.5rem 0 1rem 2rem;
      }

      p {
        margin-bottom: 1rem;

        &:last-of-type {
          margin-bottom: 0;
        }
      }

      cite:last-child {
        &::before {
          content: '— ';
          color: var(--blue);
        }
      }
    }

    details {
      display: block;
      margin: 0 0 1.5rem;
      border-top: 0.125rem dashed var(--blue);
      border-bottom: 0.125rem dashed var(--blue);

      :nth-child(2) {
        margin-top: 0;
      }

      :last-child {
        margin-bottom: 0;
      }
    }

    summary {
      cursor: pointer;
      font-weight: 500;
    }

    hr {
      border: 0;
      height: 0.75rem;
      line-height: 0.75rem;
      margin: 3rem auto;
      max-width: 100%;
      min-width: 18rem;
      outline: 0;
      position: relative;
      text-align: center;
      width: 50%;

      &::before {
        background: linear-gradient(90deg, transparent, var(--gray-70), transparent);
        content: '';
        height: var(--rpx);
        left: 0;
        position: absolute;
        top: calc(50% - var(--rpx));
        width: 100%;
      }
    }

    p.hint {
      padding: 0.5rem 0.5rem;
      font-size: 1.25rem;
      line-height: 1.75rem;
      border-left-width: 0.5rem;
      border-left-style: solid;
      border-radius: 0.125rem 0.375rem 0.375rem 0.125rem;

      &.bonus {
        background-color: var(--green-85);
        border-left-color: var(--green-60);
        box-shadow: 
          0 0 0.125rem rgba(var(--rgb-green), 0.25),
          0 0 0.125rem var(--black-25);
      }

      &.info {
        background-color: var(--blue-90);
        border-left-color: var(--blue-60);
        box-shadow: 
          0 0 0.125rem rgba(var(--rgb-blue), 0.25),
          0 0 0.125rem var(--black-25);
      }

      &.warning {
        background-color: var(--yellow-100);
        border-left-color: var(--yellow-65);
        box-shadow: 
          0 0 0.125rem rgba(var(--rgb-yellow), 0.25),
          0 0 0.125rem var(--black-25);
      }

      &.error {
        background-color: var(--red-90);
        border-left-color: var(--red-60);
        box-shadow: 
          0 0 0.125rem rgba(var(--rgb-red), 0.25),
          0 0 0.125rem var(--black-25);
      }
    }
  }
`;
