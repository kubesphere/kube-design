import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShowMore } from './ShowMore';
import { vi } from 'vitest';

describe('@kubed/components/ShowMore', () => {
  describe('ShowMore basic functionality', () => {
    it('renders ShowMore component correctly', () => {
      const { container } = renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          <div>Content</div>
        </ShowMore>
      );

      expect(container.firstChild).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders children content', () => {
      renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          <div>Test content</div>
          <div>More content</div>
        </ShowMore>
      );

      expect(screen.getByText('Test content')).toBeInTheDocument();
      expect(screen.getByText('More content')).toBeInTheDocument();
    });

    it('shows showLabel when collapsed', async () => {
      // Mock offsetHeight to return 200
      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(200);

      const tallContent = (
        <div style={{ height: '200px' }}>Tall content that exceeds maxHeight</div>
      );

      renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          {tallContent}
        </ShowMore>
      );

      await waitFor(() => {
        expect(screen.queryByText('Show more')).toBeInTheDocument();
      });

      offsetHeightSpy.mockRestore();
    });

    it('does not show button when content is shorter than maxHeight', () => {
      const shortContent = <div style={{ height: '50px' }}>Short content</div>;

      renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          {shortContent}
        </ShowMore>
      );

      const button = screen.queryByText('Show more');
      expect(button).not.toBeInTheDocument();
    });
  });

  describe('ShowMore expand/collapse', () => {
    it('toggles between show and hide labels when clicked', async () => {
      const user = userEvent.setup();
      const tallContent = <div style={{ height: '200px' }}>Tall content</div>;

      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(200);

      renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          {tallContent}
        </ShowMore>
      );

      await waitFor(() => {
        expect(screen.queryByText('Show more')).toBeInTheDocument();
      });

      const button = screen.getByText('Show more');
      await user.click(button);

      await waitFor(() => {
        expect(screen.queryByText('Show less')).toBeInTheDocument();
      });

      await user.click(screen.getByText('Show less'));

      await waitFor(() => {
        expect(screen.queryByText('Show more')).toBeInTheDocument();
      });

      offsetHeightSpy.mockRestore();
    });

    it('starts expanded when expanded prop is true', async () => {
      const tallContent = <div style={{ height: '200px' }}>Tall content</div>;

      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(200);

      renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less" expanded>
          {tallContent}
        </ShowMore>
      );

      await waitFor(() => {
        expect(screen.queryByText('Show less')).toBeInTheDocument();
      });

      offsetHeightSpy.mockRestore();
    });

    it('starts collapsed when expanded prop is false', async () => {
      const tallContent = <div style={{ height: '200px' }}>Tall content</div>;

      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(200);

      renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less" expanded={false}>
          {tallContent}
        </ShowMore>
      );

      await waitFor(() => {
        expect(screen.queryByText('Show more')).toBeInTheDocument();
      });

      offsetHeightSpy.mockRestore();
    });
  });

  describe('ShowMore configuration', () => {
    it('respects custom maxHeight', () => {
      const content = <div style={{ height: '150px' }}>Content</div>;

      renderWithTheme(
        <ShowMore maxHeight={200} showLabel="Show more" hideLabel="Show less">
          {content}
        </ShowMore>
      );

      // Content is 150px, maxHeight is 200px, so no button should appear
      const button = screen.queryByText('Show more');
      expect(button).not.toBeInTheDocument();
    });

    it('supports custom transitionDuration', () => {
      const { container } = renderWithTheme(
        <ShowMore
          maxHeight={100}
          showLabel="Show more"
          hideLabel="Show less"
          transitionDuration={500}
        >
          <div>Content</div>
        </ShowMore>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports transitionDuration of 0', () => {
      const { container } = renderWithTheme(
        <ShowMore
          maxHeight={100}
          showLabel="Show more"
          hideLabel="Show less"
          transitionDuration={0}
        >
          <div>Content</div>
        </ShowMore>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('uses default transitionDuration when not specified', () => {
      const { container } = renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          <div>Content</div>
        </ShowMore>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('ShowMore labels', () => {
    it('supports React nodes as labels', async () => {
      const user = userEvent.setup();
      const tallContent = <div style={{ height: '200px' }}>Tall content</div>;

      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(200);

      renderWithTheme(
        <ShowMore
          maxHeight={100}
          showLabel={<span className="custom-show">Custom Show</span>}
          hideLabel={<span className="custom-hide">Custom Hide</span>}
        >
          {tallContent}
        </ShowMore>
      );

      await waitFor(() => {
        expect(screen.queryByText('Custom Show')).toBeInTheDocument();
      });

      const button = screen.getByText('Custom Show');
      await user.click(button);

      await waitFor(() => {
        expect(screen.queryByText('Custom Hide')).toBeInTheDocument();
      });

      offsetHeightSpy.mockRestore();
    });

    it('displays different show and hide labels', async () => {
      const user = userEvent.setup();
      const tallContent = <div style={{ height: '200px' }}>Tall content</div>;

      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(200);

      renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Expand" hideLabel="Collapse">
          {tallContent}
        </ShowMore>
      );

      await waitFor(() => {
        expect(screen.queryByText('Expand')).toBeInTheDocument();
      });
      expect(screen.queryByText('Collapse')).not.toBeInTheDocument();

      const button = screen.getByText('Expand');
      await user.click(button);

      await waitFor(() => {
        expect(screen.queryByText('Collapse')).toBeInTheDocument();
      });
      expect(screen.queryByText('Expand')).not.toBeInTheDocument();

      offsetHeightSpy.mockRestore();
    });
  });

  describe('ShowMore styling', () => {
    it('supports custom className', () => {
      const { container } = renderWithTheme(
        <ShowMore
          maxHeight={100}
          showLabel="Show more"
          hideLabel="Show less"
          className="custom-showmore"
        >
          <div>Content</div>
        </ShowMore>
      );

      expect(container.querySelector('.custom-showmore')).toBeInTheDocument();
    });

    it('supports custom style', () => {
      const { container } = renderWithTheme(
        <ShowMore
          maxHeight={100}
          showLabel="Show more"
          hideLabel="Show less"
          style={{ border: '1px solid red' }}
        >
          <div>Content</div>
        </ShowMore>
      );

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper).toHaveStyle('border: 1px solid red');
    });

    it('renders button with correct className', async () => {
      const tallContent = <div style={{ height: '200px' }}>Tall content</div>;

      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(200);

      const { container } = renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          {tallContent}
        </ShowMore>
      );

      await waitFor(() => {
        expect(container.querySelector('.showmore-button')).toBeInTheDocument();
      });

      offsetHeightSpy.mockRestore();
    });
  });

  describe('ShowMore edge cases', () => {
    it('updates when children change', async () => {
      const { rerender } = renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          <div style={{ height: '50px' }}>Short content</div>
        </ShowMore>
      );

      expect(screen.queryByText('Show more')).not.toBeInTheDocument();

      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(200);

      rerender(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          <div style={{ height: '200px' }}>Tall content</div>
        </ShowMore>
      );

      await waitFor(() => {
        expect(screen.queryByText('Show more')).toBeInTheDocument();
      });

      offsetHeightSpy.mockRestore();
    });

    it('updates when maxHeight changes', async () => {
      const content = <div style={{ height: '150px' }}>Content</div>;

      const { rerender } = renderWithTheme(
        <ShowMore maxHeight={200} showLabel="Show more" hideLabel="Show less">
          {content}
        </ShowMore>
      );

      expect(screen.queryByText('Show more')).not.toBeInTheDocument();

      const offsetHeightSpy = vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get');
      offsetHeightSpy.mockReturnValue(150);

      rerender(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          {content}
        </ShowMore>
      );

      await waitFor(() => {
        expect(screen.queryByText('Show more')).toBeInTheDocument();
      });

      offsetHeightSpy.mockRestore();
    });

    it('handles empty children', () => {
      const { container } = renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          {null}
        </ShowMore>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles complex nested content', () => {
      renderWithTheme(
        <ShowMore maxHeight={100} showLabel="Show more" hideLabel="Show less">
          <div>
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        </ShowMore>
      );

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });
  });
});
