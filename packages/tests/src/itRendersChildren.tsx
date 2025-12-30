import React from 'react';
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

export function itRendersChildren(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('renders children', () => {
    render(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Component {...requiredProps}>
          <span className="test-children">test-children</span>
        </Component>
      </ThemeProvider>
    );
    expect(screen.getByText('test-children')).toBeInTheDocument();
  });
}
