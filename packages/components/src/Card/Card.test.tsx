import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStyle,
} from '@kubed/tests';
import { ThemeProvider } from 'styled-components';
import { themeUtils } from '@kubed/components';
import { Card } from './Card';

describe('@kubed/components/Card', () => {
  itSupportsOthers(Card, {});
  itSupportsClassName(Card, {});
  itSupportsRef(Card, {}, HTMLDivElement);
  itRendersChildren(Card, {});
  itSupportsStyle(Card, {});

  it('passes padding and radius to Card component', () => {
    const element = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Card radius="xl" padding={29}>
          test-card
        </Card>
      </ThemeProvider>
    );
    expect(element.find(Card).prop('padding')).toBe(29);
    expect(element.find(Card).prop('radius')).toBe('xl');
  });

  it('passes hoverable to Card component', () => {
    const element = shallow(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Card sectionTitle="section title" hoverable>
          test
        </Card>
      </ThemeProvider>
    );
    expect(element.find(Card).prop('hoverable')).toBe(true);
  });

  it('has correct displayName', () => {
    expect(Card.displayName).toEqual('@kubed/components/Card');
  });
});
