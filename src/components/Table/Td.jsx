import React from "react";
import { get, isFunction } from "lodash";

export default function Td({ column, record }) {
  const value = get(record, column.dataIndex);

  if (isFunction(column.render)) {
    return <td>{column.render(value, record)}</td>;
  }

  return <td>{value}</td>;
}
