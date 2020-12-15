// import

import {createGlobalStyle} from 'styled-components';

import {fontFam, color, rpx} from '../../api';

// styles

export const TypeBlockStyles = createGlobalStyle`
  .Type {
    & div,
    & nav,
    & header,
    & footer,
    & main,
    & aside,
    & article,
    & section {
      margin: 0;
    }

    & p,
    & address {
      margin: 0 0 1.5rem;
      overflow-wrap: break-word;
      word-wrap: break-word;
      hyphens: auto;
    }

    & address {
      display: block;
      font-style: normal;
    }

    & blockquote {
      margin: 3rem 1.5rem 3rem 4.5rem;
      position: relative;

      &::before {
        color: ${color('pacific')};
        content: '“';
        font-family: ${fontFam('serif')};
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

      & cite:last-child {
        &::before {
          content: '— ';
          color: ${color('pacific')};
        }
      }
    }

    & details {
      display: block;
      margin: 0 0 1.5rem;
      border-top: 0.125rem dashed ${color('pacific')};
      border-bottom: 0.125rem dashed ${color('pacific')};

      & :nth-child(2) {
        margin-top: 0;
      }

      & :last-child {
        margin-bottom: 0;
      }
    }

    & summary {
      cursor: pointer;
      font-weight: 500;
    }

    & hr {
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
        background: linear-gradient(90deg, transparent, ${color('gray.70')}, transparent);
        content: '';
        height: ${rpx(2)};
        left: 0;
        position: absolute;
        top: calc(50% - ${rpx(1)});
        width: 100%;
      }
    }
  }
`;