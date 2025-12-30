import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsRef,
  renderWithTheme,
} from '@kubed/tests';
import { screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('@kubed/components/Divider', () => {
  itSupportsClassName(Divider, {});
  itSupportsStyle(Divider, {});
  itSupportsOthers(Divider, {});
  itSupportsRef(Divider, {}, HTMLDivElement);

  const labelText = 'test-label';
  it('should render the label text when label prop is provided', () => {
    renderWithTheme(<Divider label={labelText} />);
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it('should not render the label text when label prop is omitted', () => {
    renderWithTheme(<Divider />);

    const labelElement = screen.queryByText(labelText);

    expect(labelElement).not.toBeInTheDocument();
  });
  it('should not render the label text when direction is vertical', () => {
    renderWithTheme(<Divider label={labelText} direction="vertical" />);
    expect(screen.queryByText(labelText)).not.toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(Divider.displayName).toEqual('@kubed/components/Divider');
  });
});
