import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { DatePicker } from './DatePicker';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('@kubed/components/DatePicker', () => {
  it('should support className and style', async () => {
    const user = userEvent.setup();
    const testId = 'test-root-element';
    const testClassName = 'test-class-name';

    const { container } = renderWithTheme(
      <DatePicker
        className={testClassName}
        data-testid={testId}
        style={{ border: '1px solid red', lineHeight: 1 }}
      />
    );
    const input = screen.getByTestId(testId);
    await user.click(input);

    const dataPickerElement = container.querySelector('.kubed-picker');
    expect(dataPickerElement).toHaveClass('test-class-name');
    expect(dataPickerElement).toHaveStyle('border: 1px solid red; line-height: 1;');
  });

  it('has correct displayName', () => {
    expect(DatePicker.displayName).toEqual('@kubed/components/DatePicker');
  });
});
