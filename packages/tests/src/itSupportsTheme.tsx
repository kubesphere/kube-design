import React, { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';

export function renderWithTheme(component: ReactElement): RenderResult {
  return render(<ThemeProvider theme={themeUtils.getPresets()[0]}>{component}</ThemeProvider>);
}
