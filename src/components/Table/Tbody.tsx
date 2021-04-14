import React from "react";
import { Column } from './Table'
import Tr from "./Tr";
import Td from "./Td";
import TableContext from "./context";

export default function Tbody() {
  return (
    <TableContext.Consumer>
      {({
        dataSource,
        columns,
        rowKey,
        rowSelection,
        expandedRowRender,
        defaultExpandAllRows,
      }) => (
        <tbody>
          {dataSource.map((item) => (
            <Tr
              key={item[rowKey] as React.Key}
              record={item}
              rowKey={rowKey}
              columns={columns}
              rowKeyData={item[rowKey] as string}
              rowSelection={rowSelection}
              expandedRowRender={expandedRowRender}
              defaultExpandAllRows={defaultExpandAllRows}
            >
              {(column: Column) => (
                <Td
                  key={column.key || column.dataIndex}
                  column={column}
                  record={item}
                />
              )}
            </Tr>
          ))}
        </tbody>
      )}
    </TableContext.Consumer>
  );
}
