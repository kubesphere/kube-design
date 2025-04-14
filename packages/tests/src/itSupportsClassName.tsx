import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from './itSupportsTheme';

export function itSupportsClassName(
  Component: React.ElementType,
  requiredProps: Record<string, any>,
  testId: string = 'test-root-element'
) {
  it('accepts className from props', () => {
    const testClassName = 'test-class-name';
    renderWithTheme(
      <Component {...requiredProps} className={testClassName} data-testid={testId} />
    );
    const element = screen.getByTestId(testId);
    expect(element).toHaveClass(testClassName);
  });
}
