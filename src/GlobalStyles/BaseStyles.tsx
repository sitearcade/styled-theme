// import

import {createGlobalStyle} from 'styled-components';

// styles

export const BaseStyles = createGlobalStyle`
  /* normalize */
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html {
    width: 100%;
    min-height: 100%;
    position: relative;
  }

  body {
    width: 100%;
    height: 100%;
    overscroll-behavior: none;
    overflow-x: hidden;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  /* styles */

  html {
    font-size: var(--baseline);
  }

  body {
    color: var(--black);
    background-color: var(--white);
    font-family: var(--font-body);
    /* TODO: Why not 1.375rem? */
    font-size: 1.33333rem;
    line-height: 2rem;
    letter-spacing: calc(var(--rpx) / -4); 
    font-weight: 300;
  }
`;
