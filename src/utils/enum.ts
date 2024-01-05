export type EnumKeys<T> = Extract<keyof T, string | number>;

export const getEnumKeys = <T extends Record<string, unknown>>(
  enumObj: T,
): EnumKeys<T>[] => {
  return Object.keys(enumObj).filter((key) =>
    isNaN(Number(key)),
  ) as EnumKeys<T>[];
};
