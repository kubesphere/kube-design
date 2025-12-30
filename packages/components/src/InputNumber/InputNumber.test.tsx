import React from 'react';
import { screen } from '@testing-library/react';
import { InputNumber } from '@kubed/components';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithTheme } from '@kubed/tests';

describe('@kubed/components/InputNumber', () => {
  it('has correct displayName', () => {
    expect(InputNumber.displayName).toEqual('@kubed/components/InputNumber');
  });

  it('renders disabled state and placeholder correctly', () => {
    renderWithTheme(<InputNumber disabled placeholder="请输入.." />);

    const inputElement = screen.getByPlaceholderText('请输入..');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeDisabled();
  });

  it('renders min attribute correctly', () => {
    renderWithTheme(<InputNumber min={-2} />);

    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('aria-valuemin', '-2');
  });

  it('calls onChange handler when value changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    renderWithTheme(<InputNumber onChange={handleChange} />);
    const inputElement = screen.getByRole('spinbutton');
    await user.type(inputElement, '5');
    expect(handleChange).toHaveBeenCalledWith(5);
    expect(inputElement).toHaveValue('5');
  });

  it('to match snapshot', () => {
    const { asFragment } = renderWithTheme(<InputNumber />);
    expect(asFragment()).toMatchSnapshot();
  });
});
