import { itSupportsClassName, itSupportsStyle, shallowWithTheme } from '@kubed/tests';
import * as React from 'react';
import { Tag } from './Tag';

const defaultProps = {
  title: 'test',
  titleStyle: 'test',
  color: 'default',
};

describe('@kubed/components/Tag', () => {
  itSupportsStyle(Tag, {});
  itSupportsClassName(Tag, defaultProps);

  it('set color to Tag component', () => {
    const wrapper = shallowWithTheme(<Tag color="warning">KubeSphere</Tag>);
    expect(wrapper.render().attr('color')).toBe('warning');
  });

  it('set title to Tag component', () => {
    const wrapper = shallowWithTheme(<Tag title="job-name">KubeSphere</Tag>);
    expect(wrapper.render().attr('title')).toBe('job-name');
  });

  it('has correct displayName', () => {
    expect(Tag.displayName).toEqual('@kubed/components/Tag');
  });
});
