// types

export type Json =
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  Json[] | boolean | number | string | {[key: string]: Json} | null;

// vars

export const maxClip = 0.00125;

// fns

export const isNum = (x: unknown): x is number =>
  typeof x === 'number';

// eslint-disable-next-line @typescript-eslint/ban-types
export const mapObject = <T extends object, U>(
  mappingFn: (value: T[keyof T]) => U,
  obj: T,
): Record<keyof T, U> => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const newObj = {} as Record<keyof T, U>;

  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      const oldValue = obj[i];
      newObj[i] = mappingFn(oldValue);
    }
  }

  return newObj;
};
