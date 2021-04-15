type Timer = ReturnType<typeof setTimeout>;

type Callback = () => void;

type CallbackWrapper<T> = (func: T) => void;

declare module "@pitrix/lego-locale" {
  export function init({
    currentLocale: string,
    locales: object,
    ignoreWarnings: boolean,
  }): Promse;

  export function determineLocale({
    cookieLocaleKey: string,
    urlLocaleKey: string,
  }): string;

  export function setCurrentLocale(curLocale: string): void;

  export function get(key: string): string;

  export const options: {
    currentLocale: string;
  };
}
