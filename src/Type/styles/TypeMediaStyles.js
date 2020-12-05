// import

import {createGlobalStyle} from 'styled-components';

import {color, outset} from '../../api';

// export

export const TypeMediaStyles = createGlobalStyle`
  .Type {
    & img,
    & picture,
    & svg,
    & audio,
    & video,
    & canvas,
    & object,
    & embed {
      display: block;
      height: auto;
      margin: 0 0 1.5rem;
      max-width: 100%;
    }

    & p {
      & img,
      & picture,
      & svg {
        display: inline-block;
      }
    }

    & img {
      border-radius: 0.25rem;
    }

    & picture {
      border-radius: 0.25rem;
      overflow: hidden;

      & img {
        margin: 0;
      }
    }

    & audio::-webkit-media-controls-panel, 
    & video::-webkit-media-controls-panel {
      background-color: ${color('gray.70')};
    }

    & audio {
      height: 2rem;
      width: 100%;
    }

    & video {
      width: 100%;
    }

    & .remark-oembed-inline {
      position: relative;
      padding-bottom: 67.5%;
      margin-bottom: 1.5rem;
      overflow: hidden;
      height: 0;

      & iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    & figure {
      display: block;
      margin: 0 0 1.5rem;
      max-width: 100%;
      border-radius: 0.125rem;
      overflow: scroll hidden;
      background-color: ${color('white')};
      box-shadow: ${outset(1)} ${color('gray.60')};

      & > *:first-child {
        margin-bottom: 0;
        border-radius: 0;
      }
    }

    & figcaption {
      display: block;
      color: ${color('gray.50')};
      padding: 0 0.5rem;
      font-size: 0.875rem;
      line-height: 2rem;
      font-style: italic;
      padding-bottom: 0;
      text-align: center;
    }
  }
`;
