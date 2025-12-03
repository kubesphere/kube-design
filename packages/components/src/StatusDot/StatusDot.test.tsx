import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { StatusDot } from './StatusDot';

describe('@kubed/components/StatusDot', () => {
  describe('StatusDot basic functionality', () => {
    it('renders StatusDot component correctly', () => {
      const { container } = renderWithTheme(<StatusDot />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders without label', () => {
      const { container } = renderWithTheme(<StatusDot />);

      expect(container.querySelector('span')).toBeInTheDocument();
      expect(screen.queryByText('Label')).not.toBeInTheDocument();
    });

    it('renders with label', () => {
      renderWithTheme(<StatusDot>Active</StatusDot>);

      expect(screen.getByText('Active')).toBeInTheDocument();
    });

    it('renders with different labels', () => {
      renderWithTheme(<StatusDot>Running</StatusDot>);
      expect(screen.getByText('Running')).toBeInTheDocument();
    });
  });

  describe('StatusDot color prop', () => {
    it('renders with default color', () => {
      const { container } = renderWithTheme(<StatusDot />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with success color', () => {
      const { container } = renderWithTheme(<StatusDot color="success" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with warning color', () => {
      const { container } = renderWithTheme(<StatusDot color="warning" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with error color', () => {
      const { container } = renderWithTheme(<StatusDot color="error" />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with custom color', () => {
      const { container } = renderWithTheme(<StatusDot color="#FF0000" />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('StatusDot motion prop', () => {
    it('renders without motion by default', () => {
      const { container } = renderWithTheme(<StatusDot />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with motion enabled', () => {
      const { container } = renderWithTheme(<StatusDot motion />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with motion disabled explicitly', () => {
      const { container } = renderWithTheme(<StatusDot motion={false} />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('StatusDot shadow prop', () => {
    it('renders with shadow by default', () => {
      const { container } = renderWithTheme(<StatusDot />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with shadow enabled explicitly', () => {
      const { container } = renderWithTheme(<StatusDot shadow />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders without shadow', () => {
      const { container } = renderWithTheme(<StatusDot shadow={false} />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('StatusDot labelClassName', () => {
    it('renders without labelClassName', () => {
      renderWithTheme(<StatusDot>Label</StatusDot>);

      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('renders with custom labelClassName', () => {
      renderWithTheme(<StatusDot labelClassName="custom-label">Label</StatusDot>);

      const label = screen.getByText('Label');
      expect(label).toHaveClass('custom-label');
    });
  });

  describe('StatusDot with combined props', () => {
    it('renders with color and motion', () => {
      const { container } = renderWithTheme(<StatusDot color="success" motion />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with color, motion, and shadow', () => {
      const { container } = renderWithTheme(<StatusDot color="warning" motion shadow />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with all props', () => {
      const { container } = renderWithTheme(
        <StatusDot color="success" motion shadow={false} labelClassName="custom">
          Status Label
        </StatusDot>
      );

      expect(container.firstChild).toBeInTheDocument();
      expect(screen.getByText('Status Label')).toBeInTheDocument();
    });
  });

  describe('StatusDot children', () => {
    it('renders with string children', () => {
      renderWithTheme(<StatusDot>Simple text</StatusDot>);

      expect(screen.getByText('Simple text')).toBeInTheDocument();
    });

    it('renders with React node children', () => {
      renderWithTheme(
        <StatusDot>
          <span>Complex label</span>
        </StatusDot>
      );

      expect(screen.getByText('Complex label')).toBeInTheDocument();
    });

    it('does not render label when children is null', () => {
      const { container } = renderWithTheme(<StatusDot>{null}</StatusDot>);

      expect(container.querySelectorAll('span').length).toBe(1); // Only the dot span
    });

    it('does not render label when children is undefined', () => {
      const { container } = renderWithTheme(<StatusDot>{undefined}</StatusDot>);

      expect(container.querySelectorAll('span').length).toBe(1); // Only the dot span
    });
  });

  describe('StatusDot displayName', () => {
    it('has correct displayName', () => {
      expect(StatusDot.displayName).toBe('@kubed/components/StatusDot');
    });
  });

  describe('StatusDot edge cases', () => {
    it('handles empty string label', () => {
      const { container } = renderWithTheme(<StatusDot>{''}</StatusDot>);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles numeric label', () => {
      renderWithTheme(<StatusDot>{123}</StatusDot>);

      expect(screen.getByText('123')).toBeInTheDocument();
    });

    it('handles boolean false label', () => {
      const { container } = renderWithTheme(<StatusDot>{false}</StatusDot>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
