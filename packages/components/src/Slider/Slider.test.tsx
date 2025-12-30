import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { Slider } from './Slider/Slider';
import { RangeSlider } from './RangeSlider/RangeSlider';

describe('@kubed/components/Slider', () => {
  describe('Slider basic functionality', () => {
    it('renders Slider component correctly', () => {
      const { container } = renderWithTheme(<Slider aria-label="test-slider" />);

      const slider = container.querySelector('input[type="hidden"]');
      expect(slider).toBeInTheDocument();
    });

    it('renders with default value', () => {
      const { container } = renderWithTheme(<Slider defaultValue={50} aria-label="test-slider" />);

      const hiddenInput = container.querySelector('input[type="hidden"]') as HTMLInputElement;
      expect(hiddenInput?.value).toBe('50');
    });

    it('renders with controlled value', () => {
      const { container } = renderWithTheme(<Slider value={75} aria-label="test-slider" />);

      const hiddenInput = container.querySelector('input[type="hidden"]') as HTMLInputElement;
      expect(hiddenInput?.value).toBe('75');
    });

    it('renders disabled slider', () => {
      const { container } = renderWithTheme(<Slider disabled aria-label="test-slider" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports min and max props', () => {
      const { container } = renderWithTheme(
        <Slider min={10} max={90} defaultValue={50} aria-label="test-slider" />
      );

      const hiddenInput = container.querySelector('input[type="hidden"]') as HTMLInputElement;
      expect(hiddenInput?.value).toBe('50');
    });

    it('supports step prop', () => {
      const { container } = renderWithTheme(
        <Slider value={50} step={10} aria-label="test-slider" />
      );

      const hiddenInput = container.querySelector('input[type="hidden"]') as HTMLInputElement;
      expect(hiddenInput?.value).toBe('50');
    });

    it('supports marks prop', () => {
      const marks = [
        { value: 0, label: '0' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
      ];

      renderWithTheme(<Slider marks={marks} aria-label="test-slider" />);

      expect(screen.getByText('0')).toBeInTheDocument();
      expect(screen.getByText('50')).toBeInTheDocument();
      expect(screen.getByText('100')).toBeInTheDocument();
    });

    it('renders with name prop for form submission', () => {
      const { container } = renderWithTheme(
        <Slider name="test-slider-input" defaultValue={50} aria-label="test-slider" />
      );

      const hiddenInput = container.querySelector(
        'input[name="test-slider-input"]'
      ) as HTMLInputElement;
      expect(hiddenInput).toBeInTheDocument();
      expect(hiddenInput?.value).toBe('50');
    });

    it('supports custom label function', () => {
      const labelFormatter = (value: number) => `$${value}`;
      const { container } = renderWithTheme(
        <Slider value={50} label={labelFormatter} labelAlwaysOn aria-label="test-slider" />
      );

      expect(container.querySelector('[role]')).toBeInTheDocument();
    });

    it('supports different sizes', () => {
      const { container } = renderWithTheme(<Slider size="sm" aria-label="test-slider" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports different radius values', () => {
      const { container } = renderWithTheme(<Slider radius="md" aria-label="test-slider" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports decimals prop', () => {
      const { container } = renderWithTheme(
        <Slider decimals={2} defaultValue={33.33} aria-label="test-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports showLabelOnHover prop', () => {
      const { container } = renderWithTheme(<Slider showLabelOnHover aria-label="test-slider" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports thumbLabel prop', () => {
      const { container } = renderWithTheme(
        <Slider thumbLabel="Slider value" aria-label="test-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports thumbChildren prop', () => {
      const { container } = renderWithTheme(
        <Slider thumbChildren={<span>👍</span>} aria-label="test-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports marks with custom weights', () => {
      const marks = [
        { value: 0, label: 'Start', weight: 1 },
        { value: 50, label: 'Middle', weight: 2 },
        { value: 100, label: 'End', weight: 1 },
      ];

      renderWithTheme(<Slider marks={marks} aria-label="test-slider" />);

      expect(screen.getByText('Start')).toBeInTheDocument();
      expect(screen.getByText('Middle')).toBeInTheDocument();
      expect(screen.getByText('End')).toBeInTheDocument();
    });
  });

  describe('RangeSlider basic functionality', () => {
    it('renders RangeSlider component correctly', () => {
      const { container } = renderWithTheme(<RangeSlider aria-label="test-range-slider" />);

      const hiddenInputs = container.querySelectorAll('input[type="hidden"]');
      expect(hiddenInputs).toHaveLength(2);
    });

    it('renders with default value', () => {
      const { container } = renderWithTheme(
        <RangeSlider defaultValue={[20, 80]} aria-label="test-range-slider" />
      );

      const hiddenInputs = container.querySelectorAll(
        'input[type="hidden"]'
      ) as NodeListOf<HTMLInputElement>;
      expect(hiddenInputs[0]?.value).toBe('20');
      expect(hiddenInputs[1]?.value).toBe('80');
    });

    it('renders with controlled value', () => {
      const { container } = renderWithTheme(
        <RangeSlider value={[30, 70]} aria-label="test-range-slider" />
      );

      const hiddenInputs = container.querySelectorAll(
        'input[type="hidden"]'
      ) as NodeListOf<HTMLInputElement>;
      expect(hiddenInputs[0]?.value).toBe('30');
      expect(hiddenInputs[1]?.value).toBe('70');
    });

    it('supports min and max props', () => {
      const { container } = renderWithTheme(
        <RangeSlider min={0} max={200} defaultValue={[50, 150]} aria-label="test-range-slider" />
      );

      const hiddenInputs = container.querySelectorAll(
        'input[type="hidden"]'
      ) as NodeListOf<HTMLInputElement>;
      expect(hiddenInputs[0]?.value).toBe('50');
      expect(hiddenInputs[1]?.value).toBe('150');
    });

    it('supports minRange prop', () => {
      const { container } = renderWithTheme(
        <RangeSlider value={[40, 60]} minRange={20} aria-label="test-range-slider" />
      );

      const hiddenInputs = container.querySelectorAll(
        'input[type="hidden"]'
      ) as NodeListOf<HTMLInputElement>;
      expect(hiddenInputs[0]?.value).toBe('40');
      expect(hiddenInputs[1]?.value).toBe('60');
    });

    it('supports marks prop', () => {
      const marks = [
        { value: 0, label: 'Start' },
        { value: 50, label: 'Middle' },
        { value: 100, label: 'End' },
      ];

      renderWithTheme(<RangeSlider marks={marks} aria-label="test-range-slider" />);

      expect(screen.getByText('Start')).toBeInTheDocument();
      expect(screen.getByText('Middle')).toBeInTheDocument();
      expect(screen.getByText('End')).toBeInTheDocument();
    });

    it('renders disabled range slider', () => {
      const { container } = renderWithTheme(
        <RangeSlider disabled aria-label="test-range-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with name prop for form submission', () => {
      const { container } = renderWithTheme(
        <RangeSlider name="range" defaultValue={[30, 70]} aria-label="test-range-slider" />
      );

      const fromInput = container.querySelector('input[name="range_from"]') as HTMLInputElement;
      const toInput = container.querySelector('input[name="range_to"]') as HTMLInputElement;

      expect(fromInput).toBeInTheDocument();
      expect(toInput).toBeInTheDocument();
      expect(fromInput?.value).toBe('30');
      expect(toInput?.value).toBe('70');
    });

    it('supports custom label function', () => {
      const labelFormatter = (value: number) => `${value}%`;
      const { container } = renderWithTheme(
        <RangeSlider
          value={[30, 70]}
          label={labelFormatter}
          labelAlwaysOn
          aria-label="test-range-slider"
        />
      );

      expect(container.querySelector('[role]')).toBeInTheDocument();
    });

    it('supports different sizes', () => {
      const { container } = renderWithTheme(
        <RangeSlider size="lg" aria-label="test-range-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports showLabelOnHover prop', () => {
      const { container } = renderWithTheme(
        <RangeSlider showLabelOnHover aria-label="test-range-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports thumbFromLabel and thumbToLabel props', () => {
      const { container } = renderWithTheme(
        <RangeSlider
          thumbFromLabel="From value"
          thumbToLabel="To value"
          aria-label="test-range-slider"
        />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports step prop', () => {
      const { container } = renderWithTheme(
        <RangeSlider value={[20, 80]} step={10} aria-label="test-range-slider" />
      );

      const hiddenInputs = container.querySelectorAll(
        'input[type="hidden"]'
      ) as NodeListOf<HTMLInputElement>;
      expect(hiddenInputs[0]?.value).toBe('20');
      expect(hiddenInputs[1]?.value).toBe('80');
    });

    it('supports decimals prop', () => {
      const { container } = renderWithTheme(
        <RangeSlider decimals={2} defaultValue={[25.55, 75.75]} aria-label="test-range-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports thumbChildren prop', () => {
      const { container } = renderWithTheme(
        <RangeSlider thumbChildren={<span>👆</span>} aria-label="test-range-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports thumbChildren as array', () => {
      const { container } = renderWithTheme(
        <RangeSlider
          thumbChildren={[<span key="1">👈</span>, <span key="2">👉</span>]}
          aria-label="test-range-slider"
        />
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports marks with weights', () => {
      const marks = [
        { value: 0, label: 'Low', weight: 1 },
        { value: 50, label: 'Medium', weight: 2 },
        { value: 100, label: 'High', weight: 1 },
      ];

      renderWithTheme(<RangeSlider marks={marks} aria-label="test-range-slider" />);

      expect(screen.getByText('Low')).toBeInTheDocument();
      expect(screen.getByText('Medium')).toBeInTheDocument();
      expect(screen.getByText('High')).toBeInTheDocument();
    });

    it('supports different radius values', () => {
      const { container } = renderWithTheme(
        <RangeSlider radius="sm" aria-label="test-range-slider" />
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
