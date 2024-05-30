import { More, Pen } from '@kubed/icons';
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  RowSelectionState,
  Updater,
  useReactTable,
} from '@tanstack/react-table';
import React, { useMemo } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { BaseTable, DataTable } from './Table';

import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { Menu, MenuItem } from '../Menu/Menu';
import { Select } from '../Select/Select';
import { StateHandler, Status2StorageFeature, getDefaultTableOptions, useTable } from './DataTable';
import { Center } from '../Center/Center';

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
    return [...Array(100).fill(1)].map((_, i) => ({
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
        <TableHead hasBorder>
          <TableRow>
            <TableCell colSpan={2}>Header 1</TableCell>
            <TableCell colSpan={1}>Header 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody hasBorder>
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
    return [...Array(100).fill(1)].map((_, i) => ({
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
          <col width="200" />
          <col />
          <col />
          <col />
          <col width="100" />
        </colgroup>
        <TableHead hasBorder>
          <TableRow>
            <TableCell fixed="left" fixedWidth={0} width={100}>
              Header 1
            </TableCell>
            <TableCell fixed="left" fixedWidth={100} fixedLastLeft>
              Header 2
            </TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell>Header 3</TableCell>
            <TableCell fixed="right" fixedLastRight fixedWidth={0}>
              Header 3
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody hasBorder>
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
              <TableCell fixed="right" fixedLastRight fixedWidth={0}>
                {row.col3}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const paginationTable = () => {
  const [state, setState] = React.useState({
    page: 1,
  });
  return <BaseTable.Pagination total={100} pagination={state} onChange={setState} />;
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

  // const columns = React.useMemo(() => {
  //   return [
  //     {
  //       key: 'col1',
  //       title: 'col1',
  //       width: 100,
  //       minWidth: 100,
  //       maxWidth: 100,
  //       render: (value: any) => {
  //         return <div>{value}</div>;
  //       },
  //     },
  //     {
  //       key: 'col2',
  //       title: 'col2',
  //       width: 100,
  //       minWidth: 100,
  //       maxWidth: 100,
  //       render: (value: any) => {
  //         return <div>{value}</div>;
  //       },
  //     },
  //     {
  //       key: 'col3',
  //       title: 'col3',
  //       width: 100,
  //       minWidth: 100,
  //       maxWidth: 100,
  //       render: (value: any) => {
  //         return <div>{value}</div>;
  //       },
  //     },
  //   ];
  // }, []);
  const data = React.useMemo(() => {
    return [...Array(10).fill(1)].map((_, i) => ({
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
  const setEnableBatchActions = () => {
    setSelectedIds([]);
  };

  return (
    <>
      <Toolbar
        enableBatchActions={enableBatchActions}
        onDisableBatchActions={setEnableBatchActions}
        enableFilters={false}
        filterProps={{
          suggestions: [],
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

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = Array.from({ length: 100 }, (_, i) => ({
  firstName: `firstName-${i}`,
  lastName: `lastName-${i}`,
  age: i,
  visits: i,
  status: `status-${i}`,
  progress: i,
}));

const defaultColumns: ColumnDef<Person>[] = [
  {
    header: 'Name',
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: 'firstName',
        cell: (info) => info.getValue(),
        enableSorting: true,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
        enableHiding: true,
      },
    ],
  },
  {
    header: 'Info',
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: 'age',
        header: () => {
          return 'Age';
        },
        footer: (props) => props.column.id,
        enableHiding: true,
        meta: {
          sortable: true,
          // filterOptions: [
          //   {
          //     key: '0',
          //     label: '0',
          //   },
          //   {
          //     key: '1',
          //     label: '1',
          //   },
          // ],
        },
      },
      {
        header: 'More Info',
        columns: [
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: 'status',
            header: 'Status',
            footer: (props) => props.column.id,

            enableHiding: true,
            meta: {
              searchKey: 'status1',
            },
            //   filterOptions: [
            //     {
            //       key: 'status-0',
            //       label: 'status-0',
            //     },
            //     {
            //       key: 'status-1',
            //       label: 'status-1',
            //     },
            //   ],
            // },
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
  },
  {
    id: 'actions',
    meta: {
      th: {
        width: '100px',
      },
    },
    cell: () => (
      <Dropdown
        content={
          <Menu>
            <MenuItem icon={<Pen />}>Edit</MenuItem>
          </Menu>
        }
      >
        <Button variant="text" radius="lg">
          <More size={16} />
        </Button>
      </Dropdown>
    ),
  },
];

export const BaseDataTable = () => {
  const [data] = React.useState(() => [...defaultData]);
  const [columns] = React.useState<typeof defaultColumns>(() => [...defaultColumns]);
  const [columnVisibility, setColumnVisibility] = React.useState({});

  // const rerender = React.useReducer(() => ({}), {})[1];
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    meta: {
      tableName: 'xxxx',
      enable: {
        toolbar: true,
        pagination: true,
      },
      getProps: {
        pagination: () => ({
          config: {
            autoResetPageIndex: true,
          },
        }),
      },
    },
  });
  return <DataTable.DataTable table={table} />;
};

export const DataTableWithRemoteData = () => {
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [loading, setLoading] = React.useState(false);
  const [columns] = React.useState<typeof defaultColumns>(() => [...defaultColumns]);
  const total = 100;
  const data = React.useMemo(() => {
    // if (loading) {
    //   return [];
    // }
    return [...Array(pagination.pageSize)].fill(1).map((_, i) => ({
      firstName: `page-${pagination.pageIndex}-firstName-${i}`,
      lastName: `lastName-${i}`,
      age: i,
      visits: i,
      status: `status-${i}`,
      progress: i,
    }));
  }, [pagination, loading]);
  const [columnVisibility, setColumnVisibility] = React.useState({});

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pagination]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      pagination,
    },
    autoResetPageIndex: false,
    pageCount: Math.ceil(total / pagination.pageSize),
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    debugAll: true,
    meta: {
      tableName: 'adadfssv',
      manual: true,
      registerHandlers: [
        {
          stateKeys: '*',
          callback: console.log,
        },
      ],
      enable: {
        toolbar: true,
        pagination: true,
      },
      getProps: {
        pagination: () => ({
          total,
          config: {
            autoResetPageIndex: true,
          },
        }),
      },
    },
  });

  return <DataTable.DataTable table={table} />;
};

export const DataTableWithSelected = () => {
  // const [pagination, setPagination] = React.useState({
  //   pageIndex: 0,
  //   pageSize: 10,
  // });
  const [params, setParams] = React.useState({
    pagination: {
      pageIndex: 0,
      pageSize: 10,
    },
  } as any);
  const { pagination = {} } = params;
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({}); //manage your own row selection state

  const handleParams = (p: Updater<any>) => {
    setRowSelection({});
    setParams(p);
  };
  const [loading, setLoading] = React.useState(false);
  const [columns] = React.useState<typeof defaultColumns>(() => [
    {
      id: 'selection',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected() || table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()} //or getToggleAllPageRowsSelectedHandler
        />
      ),
      cell: ({ row }) => (
        <Center>
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Center>
      ),
    },
    ...defaultColumns,
  ]);
  const total = 100;
  const data = React.useMemo(() => {
    if (loading) {
      return [];
    }
    return [...Array(pagination.pageSize)].fill(1).map((_, i) => ({
      firstName: `page-${pagination.pageIndex}-firstName-${i}`,
      lastName: `lastName-${i}`,
      age: i,
      visits: i,
      status: `status-${i}`,
      progress: i,
    }));
  }, [params, loading]);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [params]);

  const state = useMemo(() => {
    return {
      ...params,
      rowSelection,
    };
  }, [params, rowSelection]);
  const registerHandlers = React.useMemo(() => {
    return [
      {
        handlerName: 'onParamsChange',
        stateKeys: ['pagination', 'columnFilters', 'sorting'],
      },
      {
        stateKeys: '*',
        callback: console.log,
      },
      {
        handlerName: 'onRowSelectionChange1',
        stateKeys: ['rowSelection'],
      },
    ] as StateHandler[];
  }, []);
  const table = useTable<Person>({
    _features: [Status2StorageFeature],
    data,
    columns,
    state,
    autoResetPageIndex: false,
    getRowId: (row) => row.firstName,
    rowCount: total,
    onRowSelectionChange: setRowSelection, //hoist up the row selection state to your own scope
    // onPaginationChange: handlePagination,
    getCoreRowModel: getCoreRowModel(),
    onParamsChange: handleParams,
    // @ts-ignore
    manualPagination: true,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    debugAll: true,
    meta: {
      storageStateKeys: ['columnVisibility'],
      tableName: 'adsv',
      manual: true,
      enable: {
        toolbar: true,
        pagination: true,
      },
      getProps: {
        pagination: () => ({
          total,
          config: {
            autoResetPageIndex: true,
          },
        }),
        toolbar: () => {
          return {
            batchActions: (
              <Button
                onClick={() => {
                  console.log(rowSelection);
                }}
              >
                Delete
              </Button>
            ),
            toolbarLeft: <Select />,
            toolbarRight: (
              <>
                <Button variant="filled" color="secondary" shadow radius="xl">
                  Create
                </Button>
                <Button variant="filled" color="secondary" shadow radius="xl">
                  Create
                </Button>
              </>
            ),
          };
        },
        filters: () => {
          return {
            simpleMode: false,
            suggestions: [
              {
                key: 'age',
                label: 'Age',
                options: [
                  {
                    key: '0',
                    label: '0',
                  },
                  {
                    key: '1',
                    label: '1',
                  },
                ],
              },
              {
                key: 'status1',
                label: 'Status',
                options: [
                  {
                    key: 'status-0',
                    label: 'status-0',
                  },
                  {
                    key: 'status-1',
                    label: 'status-1',
                  },
                ],
              },
            ],
          };
        },
      },
      registerHandlers,
    },
  });
  // const forceUpdate = React.useReducer(() => ({}), {})[1];

  return (
    <>
      <DataTable.DataTable table={table} />
    </>
  );
};

export const DataTableWithDefault = () => {
  const [params, setParams] = React.useState({
    pagination: {
      pageIndex: 0,
      pageSize: 10,
    },
    columnFilters: [],
    sorting: [],
  } as any);
  const { pagination = {} } = params;
  const [rowSelection, setRowSelection] = React.useState({}); //manage your own row selection state

  const handleParams = (p, key) => {
    setRowSelection({});
    const { pagination: page } = p;
    if (key === 'pagination') {
      setParams(p);
    } else {
      setParams({
        ...p,
        pagination: {
          ...page,
          pageIndex: 0,
        },
      });
    }
  };
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [params]);
  const [columns] = React.useState(() => [
    {
      id: 'selection',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()} //or getToggleAllPageRowsSelectedHandler
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    ...defaultColumns,
  ]);
  const total = 100;
  const data = React.useMemo(() => {
    if (loading) {
      return [];
    }
    return [...Array(pagination.pageSize)].fill(1).map((_, i) => ({
      firstName: `page-${pagination.pageIndex}-firstName-${i}`,
      lastName: `lastName-${i}`,
      age: i,
      visits: i,
      status: `status-${i}`,
      progress: i,
    }));
  }, [params, loading]);

  const state = React.useMemo(() => {
    return {
      ...params,
      rowSelection,
    };
  }, [params, rowSelection]);

  const defaultOption = React.useState(
    DataTable.getDefaultTableOptions<Person>({
      tableName: 'table1',
      manual: true,
      enableSelection: true,
      enableMultiSelection: true,
    })
  )[0];

  const table = DataTable.useTable<Person>({
    ...defaultOption,
    data,
    loading,
    columns,
    onRowSelectionChange: setRowSelection,
    onParamsChange: handleParams,
    rowCount: total,
    getRowId: (row) => row.firstName,
    state,
    meta: {
      ...defaultOption.meta,
      tableName: defaultOption.meta.tableName,
      getProps: {
        filters: () => {
          return {
            simpleMode: false,
            suggestions: [
              {
                key: 'age',
                label: 'Age',
                options: [
                  {
                    key: '0',
                    label: '0',
                  },
                  {
                    key: '1',
                    label: '1',
                  },
                ],
              },
              {
                key: 'status1',
                label: 'Status',
                options: [
                  {
                    key: 'status-0',
                    label: 'status-0',
                  },
                  {
                    key: 'status-1',
                    label: 'status-1',
                  },
                  {
                    key: 'status-2',
                    label: 'status-2',
                  },
                ],
              },
            ],
          };
        },
      },
    },
  });

  return <DataTable.DataTable table={table} />;
};

export const DataTableSimple = () => {
  const [loading] = React.useState(false);
  const [columns] = React.useState<typeof defaultColumns>(() => [
    {
      id: '_selector',
      meta: {
        th: {
          width: '36px',
          align: 'center',
        },
        td: {
          align: 'center',
        },
      },
      header: ({ table }: { table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={(e) => {
            const indeterminate = table.getIsSomeRowsSelected();
            if (indeterminate) {
              e.target.checked = true;
            }
            table.getToggleAllRowsSelectedHandler()(e);
          }} //or getToggleAllPageRowsSelectedHandler
        />
      ),
      cell: ({ row }: { row }) => (
        <Center>
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        </Center>
      ),
    },
    ...defaultColumns,
  ]);
  const data = React.useMemo(() => {
    if (loading) {
      return [];
    }
    return [...Array(100).fill(1)].map((_, i) => ({
      firstName: `firstName-${i}`,
      lastName: `lastName-${i}`,
      age: i,
      visits: i,
      status: `status-${i}`,
      progress: i,
    }));
  }, [loading]);

  const forceUpdate = React.useReducer(() => ({}), {})[1];

  const defaultOption = React.useState(
    getDefaultTableOptions<Person>({
      tableName: 'table1',
      manual: false,
      enableSelection: true,
      enableMultiSelection: true,
      enableFilters: true,
    })
  )[0];

  const table = useTable<Person>({
    ...defaultOption,
    data,
    columns,
    getRowId: (row) => row.firstName,
    meta: {
      refetch: () => forceUpdate(),
      ...defaultOption.meta,
      tableName: defaultOption.meta?.tableName!,
      registerHandlers: [
        {
          stateKeys: '*',
          callback: console.log,
        },
      ],
      getProps: {
        filters: () => {
          return {
            simpleMode: false,
            suggestions: [
              {
                key: 'age',
                label: 'Age',
                options: [
                  {
                    key: '0',
                    label: '0',
                  },
                  {
                    key: '1',
                    label: '1',
                  },
                ],
              },
              {
                key: 'status1',
                label: 'Status',
                options: [
                  {
                    key: 'status-0',
                    label: 'status-0',
                  },
                  {
                    key: 'status-1',
                    label: 'status-1',
                  },
                  {
                    key: 'status-x',
                    label: 'status-x',
                  },
                ],
              },
            ],
          };
        },
        empty: () => {
          return {
            title: 'xxxx',
            enableCreate: true,
          };
        },
      },
    },
  });

  return (
    <>
      <div>
        {/* <button onClick={() => forceUpdate()} type="button">
          forceUpdate
        </button> */}
      </div>
      <DataTable.DataTable table={table} />
    </>
  );
};

export const TableDemo = () => {
  const [defaultOptions] = React.useState(
    getDefaultTableOptions({
      tableName: 'table-demo',
      manual: false,
      enableFilters: false,
      enablePagination: false,
    })
  );
  const columns = React.useMemo(() => {
    return [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: 'age',
        header: 'Age',
        cell: (info) => info.getValue(),
        filterFn: 'equals',
      },
      {
        accessorKey: 'address',
        header: 'Address',
        cell: (info) => info.getValue(),
      },
    ];
  }, []);
  const data = React.useMemo(() => {
    return [
      { name: 'KubeSphere', age: 1, address: 'Beijing' },
      { name: 'KubeSphere', age: 3, address: 'Beijing' },
      { name: 'KubeSphere', age: 2, address: 'Beijing' },
    ];
  }, []);
  const table = useTable({
    ...defaultOptions,
    columns: columns as any,
    data,
    meta: {
      ...defaultOptions.meta,
      getProps: {
        filters: () => {
          return {
            simpleMode: false,
            suggestions: [
              {
                key: 'age',
                label: 'Age',
                options: Array(4)
                  .fill(1)
                  .map((i, index) => ({ key: index, label: `Age ${index}` })),
              },
            ],
          };
        },
      },
    },
  });
  return <DataTable.DataTable table={table} />;
};
