import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { LoadingOverlay } from './LoadingOverlay';

describe('@kubed/components/LoadingOverlay', () => {
  it('has correct displayName', () => {
    expect(LoadingOverlay.displayName).toEqual('@kubed/components/LoadingOverlay');
  });
  it('renders overlay when visible prop is true', () => {
    const { container } = renderWithTheme(<LoadingOverlay visible />);
    expect(container.firstChild).toBeTruthy();
  });

  it('toMatchSnapshot', () => {
    const { container } = renderWithTheme(<LoadingOverlay visible />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
