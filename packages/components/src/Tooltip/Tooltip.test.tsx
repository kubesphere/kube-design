import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { Tooltip, Button } from '../index';

describe('@kubed/components/Tooltip', () => {
  it('passes content and placement props to Tooltip component', async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Tooltip content="tooltip content" placement="top" maxWidth={120}>
        <Button style={{ minWidth: '100px' }}>top</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button', { name: 'top' });
    expect(screen.queryByText('tooltip content')).not.toBeInTheDocument();

    await user.hover(button);

    const tooltipElement = await screen.getByRole('tooltip');
    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement).toHaveTextContent('tooltip content');
    expect(tooltipElement).toHaveStyle('max-width: 120px');
    expect(tooltipElement).toHaveAttribute('data-placement', 'top');
  });

  it('has correct displayName', () => {
    expect(Tooltip.displayName).toEqual('@kubed/components/Tooltip');
  });
});
