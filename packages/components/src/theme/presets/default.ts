import { css } from 'styled-components';
import { KubedTheme, KubedThemePalette, KubedThemeExpressiveness } from '../types';
import { defaultFont, defaultBreakpoints, defaultLayout } from './shared';
import colors from './colors';

export const palette: KubedThemePalette = {
  colors,
  accents_0: '#f9fbfd',
  accents_1: '#eff4f9',
  accents_2: '#e3e9ef',
  accents_3: '#ccd3db',
  accents_4: '#abb4be',
  accents_5: '#79879c',
  accents_6: '#5f708a',
  accents_7: '#36435c',
  accents_8: '#242e42',
  accents_9: '#181d28',
  background: '#fff',
  foreground: '#000',
  selection: '#79ffe1',
  primary: 'green',
  secondary: 'dark',
  code: '#f81ce5',
  border: '#ccd3db',
  error: colors.red[2],
  errorLight: colors.red[1],
  errorLighter: colors.red[0],
  errorDark: colors.red[3],
  success: colors.green[2],
  successLight: colors.green[1],
  successLighter: colors.green[0],
  successDark: colors.green[3],
  warning: colors.yellow[2],
  warningLight: colors.yellow[1],
  warningLighter: colors.yellow[0],
  warningDark: colors.yellow[3],
  link: '#0070f3',
};

export const expressiveness: KubedThemeExpressiveness = {
  linkStyle: 'none',
  linkHoverStyle: 'none',
  dropdownBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.02)',
  shadowSmall: '0 5px 10px rgba(0, 0, 0, 0.12)',
  shadowMedium: '0 8px 30px rgba(0, 0, 0, 0.12)',
  shadowLarge: '0 30px 60px rgba(0, 0, 0, 0.12)',
  buttonShadow: (rgb) => css`0 8px 16px 0 rgb(${rgb} / 28%)`,
  portalOpacity: 0.25,
};

export const font = defaultFont;

export const breakpoints = defaultBreakpoints;

export const layout = defaultLayout;

export const themes: KubedTheme = {
  type: 'light',
  font,
  layout,
  palette,
  breakpoints,
  expressiveness,
};

export default themes;
