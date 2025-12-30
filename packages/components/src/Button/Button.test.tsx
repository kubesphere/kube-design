import React from 'react';
import { checkRTLAccessibility, itSupportsOthers, renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { Button } from './Button';

describe('@kubed/components/Button', () => {
  it('has no accessibility violations', async () => {
    await checkRTLAccessibility(renderWithTheme(<Button>Kubed button</Button>));
  });

  itSupportsOthers(Button, {});
  // itRendersChildren(Button, {});
  // itSupportsStyle(Button, {});
  // itSupportsRef(Button, {}, HTMLButtonElement);
  // itSupportsClassName(Button, {});

  it('has correct displayName', () => {
    expect(Button.displayName).toEqual('@kubed/components/Button');
  });

  it('passes type to button component', () => {
    const testId = 'test-button';
    renderWithTheme(<Button type="submit" data-testid={testId} />);
    expect(screen.getByTestId(testId)).toHaveAttribute('type', 'submit');
  });

  it('sets disabled attribute based on prop', () => {
    const disabledId = 'disabled-button';
    const enabledId = 'enabled-button';

    renderWithTheme(
      <>
        <Button disabled data-testid={disabledId} />
        <Button data-testid={enabledId} />
      </>
    );

    expect(screen.getByTestId(disabledId)).toHaveAttribute('disabled');
    expect(screen.getByTestId(enabledId)).not.toHaveAttribute('disabled');
  });
});
