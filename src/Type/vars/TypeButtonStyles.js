// import

import {createGlobalStyle} from 'styled-components';

// export

export const TypeButtonStyles = createGlobalStyle`
  .Type {
    a.button,
    button:not(.link),
    input[type="button"],
    input[type="submit"],
    input[type="reset"] {
      appearance: none;
      align-items: flex-start;
      display: inline-block;
      font-family: var(--font-body);
      font-weight: 400;
      letter-spacing: calc(var(--rpx) / -4); 
      line-height: 2rem;
      padding: 0.25rem 1rem;
      border-radius: 0.25rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      transition: box-shadow 0.1s linear, background-color 0.1s linear;
      color: var(--black);
      background-color: var(--blue-70);
      box-shadow: 0 var(--rpx) 0 var(--blue-50), 
        0 0 var(--fx-blur) var(--blue-40); /* FIXME: Make alpha 0.5 */

      &:hover {
        background-color: var(--blue-75);
        box-shadow: 0 0.125rem 0 var(--blue-50), 
          0 0 var(--fx-blur) var(--blue-40); /* FIXME: Make alpha 0.5 */
      }

      &:active {
        background-color: var(--blue-80);
        box-shadow: 0 0.125rem 0 var(--blue-60), 
          0 0 var(--fx-blur) var(--blue-40); /* FIXME: Make alpha 0.5 */
      }

      &.blue {
        color: var(--white);
        background-color: var(--blue);
        box-shadow: 0 var(--rpx) 0 var(--blue-40), 
          0 0 var(--fx-blur) var(--blue-40); /* FIXME: Make alpha 0.5 */

        &:hover {
          background-color: var(--blue-60);
          box-shadow: 0 0.125rem 0 var(--blue-40), 
            0 0 var(--fx-blur) var(--blue-40); /* FIXME: Make alpha 0.5 */
        }

        &:active {
          background-color: var(--blue-70);
          box-shadow: 0 0.125rem 0 var(--blue-50), 
            0 0 var(--fx-blur) var(--blue-40); /* FIXME: Make alpha 0.5 */
        }
      }

      &.purple {
        background-color: var(--purple-70);
        box-shadow: 0 var(--rpx) 0 var(--purple-50), 
          0 0 var(--fx-blur) var(--purple-40); /* FIXME: Make alpha 0.5 */

        &:hover {
          background-color: var(--purple-75);
          box-shadow: 0 0.125rem 0 var(--purple-50), 
            0 0 var(--fx-blur) var(--purple-40); /* FIXME: Make alpha 0.5 */
        }

        &:active {
          background-color: var(--purple-80);
          box-shadow: 0 0.125rem 0 var(--purple-60), 
            0 0 var(--fx-blur) var(--purple-40); /* FIXME: Make alpha 0.5 */
        }
      }

      &.green {
        background-color: var(--green-70);
        box-shadow: 0 var(--rpx) 0 var(--green-50), 
          0 0 var(--fx-blur) var(--green-40); /* FIXME: Make alpha 0.5 */

        &:hover {
          background-color: var(--green-75);
          box-shadow: 0 0.125rem 0 var(--green-50), 
            0 0 var(--fx-blur) var(--green-40); /* FIXME: Make alpha 0.5 */
        }

        &:active {
          background-color: var(--green-80);
          box-shadow: 0 0.125rem 0 var(--green-60), 
            0 0 var(--fx-blur) var(--green-40); /* FIXME: Make alpha 0.5 */
        }
      }

      &.yellow {
        background-color: var(--yellow);
        box-shadow: 0 var(--rpx) 0 var(--yellow-60), 
          0 0 var(--fx-blur) var(--yellow-50); /* FIXME: Make alpha 0.5 */

        &:hover {
          background-color: var(--yellow-85);
          box-shadow: 0 0.125rem 0 var(--yellow-60), 
            0 0 var(--fx-blur) var(--yellow-50); /* FIXME: Make alpha 0.5 */
        }

        &:active {
          background-color: var(--yellow-90);
          box-shadow: 0 0.125rem 0 var(--yellow-70), 
            0 0 var(--fx-blur) var(--yellow-50); /* FIXME: Make alpha 0.5 */
        }
      }

      &.orange {
        background-color: var(--orange-70);
        box-shadow: 0 var(--rpx) 0 var(--orange-50), 
          0 0 var(--fx-blur) var(--orange-40); /* FIXME: Make alpha 0.5 */

        &:hover {
          background-color: var(--orange-75);
          box-shadow: 0 0.125rem 0 var(--orange-50), 
            0 0 var(--fx-blur) var(--orange-40); /* FIXME: Make alpha 0.5 */
        }

        &:active {
          background-color: var(--orange-80);
          box-shadow: 0 0.125rem 0 var(--orange-60), 
            0 0 var(--fx-blur) var(--orange-40); /* FIXME: Make alpha 0.5 */
        }
      }

      &.red {
        color: var(--white);
        background-color: var(--red-55);
        box-shadow: 0 var(--rpx) 0 var(--red-35), 
          0 0 var(--fx-blur) var(--red-40); /* FIXME: Make alpha 0.5 */

        &:hover {
          background-color: var(--red-60);
          box-shadow: 0 0.125rem 0 var(--red-40), 
            0 0 var(--fx-blur) var(--red-40); /* FIXME: Make alpha 0.5 */
        }

        &:active {
          background-color: var(--red-65);
          box-shadow: 0 0.125rem 0 var(--red-45), 
            0 0 var(--fx-blur) var(--red-40); /* FIXME: Make alpha 0.5 */
        }
      }

      &.gray {
        background-color: var(--gray-75);
        box-shadow: 0 var(--rpx) 0 var(--gray-55), 
          0 0 var(--fx-blur) var(--gray-40); /* FIXME: Make alpha 0.5 */

        &:hover {
          background-color: var(--gray-80);
          box-shadow: 0 0.125rem 0 var(--gray-55), 
            0 0 var(--fx-blur) var(--gray-40); /* FIXME: Make alpha 0.5 */
        }

        &:active {
          background-color: var(--gray-85);
          box-shadow: 0 0.125rem 0 var(--gray-65), 
            0 0 var(--fx-blur) var(--gray-40); /* FIXME: Make alpha 0.5 */
        }
      }

      &.disabled,
      &.disabled:hover,
      &.disabled:active,
      &:disabled,
      &:disabled:hover,
      &:disabled:active {
        cursor: not-allowed;
        background-color: var(--gray-80);
        box-shadow: 0 0.125rem 0 var(--gray-60), 
          0 0 var(--fx-blur) var(--gray-40); /* FIXME: Make alpha 0.5 */
      }

      + a.button,
      + button:not(.link),
      + input[type="button"],
      + input[type="submit"],
      + input[type="reset"] {
        margin-left: 0.5rem;
      }
    }
  }
`;
