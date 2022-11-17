export interface searchedKeyWordType {
  rowIndex: number;
  matchIndex: number;
}

export const isArrayOfString = (array: string[]) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const str in array) {
    if (typeof str !== 'string') {
      return false;
    }
  }
  return true;
};

export const parseConsoleOutput = (data: string[] | string) => {
  const stringToSplitWith = '\n';
  const parsedData = Array.isArray(data) ? data.join(stringToSplitWith) : data;
  const stringSplitting = parsedData.toString();
  const cleanString = stringSplitting.split(stringToSplitWith);

  return cleanString;
};

export const escapeString = (inputString: string): string => inputString.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // eslint-disable-line

/* eslint-disable-next-line no-control-regex */
const ansiRegexString = `[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]`;

export const ansiRegex = new RegExp(ansiRegexString, 'g');

export const isAnsi = (inputString: string) => inputString.match(ansiRegex);

export const stripAnsi = (inputString: string): string => inputString.replace(ansiRegex, '');

export const splitAnsi = (inputString: string): string[] =>
  inputString.split(new RegExp(`(${ansiRegexString})`, 'g'));

export const escapeTextForHtml = (inputString: string): string =>
  inputString.replace(/[&<>"']/gm, (str) => {
    if (str === '&') {
      return '&amp;';
    }
    if (str === '<') {
      return '&lt;';
    }
    if (str === '>') {
      return '&gt;';
    }
    if (str === '"') {
      return '&quot;';
    }
    if (str === "'") {
      return '&#x27;';
    }
    return null;
  });
