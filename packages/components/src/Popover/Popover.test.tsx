import { renderWithTheme } from '@kubed/tests';
import { Button } from '@kubed/components';
import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from './Popover';

describe('@kubed/components/Popover', () => {
  it('render title correctly', async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Popover title="popover title" content="Display additional, floating content on click">
        <Button radius="xl">KubeSphere</Button>
      </Popover>
    );

    const button = screen.getByText('KubeSphere');

    expect(screen.queryByText('popover title')).not.toBeInTheDocument();
    await user.hover(button);
    const popoverElement = screen.getByRole('tooltip');
    expect(popoverElement).toBeInTheDocument();
    expect(popoverElement).toMatchSnapshot();
  });

  it('has correct displayName', () => {
    expect(Popover.displayName).toEqual('@kubed/components/Popover');
  });
});
