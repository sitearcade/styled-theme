// import

import {is, unless, split} from 'ramda';

// export

export const isFunction = is(Function);
export const splitDots = unless(Array.isArray, split('.'));
export const tryFunc = (props, fn) => (isFunction(fn) ? fn(props) : fn);
