// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

// styles

// INFO: https://github.com/csstools/normalize.css => v11.0.1+ evergreen.css
export const Normalize = createGlobalStyle`
:where(html) {
  line-height: 1.15;
}

:where(h1) {
  font-size: 2em;
  margin-block-end: 0.67em;
  margin-block-start: 0.67em;
}

:where(dl :is(dl, ol, ul), :is(ol, ul) dl) {
  margin-block-end: 0;
  margin-block-start: 0;
}

:where(hr) {
  box-sizing: content-box;
  color: inherit;
  height: 0;
}

:where(pre) {
  font-family: monospace, monospace;
  font-size: 1em;
}

:where(abbr[title]) {
  text-decoration: underline;
  text-decoration: underline dotted;
}

:where(b, strong) {
  font-weight: bolder;
}

:where(code, kbd, samp) {
  font-family: monospace, monospace;
  font-size: 1em;
}

:where(small) {
  font-size: 80%;
}

:where(audio:not([controls])) {
  display: none;
  height: 0;
}

:where(table) {
  border-color: inherit;
  text-indent: 0;
}

:where(button, input, select) {
  margin: 0;
}

:where(button) {
  text-transform: none;
}

:where(button, input:is([type="button" i], [type="reset" i], [type="submit" i])) {
 -webkit-appearance: button;
}

:where(progress) {
  vertical-align: baseline;
}

:where(select) {
  text-transform: none;
}

:where(textarea) {
  margin: 0;
}

:where(input[type="search" i]) {
 -webkit-appearance: textfield;
  outline-offset: -2px;
}

:where(input::-webkit-inner-spin-button, input::-webkit-outer-spin-button) {
  height: auto;
}

:where(input::-webkit-input-placeholder) {
  color: inherit;
  opacity: 0.54;
}

:where(input[type="search" i]::-webkit-search-decoration) {
 -webkit-appearance: none;
}

:where(input[type="file" i]::-webkit-file-upload-button) {
 -webkit-appearance: button;
  font: inherit;
}

:where(:is(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focus-inner) {
  border-style: none;
  padding: 0;
}

:where(:is(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i])):-moz-focusring) {
  outline: 1px dotted ButtonText;
}

:where(:-moz-ui-invalid) {
  box-shadow: none;
}

:where(dialog) {
  background-color: white;
  border: solid;
  color: black;
  height: -moz-fit-content;
  height: -webkit-fit-content;
  height: fit-content;
  left: 0;
  margin: auto;
  padding: 1em;
  position: absolute;
  right: 0;
  width: -moz-fit-content;
  width: -webkit-fit-content;
  width: fit-content;
}

:where(dialog:not([open])) {
  display: none;
}

:where(summary) {
  display: list-item;
}
`;
