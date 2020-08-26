import React, { Component } from "react";
import Tr from "./Tr";
import Th from "./Th";
import TableContext from "./context";

export default class Thead extends Component {
  render() {
    return (
      <TableContext.Consumer>
        {({
          columns,
          filters,
          sorter,
          dataSource,
          onChange,
          rowKey,
          rowSelection,
        }) => (
          <thead>
            <Tr
              columns={columns}
              rowKey={rowKey}
              rowSelection={rowSelection}
              records={dataSource}
              isSelectAll
            >
              {(column) => (
                <Th
                  key={column.key || column.dataIndex}
                  column={column}
                  onChange={onChange}
                  filters={filters}
                  sorter={sorter}
                />
              )}
            </Tr>
          </thead>
        )}
      </TableContext.Consumer>
    );
  }
}
