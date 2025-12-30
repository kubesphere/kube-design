import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@kubed/tests';
import { Select } from './Select';

const { Option } = Select;

describe('@kubed/components/Select', () => {
  it('has correct displayName', () => {
    expect(Select.displayName).toBe('@kubed/components/Select');
  });

  it('renders with options', () => {
    renderWithTheme(
      <Select placeholder="Select an option">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('shows options when clicked', async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Select placeholder="Select an option" data-testid="select">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
    );

    const selector = screen.getByText('Select an option');
    await user.click(selector);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });
  });

  it('handles onChange callback', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(
      <Select placeholder="Select an option" onChange={onChange}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
    );

    const selector = screen.getByText('Select an option');
    await user.click(selector);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const option1 = screen.getByText('Option 1');
    await user.click(option1);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith('option1', expect.anything());
    });
  });

  it('renders with default value', () => {
    renderWithTheme(
      <Select defaultValue="option2">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
    );

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('renders in disabled state', () => {
    renderWithTheme(
      <Select disabled placeholder="Disabled select">
        <Option value="option1">Option 1</Option>
      </Select>
    );

    const selector = screen.getByText('Disabled select').closest('.kubed-select');
    expect(selector).toHaveClass('kubed-select-disabled');
  });

  it('handles multiple selection mode', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithTheme(
      <Select mode="multiple" placeholder="Select multiple" onChange={onChange}>
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    );

    const selector = screen.getByText('Select multiple');
    await user.click(selector);

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    const option1 = screen.getByText('Option 1');
    await user.click(option1);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('shows clear button when allowClear is true', () => {
    renderWithTheme(
      <Select allowClear defaultValue="option1">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
      </Select>
    );

    const clearIcon = document.querySelector('.kubed-select-clear');
    expect(clearIcon).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    const { container } = renderWithTheme(
      <Select className="custom-select" placeholder="Select">
        <Option value="option1">Option 1</Option>
      </Select>
    );

    expect(container.querySelector('.custom-select')).toBeInTheDocument();
  });

  it('renders not found content when no options match', async () => {
    const user = userEvent.setup();
    renderWithTheme(
      <Select placeholder="Select an option" showSearch notFoundContent="No results found">
        <Option value="option1">Option 1</Option>
      </Select>
    );

    const selector = screen.getByText('Select an option');
    await user.click(selector);

    const searchInput = document.querySelector('input');
    expect(searchInput).toBeInTheDocument();

    await user.type(searchInput as HTMLInputElement, 'nonexistent');

    await waitFor(() => {
      expect(screen.getByText('No results found')).toBeInTheDocument();
    });
  });

  it('renders loading state', () => {
    renderWithTheme(
      <Select loading placeholder="Loading select">
        <Option value="option1">Option 1</Option>
      </Select>
    );

    const loadingIcon = document.querySelector('.kubed-select-arrow-loading');
    expect(loadingIcon).toBeInTheDocument();
  });
});
