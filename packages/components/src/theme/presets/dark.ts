import { css } from 'styled-components';
import { KubedTheme, KubedThemePalette, KubedThemeExpressiveness } from '../types';
import { defaultFont, defaultBreakpoints, defaultLayout } from './shared';
import colors from './colors';

export const palette: KubedThemePalette = {
  colors,
  accents_0: '#181d28',
  accents_1: '#242e42',
  accents_2: '#36435c',
  accents_3: '#5f708a',
  accents_4: '#79879c',
  accents_5: '#abb4be',
  accents_6: '#ccd3db',
  accents_7: '#e3e9ef',
  accents_8: '#eff4f9',
  accents_9: '#f9fbfd',
  background: '#000',
  foreground: '#fff',
  selection: '#f81ce5',
  primary: 'green',
  code: '#79ffe1',
  border: '#333',
  error: '#e00',
  errorLight: '#ff1a1a',
  errorLighter: '#f7d4d6',
  errorDark: '#c50000',
  success: '#0070f3',
  successLight: '#3291ff',
  successLighter: '#d3e5ff',
  successDark: '#0761d1',
  warning: '#f5a623',
  warningLight: '#f7b955',
  warningLighter: '#ffefcf',
  warningDark: '#ab570a',
  link: '#3291ff',
};

export const expressiveness: KubedThemeExpressiveness = {
  linkStyle: 'none',
  linkHoverStyle: 'none',
  dropdownBoxShadow: '0 0 0 1px #333',
  shadowSmall: '0 0 0 1px #333',
  shadowMedium: '0 0 0 1px #333',
  shadowLarge: '0 0 0 1px #333',
  buttonShadow: (rgb) => css`0 8px 16px 0 rgb(${rgb} / 28%)`,
  portalOpacity: 0.75,
};

export const font = defaultFont;

export const breakpoints = defaultBreakpoints;

export const layout = defaultLayout;

export const themes: KubedTheme = {
  type: 'dark',
  font,
  layout,
  palette,
  breakpoints,
  expressiveness,
};

export default themes;
