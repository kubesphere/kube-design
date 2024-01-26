import React from 'react';
import { BaseTable } from './index';
import { Checkbox } from '../Checkbox/Checkbox';
import styled from 'styled-components';

const { Table, TableBody, TableCell, TableHead, TableRow } = BaseTable;
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
