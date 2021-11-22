import { shallow } from 'enzyme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { Tooltip, Button } from '../index';

describe('@kubed/components/Tooltip', () => {
  it('passes content and placement props to Tooltip component', () => {
    const wrapper = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Tooltip content="tooltip content" placement="top" maxWidth={120}>
          <Button style={{ minWidth: '100px' }}>top</Button>
        </Tooltip>
      </ThemeProvider>
    );
    expect(wrapper.find(Tooltip).prop('content')).toBe('tooltip content');
    expect(wrapper.find(Tooltip).prop('placement')).toBe('top');
    expect(wrapper.find(Tooltip).prop('maxWidth')).toBe(120);
  });

  it('has correct displayName', () => {
    expect(Tooltip.displayName).toEqual('@kubed/components/Tooltip');
  });
});
