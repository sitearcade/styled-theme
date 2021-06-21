// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

// styles

export const TypeHeadingStyles = createGlobalStyle`
  :where(.Type) {
    :where(h1, h2, h3, h4, h5, h6) {
      font-family: var(--font-head);
      letter-spacing: 0;
    }

    :where(h1) {
      margin: 0;
      font-size: 3rem;
      line-height: 3.5rem;
      font-weight: 400;
    }

    :where(h2, h3) {
      margin: 3rem 5% 0.5rem 0;
      font-weight: 600;
    }

    :where(h2) {
      font-size: 2.5rem;
      line-height: 3rem;
    }

    :where(h3) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    :where(h4, h5) {
      margin: 3rem 5% 0.5rem 0;
      font-weight: 700;
    }

    :where(h4) {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    :where(h5) {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    :where(h6) {
      margin: 2rem 10%;
      font-size: 1.375rem;
      line-height: 1.5rem;
      font-weight: 800;
      font-style: italic;
      text-align: center;
    }

    :where(h1, h2, h3, h4) {
      + :where(h1, h2, h3, h4) {
        margin-top: 1rem;
      }
    }
  }
`;
