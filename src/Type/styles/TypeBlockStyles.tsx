// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

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
      padding: 1rem 1.25rem;
      border-left-width: 0.5rem;
      border-left-style: solid;
      border-radius: 0.125rem 0.375rem 0.375rem 0.125rem;

      &.bonus {
        background-color: rgba(var(--rgb-green), 0.5);
        border-left-color: rgba(var(--rgb-green), 1);
      }

      &.info {
        background-color: rgba(var(--rgb-blue), 0.5);
        border-left-color: rgba(var(--rgb-blue), 1);
      }

      &.warning {
        background-color: rgba(var(--rgb-yellow), 0.5);
        border-left-color: rgba(var(--rgb-yellow), 1);
      }

      &.error {
        background-color: rgba(var(--rgb-red), 0.5);
        border-left-color: rgba(var(--rgb-red), 1);
      }
    }
  }
`;
