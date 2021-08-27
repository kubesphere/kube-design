import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as SCProvider } from 'styled-components';
import themeUtils from './utils';
import { KubedTheme } from './types';
import { AllThemesConfig, AllThemesContext } from './AllThemesContext';

export interface Props {
  themeType?: string;
  themes?: Array<KubedTheme>;
}

function ThemeProvider({ children, themeType, themes = [] }: PropsWithChildren<Props>) {
  const [allThemes, setAllThemes] = useState<AllThemesConfig>({ themes: themeUtils.getPresets() });

  const currentTheme = useMemo<KubedTheme>(() => {
    const theme = allThemes.themes.find((item) => item.type === themeType);
    if (theme) return theme;
    return themeUtils.getPresetStaticTheme();
  }, [allThemes, themeType]);

  useEffect(() => {
    if (!themes?.length) return;
    setAllThemes((last) => {
      const safeThemes = themes.filter((item) => themeUtils.isAvailableThemeType(item.type));
      const nextThemes = themeUtils.getPresets().concat(safeThemes);
      return { ...last, themes: nextThemes };
    });
  }, [themes]);

  return (
    <AllThemesContext.Provider value={allThemes}>
      <SCProvider theme={currentTheme}>{children}</SCProvider>
    </AllThemesContext.Provider>
  );
}

export default ThemeProvider;
