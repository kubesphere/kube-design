import React from 'react';
import { multipleCheckRTLAccessibility, itSupportsRef, renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

const defaultProps = {
  checked: true,
  onChange: () => {},
  label: 'test-label',
};

describe('@kubed/components/Checkbox', () => {
  itSupportsRef(Checkbox, defaultProps, HTMLInputElement);
  multipleCheckRTLAccessibility([
    renderWithTheme(<Checkbox aria-label="Checkbox without label" />),
    renderWithTheme(<Checkbox label="With label" />),
    renderWithTheme(<Checkbox id="with-id" label="With id" />),
  ]);

  const testLabelText = 'test-label';
  const testId = 'test-id';

  describe('Checkbox Component Label', () => {
    it('should render the label text when label prop is provided', () => {
      renderWithTheme(<Checkbox label={testLabelText} />);

      const labelElement = screen.getByText(testLabelText);
      expect(labelElement).toBeInTheDocument();
      expect(labelElement.tagName).toBe('LABEL');
    });

    it('should not render a label element with that specific text when label prop is omitted', () => {
      renderWithTheme(<Checkbox />);

      const labelElement = screen.queryByText(testLabelText);

      expect(labelElement).not.toBeInTheDocument();
    });
  });

  it('passes id from props to input and label', () => {
    renderWithTheme(<Checkbox label={testLabelText} id={testId} />);

    const inputElement = screen.getByLabelText(testLabelText);
    const labelElement = screen.getByText(testLabelText);
    expect(inputElement).toHaveAttribute('id', testId);
    expect(labelElement).toHaveAttribute('for', testId);
  });

  describe('Checkbox Component Disabled State', () => {
    const labelText = 'My Disabled Checkbox';

    it('should be disabled when the disabled prop is true', () => {
      renderWithTheme(<Checkbox disabled label={labelText} />);

      const inputElement = screen.getByRole('checkbox');

      expect(inputElement).toHaveAttribute('disabled');

      expect(inputElement).toBeDisabled();
    });

    it('should be enabled when the disabled prop is false or omitted', () => {
      renderWithTheme(<Checkbox label={labelText} />);

      const inputElement = screen.getByRole('checkbox');

      expect(inputElement).not.toHaveAttribute('disabled');

      expect(inputElement).toBeEnabled();
    });

    it('should be enabled when the disabled prop is explicitly false', () => {
      renderWithTheme(<Checkbox disabled={false} label={labelText} />);

      const inputElement = screen.getByRole('checkbox');

      expect(inputElement).toBeEnabled();
    });
  });

  describe('Checkbox Component Checked State', () => {
    // Group related tests
    const handleChange = vi.fn();

    beforeEach(() => {
      handleChange.mockClear();
    });

    it('should be checked when the checked prop is true', () => {
      renderWithTheme(<Checkbox checked onChange={handleChange} label="Checked Box" />);

      const inputElement = screen.getByRole('checkbox');

      expect(inputElement).toBeChecked();
    });

    it('should not be checked when the checked prop is false', () => {
      renderWithTheme(<Checkbox checked={false} onChange={handleChange} label="Unchecked Box" />);

      const inputElement = screen.getByRole('checkbox');

      expect(inputElement).not.toBeChecked();
    });

    it('should not be checked when the checked prop is omitted', () => {
      renderWithTheme(<Checkbox onChange={handleChange} label="Default Unchecked Box" />);

      const inputElement = screen.getByRole('checkbox');

      expect(inputElement).not.toBeChecked();
    });
  });

  // describe('Checkbox Component Indeterminate State', () => {
  //   const handleChange = vi.fn();

  //   beforeEach(() => {
  //     handleChange.mockClear();
  //   });

  //   it("should set the input element's indeterminate property to true when indeterminate prop is true", () => {
  //     renderWithTheme(
  //       <Checkbox indeterminate checked={false} onChange={handleChange} label="Indeterminate Box" />
  //     );

  //     const inputElement = screen.getByRole('checkbox') as HTMLInputElement;

  //     expect(inputElement.indeterminate).toBe(true);
  //     expect(inputElement).not.toBeChecked();
  //   });

  //   it('should set indeterminate property even if checked prop is true', () => {
  //     renderWithTheme(
  //       <Checkbox indeterminate checked onChange={handleChange} label="Indeterminate Checked Box" />
  //     );
  //     const inputElement = screen.getByRole('checkbox') as HTMLInputElement;

  //     expect(inputElement.indeterminate).toBe(true);
  //     expect(inputElement).toBeChecked();
  //   });

  //   it("should have the input element's indeterminate property as false when indeterminate prop is false or omitted", () => {
  //     renderWithTheme(
  //       <Checkbox checked={false} onChange={handleChange} label="Non-Indeterminate Box" />
  //     );

  //     const inputElement = screen.getByRole('checkbox') as HTMLInputElement;

  //     expect(inputElement.indeterminate).toBe(false);
  //     expect(inputElement).not.toBeChecked();
  //   });
  // });

  it('has correct displayName', () => {
    expect(Checkbox.displayName).toEqual('@kubed/components/Checkbox');
  });
});
