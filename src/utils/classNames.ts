/**
 * @deprecated
 */
export const classNames = (...values: unknown[]): string => {
  return values
    .filter((value) => !!value) // falsey 제거
    .map((value) => {
      if (typeof value === 'string') return value;
      if (typeof value === 'number') return value.toString();
      if (Array.isArray(value)) return classNames(value);

      // TODO: object가 들어오면?

      return '';
    })
    .join(' ');
};

const filterCls = (cls: unknown): boolean => {
  if (!cls) return false; // filter falsey values
  return true;
};

const parseCls = (cls: unknown, prefix?: string): string => {
  prefix = prefix ? `${prefix}-` : '';

  if (typeof cls === 'string' || typeof cls === 'number') return `${prefix}${cls}`;
  if (Array.isArray(cls)) return cls.map((item) => parseCls(item, prefix)).join(' ');

  // TODO: object가 들어오면?
  return '';
};

export const generateClasses =
  (prefix?: string) =>
  (suffixes: unknown[], ...cls: (string | undefined)[]) => {
    const mergedClasses = suffixes
      .filter(filterCls)
      .map((suffix) => parseCls(suffix, prefix))
      .join(' ');

    if (cls) {
      const classes = cls.filter(filterCls).join(' ');
      return `${mergedClasses} ${classes}`;
    }

    return mergedClasses;
  };
