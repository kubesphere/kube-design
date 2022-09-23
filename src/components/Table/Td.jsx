import React from "react";
import { get, isFunction } from "lodash";

export default function Td({ column, record }) {
  const value = "dataIndex" in column ? get(record, column.dataIndex) : record;

  if (isFunction(column.render)) {
    return (
      <td className={column.className || ""}>{column.render(value, record)}</td>
    );
  }

  if (!"dataIndex" in column) {
    return <td></td>;
  }

  return <td className={column.className || ""}>{value}</td>;
}
