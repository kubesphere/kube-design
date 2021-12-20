import React from 'react';
import { shallow } from 'enzyme';
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';

export function itSupportsClassName(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('accepts className from props', () => {
    const element = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps} className="test-class-name" />
      </ThemeProvider>
    );
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });
}
