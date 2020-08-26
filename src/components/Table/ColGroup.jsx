import React, { Component } from "react";
import { pick } from "lodash";
import TableContext from "./context";

export default class ColGroup extends Component {
  render() {
    return (
      <TableContext.Consumer>
        {({ columns, rowSelection }) => (
          <colgroup>
            {rowSelection && <col />}
            {columns.map((column) => (
              <col
                key={column.key || column.dataIndex}
                {...pick(column, ["width"])}
              />
            ))}
          </colgroup>
        )}
      </TableContext.Consumer>
    );
  }
}
