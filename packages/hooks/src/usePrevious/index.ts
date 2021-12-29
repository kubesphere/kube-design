import { useRef, useEffect } from 'react';

export function usePrevious<T>(value: T): T {
  const ref: any = useRef<T>();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
