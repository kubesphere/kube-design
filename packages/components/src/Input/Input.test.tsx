import React from 'react';
import { itSupportsClassName, renderWithTheme } from '@kubed/tests';
import { Input } from './Input';
import { screen } from '@testing-library/react';

describe('@kubed/components/Input', () => {
  // itSupportsClassName(Input, {});

  describe('disabled prop', () => {
    it('when disabled prop is true, the input should be disabled', () => {
      renderWithTheme(<Input disabled aria-label="disabled-input" />); // 添加 aria-label 便于查询

      const inputElement = screen.getByRole('textbox', { name: 'disabled-input' });

      expect(inputElement).toBeDisabled();
    });

    it('when disabled prop is false or omitted, the input should be enabled', () => {
      renderWithTheme(<Input aria-label="enabled-input" />);

      const inputElement = screen.getByRole('textbox', { name: 'enabled-input' });

      expect(inputElement).toBeEnabled();
    });
  });

  describe('addonBefore prop', () => {
    const addonText = '$';

    it('when addonBefore prop is provided, it should render the content', () => {
      renderWithTheme(<Input addonBefore={addonText} aria-label="input-with-addon" />);

      const addonElement = screen.getByText(addonText);

      expect(addonElement).toBeInTheDocument();

      expect(screen.getByRole('textbox', { name: 'input-with-addon' })).toBeInTheDocument();
    });

    it('when addonBefore prop is not provided, it should not render the content', () => {
      renderWithTheme(<Input aria-label="input-without-addon" />);

      const addonElement = screen.queryByText(addonText);

      expect(addonElement).not.toBeInTheDocument();

      expect(screen.getByRole('textbox', { name: 'input-without-addon' })).toBeInTheDocument();
    });
  });
});
