import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { DataTable } from './Table';

type Person = {
  id: string;
  name: string;
  age: number;
  email: string;
};

const mockData: Person[] = [
  { id: '1', name: 'John Doe', age: 25, email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', age: 30, email: 'jane@example.com' },
  { id: '3', name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
];

const mockColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: (info) => info.getValue(),
  },
];

describe('@kubed/components/DataTable', () => {
  describe('DataTable basic functionality', () => {
    it('renders DataTable with data', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    });

    it('renders table headers', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Age')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('renders empty table with no data', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: [],
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Age')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
    });
  });

  describe('DataTable with pagination', () => {
    it('renders DataTable with pagination enabled', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
            enable: {
              pagination: true,
            },
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders DataTable without pagination', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
            enable: {
              pagination: false,
            },
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  describe('DataTable with toolbar', () => {
    it('renders DataTable with toolbar enabled', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
            enable: {
              toolbar: true,
            },
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    it('renders DataTable without toolbar', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
            enable: {
              toolbar: false,
            },
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  describe('DataTable with loading state', () => {
    it('renders loading skeleton when loading is true', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: [],
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          loading: true,
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      const { container } = renderWithTheme(<TestComponent />);

      // Should show skeleton loaders - check for table rows with skeleton structure
      const tableRows = container.querySelectorAll('tbody tr');
      expect(tableRows.length).toBeGreaterThan(0);
    });

    it('renders data when loading is false', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          loading: false,
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });

  describe('DataTable with custom className', () => {
    it('applies custom className to DataTable', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} className="custom-data-table" />;
      };

      const { container } = renderWithTheme(<TestComponent />);

      const tableContainer = container.querySelector('.custom-data-table');
      expect(tableContainer).toBeInTheDocument();
    });
  });

  describe('DataTable with column definitions', () => {
    it('renders columns with accessor keys', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      // Check that all data is rendered correctly
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('25')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('30')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    });

    it('renders columns with custom cell renderers', () => {
      const customColumns: ColumnDef<Person>[] = [
        {
          accessorKey: 'name',
          header: 'Full Name',
          cell: (info) => <span data-testid="custom-name">{info.getValue() as string}</span>,
        },
      ];

      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: customColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      const customCells = screen.getAllByTestId('custom-name');
      expect(customCells.length).toBe(3);
      expect(customCells[0]).toHaveTextContent('John Doe');
    });
  });

  describe('DataTable with nested column groups', () => {
    it('renders nested column headers', () => {
      const groupedColumns: ColumnDef<Person>[] = [
        {
          header: 'Personal Info',
          columns: [
            {
              accessorKey: 'name',
              header: 'Name',
              cell: (info) => info.getValue(),
            },
            {
              accessorKey: 'age',
              header: 'Age',
              cell: (info) => info.getValue(),
            },
          ],
        },
        {
          header: 'Contact',
          columns: [
            {
              accessorKey: 'email',
              header: 'Email',
              cell: (info) => info.getValue(),
            },
          ],
        },
      ];

      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: groupedColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('Personal Info')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Age')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
    });
  });

  describe('DataTable with column visibility', () => {
    it('hides columns with enableHiding', () => {
      const columnsWithHiding: ColumnDef<Person>[] = [
        {
          accessorKey: 'name',
          header: 'Name',
          cell: (info) => info.getValue(),
        },
        {
          accessorKey: 'age',
          header: 'Age',
          cell: (info) => info.getValue(),
          enableHiding: true,
        },
      ];

      const TestComponent = () => {
        const [columnVisibility, setColumnVisibility] = React.useState({ age: false });

        const table = useReactTable({
          data: mockData,
          columns: columnsWithHiding,
          state: {
            columnVisibility,
          },
          onColumnVisibilityChange: setColumnVisibility,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.queryByText('Age')).not.toBeInTheDocument();
    });
  });

  describe('DataTable with row data', () => {
    it('renders all rows from data', () => {
      const largeData: Person[] = Array.from({ length: 10 }, (_, i) => ({
        id: `${i}`,
        name: `Person ${i}`,
        age: 20 + i,
        email: `person${i}@example.com`,
      }));

      const TestComponent = () => {
        const table = useReactTable({
          data: largeData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'test-table',
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('Person 0')).toBeInTheDocument();
      expect(screen.getByText('Person 9')).toBeInTheDocument();
    });
  });

  describe('DataTable exports', () => {
    it('exports DataTable component', () => {
      expect(DataTable.DataTable).toBeDefined();
    });

    it('exports useTable hook', () => {
      expect(DataTable.useTable).toBeDefined();
    });

    it('exports getDefaultTableOptions function', () => {
      expect(DataTable.getDefaultTableOptions).toBeDefined();
    });
  });

  describe('getDefaultTableOptions utility', () => {
    it('creates default options with table name', () => {
      const options = DataTable.getDefaultTableOptions({
        tableName: 'test-table',
        manual: false,
      });

      expect(options.meta?.tableName).toBe('test-table');
      expect(options.meta?.manual).toBe(false);
    });

    it('creates default options with pagination enabled', () => {
      const options = DataTable.getDefaultTableOptions({
        tableName: 'test-table',
        manual: false,
        enablePagination: true,
      });

      expect(options.meta?.enable?.pagination).toBe(true);
    });

    it('creates default options with filters enabled', () => {
      const options = DataTable.getDefaultTableOptions({
        tableName: 'test-table',
        manual: false,
        enableFilters: true,
      });

      expect(options.meta?.enable?.filters).toBe(true);
    });

    it('creates default options with toolbar enabled', () => {
      const options = DataTable.getDefaultTableOptions({
        tableName: 'test-table',
        manual: false,
        enableToolbar: true,
      });

      expect(options.meta?.enable?.toolbar).toBe(true);
    });

    it('creates default options with selection disabled', () => {
      const options = DataTable.getDefaultTableOptions({
        tableName: 'test-table',
        manual: false,
        enableSelection: false,
      });

      expect(options.enableRowSelection).toBe(false);
    });
  });

  describe('DataTable complex scenarios', () => {
    it('renders complete table with all features', () => {
      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'complete-table',
            enable: {
              pagination: true,
              toolbar: true,
              filters: true,
            },
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('Bob Johnson')).toBeInTheDocument();
    });

    it('renders table with custom meta configuration', () => {
      const refetch = vi.fn();

      const TestComponent = () => {
        const table = useReactTable({
          data: mockData,
          columns: mockColumns,
          getCoreRowModel: getCoreRowModel(),
          meta: {
            tableName: 'custom-meta-table',
            refetch,
            enable: {
              pagination: false,
              toolbar: false,
            },
          },
        });

        return <DataTable.DataTable table={table} />;
      };

      renderWithTheme(<TestComponent />);

      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });
});
