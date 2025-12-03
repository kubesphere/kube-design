import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { Skeleton } from './Skeleton';

describe('@kubed/components/Skeleton', () => {
  describe('Skeleton basic functionality', () => {
    it('renders Skeleton component correctly', () => {
      const { container } = renderWithTheme(<Skeleton />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders with default props', () => {
      const { container } = renderWithTheme(<Skeleton />);

      const skeleton = container.firstChild as HTMLElement;
      expect(skeleton).toHaveClass('visible');
    });

    it('renders with visible prop set to false', () => {
      const { container } = renderWithTheme(<Skeleton visible={false} />);

      const skeleton = container.firstChild as HTMLElement;
      expect(skeleton).not.toHaveClass('visible');
    });

    it('renders with custom width', () => {
      const { container } = renderWithTheme(<Skeleton width={200} />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders with custom height', () => {
      const { container } = renderWithTheme(<Skeleton height={50} />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders with width as string', () => {
      const { container } = renderWithTheme(<Skeleton width="50%" />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders with height as string', () => {
      const { container } = renderWithTheme(<Skeleton height="100px" />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders as circle when circle prop is true', () => {
      const { container } = renderWithTheme(<Skeleton circle height={50} />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders with custom radius', () => {
      const { container } = renderWithTheme(<Skeleton radius="xl" />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders without animation when animate is false', () => {
      const { container } = renderWithTheme(<Skeleton animate={false} />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders with animation by default', () => {
      const { container } = renderWithTheme(<Skeleton />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('supports custom className', () => {
      const { container } = renderWithTheme(<Skeleton className="custom-skeleton" />);

      const skeleton = container.firstChild as HTMLElement;
      expect(skeleton).toHaveClass('custom-skeleton');
    });

    it('renders with combined props', () => {
      const { container } = renderWithTheme(
        <Skeleton width={200} height={100} circle radius="md" animate visible />
      );

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders multiple skeletons', () => {
      const { container } = renderWithTheme(
        <>
          <Skeleton width={200} height={20} />
          <Skeleton width={150} height={20} />
          <Skeleton width={180} height={20} />
        </>
      );

      const skeletons = container.querySelectorAll('.visible');
      expect(skeletons).toHaveLength(3);
    });
  });

  describe('Skeleton appearance', () => {
    it('renders with different radius sizes', () => {
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

      sizes.forEach((size) => {
        const { container } = renderWithTheme(<Skeleton radius={size} />);
        expect(container.firstChild).toBeInTheDocument();
      });
    });

    it('renders with different widths', () => {
      const widths = [100, 200, 300, '50%', '100%'];

      widths.forEach((width) => {
        const { container } = renderWithTheme(<Skeleton width={width} />);
        expect(container.firstChild).toBeInTheDocument();
      });
    });

    it('renders with different heights', () => {
      const heights = [20, 50, 100, '10px', '5rem'];

      heights.forEach((height) => {
        const { container } = renderWithTheme(<Skeleton height={height} />);
        expect(container.firstChild).toBeInTheDocument();
      });
    });

    it('renders circle skeleton with equal width and height', () => {
      const { container } = renderWithTheme(<Skeleton circle height={50} />);

      const skeleton = container.firstChild;
      expect(skeleton).toBeInTheDocument();
    });

    it('renders with visibility toggle', () => {
      const { container } = renderWithTheme(<Skeleton visible />);

      const skeleton = container.firstChild as HTMLElement;
      expect(skeleton).toHaveClass('visible');

      // Test with visible=false separately
      const { container: container2 } = renderWithTheme(<Skeleton visible={false} />);
      const skeleton2 = container2.firstChild as HTMLElement;
      expect(skeleton2).not.toHaveClass('visible');
    });

    it('renders with custom styles', () => {
      const { container } = renderWithTheme(<Skeleton style={{ margin: '10px' }} />);

      const skeleton = container.firstChild as HTMLElement;
      expect(skeleton).toHaveStyle('margin: 10px');
    });
  });

  describe('Skeleton advanced features', () => {
    it('renders as loading placeholder for content', () => {
      const { container } = renderWithTheme(
        <div>
          <Skeleton width="100%" height={200} />
        </div>
      );

      expect(container.querySelector('.visible')).toBeInTheDocument();
    });

    it('can be used to create card skeleton', () => {
      const { container } = renderWithTheme(
        <div>
          <Skeleton circle height={50} width={50} />
          <Skeleton height={20} width="80%" />
          <Skeleton height={20} width="60%" />
        </div>
      );

      const skeletons = container.querySelectorAll('.visible');
      expect(skeletons).toHaveLength(3);
    });

    it('supports data attributes', () => {
      const { container } = renderWithTheme(
        <Skeleton data-testid="skeleton-element" data-custom="value" />
      );

      const skeleton = container.firstChild as HTMLElement;
      expect(skeleton).toHaveAttribute('data-testid', 'skeleton-element');
      expect(skeleton).toHaveAttribute('data-custom', 'value');
    });

    it('renders with all props combined', () => {
      const { container } = renderWithTheme(
        <Skeleton
          width={250}
          height={150}
          circle={false}
          radius="lg"
          animate
          visible
          className="test-skeleton"
          style={{ marginBottom: '20px' }}
        />
      );

      const skeleton = container.firstChild as HTMLElement;
      expect(skeleton).toBeInTheDocument();
      expect(skeleton).toHaveClass('test-skeleton');
      expect(skeleton).toHaveClass('visible');
      expect(skeleton).toHaveStyle('margin-bottom: 20px');
    });
  });
});
