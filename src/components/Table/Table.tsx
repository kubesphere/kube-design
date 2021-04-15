import React, { Component } from "react";
import classNames from "classnames";
import { get, isEmpty } from "lodash";

import ColGroup from "./ColGroup";
import Thead from "./Thead";
import Tbody from "./Tbody";
import TableContext from "./context";

import Loading from "../Loading";
import { CheckboxProps } from "../Checkbox/Checkbox";

export interface Column {
  title?: string,
  dataIndex?: string,
  width?: string | number,
  key?: string,
  filters?: Filter[],
  sorter?: Sorter,
  colspan?: number,
  rowspan?: number,
  isHideable?: boolean,
  children?: Array<Column>,
  render?: (value: any, record: object) => React.ReactNode
}

export interface Record {
  [prop: string]: string | number | boolean,
}

export interface RowSelection {
  selectedRowKeys: string[],
  onSelect: (record: Record, checked: boolean, rowKeys: string[]) => void,
  onSelectAll: (checked: boolean, rowKeys: string[]) => void,
  getCheckboxProps: (record: Record) => Partial<CheckboxProps>,
}

export interface Filter {
  text: string,
  value: string
}

export interface Sorter {
  field?: string,
  order?: string,
}

export interface TableProps {
  columns: Column[],
  dataSource: Record[],
  rowKey: string,
  rowSelection?: RowSelection,
  filters: object,
  sorter: Sorter,
  title: React.ReactNode,
  footer: React.ReactNode,
  loading: boolean,
  defaultExpandAllRows: boolean,
  className?: string,
  emptyText?: React.ReactNode,
  onChange: () => void,
  expandedRowRender?: (column: Column) => React.ReactNode,
}

export interface TableState {
  heads: Column[][],
  columns: Column[]
}

export const DEFAULT_PROPS = {
  rowKey: "name",
  columns: [],
  dataSource: [],
  filters: {},
  sorter: {},
  loading: false,
  defaultExpandAllRows: false,
  onChange() { },
}

export default class Table extends Component<TableProps, TableState> {
  static defaultProps = DEFAULT_PROPS;

  constructor(props: TableProps) {
    super(props);

    const [heads, columns] = this.getColumns(props);
    this.state = { heads, columns };
  }

  componentDidUpdate(prevProps: TableProps) {
    if (this.props.columns.length !== prevProps.columns.length) {
      const [heads, columns] = this.getColumns(this.props);
      this.setState({ heads, columns, });
    }
  }

  getColumns(props: TableProps): [Column[][], Column[]] {
    const { columns } = props;

    const heads: Column[][] = [];
    const newColumns: Column[] = [];
    const walk = (data: Column[]) => {
      heads.push([]);
      const index = heads.length - 1;
      const children: Column[] = [];
      data.forEach((clm) => {
        if (clm.children) {
          children.push(...clm.children);
          heads[index].push({
            title: clm.title,
            colspan: clm.children.length,
          });
        } else {
          newColumns.push(clm);
          heads[index].push(clm);
        }
      });
      if (children.length > 0) {
        walk(children);
      }
      heads[index].forEach((head) => {
        head.rowspan = heads.length - index;
        if (head.colspan) {
          head.rowspan -= 1;
        }
      });
    };
    walk(columns);
    return [heads, newColumns];
  }

  get hasSelected() {
    return get(this.props, "rowSelection.selectedRowKeys.length") > 0;
  }

  render() {
    const {
      title,
      footer,
      loading,
      className,
      emptyText,
      ...rest
    } = this.props;
    return (
      <TableContext.Provider value={{ ...rest, ...this.state }}>
        <Loading spinning={loading}>
          <div
            className={classNames(
              "table",
              {
                "table-has-selected": this.hasSelected,
                "table-multi-heads": this.state.heads.length > 1,
              },
              className
            )}
          >
            {title && <div className="table-title">{title}</div>}
            <div className="table-body">
              <table>
                <ColGroup />
                <Thead />
                <Tbody />
              </table>
            </div>
            {isEmpty(rest.dataSource) && (
              <div className="table-placeholder">{emptyText}</div>
            )}
            {footer && <div className="table-footer">{footer}</div>}
          </div>
        </Loading>
      </TableContext.Provider>
    );
  }
}
