// import

import {createGlobalStyles as createGlobalStyle} from 'goober/global';

// styles

// INFO: https://github.com/csstools/normalize.css => v11.0.1+ evergreen.css
export const Normalize = createGlobalStyle`
/* Document
 * ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 */

:where(html) {
  line-height: 1.15; /* 1 */
}

/* Sections
 * ========================================================================== */

/**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Edge, Firefox, and Safari.
 */

:where(h1) {
  font-size: 2em;
  margin-block-end: 0.67em;
  margin-block-start: 0.67em;
}

/* Grouping content
 * ========================================================================== */

/**
 * Remove the margin on nested lists in Chrome, Edge, and Safari.
 */

:where(dl :is(dl, ol, ul), :is(ol, ul) dl) {
  margin-block-end: 0;
  margin-block-start: 0;
}

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Correct the inheritance of border color in Firefox.
 */

:where(hr) {
  box-sizing: content-box; /* 1 */
  color: inherit; /* 2 */
  height: 0; /* 1 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

:where(pre) {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
 * ========================================================================== */

/**
 * Add the correct text decoration in Safari.
 */

:where(abbr[title]) {
  text-decoration: underline;
  text-decoration: underline dotted;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

:where(b, strong) {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

:where(code, kbd, samp) {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

:where(small) {
  font-size: 80%;
}

/* Embedded content
 * ========================================================================== */

/**
 * Add the correct display in iOS 4-7.
 */

:where(audio:not([controls])) {
  display: none;
  height: 0;
}

/* Tabular data
 * ========================================================================== */

/**
 * 1. Correct table border color inheritance in all Chrome, Edge, and Safari.
 * 2. Remove text indentation from table contents in Chrome, Edge, and Safari.
 */

:where(table) {
  border-color: inherit; /* 1 */
  text-indent: 0; /* 2 */
}

/* Forms
 * ========================================================================== */

/**
 * Remove the margin on controls in Safari.
 */

:where(button, input, select) {
  margin: 0;
}

/**
 * Remove the inheritance of text transform in Firefox.
 */

:where(button) {
  text-transform: none;
}

/**
 * Correct the inability to style buttons in iOS and Safari.
 */

:where(button, input:is([type="button" i], [type="reset" i], [type="submit" i])) {
  -webkit-appearance: button;
}

/**
 * Add the correct vertical alignment in Chrome, Edge, and Firefox.
 */

:where(progress) {
  vertical-align: baseline;
}

/**
 * Remove the inheritance of text transform in Firefox.
 */

:where(select) {
  text-transform: none;
}

/**
 * Remove the margin in Firefox and Safari.
 */

:where(textarea) {
  margin: 0;
}

/**
 * 1. Correct the odd appearance in Chrome, Edge, and Safari.
 * 2. Correct the outline style in Safari.
 */

:where(input[type="search" i]) {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Safari.
 */

:where(input::-webkit-inner-spin-button, input::-webkit-outer-spin-button) {
  height: auto;
}

/**
 * Correct the text style of placeholders in Chrome, Edge, and Safari.
 */

:where(input::-webkit-input-placeholder) {
  color: inherit;
  opacity: 0.54;
}

/**
 * Remove the inner padding in Chrome, Edge, and Safari on macOS.
 */

:where(input[type="search" i]::-webkit-search-decoration) {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style upload buttons in iOS and Safari.
 * 2. Change font properties to 'inherit' in Safari.
 */

:where(input[type="file" i]::-webkit-file-upload-button) {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/**
 * Remove the inner border and padding of focus outlines in Firefox.
 */

:where(:is(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focus-inner) {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus outline styles unset by the previous rule in Firefox.
 */

:where(:is(button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i])):-moz-focusring) {
  outline: 1px dotted ButtonText;
}

/**
 * Remove the additional :invalid styles in Firefox.
 */

:where(:-moz-ui-invalid) {
  box-shadow: none;
}

/* Interactive
 * ========================================================================== */

/*
 * Add the correct styles in Safari.
 */

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

/*
 * Add the correct display in all browsers.
 */

:where(summary) {
  display: list-item;
}
`;
