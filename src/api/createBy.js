// import

import {type, has} from 'ramda';

import {dotPath} from './utils';

// fns

const valOfOpts = ({props, prop, opts, def, val}) => (
  has(val, opts) ?
    byOpts({props, prop, opts: opts[val], def, val: opts[val]}) :
    byOpts({props, prop, opts: def, def, val})
);

const byOpts = (args) =>
  type(args.opts) |> (
    # === 'Function' ? args.opts(args) :
    # === 'Object' ? valOfOpts(args) :
    # === 'Array' ? valOfOpts(args) :
    args.val ?? args.opts ?? undefined
  );

const createBy = (pre = []) => (props, prop, opts, def) =>
  byOpts({props, prop, opts, def, val: dotPath([pre, prop], props)});

// export

export default createBy;
