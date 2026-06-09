import React from 'react';
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';
import { createWrapper } from './reactWrapper';

export function itSupportsClassName(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('accepts className from props', () => {
    const element = createWrapper(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps} className="test-class-name" />
      </ThemeProvider>
    );
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });
}
