import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterInput } from './FilterInput';

describe('@kubed/components/FilterInput', () => {
  describe('FilterInput simple mode', () => {
    it('renders FilterInput in simple mode', () => {
      renderWithTheme(<FilterInput simpleMode onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('renders with placeholder in simple mode', () => {
      renderWithTheme(<FilterInput simpleMode placeholder="Search..." onChange={vi.fn()} />);

      const input = screen.getByPlaceholderText('Search...');
      expect(input).toBeInTheDocument();
    });

    it('renders with initial keyword in simple mode', () => {
      renderWithTheme(<FilterInput simpleMode initialKeyword="test keyword" onChange={vi.fn()} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('test keyword');
    });

    it('updates value on input change in simple mode', async () => {
      const user = userEvent.setup();
      renderWithTheme(<FilterInput simpleMode onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.type(input, 'test');

      expect(input).toHaveValue('test');
    });

    it('calls onInputChange when typing in simple mode', async () => {
      const user = userEvent.setup();
      const handleInputChange = vi.fn();

      renderWithTheme(
        <FilterInput simpleMode onChange={vi.fn()} onInputChange={handleInputChange} />
      );

      const input = screen.getByRole('textbox');
      await user.type(input, 'a');

      expect(handleInputChange).toHaveBeenCalledWith('a');
    });

    it('calls onChange when pressing Enter in simple mode', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      renderWithTheme(<FilterInput simpleMode onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.type(input, 'test');
      fireEvent.keyUp(input, { keyCode: 13 });

      expect(handleChange).toHaveBeenCalledWith('test');
    });

    it('clears value when clicking clear button in simple mode', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      renderWithTheme(<FilterInput simpleMode initialKeyword="test" onChange={handleChange} />);

      const input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('test');

      const clearButton = document.querySelector('.icon-clear');
      await user.click(clearButton);

      expect(handleChange).toHaveBeenCalledWith('');
    });

    it('renders different initial keywords', () => {
      // Test first keyword
      renderWithTheme(<FilterInput simpleMode initialKeyword="keyword1" onChange={vi.fn()} />);
      let input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('keyword1');

      cleanup();

      // Test second keyword
      renderWithTheme(<FilterInput simpleMode initialKeyword="keyword2" onChange={vi.fn()} />);
      input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('keyword2');

      cleanup();

      // Test empty keyword
      renderWithTheme(<FilterInput simpleMode initialKeyword="" onChange={vi.fn()} />);
      input = screen.getByRole('textbox') as HTMLInputElement;
      expect(input.value).toBe('');
    });
  });

  describe('FilterInput advanced mode', () => {
    const suggestions = [
      {
        key: 'name',
        label: 'Name',
      },
      {
        key: 'status',
        label: 'Status',
        options: [
          { key: 'active', label: 'Active' },
          { key: 'inactive', label: 'Inactive' },
        ],
      },
      {
        key: 'type',
        label: 'Type',
        options: [
          { key: 'type1', label: 'Type 1' },
          { key: 'type2', label: 'Type 2' },
        ],
      },
    ];

    it('renders FilterInput in advanced mode', () => {
      renderWithTheme(<FilterInput suggestions={suggestions} onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('shows search icon', () => {
      const { container } = renderWithTheme(
        <FilterInput suggestions={suggestions} onChange={vi.fn()} />
      );

      const searchIcon = container.querySelector('.icon-search');
      expect(searchIcon).toBeInTheDocument();
    });

    it('shows suggestion menu on focus', async () => {
      const user = userEvent.setup();
      renderWithTheme(<FilterInput suggestions={suggestions} onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Status')).toBeInTheDocument();
        expect(screen.getByText('Type')).toBeInTheDocument();
      });
    });

    it('selects suggestion on click', async () => {
      const user = userEvent.setup();
      renderWithTheme(<FilterInput suggestions={suggestions} onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Name')).toBeInTheDocument();
      });

      const nameOption = screen.getByText('Name');
      await user.click(nameOption);

      const inputElement = screen.getByRole('textbox') as HTMLInputElement;
      expect(inputElement.value).toBe('Name:');
    });

    it('shows options menu when suggestion has options', async () => {
      const user = userEvent.setup();
      renderWithTheme(<FilterInput suggestions={suggestions} onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Status')).toBeInTheDocument();
      });

      const statusOption = screen.getByText('Status');
      await user.click(statusOption);

      await waitFor(() => {
        expect(screen.getByText('Active')).toBeInTheDocument();
        expect(screen.getByText('Inactive')).toBeInTheDocument();
      });
    });

    it('calls onChange when selecting an option', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      renderWithTheme(<FilterInput suggestions={suggestions} onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Status')).toBeInTheDocument();
      });

      const statusOption = screen.getByText('Status');
      await user.click(statusOption);

      await waitFor(() => {
        expect(screen.getByText('Active')).toBeInTheDocument();
      });

      const activeOption = screen.getByText('Active');
      await user.click(activeOption);

      expect(handleChange).toHaveBeenCalledWith({ status: 'active' });
    });

    it('renders tags for active filters', () => {
      const filters = { name: 'test', status: 'active' };

      renderWithTheme(
        <FilterInput suggestions={suggestions} filters={filters} onChange={vi.fn()} />
      );

      expect(screen.getByText(/Name:test/)).toBeInTheDocument();
      expect(screen.getByText(/Status:Active/)).toBeInTheDocument();
    });

    it('deletes tag when clicking close button', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      const filters = { name: 'test', status: 'active' };

      renderWithTheme(
        <FilterInput suggestions={suggestions} filters={filters} onChange={handleChange} />
      );

      const closeButtons = document.querySelectorAll('.icon-close-tag');
      await user.click(closeButtons[0]);

      expect(handleChange).toHaveBeenCalled();
    });

    it('calls onChange when pressing Enter with text input', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();

      renderWithTheme(<FilterInput suggestions={suggestions} onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Name')).toBeInTheDocument();
      });

      const nameOption = screen.getByText('Name');
      await user.click(nameOption);

      await user.type(input, 'test value');
      fireEvent.keyUp(input, { keyCode: 13 });

      expect(handleChange).toHaveBeenCalledWith({ name: 'test value' });
    });

    it('filters out already selected suggestions from menu', async () => {
      const user = userEvent.setup();
      const filters = { name: 'test' };

      renderWithTheme(
        <FilterInput suggestions={suggestions} filters={filters} onChange={vi.fn()} />
      );

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.queryByText('Name')).not.toBeInTheDocument();
        expect(screen.getByText('Status')).toBeInTheDocument();
        expect(screen.getByText('Type')).toBeInTheDocument();
      });
    });

    it('clears all filters when clicking clear button', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      const filters = { name: 'test', status: 'active' };

      renderWithTheme(
        <FilterInput suggestions={suggestions} filters={filters} onChange={handleChange} />
      );

      const clearButton = document.querySelector('.icon-clear');
      await user.click(clearButton);

      expect(handleChange).toHaveBeenCalledWith({});
    });

    it('renders tags for different filter configurations', () => {
      // Test single filter
      renderWithTheme(
        <FilterInput suggestions={suggestions} filters={{ name: 'test1' }} onChange={vi.fn()} />
      );
      expect(screen.getByText(/Name:test1/)).toBeInTheDocument();

      cleanup();

      // Test another single filter
      renderWithTheme(
        <FilterInput suggestions={suggestions} filters={{ status: 'active' }} onChange={vi.fn()} />
      );
      expect(screen.getByText(/Status:Active/)).toBeInTheDocument();

      cleanup();

      // Test multiple filters
      renderWithTheme(
        <FilterInput
          suggestions={suggestions}
          filters={{ name: 'test', status: 'active' }}
          onChange={vi.fn()}
        />
      );
      expect(screen.getByText(/Name:test/)).toBeInTheDocument();
      expect(screen.getByText(/Status:Active/)).toBeInTheDocument();
    });
  });

  describe('FilterInput focus and blur', () => {
    it('adds focused class on focus', async () => {
      const user = userEvent.setup();
      const { container } = renderWithTheme(<FilterInput simpleMode onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      const wrapper = container.querySelector('.is-focused');
      expect(wrapper).toBeInTheDocument();
    });

    it('removes focused class on blur', async () => {
      const user = userEvent.setup();
      const { container } = renderWithTheme(<FilterInput simpleMode onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);
      await user.tab();

      const wrapper = container.querySelector('.is-focused');
      expect(wrapper).not.toBeInTheDocument();
    });
  });

  describe('FilterInput with custom elements', () => {
    it('renders custom label for suggestion', async () => {
      const user = userEvent.setup();
      const suggestions = [
        {
          key: 'custom',
          label: 'Custom',
          customLabel: <span>Custom Label</span>,
        },
      ];

      renderWithTheme(<FilterInput suggestions={suggestions} onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Custom Label')).toBeInTheDocument();
      });
    });

    it('renders custom dropdown content', async () => {
      const user = userEvent.setup();
      const suggestions = [
        {
          key: 'custom',
          label: 'Custom',
          customDropdown: <div>Custom Dropdown Content</div>,
        },
      ];

      renderWithTheme(<FilterInput suggestions={suggestions} onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Custom')).toBeInTheDocument();
      });

      const customOption = screen.getByText('Custom');
      await user.click(customOption);

      await waitFor(() => {
        expect(screen.getByText('Custom Dropdown Content')).toBeInTheDocument();
      });
    });
  });

  describe('FilterInput className and styling', () => {
    it('supports custom className', () => {
      const { container } = renderWithTheme(
        <FilterInput className="custom-filter" simpleMode onChange={vi.fn()} />
      );

      const wrapper = container.querySelector('.custom-filter');
      expect(wrapper).toBeInTheDocument();
    });

    it('adds has-value class when input has value', async () => {
      const user = userEvent.setup();
      const { container } = renderWithTheme(<FilterInput simpleMode onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.type(input, 'test');

      const wrapper = container.querySelector('.has-value');
      expect(wrapper).toBeInTheDocument();
    });

    it('adds has-value class when filters exist', () => {
      const { container } = renderWithTheme(
        <FilterInput
          suggestions={[{ key: 'name', label: 'Name' }]}
          filters={{ name: 'test' }}
          onChange={vi.fn()}
        />
      );

      const wrapper = container.querySelector('.has-value');
      expect(wrapper).toBeInTheDocument();
    });

    it('adds disabled class when disabled prop is true', () => {
      const { container } = renderWithTheme(<FilterInput simpleMode disabled onChange={vi.fn()} />);

      const wrapper = container.querySelector('.is-disabled');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('FilterInput edge cases', () => {
    it('handles empty suggestions array', async () => {
      const user = userEvent.setup();
      renderWithTheme(<FilterInput suggestions={[]} onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      // No menu should appear
      const menu = document.querySelector('.suggestion-menu');
      expect(menu).not.toBeInTheDocument();
    });

    it('handles Enter key without active suggestion', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      const suggestions = [{ key: 'name', label: 'Name' }];

      renderWithTheme(<FilterInput suggestions={suggestions} onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.type(input, 'test');
      fireEvent.keyUp(input, { keyCode: 13 });

      expect(handleChange).toHaveBeenCalledWith({ name: 'test' });
    });

    it('handles input value with suggestion prefix', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      const suggestions = [{ key: 'name', label: 'Name' }];

      renderWithTheme(<FilterInput suggestions={suggestions} onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Name')).toBeInTheDocument();
      });

      const nameOption = screen.getByText('Name');
      await user.click(nameOption);

      await user.type(input, 'value');
      fireEvent.keyUp(input, { keyCode: 13 });

      expect(handleChange).toHaveBeenCalled();
    });

    it('handles filters without matching suggestions', () => {
      const suggestions = [{ key: 'name', label: 'Name' }];
      const filters = { unknown: 'value' };

      renderWithTheme(
        <FilterInput suggestions={suggestions} filters={filters} onChange={vi.fn()} />
      );

      expect(screen.getByText(/value/)).toBeInTheDocument();
    });

    it('resets active suggestion when input is cleared', async () => {
      const user = userEvent.setup();
      const suggestions = [{ key: 'name', label: 'Name' }];

      renderWithTheme(<FilterInput suggestions={suggestions} onChange={vi.fn()} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      await waitFor(() => {
        expect(screen.getByText('Name')).toBeInTheDocument();
      });

      const nameOption = screen.getByText('Name');
      await user.click(nameOption);

      const inputElement = screen.getByRole('textbox') as HTMLInputElement;
      expect(inputElement.value).toBe('Name:');

      await user.clear(input);

      // After clearing, should show suggestions menu again
      await user.click(input);
      await waitFor(() => {
        expect(screen.getByText('Name')).toBeInTheDocument();
      });
    });
  });
});
