import React, { Component } from "react";
import Tr from "./Tr";
import Th from "./Th";
import TableContext from "./context";

export default class Thead extends Component {
  render() {
    return (
      <TableContext.Consumer>
        {({
          heads,
          filters,
          sorter,
          dataSource,
          onChange,
          rowKey,
          rowSelection,
        }) => (
          <thead>
            {heads.map((head, index) => (
              <Tr
                key={index}
                index={index}
                columns={head}
                rowKey={rowKey}
                rowSelection={rowSelection}
                records={dataSource}
                checkboxRowSpan={heads.length}
                isSelectAll
              >
                {(column, index) => (
                  <Th
                    key={column.key || column.dataIndex || index}
                    column={column}
                    onChange={onChange}
                    filters={filters}
                    sorter={sorter}
                  />
                )}
              </Tr>
            ))}
          </thead>
        )}
      </TableContext.Consumer>
    );
  }
}
