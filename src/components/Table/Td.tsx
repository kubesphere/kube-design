import React from "react";
import { get, isFunction, isUndefined } from "lodash";
import { Column, Record } from './Table'

export interface TdProps {
  column: Column,
  record: Record,
}

export default function Td({ column, record }: TdProps) {
  const value = !isUndefined(column.dataIndex) ? get(record, column.dataIndex) : record;

  if (isFunction(column.render)) {
    return <td>{column.render(value, record)}</td>;
  }

  if (isUndefined(column.dataIndex)) {
    return <td></td>;
  }

  return <td>{value}</td>;
}
