// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

// styles

export const TypeListStyles = createGlobalStyle`
  .Type {
    li {
      position: relative;

      &::before {
        display: inline-block;
        position: absolute;
      }

      ul, ol {
        margin-bottom: 0;
      }

      > p {
        margin-bottom: 0.5rem;
      }

      > img,
      > picture,
      > svg,
      > audio,
      > video,
      > canvas,
      > object,
      > embed {
        display: block;
        height: auto;
        max-width: 100%;
        margin: 0 auto 0.5rem;
      }
    }

    ul,
    ol {
      list-style: none;
      padding-left: 2rem;
      margin: 0 0 1.5rem;
      font-size: 1.125rem;
    }

    ul {
      > li::before {
        content: '';
        background-color: var(--blue);
        border-radius: 100rem;
        height: 0.375rem;
        width: 0.375rem;
        left: -1rem;
        top: 0.75rem;
      }
    }

    ol {
      counter-reset: li;

      > li::before {
        content: counter(li) '.';
        counter-increment: li;
        color: var(--blue);
        font-size: 0.75rem;
        font-weight: 500;
        font-style: italic;
        text-align: right;
        width: 1.5rem;
        left: -2rem;
        top: 0;
      }
    }

    dl {
      position: relative;
      margin-bottom: 1.5rem;
    }

    dt {
      font-weight: 600;

      &::after {
        content: ':';
      }
    }

    dd {
      margin: 0 0 0 1.5rem;

      + dt {
        margin-top: 1rem;
      }
    }
  }
`;
