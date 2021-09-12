import React, { useState, useEffect, PropsWithChildren } from 'react';
import { ILocale } from './types';
import { LocaleContext } from './LocaleContext';
import defaultLocale from '../locales/default';

export interface Props {
  locale?: ILocale;
}

function LocaleProvider({ children, locale }: PropsWithChildren<Props>) {
  const [currentLocale, setCurrentLocale] = useState<ILocale>(defaultLocale);

  useEffect(() => {
    if (!locale) return;
    setCurrentLocale(locale);
  }, [locale]);

  return <LocaleContext.Provider value={currentLocale}>{children}</LocaleContext.Provider>;
}

export default LocaleProvider;
