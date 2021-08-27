import React, { useState, useEffect, useCallback } from 'react';
import { appWithTranslation } from 'next-i18next';
import { CssBaseline, KubedConfigProvider } from '@kubed/components';
import { useLocalStorage } from '@kubed/hooks';
import type { AppProps } from 'next/app';
import { PrefersContext, themes } from '../lib/usePrefers';

function MyApp({ Component, pageProps }: AppProps) {
  const [themeLocalValue, setThemeLocalValue] = useLocalStorage({
    key: 'themeType',
    defaultValue: 'light',
  });
  const [themeType, setThemeType] = useState('light');

  useEffect(() => {
    document.documentElement.removeAttribute('style');
    document.body.removeAttribute('style');

    if (themes.includes(themeLocalValue)) setThemeType(themeLocalValue);
  }, []);

  const switchTheme = useCallback((theme) => {
    setThemeType(theme);
    setThemeLocalValue(theme);
  }, []);

  return (
    <KubedConfigProvider themeType={themeType}>
      <CssBaseline />
      <PrefersContext.Provider value={{ themeType, switchTheme }}>
        <Component {...pageProps} />
      </PrefersContext.Provider>
    </KubedConfigProvider>
  );
}
export default appWithTranslation(MyApp);
