import { itSupportsClassName, itSupportsStyle } from '@kubed/tests';
import { shallow } from 'enzyme';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
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
    const wrapper = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Tag color="warning">KubeSphere</Tag>
      </ThemeProvider>
    );
    expect(wrapper.render().attr('color')).toBe('warning');
  });

  it('set title to Tag component', () => {
    const wrapper = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Tag title="job-name">KubeSphere</Tag>
      </ThemeProvider>
    );
    expect(wrapper.render().attr('title')).toBe('job-name');
  });

  it('has correct displayName', () => {
    expect(Tag.displayName).toEqual('@kubed/components/Tag');
  });
});
