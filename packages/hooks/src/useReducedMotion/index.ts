import { useMediaQuery } from '../useMediaQuery';

export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
