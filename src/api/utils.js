// import

import {is, unless, split, path} from 'ramda';

// export

export const isFunction = is(Function);
export const splitDots = unless(Array.isArray, split('.'));
export const dotPath = (loc, props) => path(splitDots(loc).flatMap(splitDots), props);
export const tryFunc = (props, fn) => (isFunction(fn) ? fn(props) : fn);
