import React from 'react';
import { shallow } from 'enzyme';
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';

export function itRendersChildren(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('renders children', () => {
    const element = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps}>
          <span className="test-children">test-children</span>
        </Component>
      </ThemeProvider>
    );
    expect(element.render().find('.test-children')).toHaveLength(1);
  });
}
