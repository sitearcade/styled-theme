// export

export const keepProps = (props: string[], useDef = true) => ({
  shouldForwardProp(prop: string, defFn: (prop: string) => boolean) {
    return props.includes(prop) && (!useDef || defFn(prop));
  },
});

export const omitProps = (props: string[], useDef = true) => ({
  shouldForwardProp(prop: string, defFn: (prop: string) => boolean) {
    return !props.includes(prop) && (!useDef || defFn(prop));
  },
});

export const snuffProps = (props: string[]) =>
  Object.keys(props).reduce((acc, k) => ({
    ...acc, [`$${k}`]: props[k],
  }), {});
