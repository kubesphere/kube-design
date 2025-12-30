import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TypeSelect } from './TypeSelect';

describe('@kubed/components/TypeSelect', () => {
  const mockOptions = [
    { label: 'Option 1', value: 'opt1', description: 'Description 1' },
    { label: 'Option 2', value: 'opt2', description: 'Description 2' },
    { label: 'Option 3', value: 'opt3', description: 'Description 3' },
  ];

  describe('TypeSelect basic functionality', () => {
    it('renders TypeSelect component correctly', () => {
      const { container } = renderWithTheme(<TypeSelect options={mockOptions} />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with first option selected by default', () => {
      renderWithTheme(<TypeSelect options={mockOptions} />);

      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    it('renders with defaultValue', () => {
      renderWithTheme(<TypeSelect options={mockOptions} defaultValue="opt2" />);

      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('renders with controlled value', () => {
      renderWithTheme(<TypeSelect options={mockOptions} value="opt3" />);

      expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    it('displays option label and description', () => {
      renderWithTheme(<TypeSelect options={mockOptions} />);

      expect(screen.getByText('Option 1')).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
    });
  });

  describe('TypeSelect expand/collapse', () => {
    it('expands dropdown when clicking control', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
      });
    });

    it('collapses dropdown when clicking outside', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
      });

      // Click outside
      await user.click(document.body);

      await waitFor(() => {
        expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
      });
    });

    it('adds is-expand class when expanded', async () => {
      const user = userEvent.setup();
      const { container } = renderWithTheme(<TypeSelect options={mockOptions} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(container.querySelector('.is-expand')).toBeInTheDocument();
      });
    });
  });

  describe('TypeSelect option selection', () => {
    it('selects option when clicked', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      renderWithTheme(<TypeSelect options={mockOptions} onChange={handleChange} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
      });

      await user.click(screen.getByText('Option 2'));

      expect(handleChange).toHaveBeenCalledWith('opt2', mockOptions[1]);
    });

    it('closes dropdown after selecting option', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
      });

      await user.click(screen.getByText('Option 2'));

      await waitFor(() => {
        expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
      });
    });

    it('updates displayed value after selection in uncontrolled mode', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
      });

      await user.click(screen.getByText('Option 2'));

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Description 2')).toBeInTheDocument();
      });
    });

    it('does not update internal state in controlled mode', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      renderWithTheme(<TypeSelect options={mockOptions} value="opt1" onChange={handleChange} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
      });

      await user.click(screen.getByText('Option 2'));

      expect(handleChange).toHaveBeenCalledWith('opt2', mockOptions[1]);
      // Value stays as opt1 because it's controlled
      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });
  });

  describe('TypeSelect disabled state', () => {
    it('renders disabled TypeSelect', () => {
      const { container } = renderWithTheme(<TypeSelect options={mockOptions} disabled />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('does not expand when disabled', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} disabled />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
    });

    it('supports disabled individual options', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      const optionsWithDisabled = [
        ...mockOptions,
        { label: 'Disabled Option', value: 'disabled', disabled: true },
      ];

      renderWithTheme(<TypeSelect options={optionsWithDisabled} onChange={handleChange} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByText('Disabled Option')).toBeInTheDocument();
      });

      await user.click(screen.getByText('Disabled Option'));

      // onChange should not be called for disabled option
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('TypeSelect searchable mode', () => {
    it('renders search input when searchable and expanded', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} searchable />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        const searchInput = screen.getByRole('textbox');
        expect(searchInput).toBeInTheDocument();
      });
    });

    it('does not render search input when not searchable', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} searchable={false} />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    });

    it('filters options by label when searching', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} searchable />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
      });

      const searchInput = screen.getByRole('textbox');
      await user.type(searchInput, 'Option 2');

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
      });
    });

    it('filters options by description when searching', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} searchable />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
      });

      const searchInput = screen.getByRole('textbox');
      await user.type(searchInput, 'Description 3');

      await waitFor(() => {
        expect(screen.getByText('Option 3')).toBeInTheDocument();
        expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
      });
    });

    it('shows all options when search is cleared', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} searchable />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
      });

      const searchInput = screen.getByRole('textbox');
      await user.type(searchInput, 'Option 2');

      await waitFor(() => {
        expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
      });

      await user.clear(searchInput);

      await waitFor(() => {
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
      });
    });
  });

  describe('TypeSelect with icons', () => {
    it('renders options with icons', () => {
      const optionsWithIcons = [
        { label: 'Option 1', value: 'opt1', icon: <span>🔥</span> },
        { label: 'Option 2', value: 'opt2', icon: <span>⭐</span> },
      ];

      renderWithTheme(<TypeSelect options={optionsWithIcons} />);

      expect(screen.getByText('🔥')).toBeInTheDocument();
    });
  });

  describe('TypeSelect edge cases', () => {
    it('handles empty options array', () => {
      const { container } = renderWithTheme(<TypeSelect options={[]} />);

      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles invalid defaultValue', () => {
      renderWithTheme(<TypeSelect options={mockOptions} defaultValue="invalid" />);

      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    it('handles invalid controlled value', () => {
      renderWithTheme(<TypeSelect options={mockOptions} value="invalid" />);

      expect(screen.getByText('Option 1')).toBeInTheDocument();
    });

    it('updates when controlled value changes', () => {
      renderWithTheme(<TypeSelect options={mockOptions} value="opt1" />);

      expect(screen.getByText('Option 1')).toBeInTheDocument();

      cleanup();

      renderWithTheme(<TypeSelect options={mockOptions} value="opt2" />);

      expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('does not show current option in dropdown', async () => {
      const user = userEvent.setup();
      renderWithTheme(<TypeSelect options={mockOptions} value="opt1" />);

      const control = screen.getByText('Option 1');
      await user.click(control);

      await waitFor(() => {
        // Option 1 is selected, so it should not appear in the dropdown
        const allOption1 = screen.getAllByText('Option 1');
        expect(allOption1).toHaveLength(1); // Only in control, not in dropdown
      });
    });
  });

  describe('TypeSelect className and styling', () => {
    it('supports custom className', () => {
      const { container } = renderWithTheme(
        <TypeSelect options={mockOptions} className="custom-typeselect" />
      );

      expect(container.querySelector('.custom-typeselect')).toBeInTheDocument();
    });
  });
});
