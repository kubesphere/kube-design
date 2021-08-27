import { useEffect } from 'react';

export function useDidMount(callback: () => any): void {
  useEffect(() => {
    if (typeof callback === 'function') {
      callback();
    }
  }, []);
}
