// import

import {createGlobalStyle} from 'styled-components';

// export

export const TypeLinkStyles = createGlobalStyle`
  .Type {
    button.link {
      appearance: none;
      background: none;
      display: inline;

      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 0;

      color: inherit;
      font: inherit;
      text-align: inherit;
      line-height: inherit; 

      width: auto;
      height: 1.75rem;
      overflow: visible;
      cursor: pointer;

      font-family: var(--font-body);
      font-weight: 300;
      letter-spacing: calc(var(--rpx) / -4); 

      &::-webkit-butt

      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
    }

    a:not(.button):not(.anchor):not(.bare):not([name]) {
      /* no link */
      &:not([href]) {}

      /* interal */
      &[href^="/"] {}

      /* anchor */
      &[href^="#"] {
        &::after {
          content: '';
          background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14'%3E%3C/path%3E%3C/svg%3E");
        }
      }

      /* external */
      &[href^="http"]:not([href*="sitearcade.com"]) {
        &::after {
          content: '';
          background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'%3E%3C/path%3E%3C/svg%3E");
        }
      }

      /* mailto */
      &[href^="mailto:"] {
        &::after {
          content: '';
          background-image: url("data:image/svg+xml,%3Csvg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'%3E%3C/path%3E%3C/svg%3E");
        }
      }
    }

    button.link:not(.unstyled):not([name]),
    a:not(.button):not(.unstyled):not([name]) {
      cursor: pointer;
      padding: 0 0.125rem;
      background-image: linear-gradient(
        to right, 
        var(--yellow) 0%, 
        var(--orange) 33%, 
        var(--red) 100%
      );
      background-position: right bottom;
      background-repeat: no-repeat;
      background-size: 100% 0.125rem;
      transition: background 0.1s ease-in;

      &.blue {
        background-image: linear-gradient(
          to right, 
          var(--blue-80) 0%, 
          var(--blue-70) 25%, 
          var(--blue-50) 100%
        );
      }

      &.purple {
        background-image: linear-gradient(
          to right, 
          var(--purple-80) 0%, 
          var(--purple-70) 25%, 
          var(--purple-40) 100%
        );
      }

      &.green {
        background-image: linear-gradient(
          to right, 
          var(--green-80) 0%, 
          var(--green-70) 25%, 
          var(--green-40) 100%
        );
      }

      &.yellow {
        background-image: linear-gradient(
          to right, 
          var(--yellow-80) 0%, 
          var(--yellow-70) 25%, 
          var(--yellow-50) 100%
        );
      }

      &.orange {
        background-image: linear-gradient(
          to right, 
          var(--orange-80) 0%, 
          var(--orange-70) 25%, 
          var(--orange-45) 100%
        );
      }

      &.red {
        background-image: linear-gradient(
          to right, 
          var(--red-75) 0%, 
          var(--red-65) 25%, 
          var(--red-35) 100%
        );
      }

      &::after {
        position: relative;
        top: 0em;
        display: inline-block;
        width: 0.75em;
        height: 0.75em;
        background-position: 0 100%;
        background-size: 0.75em 0.75em;
        background-repeat: no-repeat;
        margin-left: 0.125rem;
      }

      &.hover,
      &:hover {
        background-size: 100% 0.25rem;
      }

      &.active,
      &:active {
        background-size: 0 0.5rem;
      }

      &.disabled,
      &:disabled {
        cursor: not-allowed;
        color: var(--gray-60);
        background: linear-gradient(to bottom, var(--gray-60) 0%, var(--gray-60) 100%);
        background-position: left bottom;
        background-repeat: no-repeat;
        background-size: 100% var(--rpx);
      }

      &.disabled {
        pointer-events: none;
      }
    }

    /* nav anchors */
    a.anchor:not([name]):link {
      background-size: 100% 0;
    }

    /* anchor targets */
    h1, h2, h3, h4, h5, h6,
    a[name]:target {
      &::before {
        content: '';
        display: block;
        pointer-events: none;
        height: var(--layout-headerHeight);
        margin: calc(var(--layout-headerHeight) * -1) 0 0;
        width: 1px;
      }
    }
  }
`;
