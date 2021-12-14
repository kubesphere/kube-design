import { Context, createContext, useContext } from 'react';
import { ILocale, Locale } from './types';
import locales from '../locales';

export type LocaleType = {
  locale?: Locale;
  locales?: ILocale;
};

const defaultLocale: LocaleType = {
  locale: 'en',
  locales: locales.en,
};
export const LocaleContext: Context<LocaleType> = createContext<LocaleType>(defaultLocale);

export const useLocales = (): LocaleType => useContext<LocaleType>(LocaleContext);
