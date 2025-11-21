import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Radio } from '@kubed/components';
import { renderWithTheme, checkRTLAccessibility } from '@kubed/tests';

const defaultProps = {
  name: 'test-group',
  value: 'test-radio-value',
  label: 'Test Radio Label',
};

describe('@kubed/components/Radio', () => {
  it('has correct displayName', () => {
    expect(Radio.displayName).toEqual('@kubed/components/Radio');
  });

  it('should render and set properties and states according to props', () => {
    const testId = 'test-radio-id';
    const testLabel = 'My Radio Button';
    const testValue = 'option1';

    renderWithTheme(
      <Radio
        id={testId}
        label={testLabel}
        value={testValue}
        name="options"
        disabled
        defaultChecked
      />
    );

    const radioInput = screen.getByLabelText(testLabel);

    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute('type', 'radio');
    expect(radioInput).toHaveAttribute('id', testId);
    expect(radioInput).toBeDisabled();
    expect(radioInput).toBeChecked();
  });

  it('should render correctly when not checked and not disabled', () => {
    renderWithTheme(<Radio label="Enabled Unchecked Radio" value="option2" name="options" />);

    const radioInput = screen.getByLabelText('Enabled Unchecked Radio');
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).not.toBeDisabled();
    expect(radioInput).not.toBeChecked();
  });

  it('render correct style (snapshot)', () => {
    const { asFragment } = renderWithTheme(
      <Radio {...defaultProps} id="static-radio-for-snapshot" label="Snapshot Me" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  checkRTLAccessibility(renderWithTheme(<Radio {...defaultProps} label="Snapshot Me" />));

  it('clickable radio should be checked(if not disabled)', async () => {
    const user = userEvent.setup();
    renderWithTheme(<Radio label="Clickable Radio" value="clickable" name="options" />);

    const radioInput = screen.getByLabelText('Clickable Radio');
    expect(radioInput).not.toBeChecked();

    await user.click(screen.getByText('Clickable Radio'));

    expect(radioInput).toBeChecked();
  });

  it('Clicking on a disabled radio or label should not change the state', async () => {
    const user = userEvent.setup();
    renderWithTheme(<Radio label="Disabled Radio" value="disabled" name="options" disabled />);

    const radioInput = screen.getByLabelText('Disabled Radio');
    const labelElement = screen.getByText('Disabled Radio');

    expect(radioInput).not.toBeChecked();
    expect(radioInput).toBeDisabled();

    await user.click(labelElement);
    expect(radioInput).not.toBeChecked();

    expect(radioInput).not.toBeChecked();
  });
});
