// import

import {is, unless, split, path} from 'ramda';

// fns

const splitDots = unless(Array.isArray, split('.'));

// export

export const isFunction = is(Function);
export const dotPath = (loc, props) => path(loc.flatMap(splitDots), props);
export const tryFunc = (props, fn) => (isFunction(fn) ? fn(props) : fn);
