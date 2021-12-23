import React from 'react';
import { LoadingOverlay } from '@kubed/components';
import { shallowWithTheme } from '@kubed/tests';

describe('@kubed/components/LoadingOverlay', () => {
  it('has correct displayName', () => {
    expect(LoadingOverlay.displayName).toEqual('@kubed/components/LoadingOverlay');
  });

  it('renders min prop to component', () => {
    const wrapper = shallowWithTheme(<LoadingOverlay visible />);
    expect(wrapper.find(LoadingOverlay).prop('visible')).toBe(true);
  });
});
