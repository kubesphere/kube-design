import { ThemedCssFunction } from 'styled-components';
import type { CSSProperties } from 'react';
import { DeepPartial } from '../utils/types';

export interface KubedThemePalette {
  colors: Record<string, Array<any>>;
  accents_0: string;
  accents_1: string;
  accents_2: string;
  accents_3: string;
  accents_4: string;
  accents_5: string;
  accents_6: string;
  accents_7: string;
  accents_8: string;
  accents_9: string;
  background: string;
  foreground: string;
  selection: string;
  primary: string;
  code: string;
  border: string;
  success: string;
  successLighter: string;
  successLight: string;
  successDark: string;
  error: string;
  errorLighter: string;
  errorLight: string;
  errorDark: string;
  warning: string;
  warningLighter: string;
  warningLight: string;
  warningDark: string;
  link: string;
}

export interface KubedThemeExpressiveness {
  linkStyle: string;
  linkHoverStyle: string;
  dropdownBoxShadow: string;
  shadowSmall: string;
  shadowMedium: string;
  shadowLarge: string;
  buttonShadow: ThemedCssFunction<any>;
  portalOpacity: number;
}

export interface KubedThemeLayout {
  spacing: Record<string, any>;
  gap: string;
  gapNegative: string;
  gapHalf: string;
  gapHalfNegative: string;
  gapQuarter: string;
  gapQuarterNegative: string;
  pageMargin: string;
  pageWidth: string;
  pageWidthWithMargin: string;
  breakpointMobile: string;
  breakpointTablet: string;
  radius: Record<string, any>;
}

export interface KubedThemeFont {
  sans: string;
  mono: string;
  fontSizeBase: string;
}

export interface BreakpointsItem {
  min: string;
  max: string;
}

export interface KubedThemeBreakpoints {
  xs: BreakpointsItem;
  sm: BreakpointsItem;
  md: BreakpointsItem;
  lg: BreakpointsItem;
  xl: BreakpointsItem;
}

export type KubedSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60,
};

export type KubedNumberSize = KubedSizes | number;

export interface KubedTheme {
  type: string;
  font: KubedThemeFont;
  layout: KubedThemeLayout;
  palette: KubedThemePalette;
  breakpoints: KubedThemeBreakpoints;
  expressiveness: KubedThemeExpressiveness;
}

export type KubedThemeOverride = DeepPartial<KubedTheme>;

export interface DefaultProps<T extends string = never> {
  className?: string;
  style?: CSSProperties;
  themeType?: string;
  readonly themeOverride?: KubedThemeOverride;
  classNames?: Partial<Record<T, string>>;
  styles?: Partial<Record<T, CSSProperties>>;
}
