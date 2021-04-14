import React, { Component } from "react";
import { pick } from "lodash";
import TableContext from "./context";

export default class ColGroup extends Component<{}> {
  render() {
    return (
      <TableContext.Consumer>
        {({ columns, rowSelection, expandedRowRender }) => (
          <colgroup>
            {rowSelection && <col width="12" />}
            {columns.map((column) => (
              <col
                key={column.key || column.dataIndex}
                {...pick(column, ["width"])}
              />
            ))}
            {expandedRowRender && <col width="12" />}
          </colgroup>
        )}
      </TableContext.Consumer>
    );
  }
}
