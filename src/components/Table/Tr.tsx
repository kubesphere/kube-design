import React, { Component } from "react";
import classNames from "classnames";
import { isFunction } from "lodash";
import { Checkbox } from "../Checkbox";
import Icon from "../Icon";
import { RowSelection, Record, Column } from './Table'

export interface TrProps {
  index: number,
  rowKey: string,
  rowSelection: RowSelection,
  record?: Record,
  records?: Record[],
  columns: Column[],
  isSelectAll: boolean,
  defaultExpandAllRows: boolean,
  rowKeyData?: string,
  checkboxRowSpan?: number,
  children: (column: Column) => React.ReactNode,
  expandedRowRender?: (column: Column) => React.ReactNode,
}

export interface TrState {
  showExpand: boolean,
}

export default class Tr extends Component<TrProps, TrState> {
  static defaultProps = {
    index: 0,
    rowSelection: {},
    isSelectAll: false,
    defaultExpandAllRows: false,
  }

  state = {
    showExpand: this.props.defaultExpandAllRows,
  };

  get isChecked() {
    const { rowKey, rowSelection, record, isSelectAll } = this.props;
    const { selectedRowKeys = [] } = rowSelection;
    return !isSelectAll && record && selectedRowKeys.includes(record[rowKey] as string);
  }

  handleChange = (checked: boolean) => {
    const { rowKey, rowSelection, record } = this.props;
    const { selectedRowKeys = [], onSelect } = rowSelection;

    if (onSelect && record) {
      if (checked) {
        onSelect(record, checked, [...selectedRowKeys, record[rowKey] as string]);
      } else {
        onSelect(
          record,
          checked,
          selectedRowKeys.filter((key) => key !== record[rowKey])
        );
      }
    }
  };

  handleAllChange = (checked: boolean) => {
    const { rowKey, rowSelection, records } = this.props;
    const { onSelectAll, getCheckboxProps } = rowSelection;

    if (onSelectAll && records) {
      if (checked) {
        onSelectAll(
          checked,
          records
            .filter((item) => {
              if (getCheckboxProps) {
                const result = getCheckboxProps(item);
                if (result && result.disabled) {
                  return false;
                }
              }
              return true;
            })
            .map((item) => item[rowKey] as string)
        );
      } else {
        onSelectAll(checked, []);
      }
    }
  };

  toggleExpand = () => {
    this.setState(({ showExpand }) => ({ showExpand: !showExpand }));
  };

  renderSelection() {
    const {
      index,
      checkboxRowSpan,
      rowSelection,
      isSelectAll,
      record,
      records,
    } = this.props;

    if (!rowSelection) {
      return null;
    }

    const { selectedRowKeys = [], getCheckboxProps } = rowSelection;

    if (isSelectAll && records) {
      if (index > 0) {
        return null;
      }

      return (
        <th rowSpan={checkboxRowSpan}>
          <Checkbox
            checked={
              selectedRowKeys.length === records.length &&
              selectedRowKeys.length > 0
            }
            indeterminate={
              selectedRowKeys.length < records.length &&
              selectedRowKeys.length > 0
            }
            onChange={this.handleAllChange}
            disabled={records.length <= 0}
          />
        </th>
      );
    }

    let props = {};
    if (isFunction(getCheckboxProps) && record) {
      props = getCheckboxProps(record);
    }

    return (
      <td>
        <Checkbox
          {...props}
          checked={this.isChecked}
          onChange={this.handleChange}
        />
      </td>
    );
  }

  renderExpandToggle() {
    const { expandedRowRender } = this.props;
    const { showExpand } = this.state;

    if (!expandedRowRender) {
      return null;
    }

    return (
      <td>
        <Icon
          name={showExpand ? "minus-square" : "plus-square"}
          onClick={this.toggleExpand}
          clickable
        />
      </td>
    );
  }

  renderExpand() {
    const { record, rowSelection, columns, expandedRowRender } = this.props;
    const { showExpand } = this.state;

    if (!expandedRowRender || !showExpand || !record) {
      return null;
    }

    return (
      <tr
        className={classNames("table-row table-row-expand", {
          "table-row-selected": this.isChecked,
        })}
      >
        {rowSelection && <td></td>}
        <td colSpan={columns.length}>{expandedRowRender(record)}</td>
      </tr>
    );
  }

  render() {
    const { columns, children, rowKeyData } = this.props;

    return (
      <>
        <tr
          className={classNames("table-row", {
            "table-row-selected": this.isChecked,
          })}
          data-row-key={rowKeyData}
        >
          {this.renderSelection()}
          {columns.map((column) => children(column))}
          {this.renderExpandToggle()}
        </tr>
        {this.renderExpand()}
      </>
    );
  }
}
