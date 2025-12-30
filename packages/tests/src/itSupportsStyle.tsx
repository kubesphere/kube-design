import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './itSupportsTheme';

export function itSupportsStyle(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('accepts style property', () => {
    const testId = 'test-component';
    renderWithTheme(
      <Component
        {...requiredProps}
        data-testid={testId}
        style={{ border: '1px solid red', lineHeight: 1 }}
      />
    );

    const element = screen.getByTestId(testId);
    expect(element).toHaveStyle({
      border: '1px solid red',
      lineHeight: 1,
    });
  });
}
