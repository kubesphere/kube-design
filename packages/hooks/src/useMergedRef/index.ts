import React, { useMemo } from 'react';
import { assignRef } from '../utils';

type Ref<T> = React.Dispatch<React.SetStateAction<T>> | React.Ref<T>;

export function useMergedRef<T = any>(...refs: Ref<T>[]): React.RefCallback<T> {
  return useMemo(() => mergeRefs(...refs), refs);
}

export function mergeRefs<T = any>(...refs: Ref<T>[]): React.RefCallback<T> {
  return (node: T | null) => {
    const cleanups = refs.map((ref) => assignRef(ref, node));

    if (cleanups.some((cleanup) => typeof cleanup === 'function')) {
      return () => {
        cleanups.forEach((cleanup, index) => {
          if (typeof cleanup === 'function') {
            cleanup();
          } else {
            assignRef(refs[index], null);
          }
        });
      };
    }
  };
}
