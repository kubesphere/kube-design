import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { createWrapper } from './reactWrapper';

export function itSupportsOthers(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports ...others props', () => {
    const element = createWrapper(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps} data-other-attribute="test" />
      </ThemeProvider>
    );
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });
}
