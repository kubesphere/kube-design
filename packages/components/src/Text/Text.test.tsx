import React from 'react';
import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  shallowWithTheme,
} from '@kubed/tests';
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
    const withWeight = shallowWithTheme(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Text weight={600} />
      </ThemeProvider>
    );
    const withTransform = shallowWithTheme(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Text transform="uppercase" />
      </ThemeProvider>
    );
    const withAlign = shallowWithTheme(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Text align="right" />
      </ThemeProvider>
    );

    expect(withWeight.render().css('font-weight')).toBe('600');
    expect(withTransform.render().css('text-transform')).toBe('uppercase');
    expect(withAlign.render().css('text-align')).toBe('right');
  });
});
