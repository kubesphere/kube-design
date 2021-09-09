import { Context, createContext, useContext } from 'react';
import { ILocale } from './types';
import defaultLocale from '../locales/default';

export const LocaleContext: Context<ILocale> = createContext<ILocale>(defaultLocale);

export const useLocales = (): ILocale => useContext<ILocale>(LocaleContext);
