import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('@kubed/components/Badge', () => {
  it('has correct displayName', () => {
    expect(Badge.displayName).toEqual('@kubed/components/Badge');
  });

  it('renders given color and shadow', () => {
    renderWithTheme(
      <Badge color="warning" shadow className="badge-color-shadow">
        test
      </Badge>
    );
    screen.debug(screen.getByText('test'));
    const element = screen.getByText('test');

    expect(element).toHaveAttribute('color', 'warning');

    expect(element).not.toHaveStyle({ boxShadow: 'none' });
  });

  it('to match snapshot', () => {
    const { asFragment } = renderWithTheme(<Badge color="warning">test</Badge>);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="sc-gFAWRd gbxOUv badge"
          color="warning"
        >
          test
        </div>
      </DocumentFragment>
    `);
  });
});
