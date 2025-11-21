import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '@kubed/tests';
import { Check, Close } from '@kubed/icons';
import { ActionConfirm } from './ActionConfirm';

// Mock the icons and Loading component
vi.mock(import('@kubed/icons'), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    Check: () => <svg data-testid="check-icon" />,
    Close: () => <svg data-testid="close-icon" />,
  };
});
vi.mock('../Loading/Loading', () => ({
  Loading: ({ size }: { size: number }) => <div data-testid="loading-icon" data-size={size} />,
}));

describe('@kubed/components/ActionConfirm', () => {
  it('renders correctly when visible', () => {
    const { container } = renderWithTheme(<ActionConfirm visible />);
    // Check if default icons are rendered
    expect(screen.getByTestId('close-icon')).toBeInTheDocument();
    expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    // Check visibility style (more robust check might involve computed styles)
    expect(container.firstChild).toHaveStyle('visibility: visible');
  });

  it('renders correctly when hidden', () => {
    const { container } = renderWithTheme(<ActionConfirm visible={false} />);
    // Check visibility style
    expect(container.firstChild).toHaveStyle('visibility: hidden');
  });

  it('renders custom okText and cancelText', () => {
    renderWithTheme(<ActionConfirm visible okText="Confirm" cancelText="Dismiss" />);
    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Dismiss')).toBeInTheDocument();
  });

  it('calls onOk when the ok button is clicked', () => {
    const onOkMock = vi.fn();
    renderWithTheme(<ActionConfirm visible onOk={onOkMock} />);
    fireEvent.click(screen.getByTestId('check-icon').parentElement!); // Click the button containing the icon
    expect(onOkMock).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when the cancel button is clicked', () => {
    const onCancelMock = vi.fn();
    renderWithTheme(<ActionConfirm visible onCancel={onCancelMock} />);
    fireEvent.click(screen.getByTestId('close-icon').parentElement!); // Click the button containing the icon
    expect(onCancelMock).toHaveBeenCalledTimes(1);
  });

  it('shows loading state when confirmLoading is true', () => {
    renderWithTheme(<ActionConfirm visible confirmLoading />);
    expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
    expect(screen.getByTestId('loading-icon')).toHaveAttribute('data-size', '14');
    expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument(); // Default OK icon should not be present
  });

  it('shows custom okText when confirmLoading is true', () => {
    renderWithTheme(<ActionConfirm visible confirmLoading okText="Saving..." />);
    expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
    expect(screen.queryByText('Saving...')).not.toBeInTheDocument(); // okText should not be rendered when loading
    expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument();
  });

  it('does not call onOk when confirmLoading is true and ok button is clicked', () => {
    const onOkMock = vi.fn();
    renderWithTheme(<ActionConfirm visible onOk={onOkMock} confirmLoading />);
    // The button itself might be the loading icon's parent or a sibling wrapper
    // Let's find the button associated with loading
    const okButton = screen.getByTestId('loading-icon').parentElement!;
    fireEvent.click(okButton);
    expect(onOkMock).not.toHaveBeenCalled();
  });

  it('applies loading styles when confirmLoading is true', () => {
    renderWithTheme(<ActionConfirm visible confirmLoading />);
    const okButton = screen.getByTestId('loading-icon').parentElement!;
    // Check for styles applied by the $loading prop in styled-components
    // This might require snapshot testing or jest-styled-components for precise style checks
    expect(okButton).toHaveStyle('cursor: not-allowed');
  });
});
