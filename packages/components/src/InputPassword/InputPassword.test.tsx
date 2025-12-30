import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@kubed/tests';
import { InputPassword } from './InputPassword';

describe('@kubed/components/InputPassword', () => {
  it('has correct displayName', () => {
    expect(InputPassword.displayName).toBe('@kubed/components/InputPassword');
  });

  it('renders password input by default', () => {
    renderWithTheme(<InputPassword placeholder="Enter password" />);

    const input = screen.getByPlaceholderText('Enter password');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
  });

  it('toggles password visibility when eye icon is clicked', async () => {
    const user = userEvent.setup();
    const { container } = renderWithTheme(<InputPassword placeholder="Enter password" />);

    const input = screen.getByPlaceholderText('Enter password');
    expect(input).toHaveAttribute('type', 'password');

    const firstIcon = container.querySelector('svg');
    expect(firstIcon).toBeInTheDocument();

    await user.click(firstIcon as SVGElement);
    expect(input).toHaveAttribute('type', 'text');

    // After click, the icon changes, need to query again
    const secondIcon = container.querySelector('svg');
    expect(secondIcon).toBeInTheDocument();

    await user.click(secondIcon as SVGElement);
    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles value changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(<InputPassword placeholder="Enter password" onChange={onChange} />);

    const input = screen.getByPlaceholderText('Enter password');
    await user.type(input, 'secret123');

    expect(onChange).toHaveBeenCalled();
    expect(input).toHaveValue('secret123');
  });

  it('renders with default value', () => {
    renderWithTheme(<InputPassword defaultValue="default-password" />);

    const input = document.querySelector('input[type="password"]') as HTMLInputElement;
    expect(input).toHaveValue('default-password');
  });

  it('renders with controlled value', () => {
    renderWithTheme(<InputPassword value="controlled" onChange={() => {}} />);

    const input = document.querySelector('input') as HTMLInputElement;
    expect(input).toHaveValue('controlled');
  });

  it('handles disabled state', () => {
    renderWithTheme(<InputPassword disabled placeholder="Disabled" />);

    const input = screen.getByPlaceholderText('Disabled');
    expect(input).toBeDisabled();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(<InputPassword className="custom-password" />);

    expect(container.querySelector('.custom-password')).toBeInTheDocument();
  });

  it('handles onFocus event', async () => {
    const user = userEvent.setup();
    const onFocus = vi.fn();

    renderWithTheme(<InputPassword onFocus={onFocus} placeholder="Test" />);

    const input = screen.getByPlaceholderText('Test');
    await user.click(input);

    expect(onFocus).toHaveBeenCalled();
  });

  it('handles onBlur event', async () => {
    const user = userEvent.setup();
    const onBlur = vi.fn();

    renderWithTheme(<InputPassword onBlur={onBlur} placeholder="Test" />);

    const input = screen.getByPlaceholderText('Test');
    await user.click(input);
    await user.tab();

    expect(onBlur).toHaveBeenCalled();
  });

  it('maintains visibility state while typing', async () => {
    const user = userEvent.setup();
    const { container } = renderWithTheme(<InputPassword placeholder="Password" />);

    const input = screen.getByPlaceholderText('Password');
    const eyeIcon = container.querySelector('svg');
    expect(eyeIcon).toBeInTheDocument();

    // Toggle to visible
    await user.click(eyeIcon as SVGElement);
    expect(input).toHaveAttribute('type', 'text');

    // Type while visible
    await user.type(input, 'test');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveValue('test');
  });

  it('renders with placeholder', () => {
    renderWithTheme(<InputPassword placeholder="Enter your password" />);

    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
  });
});
