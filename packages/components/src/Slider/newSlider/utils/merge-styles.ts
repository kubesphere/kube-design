import React from 'react';

type KubedStyles<T> = Record<keyof T, React.CSSProperties>;

export function mergeStyles<T extends Record<string, string>>(
  classes: T,
  styles: Partial<KubedStyles<T>>
) {
  if (!classes || !(typeof styles === 'object' && styles !== null)) {
    return {} as KubedStyles<T>;
  }

  return Object.keys(classes).reduce((acc, className) => {
    acc[className] = styles[className];
    return acc;
  }, {}) as KubedStyles<T>;
}
