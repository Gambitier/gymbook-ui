export type EnumKeys<T> = Extract<keyof T, string | number>;

export const getEnumKeys = <T extends Record<string, unknown>>(
  entity: T,
): EnumKeys<T>[] => {
  const filteredKeys = Object.entries(entity)
    .filter(([key, value]) => {
      console.log(value);
      return isNaN(parseInt(key));
    })
    .map(([key, value]) => {
      console.log(value);
      return key;
    }) as EnumKeys<T>[];

  return filteredKeys;
};

export const getEnumValues = <T extends Record<string, unknown>>(entity: T) => {
  const values = Object.entries(entity)
    .filter(([key]) => isNaN(parseInt(key)))
    .map(([key, value]) => {
      console.log(key);
      return value;
    });

  return values;
};
