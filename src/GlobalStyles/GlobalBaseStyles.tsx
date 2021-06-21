// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

// component

export const GlobalBaseStyles = createGlobalStyle`
  :where(*, *::before, *::after) {
    box-sizing: border-box;
  }

  :where(*:focus) {
    outline: none;
  }

  :where(html) {
    width: 100%;
    min-height: 100%;
    position: relative;
  }

  :where(body) {
    width: 100%;
    height: 100%;
    overscroll-behavior: none;
    overflow-x: hidden;
    margin: 0;
  }

  :where(a, button) {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  /* styles */

  :where(html) {
    font-size: var(--baseline);
  }

  :where(body) {
    font-family: var(--font-body);
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: calc(var(--rpx) / -2); 
    font-weight: 300;
    background: var(--white);
    color: var(--black);
  }

  @media (min-width: 18em) {} // xxs
  @media (min-width: 27em) {} // xs
  @media (min-width: 36em) {} // s
  @media (min-width: 45em) {} // sm
  @media (min-width: 54em) {} // m
  @media (min-width: 63em) {} // ml
  @media (min-width: 72em) {} // l
  @media (min-width: 81em) {} // xl
  @media (min-width: 90em) {} // xxl

  @media (max-width: 17.99875em) {} // xxs
  @media (max-width: 26.99875em) {} // xs
  @media (max-width: 35.99875em) {} // s
  @media (max-width: 44.99875em) {} // sm
  @media (max-width: 53.99875em) {} // m
  @media (max-width: 62.99875em) {} // ml
  @media (max-width: 71.99875em) {} // l
  @media (max-width: 80.99875em) {} // xl
  @media (max-width: 89.99875em) {} // xxl
`;
