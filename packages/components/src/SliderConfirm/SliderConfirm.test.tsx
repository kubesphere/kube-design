import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { SliderConfirm } from './SliderConfirm';

describe('@kubed/components/SliderConfirm', () => {
  describe('SliderConfirm basic functionality', () => {
    it('renders SliderConfirm component correctly', () => {
      const { container } = renderWithTheme(<SliderConfirm />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with default structure', () => {
      const { container } = renderWithTheme(<SliderConfirm />);

      const track = container.querySelector('.slider-track');
      const dragBackground = container.querySelector('.drag-background');
      const dragHandler = container.querySelector('.drag-handler');

      expect(track).toBeInTheDocument();
      expect(dragBackground).toBeInTheDocument();
      expect(dragHandler).toBeInTheDocument();
    });

    it('renders without tip when tip prop is not provided', () => {
      const { container } = renderWithTheme(<SliderConfirm />);

      const tip = container.querySelector('.slider-tip');
      expect(tip).toBeInTheDocument();
      expect(tip).toBeEmptyDOMElement();
    });

    it('renders with string tip', () => {
      renderWithTheme(<SliderConfirm tip="Slide to confirm" />);

      expect(screen.getByText('Slide to confirm')).toBeInTheDocument();
    });

    it('renders with React node tip', () => {
      renderWithTheme(
        <SliderConfirm
          tip={
            <span>
              <strong>Slide</strong> to confirm
            </span>
          }
        />
      );

      expect(screen.getByText('Slide')).toBeInTheDocument();
      expect(screen.getByText('to confirm')).toBeInTheDocument();
    });
  });

  describe('SliderConfirm drag icon', () => {
    it('renders without drag icon when dragIcon prop is not provided', () => {
      const { container } = renderWithTheme(<SliderConfirm />);

      const dragHandler = container.querySelector('.drag-handler');
      expect(dragHandler).toBeInTheDocument();
      expect(dragHandler).toBeEmptyDOMElement();
    });

    it('renders with custom drag icon', () => {
      renderWithTheme(<SliderConfirm dragIcon={<span>→</span>} />);

      expect(screen.getByText('→')).toBeInTheDocument();
    });

    it('renders with complex drag icon', () => {
      const customIcon = (
        <div className="custom-icon">
          <span>Drag me</span>
        </div>
      );

      const { container } = renderWithTheme(<SliderConfirm dragIcon={customIcon} />);

      expect(screen.getByText('Drag me')).toBeInTheDocument();
      expect(container.querySelector('.custom-icon')).toBeInTheDocument();
    });
  });

  describe('SliderConfirm callbacks', () => {
    it('accepts onConfirm callback', () => {
      const handleConfirm = vi.fn();

      renderWithTheme(<SliderConfirm onConfirm={handleConfirm} />);

      expect(handleConfirm).not.toHaveBeenCalled();
    });

    it('does not throw error when onConfirm is not provided', () => {
      expect(() => {
        renderWithTheme(<SliderConfirm />);
      }).not.toThrow();
    });
  });

  describe('SliderConfirm styling', () => {
    it('supports custom className', () => {
      const { container } = renderWithTheme(<SliderConfirm className="custom-slider" />);

      expect(container.querySelector('.custom-slider')).toBeInTheDocument();
    });

    it('applies initial styles to drag handler', () => {
      const { container } = renderWithTheme(<SliderConfirm />);

      const dragHandler = container.querySelector('.drag-handler') as HTMLElement;
      expect(dragHandler).toHaveStyle({ left: '-24px' });
    });

    it('applies initial styles to drag background', () => {
      const { container } = renderWithTheme(<SliderConfirm />);

      const dragBackground = container.querySelector('.drag-background') as HTMLElement;
      expect(dragBackground).toHaveStyle({
        right: 'calc(100% - 28px)',
        opacity: '0',
      });
    });

    it('applies default tip color', () => {
      const { container } = renderWithTheme(<SliderConfirm tip="Test" />);

      const tip = container.querySelector('.slider-tip') as HTMLElement;
      expect(tip).toHaveStyle({ color: '#79879c' });
    });
  });

  describe('SliderConfirm with different tip values', () => {
    it('renders with empty string tip', () => {
      const { container } = renderWithTheme(<SliderConfirm tip="" />);

      const tip = container.querySelector('.slider-tip');
      expect(tip).toBeInTheDocument();
    });

    it('renders with numeric tip (as React node)', () => {
      renderWithTheme(<SliderConfirm tip={<span>123</span>} />);

      expect(screen.getByText('123')).toBeInTheDocument();
    });

    it('renders with long text tip', () => {
      const longText = 'This is a very long confirmation message that the user needs to read';
      renderWithTheme(<SliderConfirm tip={longText} />);

      expect(screen.getByText(longText)).toBeInTheDocument();
    });
  });

  describe('SliderConfirm component structure', () => {
    it('renders track element', () => {
      const { container } = renderWithTheme(<SliderConfirm />);

      const track = container.querySelector('.slider-track');
      expect(track).toBeInTheDocument();
    });

    it('renders drag handler wrapper', () => {
      const { container } = renderWithTheme(<SliderConfirm />);

      const dragHandler = container.querySelector('.drag-handler');
      expect(dragHandler?.parentElement?.parentElement).toBeInTheDocument();
    });

    it('renders all visual elements together', () => {
      const { container } = renderWithTheme(
        <SliderConfirm tip="Confirm action" dragIcon={<span>→</span>} />
      );

      expect(container.querySelector('.slider-track')).toBeInTheDocument();
      expect(container.querySelector('.drag-background')).toBeInTheDocument();
      expect(container.querySelector('.slider-tip')).toBeInTheDocument();
      expect(container.querySelector('.drag-handler')).toBeInTheDocument();
      expect(screen.getByText('Confirm action')).toBeInTheDocument();
      expect(screen.getByText('→')).toBeInTheDocument();
    });
  });

  describe('SliderConfirm edge cases', () => {
    it('handles null tip', () => {
      const { container } = renderWithTheme(<SliderConfirm tip={null} />);

      const tip = container.querySelector('.slider-tip');
      expect(tip).toBeInTheDocument();
    });

    it('handles undefined dragIcon', () => {
      const { container } = renderWithTheme(<SliderConfirm dragIcon={undefined} />);

      const dragHandler = container.querySelector('.drag-handler');
      expect(dragHandler).toBeInTheDocument();
    });

    it('renders multiple instances independently', () => {
      const { container } = renderWithTheme(
        <>
          <SliderConfirm tip="First slider" />
          <SliderConfirm tip="Second slider" />
        </>
      );

      expect(screen.getByText('First slider')).toBeInTheDocument();
      expect(screen.getByText('Second slider')).toBeInTheDocument();
      expect(container.querySelectorAll('.slider-track')).toHaveLength(2);
    });
  });

  describe('SliderConfirm displayName', () => {
    it('has correct displayName', () => {
      expect(SliderConfirm.displayName).toBe('@kubed/components/SliderConfirm');
    });
  });
});
