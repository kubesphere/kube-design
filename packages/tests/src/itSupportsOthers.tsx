import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';

export function itSupportsOthers(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports ...others props', () => {
    const element = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps} data-other-attribute="test" />
      </ThemeProvider>
    );
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });
}
