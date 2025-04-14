import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './renderWithTheme';

export function itSupportsOthers(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports ...others props', () => {
    const testId = 'test-component';
    renderWithTheme(
      <Component {...requiredProps} data-testid={testId} data-other-attribute="test" />
    );

    const element = screen.getByTestId(testId);
    expect(element).toHaveAttribute('data-other-attribute', 'test');
  });
}
