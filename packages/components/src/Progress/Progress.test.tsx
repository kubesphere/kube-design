import React from 'react';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@kubed/tests';
import { Progress } from './Progress';

describe('@kubed/components/Progress', () => {
  it('has correct displayName', () => {
    expect(Progress.displayName).toBe('@kubed/components/Progress');
  });

  it('renders progress bar with value', () => {
    const { container } = renderWithTheme(<Progress value={50} color="primary" />);

    const progressBar = container.querySelector('div[style*="width"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('renders with 0% value', () => {
    const { container } = renderWithTheme(<Progress value={0} color="primary" />);

    const progressBar = container.querySelector('div[style*="width: 0%"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('renders with 100% value', () => {
    const { container } = renderWithTheme(<Progress value={100} color="primary" />);

    const progressBar = container.querySelector('div[style*="width: 100%"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('renders with custom color', () => {
    const { container } = renderWithTheme(<Progress value={50} color="success" />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with striped prop', () => {
    const { container } = renderWithTheme(<Progress value={50} color="primary" striped />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with sections', () => {
    const sections = [
      { value: 30, color: 'red' },
      { value: 20, color: 'blue' },
      { value: 50, color: 'green' },
    ];

    const { container } = renderWithTheme(<Progress sections={sections} />);

    const progressBars = container.querySelectorAll('div[style*="width"]');
    expect(progressBars.length).toBeGreaterThan(0);
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Progress value={50} color="primary" className="custom-progress" />
    );

    expect(container.querySelector('.custom-progress')).toBeInTheDocument();
  });

  it('applies custom style', () => {
    const { container } = renderWithTheme(
      <Progress value={50} color="primary" style={{ marginTop: '10px' }} />
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper).toBeTruthy();
  });

  it('handles size prop', () => {
    const { container } = renderWithTheme(<Progress value={50} color="primary" size="lg" />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('handles radius prop', () => {
    const { container } = renderWithTheme(<Progress value={50} color="primary" radius="md" />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders multiple sections with correct widths', () => {
    const sections = [
      { value: 25, color: 'red' },
      { value: 25, color: 'blue' },
    ];

    const { container } = renderWithTheme(<Progress sections={sections} />);

    const section1 = container.querySelector('div[style*="width: 25%"]');
    expect(section1).toBeInTheDocument();
  });

  it('calculates accumulated positions for sections', () => {
    const sections = [
      { value: 30, color: 'red' },
      { value: 40, color: 'blue' },
    ];

    const { container } = renderWithTheme(<Progress sections={sections} />);

    const section2 = container.querySelector('div[style*="left: 30%"]');
    expect(section2).toBeInTheDocument();
  });

  it('can be used with ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    renderWithTheme(<Progress value={50} color="primary" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('renders without value when sections are provided', () => {
    const sections = [{ value: 50, color: 'blue' }];

    const { container } = renderWithTheme(<Progress value={75} sections={sections} />);

    // When sections are provided, value prop should be ignored
    const progressBar = container.querySelector('div[style*="width: 50%"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('handles empty sections array', () => {
    const { container } = renderWithTheme(<Progress sections={[]} color="primary" />);

    const wrapper = container.firstChild;
    expect(wrapper).toBeInTheDocument();
  });
});
