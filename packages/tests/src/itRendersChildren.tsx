import React from 'react';
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';
import { createWrapper } from './reactWrapper';

export function itRendersChildren(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('renders children', () => {
    const element = createWrapper(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps}>
          <span className="test-children">test-children</span>
        </Component>
      </ThemeProvider>
    );
    expect(element.render().find('.test-children')).toHaveLength(1);
  });
}
