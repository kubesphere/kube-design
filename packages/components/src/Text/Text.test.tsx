import React from 'react';
import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  renderWithTheme,
} from '@kubed/tests';
import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { Text } from './Text';

describe('@kubed/components/Text', () => {
  itRendersChildren(Text, {});
  itSupportsStyle(Text, {});
  itSupportsClassName(Text, {});
  itSupportsOthers(Text, {});
  itSupportsRef(Text, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Text.displayName).toEqual('@kubed/components/Text');
  });

  it('sets font-weight, test-transform and text-align based on props', () => {
    renderWithTheme(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Text data-testid="text-weight" weight={600} />
      </ThemeProvider>
    );
    expect(screen.getByTestId('text-weight')).toHaveStyle('font-weight: 600');

    renderWithTheme(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Text data-testid="text-transform" transform="uppercase" />
      </ThemeProvider>
    );
    expect(screen.getByTestId('text-transform')).toHaveStyle('text-transform: uppercase');

    renderWithTheme(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Text data-testid="text-align" align="right" />
      </ThemeProvider>
    );

    expect(screen.getByTestId('text-align')).toHaveStyle('text-align: right');
  });
});
