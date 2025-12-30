import React from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';

export function renderWithTheme(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult {
  return render(<ThemeProvider theme={themeUtils.getPresets()[0]}>{ui}</ThemeProvider>, options);
}
