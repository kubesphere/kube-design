// https://stackoverflow.com/a/63116134
export const kebabCase = (str) => {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};

const upperCase = (str: string): string => {
  return str.replace(/-/, '').toUpperCase();
};

export const toCamelCase = (str: string): string => {
  return str.replace(/-\w/g, upperCase);
};

export const toPascalCase = (str: string): string => {
  return str.replace(/(^\w|-\w)/g, upperCase);
};
