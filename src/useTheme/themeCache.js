// vars

let cache = {};

// export

export const themeCache = {
  reset: () => (cache = {}),
  get: (key) => cache[key] ?? null,
  set: (key, val) => (cache[key] = val),
};
