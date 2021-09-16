import React from 'react';
import { KubedTheme } from '../theme';
import LocaleProvider from './LocaleProvider/LocaleProvider';
import ThemeProvider from '../theme/ThemeProvider';
import { ILocale } from './LocaleProvider/types';
import { ModalProvider } from '../Modal/ModalProvider/ModalProvider';

export interface Props {
  children: React.ReactNode;
  themes?: Array<KubedTheme>;
  themeType?: string | 'dark' | 'light';
  locale?: ILocale;
}

export function KubedConfigProvider({ children, themes, themeType, locale }: Props) {
  return (
    <LocaleProvider locale={locale}>
      <ThemeProvider themes={themes} themeType={themeType}>
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}

KubedConfigProvider.displayName = '@kubed/ConfigProvider';
