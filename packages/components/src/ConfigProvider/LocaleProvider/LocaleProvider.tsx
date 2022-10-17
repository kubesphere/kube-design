import React, { useState, useEffect, PropsWithChildren } from 'react';
import { merge } from 'lodash';
import { ILocale, Locale } from './types';
import { LocaleContext } from './LocaleContext';
import locales from '../locales';

export interface Props {
  locale?: Locale;
  extendLocales?: Record<Locale, ILocale>;
}

const localeKeys = ['en', 'zh', 'zh-tw', 'es'];

function LocaleProvider({ children, locale, extendLocales }: PropsWithChildren<Props>) {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const mergedLocales = merge(locales, extendLocales);

  useEffect(() => {
    if (!locale || !localeKeys.includes(locale)) return;
    setCurrentLocale(locale);
  }, [locale]);

  const localeValue = {
    locale: currentLocale,
    locales: mergedLocales[currentLocale],
  };

  return <LocaleContext.Provider value={localeValue}>{children}</LocaleContext.Provider>;
}

export default LocaleProvider;
