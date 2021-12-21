// @ts-ignore
import { shallow, mount } from 'enzyme';
import React from 'react';
// @ts-ignore
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';

export function shallowWithTheme(component) {
  return shallow(<ThemeProvider theme={themeUtils.getPresets()[0]}>{component}</ThemeProvider>);
}

export function mountWithTheme(component) {
  return mount(<ThemeProvider theme={themeUtils.getPresets()[0]}>{component}</ThemeProvider>);
}
