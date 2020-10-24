// import

import {path} from 'ramda';

import {splitDots} from './utils';

// fns

const bySubOpts = {
  undefined: ({val}) => val ?? '',
  string: ({opts: str}) => str,
  number: ({opts: num}) => num,
  object: ({opts: obj}) => obj,
  function: ({opts: fn, props, val}) => fn(props, val),
};

const byTypeOpts = {
  ...bySubOpts,
  object: ({opts: obj, props, prop, val}) =>
    bySubOpts[typeof obj[val ?? '_']]({opts: obj[val], props, prop, val}),
};

const createBy = (pre = []) => (props, prop, opts) =>
  byTypeOpts[typeof opts]({
    opts,
    props,
    prop,
    val: path([...pre, ...splitDots(prop)], props),
  });

// export

export default createBy;
