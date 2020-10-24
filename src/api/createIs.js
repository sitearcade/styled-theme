// import

import {is, path} from 'ramda';

import {isFunction, splitDots, tryFunc} from './utils';

// fns

const normalizeIsMatch = (match) => (
  Array.isArray(match) ?
    match.reduce((acc, val) => ({...acc, ...(normalizeIsMatch(val))}), {}) :
    is(Object, match) ? match : {[match]: true}
);

const createIs = (method, condition, pre = []) =>
  (props, match, trueVal, falseVal) => {
    match = normalizeIsMatch(match);

    const res = Object.keys(match)[method]((loc) => {
      const val = path([...pre, ...splitDots(loc)], props);

      return condition === (
        isFunction(match[loc]) ? !!match[loc](val) : val === match[loc]
      );
    });

    return res ? tryFunc(props, trueVal) : tryFunc(props, falseVal);
  };

// export

export default createIs;
