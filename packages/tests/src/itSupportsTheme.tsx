import { shallow, mount, ReactWrapper, ShallowWrapper } from 'enzyme';
import React, { ReactElement } from 'react';
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';

export function shallowWithTheme<P = {}>(component: ReactElement<P>): ShallowWrapper {
  return shallow(<ThemeProvider theme={themeUtils.getPresets()[0]}>{component}</ThemeProvider>);
}

export function mountWithTheme<P = {}>(component: ReactElement<P>): ReactWrapper {
  return mount(<ThemeProvider theme={themeUtils.getPresets()[0]}>{component}</ThemeProvider>);
}
