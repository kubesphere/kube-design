import { itSupportsClassName, itRendersChildren, itSupportsStyle } from '@kubed/tests';
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { Description } from './Description';

const defaultProps = {
  variant: 'default',
  label: 'test',
  children: 'test',
};

describe('@kubed/components/Description', () => {
  itSupportsClassName(Description, defaultProps);
  itRendersChildren(Description, defaultProps);
  itSupportsStyle(Description, defaultProps);

  it('passes label and variant to description component', () => {
    const wrapper = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Description label="project" variant="unstyled">
          KubeSphere
        </Description>
      </ThemeProvider>
    );
    expect(wrapper.find(Description).prop('label')).toBe('project');
    expect(wrapper.find(Description).prop('variant')).toBe('unstyled');
  });

  it('has correct displayName', () => {
    expect(Description.displayName).toEqual('@kubed/components/Description');
  });
});
