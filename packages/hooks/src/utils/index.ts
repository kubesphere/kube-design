import React from 'react';

export function randomId() {
  return `kubed-${Math.random().toString(36).substr(2, 9)}`;
}

interface Clamp {
  value: number;
  min: number;
  max: number;
}

export function clamp({ value, min, max }: Clamp) {
  return Math.min(Math.max(value, min), max);
}

export function assignRef<T = any>(ref: React.ForwardedRef<T>, value: T | null) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (typeof ref === 'object' && ref !== null && 'current' in ref) {
    // eslint-disable-next-line no-param-reassign
    ref.current = value;
  }
}
