import { createContext } from 'react';
import { ErrorMatcherPattern } from './errorMatcher';

const errorRefs = new Map<HTMLDivElement, ErrorMatcherPattern[]>();

export function setErrorRefs(errors: ErrorMatcherPattern[], ref: HTMLDivElement) {
  errorRefs.clear();
  errorRefs.set(ref, errors);
}

export { errorRefs };

export const ErrorContext = createContext({
  setErrorRefs,
});
