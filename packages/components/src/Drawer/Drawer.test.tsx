import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import Drawer from './Drawer';

describe('@kubed/components/drawer', () => {
  describe('Drawer basic functionality', () => {
    it('renders Drawer component correctly', () => {
      renderWithTheme(
        <Drawer visible>
          <div>Drawer content</div>
        </Drawer>
      );

      expect(screen.getByText('Drawer content')).toBeInTheDocument();
    });

    it('renders drawer content when visible', () => {
      renderWithTheme(
        <Drawer visible>
          <div>Test content</div>
        </Drawer>
      );

      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders with different content', () => {
      renderWithTheme(
        <Drawer visible>
          <div>Different content</div>
        </Drawer>
      );

      expect(screen.getByText('Different content')).toBeInTheDocument();
    });

    it('accepts visible prop as false', () => {
      expect(() => {
        renderWithTheme(
          <Drawer visible={false}>
            <div>Hidden content</div>
          </Drawer>
        );
      }).not.toThrow();
    });

    it('accepts visible prop as undefined', () => {
      expect(() => {
        renderWithTheme(
          <Drawer>
            <div>Content</div>
          </Drawer>
        );
      }).not.toThrow();
    });
  });

  describe('Drawer placement prop', () => {
    it('renders with default placement', () => {
      renderWithTheme(
        <Drawer visible>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders with right placement', () => {
      renderWithTheme(
        <Drawer visible placement="right">
          <div>Right drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Right drawer')).toBeInTheDocument();
    });

    it('renders with left placement', () => {
      renderWithTheme(
        <Drawer visible placement="left">
          <div>Left drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Left drawer')).toBeInTheDocument();
    });

    it('renders with top placement', () => {
      renderWithTheme(
        <Drawer visible placement="top">
          <div>Top drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Top drawer')).toBeInTheDocument();
    });

    it('renders with bottom placement', () => {
      renderWithTheme(
        <Drawer visible placement="bottom">
          <div>Bottom drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Bottom drawer')).toBeInTheDocument();
    });
  });

  describe('Drawer mask prop', () => {
    it('renders with mask by default', () => {
      renderWithTheme(
        <Drawer visible>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders with mask explicitly enabled', () => {
      renderWithTheme(
        <Drawer visible mask>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders without mask', () => {
      renderWithTheme(
        <Drawer visible mask={false}>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Drawer size props', () => {
    it('renders with custom width', () => {
      renderWithTheme(
        <Drawer visible width={500}>
          <div>Wide drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Wide drawer')).toBeInTheDocument();
    });

    it('renders with string width', () => {
      renderWithTheme(
        <Drawer visible width="50%">
          <div>Half width drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Half width drawer')).toBeInTheDocument();
    });

    it('renders with custom height', () => {
      renderWithTheme(
        <Drawer visible height={300}>
          <div>Tall drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Tall drawer')).toBeInTheDocument();
    });

    it('renders with string height', () => {
      renderWithTheme(
        <Drawer visible height="60%">
          <div>Percentage height drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Percentage height drawer')).toBeInTheDocument();
    });
  });

  describe('Drawer callbacks', () => {
    it('accepts onClose callback', () => {
      const handleClose = vi.fn();

      renderWithTheme(
        <Drawer visible onClose={handleClose}>
          <div>Content</div>
        </Drawer>
      );

      expect(handleClose).not.toHaveBeenCalled();
    });

    it('accepts afterVisibleChange callback', () => {
      const handleAfterChange = vi.fn();

      renderWithTheme(
        <Drawer visible afterVisibleChange={handleAfterChange}>
          <div>Content</div>
        </Drawer>
      );

      // Callback may not be called immediately on render
      expect(handleAfterChange).not.toHaveBeenCalled();
    });
  });

  describe('Drawer styling', () => {
    it('supports custom className', () => {
      renderWithTheme(
        <Drawer visible className="custom-drawer">
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('supports maskStyle', () => {
      renderWithTheme(
        <Drawer visible maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('supports contentWrapperStyle', () => {
      renderWithTheme(
        <Drawer visible contentWrapperStyle={{ padding: '20px' }}>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Drawer children', () => {
    it('renders with string children', () => {
      renderWithTheme(<Drawer visible>Simple string</Drawer>);

      expect(screen.getByText('Simple string')).toBeInTheDocument();
    });

    it('renders with React node children', () => {
      renderWithTheme(
        <Drawer visible>
          <div>
            <h1>Title</h1>
            <p>Description</p>
          </div>
        </Drawer>
      );

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('renders with complex nested children', () => {
      renderWithTheme(
        <Drawer visible>
          <div>
            <header>Header</header>
            <section>Section</section>
            <footer>Footer</footer>
          </div>
        </Drawer>
      );

      expect(screen.getByText('Header')).toBeInTheDocument();
      expect(screen.getByText('Section')).toBeInTheDocument();
      expect(screen.getByText('Footer')).toBeInTheDocument();
    });

    it('renders with empty children', () => {
      expect(() => {
        renderWithTheme(<Drawer visible>{''}</Drawer>);
      }).not.toThrow();
    });

    it('renders with null children', () => {
      expect(() => {
        renderWithTheme(<Drawer visible>{null}</Drawer>);
      }).not.toThrow();
    });

    it('renders with undefined children', () => {
      expect(() => {
        renderWithTheme(<Drawer visible>{undefined}</Drawer>);
      }).not.toThrow();
    });
  });

  describe('Drawer advanced props', () => {
    it('accepts maskClosable prop', () => {
      renderWithTheme(
        <Drawer visible maskClosable>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('accepts keyboard prop', () => {
      renderWithTheme(
        <Drawer visible keyboard>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('accepts autoFocus prop', () => {
      renderWithTheme(
        <Drawer visible autoFocus>
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('accepts getContainer prop as string', () => {
      renderWithTheme(
        <Drawer visible getContainer="body">
          <div>Content</div>
        </Drawer>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Drawer with combined props', () => {
    it('renders with placement and width', () => {
      renderWithTheme(
        <Drawer visible placement="left" width={400}>
          <div>Left drawer with custom width</div>
        </Drawer>
      );

      expect(screen.getByText('Left drawer with custom width')).toBeInTheDocument();
    });

    it('renders with all basic props', () => {
      renderWithTheme(
        <Drawer visible placement="right" width={350} mask maskClosable className="full-drawer">
          <div>Fully configured drawer</div>
        </Drawer>
      );

      expect(screen.getByText('Fully configured drawer')).toBeInTheDocument();
    });
  });

  describe('Drawer displayName', () => {
    it('has correct displayName', () => {
      expect(Drawer.displayName).toBe('@kubed/components/drawer');
    });
  });
});
