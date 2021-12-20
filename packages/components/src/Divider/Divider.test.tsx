import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  shallowWithTheme,
} from '@kubed/tests';
import { Divider } from './Divider';

describe('@kubed/components/Divider', () => {
  itSupportsClassName(Divider, {});
  itSupportsStyle(Divider, {});
  itSupportsOthers(Divider, {});
  itSupportsRef(Divider, {}, HTMLDivElement);

  it('renders given label in horizontal orientation', () => {
    const withSubheader = shallowWithTheme(<Divider label="test-label" />);
    expect(withSubheader.find(Divider).dive().text()).toBe('test-label');
  });

  it('does not render label if label prop is not set or orientation is set to vertical', () => {
    const noLabel = shallowWithTheme(<Divider />);
    const vertical = shallowWithTheme(<Divider label="test-label" orientation="vertical" />);
    expect(noLabel.find('hr')).toHaveLength(0);
    expect(vertical.find('hr')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Divider.displayName).toEqual('@kubed/components/Divider');
  });
});
