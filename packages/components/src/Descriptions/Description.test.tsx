import {
  itSupportsClassName,
  itRendersChildren,
  itSupportsStyle,
  shallowWithTheme,
} from '@kubed/tests';
import React from 'react';
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
    const wrapper = shallowWithTheme(
      <Description label="project" variant="unstyled">
        KubeSphere
      </Description>
    );
    expect(wrapper.find(Description).prop('label')).toBe('project');
    expect(wrapper.find(Description).prop('variant')).toBe('unstyled');
  });

  it('has correct displayName', () => {
    expect(Description.displayName).toEqual('@kubed/components/Description');
  });
});
