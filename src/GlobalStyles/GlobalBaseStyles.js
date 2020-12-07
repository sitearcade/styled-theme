// import

import {createGlobalStyle} from 'styled-components';

import {color, fontFam, get, rpx} from '../api';

import {Normalize} from './Normalize';

// component

export function GlobalBaseStyles() {
  return (
    <>
      <Normalize />
      <BasicStyles />
    </>
  );
}

// styles

const BasicStyles = createGlobalStyle`
  /* normalize */
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
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
    font-size: ${get('baseline')}px;
  }

  body {
    color: ${color('black')};
    background-color: ${color('white')};
    font-family: ${fontFam('body')};
    font-size: 1.33333rem;
    line-height: 2rem;
    letter-spacing: ${rpx(-0.25)}; 
    font-weight: 300;
  }
`;
