import React from 'react';
// @ts-ignore
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';
import { createWrapper } from './reactWrapper';

const withTheme = (component: React.ReactElement) => (
  <ThemeProvider theme={themeUtils.getPresets()[0]}>{component}</ThemeProvider>
);

export function shallowWithTheme(component) {
  return createWrapper(component, withTheme);
}

export function mountWithTheme(component) {
  return createWrapper(component, withTheme);
}
