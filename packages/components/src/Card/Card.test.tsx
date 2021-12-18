import React from 'react';
import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStyle,
  shallowWithTheme,
} from '@kubed/tests';
import { Card } from './Card';

describe('@kubed/components/Card', () => {
  itSupportsOthers(Card, {});
  itSupportsClassName(Card, {});
  itSupportsRef(Card, {}, HTMLDivElement);
  itRendersChildren(Card, {});
  itSupportsStyle(Card, {});

  it('passes padding and radius to Card component', () => {
    const element = shallowWithTheme(
      <Card radius="xl" padding={29}>
        test-card
      </Card>
    );
    expect(element.find(Card).prop('padding')).toBe(29);
    expect(element.find(Card).prop('radius')).toBe('xl');
  });

  it('passes hoverable to Card component', () => {
    const element = shallowWithTheme(
      <Card sectionTitle="section title" hoverable>
        test
      </Card>
    );
    expect(element.find(Card).prop('hoverable')).toBe(true);
    expect(element.find(Card).prop('sectionTitle')).toBe('section title');
  });

  it('has correct displayName', () => {
    expect(Card.displayName).toEqual('@kubed/components/Card');
  });
});
