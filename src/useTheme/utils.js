// export

export const splitDots = (loc) => (
  Array.isArray(loc) ? loc : loc.split('.')
);

export const keepProps = (props, useDef = true) => ({
  shouldForwardProp(prop, defFn) {
    return props.includes(prop) && (!useDef || defFn(prop));
  },
});

export const omitProps = (props, useDef = true) => ({
  shouldForwardProp(prop, defFn) {
    return !props.includes(prop) && (!useDef || defFn(prop));
  },
});

export const snuffProps = (props) =>
  Object.keys(props).reduce((acc, k) => ({
    ...acc, [`$${k}`]: props[k],
  }), {});
