// import

import {createGlobalStyle} from 'styled-components';

// export

export const TypeInlineStyles = createGlobalStyle`
  .Type {
    span {
      display: inline;
    }

    em,
    i,
    cite,
    dfn {
      font-style: italic;
    }

    strong,
    b {
      font-weight: 500;
    }

    .underline {
      text-decoration: underline;
    }

    u {
      text-decoration: var(--blue) wavy underline;
      text-decoration-skip-ink: none;
    }

    ins {
      color: var(--green-50);
      text-decoration: dashed underline;
    }

    del {
      color: var(--red-50);
      text-decoration: line-through;
    }

    mark {
      background-color: var(--yellow-85);
      padding: 0 0.25rem;
      border-radius: 0.125rem;
    }

    s {
      text-decoration: line-through;
    }

    sub,
    sup {
      font-size: 0.75em;
      padding: 0 0.125rem;
      line-height: 0;
      bottom: 0;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    small {
      font-size: 1rem;
    }

    time,
    abbr {
      text-decoration: dotted underline;
    }

    q {
      q {
        margin-left: 0.125rem;
        margin-right: 0.125rem;
      }
    }
  }
`;
