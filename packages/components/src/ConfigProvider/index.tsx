import React from 'react';
import { KubedTheme } from '../theme';
import LocaleProvider from './LocaleProvider/LocaleProvider';
import ThemeProvider from '../theme/ThemeProvider';
import { Locale, ILocale } from './LocaleProvider/types';
import { ModalProvider } from '../Modal/ModalProvider/ModalProvider';

export interface Props {
  children: React.ReactNode;
  themes?: Array<KubedTheme>;
  themeType?: string | 'dark' | 'light';
  locale?: Locale;
  extendLocales?: Record<Locale, ILocale>;
}

export function KubedConfigProvider({
  children,
  themes,
  themeType,
  locale = 'en',
  extendLocales,
}: Props) {
  return (
    <LocaleProvider locale={locale} extendLocales={extendLocales}>
      <ThemeProvider themes={themes} themeType={themeType}>
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}

KubedConfigProvider.displayName = '@kubed/ConfigProvider';
