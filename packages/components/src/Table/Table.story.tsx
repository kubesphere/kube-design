import React from 'react';
import { BaseTable } from './index';
import { Checkbox } from '../Checkbox/Checkbox';

const { Table, TableBody, TableCell, TableHead, TableRow, Pagination, Toolbar } = BaseTable;
export default {
  title: 'Components/Tables',
  component: BaseTable,
};

export const basicTable = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cell 4</TableCell>
            <TableCell>Cell 5</TableCell>
            <TableCell>Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const basicTableWithSelected = () => {
  const [selectIds, setSelectIds] = React.useState<string[]>([]);
  const handleSelect = (id: string) => {
    setSelectIds((ids) => {
      if (ids.includes(id)) {
        return ids.filter((i) => i !== id);
      }
      return [...ids, id];
    });
  };
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                checked={selectIds.length > 0 && selectIds.length === 2}
                indeterminate={selectIds.length > 0 && selectIds.length < 2}
                onChange={() => {
                  if (selectIds.length > 0) {
                    setSelectIds([]);
                  } else {
                    setSelectIds(['1', '2']);
                  }
                }}
              />
            </TableCell>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow selected={selectIds.includes('1')}>
            <TableCell>
              <Checkbox checked={selectIds.includes('1')} onChange={() => handleSelect('1')} />
            </TableCell>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
            <TableCell>Cell 3</TableCell>
          </TableRow>
          <TableRow selected={selectIds.includes('2')}>
            <TableCell>
              <Checkbox checked={selectIds.includes('2')} onChange={() => handleSelect('2')} />
            </TableCell>
            <TableCell>Cell 4</TableCell>
            <TableCell>Cell 5</TableCell>
            <TableCell>Cell 6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export const basicTableWithFixedHeader = () => {
  const data = React.useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      col1: i,
      col2: `col2-${i}`,
      col3: `col3-${i}`,
    }));
  }, []);
  return (
    <div
      style={{
        height: '300px',
        overflowY: 'auto',
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.col1}>
              <TableCell>{row.col1}</TableCell>
              <TableCell>{row.col2}</TableCell>
              <TableCell>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const basicTableWithFixedColumn = () => {
  const data = React.useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      col1: i,
      col2: `col2-${i}`,
      col3: `col3-${i}`,
    }));
  }, []);
  return (
    <div
      style={{
        height: '300px',
        overflow: 'auto',
        width: 500,
      }}
    >
      <Table
        stickyHeader
        style={{
          width: 700,
          minWidth: '100%',
        }}
      >
        <colgroup>
          <col width="100" />
          <col width="100" />
          <col width="100" />
          <col />
          <col width="100" />
          <col width="100" />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell fixed="left" fixedWidth={0}>
              Header 1
            </TableCell>
            <TableCell fixed="left" fixedWidth={100} fixedLastLeft>
              Header 2
            </TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.col1}>
              <TableCell fixed="left" fixedWidth={0}>
                {row.col1}
              </TableCell>
              <TableCell fixed="left" fixedWidth={100} fixedLastLeft>
                <div> {row.col2}</div>
              </TableCell>
              <TableCell>
                <div>{row.col3}</div>
              </TableCell>
              <TableCell>{row.col3}</TableCell>
              <TableCell>{row.col3}</TableCell>
              <TableCell>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const paginationTable = () => {
  return <Pagination total={100} onChange={console.log} />;
};

export const TableWithPaginationAndToolbar = () => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const handlePaginationChange = (pagination: { page: number; pageSize: number }) => {
    setPage(pagination.page);
    setPageSize(pagination.pageSize);
    setSelectedIds([]);
  };

  const columns = React.useMemo(() => {
    return [
      {
        key: 'col1',
        title: 'col1',
        width: 100,
        minWidth: 100,
        maxWidth: 100,
        render: (value: any) => {
          return <div>{value}</div>;
        },
      },
      {
        key: 'col2',
        title: 'col2',
        width: 100,
        minWidth: 100,
        maxWidth: 100,
        render: (value: any) => {
          return <div>{value}</div>;
        },
      },
      {
        key: 'col3',
        title: 'col3',
        width: 100,
        minWidth: 100,
        maxWidth: 100,
        render: (value: any) => {
          return <div>{value}</div>;
        },
      },
    ];
  }, []);
  const data = React.useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      col1: `page-${page}-col1-${i}`,
      col2: `page-${page}-col2-${i}`,
      col3: `page-${page}-col3-${i}`,
    }));
  }, [page]);

  const handleSelect = (id: string) => {
    setSelectedIds((ids) => {
      if (ids.includes(id)) {
        return ids.filter((i) => i !== id);
      }
      return [...ids, id];
    });
  };

  const enableBatchActions = selectedIds.length > 0;
  const setEnableBatchActions = (enable: boolean) => {
    if (!enable) {
      setSelectedIds([]);
    }
  };

  return (
    <>
      <Toolbar
        enableBatchActions={enableBatchActions}
        handleEnableBatchActions={setEnableBatchActions}
        enableFilters={false}
        filterProps={{
          filters: [],
          onChange: () => {},
        }}
        toolbarRight={<div>Toolbar Right</div>}
      />
      <Table
        stickyHeader
        style={{
          width: 700,
          minWidth: '100%',
        }}
      >
        <colgroup>
          <col width="100" />
          <col width="100" />
          <col width="100" />
          <col />
          <col width="100" />
          <col width="100" />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell fixed="left" fixedWidth={0}>
              <Checkbox
                checked={selectedIds.length > 0 && selectedIds.length === 2}
                indeterminate={selectedIds.length > 0 && selectedIds.length < 2}
                onChange={() => {
                  if (selectedIds.length > 0) {
                    setSelectedIds([]);
                  } else {
                    setSelectedIds(['1', '2']);
                  }
                }}
              />
            </TableCell>
            <TableCell fixed="left" fixedWidth={100} fixedLastLeft>
              Header 2
            </TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.col1} selected={selectedIds.includes(row.col1)}>
              <TableCell fixed="left" fixedWidth={0}>
                <Checkbox
                  checked={selectedIds.includes(row.col1)}
                  onChange={() => handleSelect(row.col1)}
                />
              </TableCell>
              <TableCell fixed="left" fixedWidth={100} fixedLastLeft>
                <div> {row.col2}</div>
              </TableCell>
              <TableCell>
                <div>{row.col3}</div>
              </TableCell>
              <TableCell>{row.col3}</TableCell>
              <TableCell>{row.col3}</TableCell>
              <TableCell>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        total={100}
        pagination={{
          page,
          pageSize,
        }}
        onChange={handlePaginationChange}
      />
    </>
  );
};
