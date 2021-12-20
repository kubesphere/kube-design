import React from 'react';
import { Loading } from '@kubed/components';
import { shallowWithTheme } from '@kubed/tests';

describe('@kubed/components/Loading', () => {
  it('has correct displayName', () => {
    expect(Loading.displayName).toEqual('@kubed/components/Loading');
  });

  it('renders min prop to component', () => {
    const wrapper = shallowWithTheme(<Loading size="sm" />);
    expect(wrapper.find(Loading).prop('size')).toBe('sm');
  });
});
