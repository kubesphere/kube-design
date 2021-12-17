import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { shallowWithTheme } from './itSupportsTheme';

export function itSupportsStyle(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('accepts style property', () => {
    const element = shallowWithTheme(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps} style={{ border: '1px solid red', lineHeight: 1 }} />
      </ThemeProvider>
    ).render();
    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });
}
