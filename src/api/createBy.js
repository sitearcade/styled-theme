// import

import * as R from 'ramda';

import {dotPath} from './utils';

// fns

const valOfOpts = ({props, prop, opts, def, val}) => (
  R.has(val, opts) ?
    byOpts({props, prop, opts: opts[val], def, val: opts[val]}) :
    byOpts({props, prop, opts: def, def, val})
);

const byOpts = (args) => {
  const type = R.type(args.opts);

  return type === 'Function' ? args.opts(args) :
    type === 'Object' ? valOfOpts(args) :
    type === 'Array' ? valOfOpts(args) :
    args.val ?? args.opts ?? undefined;
};

const createBy = (pre = []) => (props, prop, opts, def) =>
  byOpts({props, prop, opts, def, val: dotPath([pre, prop], props)});

// export

export default createBy;
