import { KubedThemeBreakpoints, KubedThemeFont, KubedThemeLayout } from '../types';

export const defaultFont: KubedThemeFont = {
  sans: 'PingFang SC,Lantinghei SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,微软雅黑,STHeitiSC-Light,simsun,宋体,WenQuanYi Zen Hei,WenQuanYi Micro Hei,sans-serif',
  mono: 'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  fontSizeBase: '12px',
};

export const defaultBreakpoints: KubedThemeBreakpoints = {
  xs: {
    min: '0',
    max: '650px',
  },
  sm: {
    min: '650px',
    max: '900px',
  },
  md: {
    min: '900px',
    max: '1280px',
  },
  lg: {
    min: '1280px',
    max: '1920px',
  },
  xl: {
    min: '1920px',
    max: '10000px',
  },
};

// const fontSizes = {
//   xs: '10px',
//   sm: '12px',
//   md: '14px',
//   lg: '16px',
//   xl: '18px',
// };

const spacing = {
  xs: '10px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

const radius = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '32px',
};

export const defaultLayout: KubedThemeLayout = {
  spacing,
  gap: '20px',
  gapNegative: '-20px',
  gapHalf: '10px',
  gapHalfNegative: '-10px',
  gapQuarter: '5px',
  gapQuarterNegative: '-5px',
  pageMargin: '20px',
  pageWidth: '1200px',
  pageWidthWithMargin: '1240px',
  breakpointMobile: defaultBreakpoints.xs.max,
  breakpointTablet: defaultBreakpoints.sm.max,
  radius,
};
