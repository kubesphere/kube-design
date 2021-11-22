import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
} from '@kubed/tests';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { Divider } from './Divider';

describe('@kubed/components/Divider', () => {
  itSupportsClassName(Divider, {});
  itSupportsStyle(Divider, {});
  itSupportsOthers(Divider, {});
  itSupportsRef(Divider, {}, HTMLDivElement);

  it('renders given label in horizontal orientation', () => {
    const withSubheader = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Divider label="test-label" />
      </ThemeProvider>
    );
    expect(withSubheader.find(Divider).dive().text()).toBe('test-label');
  });

  it('does not render label if label prop is not set or orientation is set to vertical', () => {
    const noLabel = shallow(<Divider />);
    const vertical = shallow(<Divider label="test-label" orientation="vertical" />);
    expect(noLabel.find('hr')).toHaveLength(0);
    expect(vertical.find('hr')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Divider.displayName).toEqual('@kubed/components/Divider');
  });
});
