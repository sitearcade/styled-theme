// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

// export

export const TypeLinkStyles = createGlobalStyle`
  .Type {
    a:not(.button):not(.unstyled):not([name]):not([id]) {
      cursor: pointer;
      transition: color 100ms ease-in-out;

      text-decoration: underline var(--blue);
      .hover, &:hover { color: var(--blue); }

      &.red {
        text-decoration: underline var(--red);
        .hover, &:hover { color: var(--red); }
      }

      &.orange {
        text-decoration: underline var(--orange);
        .hover, &:hover { color: var(--orange); }
      }

      &.yellow {
        text-decoration: underline var(--yellow);
        .hover, &:hover { color: var(--yellow); }
      }

      &.green {
        text-decoration: underline var(--green);
        .hover, &:hover { color: var(--green); }
      }

      &.blue {
        text-decoration: underline var(--blue);
        .hover, &:hover { color: var(--blue); }
      }

      &.purple {
        text-decoration: underline var(--purple);
        .hover, &:hover { color: var(--purple); }
      }

      &.gray {
        text-decoration: underline var(--gray-50);
        .hover, &:hover { color: var(--gray-50); }
      }

      &.disabled,
      &:disabled {
        cursor: not-allowed;
        pointer-events: none;
        color: var(--gray-50);
        text-decoration: underline var(--gray-50);
      }
      
      &[href^="#"] { text-decoration: none; }
      &.anchor:hover { color: inherit; }
    }

    a.icon {
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

    /* anchors */

    h1, h2, h3, h4, h5, h6,
    a[id], a[name] {
      --offset: calc(var(--layout-header-height) + 1.5rem);

      &::before {
        content: '';
        display: block;
        pointer-events: none;
        height: var(--offset);
        margin: calc(var(--offset) * -1) 0 0;
        width: 1px;
      }
    }
  }
`;
