import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import TimePicker from './TimePicker';

describe('@kubed/components/TimePicker', () => {
  it('renders TimePicker component correctly', () => {
    const { container } = renderWithTheme(<TimePicker />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('has RangePicker as static property', () => {
    expect(TimePicker.RangePicker).toBeDefined();
  });

  it('renders RangePicker component', () => {
    const { container } = renderWithTheme(<TimePicker.RangePicker />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(TimePicker.displayName).toBe('kubed/components/TimePicker');
  });
});
