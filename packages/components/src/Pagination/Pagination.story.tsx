import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    totalCount: 101,
    pageSize: 10,
    page: 0,
    showTotal: true,
  },
  argTypes: {
    totalCount: {
      name: 'totalCount',
      description: 'Total number of items',
      table: {
        defaultValue: { summary: '101' },
      },
      control: { type: 'number', min: 1, max: 1000 },
    },
    pageSize: {
      name: 'pageSize',
      description: 'Number of items per page',
      table: {
        defaultValue: { summary: '10' },
      },
      control: { type: 'number', min: 5, max: 100, step: 5 },
    },
    page: {
      name: 'page',
      description: 'Current page (0-based index)',
      table: {
        defaultValue: { summary: '0' },
      },
      control: { type: 'number', min: 0 },
    },
    showTotal: {
      name: 'showTotal',
      description: 'Whether to show total items count',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Explame: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.page || 0);
    const [paginationProps, setPaginationProps] = useState(args);

    const handleNextPage = (page: number) => {
      setCurrentPage(page);
    };

    const handlePreviousPage = (page: number) => {
      setCurrentPage(page);
    };

    useEffect(() => {
      setPaginationProps(args);
      if (args.page !== undefined && args.page !== currentPage) {
        setCurrentPage(args.page);
      }
    }, [args]);

    return (
      <div>
        <Pagination
          {...paginationProps}
          page={currentPage}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
        <div style={{ marginTop: '20px' }}>
          <p>Current page: {currentPage + 1}</p>
          <p>Total pages: {Math.ceil(paginationProps.totalCount / paginationProps.pageSize)}</p>
        </div>
      </div>
    );
  },
};

export const Basic = () => <Pagination totalCount={101} />;

export const ShowTotal = () => <Pagination totalCount={101} showTotal={false} />;
