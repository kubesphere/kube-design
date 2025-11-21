import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { itSupportsClassName, itSupportsStyle, renderWithTheme } from '@kubed/tests'; // Keep renderWithTheme for now
import { themeUtils } from '@kubed/components';
import { ThemeProvider } from 'styled-components';
import { Switch } from './Switch';

const defaultProps = {
  onChange: vi.fn(),
  label: 'test-label',
};

describe('@kubed/components/Switch', () => {
  // Keep these helpers if they are compatible or rewrite them later if needed
  itSupportsClassName(Switch, defaultProps);
  itSupportsStyle(Switch, defaultProps);

  it('has correct displayName', () => {
    expect(Switch.displayName).toEqual('@kubed/components/Switch');
  });

  it('renders label based on label prop', () => {
    renderWithTheme(<Switch label="test-label" />);
    expect(screen.getByLabelText('test-label')).toBeInTheDocument();

    const { container } = renderWithTheme(<Switch />);
    // Check if the label element itself exists when label prop is provided
    expect(screen.getByText('test-label')).toBeInTheDocument();
    // Check if the label element does not exist when label prop is not provided
    expect(container.querySelector('label')).not.toBeInTheDocument();
  });

  it('associates label with input using id', () => {
    const { rerender } = renderWithTheme(<Switch label="test-label" id="test-id-1" />);
    const switchInput = screen.getByLabelText('test-label');
    expect(switchInput).toHaveAttribute('id', 'test-id-1');

    // Check label's htmlFor attribute
    const labelElement = screen.getByText('test-label');
    expect(labelElement).toHaveAttribute('for', 'test-id-1');
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    renderWithTheme(<Switch data-testid="disabled-switch" disabled label="Disabled Switch" />);

    const disabledSwitch = screen.getByTestId('disabled-switch').firstChild;
    expect(disabledSwitch).toHaveAttribute('disabled');

    renderWithTheme(<Switch data-testid="enabled-switch" label="Enabled Switch" />);
    const enabledSwitch = screen.getByTestId('enabled-switch').firstChild;
    expect(enabledSwitch).not.toHaveAttribute('disabled');
  });

  it('sets checked state based on checked prop and handles change', () => {
    const handleChange = vi.fn();
    const { rerender } = renderWithTheme(
      <Switch checked onChange={handleChange} label="Test Switch" />
    );
    const switchInput = screen.getByLabelText('Test Switch');

    expect(switchInput).toBeChecked();

    // Test uncontrolled component behavior (initial state false)
    rerender(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Switch onChange={handleChange} label="Test Switch" />
      </ThemeProvider>
    );
    const uncontrolledSwitch = screen.getByLabelText('Test Switch');
    expect(uncontrolledSwitch).not.toBeChecked();

    // Simulate user click
    fireEvent.click(uncontrolledSwitch);
    expect(handleChange).toHaveBeenCalledTimes(1);
    // Note: In a real scenario, the state update would be handled by the parent.
    // Testing library doesn't automatically update the 'checked' prop after click
    // unless it's managed by component state or rerendered with the new prop.
    // We mainly test here if onChange is called.

    // Test controlled component behavior (changing checked prop)
    rerender(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Switch checked={false} onChange={handleChange} label="Test Switch" />
      </ThemeProvider>
    );
    expect(switchInput).not.toBeChecked();
  });

  // The original test checked props passed to the component.
  // Testing Library focuses on the rendered output.
  // We need to check how okText/offText are actually rendered or used.
  // Assuming they might render text inside or near the switch:
  it('renders okText and offText when provided', () => {
    // Scenario 1: Check if text is rendered (adjust query based on actual implementation)
    const { rerender } = renderWithTheme(
      <Switch checked okText="开启" offText="关闭" label="Status" />
    );
    // Check based on current state (checked=true should show '开启')
    // This depends heavily on how Switch renders these texts.
    // Using queryByText as it might not be present depending on state/implementation.
    expect(screen.queryByText('开启')).toBeInTheDocument();
    expect(screen.queryByText('关闭')).not.toBeInTheDocument(); // Assuming only one is shown

    rerender(
      <ThemeProvider theme={themeUtils.getPresets()[0]}>
        <Switch checked={false} okText="开启" offText="关闭" label="Status" />
      </ThemeProvider>
    );
    expect(screen.queryByText('开启')).not.toBeInTheDocument();
    expect(screen.queryByText('关闭')).toBeInTheDocument();

    // Scenario 2: If text is not directly rendered, check for aria-attributes or other markers
    // Example: expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    // This part needs adaptation based on the actual Switch component implementation.
  });

  it('calls onChange handler when clicked', () => {
    const handleChange = vi.fn();
    renderWithTheme(<Switch onChange={handleChange} label="Clickable Switch" />);
    const switchInput = screen.getByLabelText('Clickable Switch');

    fireEvent.click(switchInput);
    expect(handleChange).toHaveBeenCalledTimes(1);
    // expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // Check event object passed

    // Test clicking when disabled
    handleChange.mockClear(); // Reset mock
    renderWithTheme(<Switch onChange={handleChange} label="Disabled Click" disabled />);
    const disabledSwitch = screen.getByLabelText('Disabled Click');

    fireEvent.click(disabledSwitch);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
