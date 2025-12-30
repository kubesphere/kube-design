import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderWithTheme } from '@kubed/tests';
import { Pagination } from './Pagination';

describe('@kubed/components/Pagination', () => {
  it('renders pagination with total count', () => {
    renderWithTheme(<Pagination totalCount={100} pageSize={10} />);

    expect(screen.getByText(/100/)).toBeInTheDocument();
    expect(screen.getByText(/1 \/ 10/)).toBeInTheDocument();
  });

  it('handles next page click', async () => {
    const user = userEvent.setup();
    const onNextPage = vi.fn();

    renderWithTheme(<Pagination totalCount={100} pageSize={10} onNextPage={onNextPage} />);

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1]; // Second button is next
    await user.click(nextButton);

    expect(onNextPage).toHaveBeenCalledWith(1);
    expect(screen.getByText(/2 \/ 10/)).toBeInTheDocument();
  });

  it('handles previous page click', async () => {
    const user = userEvent.setup();
    const onPreviousPage = vi.fn();

    renderWithTheme(
      <Pagination totalCount={100} pageSize={10} page={5} onPreviousPage={onPreviousPage} />
    );

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0]; // First button is previous
    await user.click(prevButton);

    expect(onPreviousPage).toHaveBeenCalled();
  });

  it('disables previous button on first page', () => {
    renderWithTheme(<Pagination totalCount={100} pageSize={10} page={0} />);

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0];
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    renderWithTheme(<Pagination totalCount={100} pageSize={10} page={9} />);

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1];
    expect(nextButton).toBeDisabled();
  });

  it('calculates page count correctly', () => {
    renderWithTheme(<Pagination totalCount={95} pageSize={10} />);

    expect(screen.getByText(/1 \/ 10/)).toBeInTheDocument();
  });

  it('handles custom page size', () => {
    renderWithTheme(<Pagination totalCount={100} pageSize={20} />);

    expect(screen.getByText(/1 \/ 5/)).toBeInTheDocument();
  });

  it('hides total count when showTotal is false', () => {
    const { container } = renderWithTheme(
      <Pagination totalCount={100} pageSize={10} showTotal={false} />
    );

    const totalText = container.querySelector('.total-count');
    expect(totalText).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(
      <Pagination totalCount={100} pageSize={10} className="custom-pagination" />
    );

    expect(container.querySelector('.custom-pagination')).toBeInTheDocument();
  });

  it('applies custom style', () => {
    const { container } = renderWithTheme(
      <Pagination totalCount={100} pageSize={10} style={{ marginTop: '20px' }} />
    );

    const wrapper = container.querySelector('.custom-pagination, div[style*="margin-top"]');
    expect(wrapper).toBeTruthy();
  });

  it('handles navigation from first to second page', async () => {
    const user = userEvent.setup();
    renderWithTheme(<Pagination totalCount={100} pageSize={10} page={0} />);

    expect(screen.getByText(/1 \/ 10/)).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[1];
    await user.click(nextButton);

    expect(screen.getByText(/2 \/ 10/)).toBeInTheDocument();
  });

  it('handles navigation from last to second-to-last page', async () => {
    const user = userEvent.setup();
    renderWithTheme(<Pagination totalCount={100} pageSize={10} page={9} />);

    expect(screen.getByText(/10 \/ 10/)).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0];
    await user.click(prevButton);

    expect(screen.getByText(/9 \/ 10/)).toBeInTheDocument();
  });

  it('handles single page scenario', () => {
    renderWithTheme(<Pagination totalCount={5} pageSize={10} />);

    expect(screen.getByText(/1 \/ 1/)).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons[0];
    const nextButton = buttons[1];

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it('handles zero total count', () => {
    const { container } = renderWithTheme(<Pagination totalCount={0} pageSize={10} />);

    const totalCount = container.querySelector('.total-count');
    expect(totalCount).toHaveTextContent('0');
  });
});
