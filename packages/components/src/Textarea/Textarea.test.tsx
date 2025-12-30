import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@kubed/tests';
import { Textarea } from './Textarea';

describe('@kubed/components/Textarea', () => {
  it('renders textarea element', () => {
    renderWithTheme(<Textarea placeholder="Enter text" />);

    const textarea = screen.getByPlaceholderText('Enter text');
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('handles value changes', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(<Textarea placeholder="Enter text" onChange={onChange} />);

    const textarea = screen.getByPlaceholderText('Enter text');
    await user.type(textarea, 'Hello');

    expect(onChange).toHaveBeenCalled();
    expect(textarea).toHaveValue('Hello');
  });

  it('renders with default value', () => {
    renderWithTheme(<Textarea defaultValue="Default text" />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Default text');
  });

  it('renders with controlled value', () => {
    renderWithTheme(<Textarea value="Controlled" onChange={() => {}} />);

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue('Controlled');
  });

  it('handles disabled state', () => {
    renderWithTheme(<Textarea disabled placeholder="Disabled textarea" />);

    const textarea = screen.getByPlaceholderText('Disabled textarea');
    expect(textarea).toBeDisabled();
  });

  it('handles readonly state', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(<Textarea readOnly placeholder="Readonly" onChange={onChange} />);

    const textarea = screen.getByPlaceholderText('Readonly');
    await user.type(textarea, 'test');

    expect(onChange).not.toHaveBeenCalled();
  });

  it('handles focus and blur events', async () => {
    const user = userEvent.setup();
    const onFocus = vi.fn();
    const onBlur = vi.fn();

    renderWithTheme(<Textarea onFocus={onFocus} onBlur={onBlur} placeholder="Test" />);

    const textarea = screen.getByPlaceholderText('Test');

    await user.click(textarea);
    expect(onFocus).toHaveBeenCalled();

    await user.tab();
    expect(onBlur).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(<Textarea className="custom-textarea" />);

    expect(container.querySelector('.custom-textarea')).toBeInTheDocument();
  });

  it('handles width prop', () => {
    const { container } = renderWithTheme(<Textarea width={300} />);

    const wrapper = container.querySelector('.input-wrapper');
    expect(wrapper).toHaveStyle({ width: '300px' });
  });

  it('applies focus styles', async () => {
    const user = userEvent.setup();
    const { container } = renderWithTheme(<Textarea placeholder="Test" />);

    const textarea = screen.getByPlaceholderText('Test');
    const wrapper = container.querySelector('.input-wrapper');

    expect(wrapper).not.toHaveClass('input-focus');

    await user.click(textarea);
    expect(wrapper).toHaveClass('input-focus');
  });

  it('applies disabled styles', () => {
    const { container } = renderWithTheme(<Textarea disabled />);

    const wrapper = container.querySelector('.input-wrapper');
    expect(wrapper).toHaveClass('input-disabled');
  });

  it('prevents changes when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(<Textarea disabled onChange={onChange} placeholder="Disabled" />);

    const textarea = screen.getByPlaceholderText('Disabled');
    await user.type(textarea, 'test');

    expect(onChange).not.toHaveBeenCalled();
  });

  it('supports autosize prop', () => {
    renderWithTheme(<Textarea autosize placeholder="Auto resize" />);

    const textarea = screen.getByPlaceholderText('Auto resize');
    expect(textarea).toBeInTheDocument();
  });

  it('supports maxHeight prop with autosize', () => {
    renderWithTheme(<Textarea autosize maxHeight={200} placeholder="Max height" />);

    const textarea = screen.getByPlaceholderText('Max height');
    expect(textarea).toBeInTheDocument();
  });
});
