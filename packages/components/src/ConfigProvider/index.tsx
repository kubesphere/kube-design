import React from 'react';
import { KubedTheme } from '../theme';
import ThemeProvider from '../theme/ThemeProvider';

export interface Props {
  children: React.ReactNode;
  themes?: Array<KubedTheme>;
  themeType?: string | 'dark' | 'light';
}

export function KubedConfigProvider({ children, themes, themeType }: Props) {
  return (
    <ThemeProvider themes={themes} themeType={themeType}>
      {children}
    </ThemeProvider>
  );
}

KubedConfigProvider.displayName = '@kubed/ConfigProvider';
