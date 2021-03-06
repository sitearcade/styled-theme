// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

// export

export const TypeTableStyles = createGlobalStyle`
  .Type {
    table {
      font-size: 1rem;
      line-height: calc(2rem - var(--rpx));
      height: auto;
      margin: 0 0 1.5rem;
      width: 100%;
      overflow: hidden;
      border-collapse: collapse;
      z-index: 1;
    }

    td, th {
      padding: 0 0.5rem;
      border-right: var(--rpx) solid var(--gray-70);
      text-align: left;

      &[align="left"] {
        text-align: left;
      }

      &[align="center"] {
        text-align: center;
      }

      &[align="right"] {
        text-align: right;
      }

      &:last-child {
        border-right-width: 0;
      }
    }

    th {
      font-weight: 600;
    }

    thead {
      td, th {
        font-weight: 600;
        border-bottom: var(--rpx) solid var(--gray-40);
      }
    }

    tbody {
      td, th {
        border-bottom: var(--rpx) solid var(--gray-70);
      }

      tr:last-child td {
        border-bottom: var(--rpx) solid var(--gray-40);
      }
    }

    tfoot {
      td, th {
        font-weight: 300;
        border-bottom: var(--rpx) solid var(--gray-40);
      }
    }

    caption {
      caption-side: bottom;
      color: var(--gray-50);
      font-size: 0.875rem;
      line-height: 2rem;
      font-style: italic;
      padding-bottom: 0;
      text-align: center;
    }
  }
`;
