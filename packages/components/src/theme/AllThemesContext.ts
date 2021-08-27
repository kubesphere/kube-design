import { Context, createContext, useContext } from 'react';
import themeUtils from './utils';
import { KubedTheme } from './types';

export type AllThemesConfig = {
  themes: Array<KubedTheme>;
};

const defaultAllThemesConfig = {
  themes: themeUtils.getPresets(),
};

export const AllThemesContext: Context<AllThemesConfig> =
  createContext<AllThemesConfig>(defaultAllThemesConfig);

export const useAllThemes = (): AllThemesConfig => useContext<AllThemesConfig>(AllThemesContext);
