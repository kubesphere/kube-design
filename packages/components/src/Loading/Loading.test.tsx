import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { Loading, sizes } from './Loading';
import { getSizeValue } from '../theme/utils';

describe('@kubed/components/Loading', () => {
  it('has correct displayName', () => {
    expect(Loading.displayName).toEqual('@kubed/components/Loading');
  });

  it('renders min prop to component', () => {
    const size = 'sm';
    renderWithTheme(<Loading data-testid="loading-size" size={size} />);
    const width = getSizeValue(size, sizes);
    expect(screen.getByTestId('loading-size')).toHaveStyle(`width: ${width}`);
  });
});
