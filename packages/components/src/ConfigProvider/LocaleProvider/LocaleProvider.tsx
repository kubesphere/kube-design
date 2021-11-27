import React, { useState, useEffect, PropsWithChildren } from 'react';
import { merge } from 'lodash';
import { ILocale, Locale } from './types';
import { LocaleContext } from './LocaleContext';
import locales from '../locales';

export interface Props {
  locale?: Locale;
  extendLocales?: Record<Locale, ILocale>;
}

function LocaleProvider({ children, locale, extendLocales }: PropsWithChildren<Props>) {
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const mergedLocales = merge(locales, extendLocales);

  useEffect(() => {
    if (!locale) return;
    setCurrentLocale(locale);
  }, [locale]);

  return (
    <LocaleContext.Provider value={mergedLocales[currentLocale]}>{children}</LocaleContext.Provider>
  );
}

export default LocaleProvider;
