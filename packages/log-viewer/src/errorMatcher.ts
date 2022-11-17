import { AnserJsonEntry } from 'anser';

export interface ErrorMatcherPattern {
  desc: string;
  link: string;
  patterns: string[];
}

export type ErrorMatcherPatterns = ErrorMatcherPattern[];

export const defaultErrorMatchers = [
  {
    desc: 'MissingScript',
    link: 'https://stackoverflow.com/questions/31976722/start-script-missing-error-when-running-npm-start',
    patterns: ['sh: 1: ts-node: not found'],
  },
];

export class ErrorMatcher {
  patterns: Array<ErrorMatcherPattern & { regexs: RegExp[] }>;

  constructor(errorMatchers: ErrorMatcherPatterns) {
    this.patterns = errorMatchers.map((matcher) => ({
      ...matcher,
      regexs: matcher.patterns.map((regex) => new RegExp(regex)),
    }));
  }

  match(bundle: AnserJsonEntry) {
    return this.patterns
      .map((pattern) => {
        const errors = pattern.regexs.map((regex) => regex.exec(bundle.content)).filter(Boolean);
        return errors.length ? pattern : null;
      })
      .filter(Boolean) as ErrorMatcher['patterns'];
  }
}
