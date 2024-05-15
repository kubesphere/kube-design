export const safeJSON = {
  parse: (...args) => {
    try {
      return JSON.parse.apply(undefined, args);
    } catch (e) {
      return undefined;
    }
  },
  stringify: (...args) => {
    try {
      return JSON.stringify.apply(undefined, args);
    } catch (e) {
      return '';
    }
  },
};
