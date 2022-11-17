export interface MatcherOptions {
  defaultFold?: boolean;
}

export type Partical = {
  label?: string;
  content: string;
  type: 'partical' | 'text';
  fold: boolean;
};

export class Matcher {
  constructor(
    public regexStart: RegExp,
    public regexEnd: RegExp,
    public label: string,
    public matcherOptions: MatcherOptions = {}
  ) {
    this.regexStart = regexStart;
    this.regexEnd = regexEnd;
    this.label = label;
    this.matcherOptions = matcherOptions;
  }
}
