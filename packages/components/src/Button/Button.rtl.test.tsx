import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithTheme, checkRTLAccessibility } from '@kubed/tests';
import { Button } from './Button';

describe('@kubed/components/Button with RTL', () => {
  it('renders correctly', () => {
    renderWithTheme(<Button>Kubed button</Button>);
    expect(screen.getByText('Kubed button')).toBeInTheDocument();
  });

  it('renders with type attribute', () => {
    renderWithTheme(<Button type="submit">Submit</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('renders as disabled', () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // 可访问性测试
  it('has no accessibility violations', async () => {
    const rendered = renderWithTheme(<Button>Accessible button</Button>);
    await checkRTLAccessibility(rendered);
  });
});
