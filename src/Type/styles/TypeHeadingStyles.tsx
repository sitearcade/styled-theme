// import

import {createGlobalStyle} from 'styled-components';

// styles

export const TypeHeadingStyles = createGlobalStyle`
  .Type {
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-head);
      letter-spacing: 0;
    }

    h1, h2 {
      margin: 3rem 5% 0.5rem 0;
      font-weight: 600;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
    }

    h2 {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }

    h3, h4 {
      margin: 3rem 5% 0.5rem 0;
      font-weight: 700;
    }

    h3 {
      font-size: 2rem;
      line-height: 2.5rem;
    }

    h4 {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    h5, h6 {
      font-weight: 800;
      font-style: italic;
      text-align: center;
    }

    h5 {
      margin: 2rem 10%;
      font-size: 1.33333rem;
      line-height: 1.5rem;
    }

    h6 {
      margin: 1.5rem 15%;
      font-size: 1rem;
      line-height: 1rem;
    }

    h1, h2, h3, h4 {
      + h1, + h2, + h3, + h4 {
        margin-top: 1rem;
      }
    }
  }
`;
