import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BaseTable } from './Table';

const { Table, TableHead, TableBody, TableRow, TableCell, Pagination } = BaseTable;

describe('@kubed/components/Table', () => {
  describe('Table basic functionality', () => {
    it('renders table component', () => {
      renderWithTheme(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Header</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Header')).toBeInTheDocument();
      expect(screen.getByText('Cell')).toBeInTheDocument();
    });

    it('renders table with multiple rows', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Row 1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Row 1')).toBeInTheDocument();
      expect(screen.getByText('Row 2')).toBeInTheDocument();
      expect(screen.getByText('Row 3')).toBeInTheDocument();
    });

    it('renders table with multiple columns', () => {
      renderWithTheme(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Column 1</TableCell>
              <TableCell>Column 2</TableCell>
              <TableCell>Column 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Column 1')).toBeInTheDocument();
      expect(screen.getByText('Column 2')).toBeInTheDocument();
      expect(screen.getByText('Column 3')).toBeInTheDocument();
      expect(screen.getByText('Data 1')).toBeInTheDocument();
      expect(screen.getByText('Data 2')).toBeInTheDocument();
      expect(screen.getByText('Data 3')).toBeInTheDocument();
    });
  });

  describe('TableHead component', () => {
    it('renders table head', () => {
      renderWithTheme(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Header Cell</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      );

      expect(screen.getByText('Header Cell')).toBeInTheDocument();
    });

    it('renders table head with hasBorder prop', () => {
      renderWithTheme(
        <Table>
          <TableHead hasBorder>
            <TableRow>
              <TableCell>Header</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      );

      expect(screen.getByText('Header')).toBeInTheDocument();
    });

    it('renders table head with hasBorderTop prop', () => {
      renderWithTheme(
        <Table>
          <TableHead hasBorderTop>
            <TableRow>
              <TableCell>Header</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      );

      expect(screen.getByText('Header')).toBeInTheDocument();
    });
  });

  describe('TableBody component', () => {
    it('renders table body', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Body Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Body Cell')).toBeInTheDocument();
    });

    it('renders table body with hasBorder prop', () => {
      renderWithTheme(
        <Table>
          <TableBody hasBorder>
            <TableRow>
              <TableCell>Body Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Body Cell')).toBeInTheDocument();
    });

    it('renders empty table body', () => {
      const { container } = renderWithTheme(
        <Table>
          <TableBody />
        </Table>
      );

      expect(container.querySelector('tbody')).toBeInTheDocument();
    });
  });

  describe('TableRow component', () => {
    it('renders table row', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Row Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Row Cell')).toBeInTheDocument();
    });

    it('renders selected table row', () => {
      const { container } = renderWithTheme(
        <Table>
          <TableBody>
            <TableRow selected>
              <TableCell>Selected Row</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Selected Row')).toBeInTheDocument();
      const row = container.querySelector('.selected');
      expect(row).toBeInTheDocument();
    });

    it('renders table row with hover prop', () => {
      const { container } = renderWithTheme(
        <Table>
          <TableBody>
            <TableRow hover>
              <TableCell>Hover Row</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Hover Row')).toBeInTheDocument();
      const row = container.querySelector('.hover');
      expect(row).toBeInTheDocument();
    });

    it('handles onClick callback on row', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow {...({ onClick: handleClick } as any)}>
              <TableCell>Clickable Row</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const row = screen.getByText('Clickable Row').closest('tr');
      expect(row).toBeInTheDocument();

      if (row) {
        await user.click(row);
      }
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('TableCell component', () => {
    it('renders table cell', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Cell Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Cell Content')).toBeInTheDocument();
    });

    it('renders table cell with colSpan', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>Spanned Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Spanned Cell')).toBeInTheDocument();
      const cell = screen.getByText('Spanned Cell');
      expect(cell).toHaveAttribute('colspan', '2');
    });

    it('renders table cell with width', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell width={100}>Fixed Width Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Fixed Width Cell')).toBeInTheDocument();
    });

    it('renders table cell with fixed position', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell fixed="left" fixedWidth={0}>
                Fixed Left Cell
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Fixed Left Cell')).toBeInTheDocument();
    });

    it('renders table cell with right fixed position', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell fixed="right" fixedWidth={0}>
                Fixed Right Cell
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Fixed Right Cell')).toBeInTheDocument();
    });

    it('renders table cell with fixedLastLeft prop', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell fixed="left" fixedWidth={0} fixedLastLeft>
                Last Left Cell
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Last Left Cell')).toBeInTheDocument();
    });

    it('renders table cell with fixedLastRight prop', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell fixed="right" fixedWidth={0} fixedLastRight>
                Last Right Cell
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Last Right Cell')).toBeInTheDocument();
    });
  });

  describe('Table props', () => {
    it('renders with stickyHeader prop', () => {
      const { container } = renderWithTheme(
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Sticky Header</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Sticky Header')).toBeInTheDocument();
      expect(container.querySelector('.kube-table')).toBeInTheDocument();
    });

    it('renders with maxContext prop', () => {
      const { container } = renderWithTheme(
        <Table maxContext>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
      const table = container.querySelector('.kube-table--max-context');
      expect(table).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const { container } = renderWithTheme(
        <Table className="custom-table">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
      const table = container.querySelector('.custom-table');
      expect(table).toBeInTheDocument();
    });

    it('renders with custom style', () => {
      renderWithTheme(
        <Table style={{ width: '500px' }}>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('renders with tableWrapperClassName', () => {
      const { container } = renderWithTheme(
        <Table tableWrapperClassName="custom-wrapper">
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
      const wrapper = container.querySelector('.custom-wrapper');
      expect(wrapper).toBeInTheDocument();
    });

    it('renders with wrapperStyle', () => {
      renderWithTheme(
        <Table wrapperStyle={{ maxHeight: '300px' }}>
          <TableBody>
            <TableRow>
              <TableCell>Content</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Table complex scenarios', () => {
    it('renders complete table with header and body', () => {
      renderWithTheme(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>25</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>30</TableCell>
              <TableCell>jane@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Age')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
      expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    });

    it('renders table with mixed fixed columns', () => {
      renderWithTheme(
        <Table>
          <TableHead>
            <TableRow>
              <TableCell fixed="left" fixedWidth={0} width={100}>
                Fixed Left
              </TableCell>
              <TableCell>Normal Column</TableCell>
              <TableCell fixed="right" fixedWidth={0} fixedLastRight>
                Fixed Right
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell fixed="left" fixedWidth={0} width={100}>
                Left Data
              </TableCell>
              <TableCell>Normal Data</TableCell>
              <TableCell fixed="right" fixedWidth={0} fixedLastRight>
                Right Data
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Fixed Left')).toBeInTheDocument();
      expect(screen.getByText('Normal Column')).toBeInTheDocument();
      expect(screen.getByText('Fixed Right')).toBeInTheDocument();
      expect(screen.getByText('Left Data')).toBeInTheDocument();
      expect(screen.getByText('Normal Data')).toBeInTheDocument();
      expect(screen.getByText('Right Data')).toBeInTheDocument();
    });

    it('renders table with header groups using colSpan', () => {
      renderWithTheme(
        <Table>
          <TableHead hasBorder>
            <TableRow>
              <TableCell colSpan={2}>Personal Info</TableCell>
              <TableCell colSpan={1}>Contact</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>Doe</TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Personal Info')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
      expect(screen.getByText('First Name')).toBeInTheDocument();
      expect(screen.getByText('Last Name')).toBeInTheDocument();
    });

    it('renders table with selected rows', () => {
      const { container } = renderWithTheme(
        <Table>
          <TableBody>
            <TableRow selected>
              <TableCell>Selected Row</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Normal Row</TableCell>
            </TableRow>
            <TableRow selected>
              <TableCell>Another Selected Row</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Selected Row')).toBeInTheDocument();
      expect(screen.getByText('Normal Row')).toBeInTheDocument();
      expect(screen.getByText('Another Selected Row')).toBeInTheDocument();

      const selectedRows = container.querySelectorAll('.selected');
      expect(selectedRows.length).toBe(2);
    });
  });

  describe('Pagination component', () => {
    it('renders pagination component', () => {
      const { container } = renderWithTheme(
        <Pagination total={100} pagination={{ page: 1, pageSize: 10 }} onChange={vi.fn()} />
      );

      // Pagination component should render
      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles pagination onChange callback', () => {
      const handleChange = vi.fn();

      renderWithTheme(
        <Pagination total={100} pagination={{ page: 1, pageSize: 10 }} onChange={handleChange} />
      );

      // The onChange should not be called on initial render
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('renders pagination with different page sizes', () => {
      const { container } = renderWithTheme(
        <Pagination total={100} pagination={{ page: 2, pageSize: 20 }} onChange={vi.fn()} />
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Table with colgroup', () => {
    it('renders table with colgroup for column widths', () => {
      const { container } = renderWithTheme(
        <Table>
          <colgroup>
            <col width="100" />
            <col width="200" />
            <col />
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Column 1</TableCell>
              <TableCell>Column 2</TableCell>
              <TableCell>Column 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Data 1</TableCell>
              <TableCell>Data 2</TableCell>
              <TableCell>Data 3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Column 1')).toBeInTheDocument();
      const colgroup = container.querySelector('colgroup');
      expect(colgroup).toBeInTheDocument();
    });
  });

  describe('Table nested content', () => {
    it('renders table cells with nested React components', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div>
                  <span>Nested Content</span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Nested Content')).toBeInTheDocument();
    });

    it('renders table with complex nested structure', () => {
      renderWithTheme(
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <div>
                  <header>Cell Header</header>
                  <section>Cell Section</section>
                  <footer>Cell Footer</footer>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      expect(screen.getByText('Cell Header')).toBeInTheDocument();
      expect(screen.getByText('Cell Section')).toBeInTheDocument();
      expect(screen.getByText('Cell Footer')).toBeInTheDocument();
    });
  });
});
