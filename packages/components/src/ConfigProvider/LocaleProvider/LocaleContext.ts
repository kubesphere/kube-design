import { Context, createContext, useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { ILocale } from './types';
// eslint-disable-next-line import/no-cycle
import locales from '../locales';

const defaultLocale = locales.en;
export const LocaleContext: Context<ILocale> = createContext<ILocale>(defaultLocale);

export const useLocales = (): ILocale => useContext<ILocale>(LocaleContext);
