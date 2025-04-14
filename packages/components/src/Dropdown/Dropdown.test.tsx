import React from 'react';
import { Dropdown } from '@kubed/components';
import { renderWithTheme } from '@kubed/tests';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('@kubd/components/Dropdown', () => {
  const dropdownMenuContent = <div>menu1</div>;
  const triggerButtonText = 'open dropdown';
  const triggerElement = <button>{triggerButtonText}</button>;
  const menuTestId = 'dropdown-menu-container';
  const arrowTestId = 'dropdown-arrow';

  it('when trigger is click, the dropdown should be open', async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Dropdown
        content={dropdownMenuContent}
        trigger="click"
        arrow={false}
        placement="bottom"
        animation="shift-away"
        data-testid={menuTestId}
      >
        {triggerElement}
      </Dropdown>
    );

    expect(screen.queryByText('menu1')).not.toBeInTheDocument();

    const triggerButton = screen.getByRole('button', { name: triggerButtonText });
    await user.click(triggerButton);

    const menuItem = await screen.findByText('menu1');
    expect(menuItem).toBeInTheDocument();

    expect(screen.queryByTestId(arrowTestId)).not.toBeInTheDocument();

    const menuContainer = await screen.getByRole('tooltip');
    expect(menuContainer).toHaveAttribute('data-placement', 'bottom');

    expect(menuContainer).toHaveAttribute('data-animation', 'shift-away');
  });

  it('has correct displayName', () => {
    expect(Dropdown.displayName).toEqual('@kubed/components/Dropdown');
  });
});
