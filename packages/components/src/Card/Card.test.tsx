import React from 'react';
import {
  itSupportsOthers,
  itSupportsClassName,
  itSupportsRef,
  itRendersChildren,
  itSupportsStyle,
  renderWithTheme,
} from '@kubed/tests';
import { screen } from '@testing-library/react';
import { Card } from './Card';
import 'jest-styled-components';

const testId = 'test-card';
describe('@kubed/components/Card', () => {
  itSupportsOthers(Card, {});
  itSupportsClassName(Card, {});
  itSupportsRef(Card, {}, HTMLDivElement);
  itRendersChildren(Card, {});
  itSupportsStyle(Card, {});

  it('passes padding to Card component', () => {
    renderWithTheme(
      <Card data-testid={testId} padding={24}>
        test-card
      </Card>
    );
    expect(screen.getByTestId(testId).firstChild).toHaveStyle({
      padding: '24px',
    });
  });

  it('passes hoverable to Card component', async () => {
    renderWithTheme(
      <Card data-testid={testId} sectionTitle="section title" hoverable>
        test
      </Card>
    );
    expect(screen.getByText('test')).toHaveStyleRule('box-shadow', /.+/, {
      modifier: ':hover',
    });
  });

  it('has correct displayName', () => {
    expect(Card.displayName).toEqual('@kubed/components/Card');
  });
});
