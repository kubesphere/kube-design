import React, { Component } from "react";
import classNames from "classnames";
import { Checkbox } from "../Checkbox";
import Icon from "../Icon";
import { isFunction } from "lodash";

export default class Tr extends Component {
  state = {
    showExpand: this.props.defaultExpandAllRows,
  };

  get isChecked() {
    const { rowKey, rowSelection = {}, record, isSelectAll } = this.props;
    const { selectedRowKeys = [] } = rowSelection;
    return !isSelectAll && selectedRowKeys.includes(record[rowKey]);
  }

  handleChange = (checked) => {
    const { rowKey, rowSelection = {}, record } = this.props;
    const { selectedRowKeys = [], onSelect } = rowSelection;

    if (onSelect) {
      if (checked) {
        onSelect(record, checked, [...selectedRowKeys, record[rowKey]]);
      } else {
        onSelect(
          record,
          checked,
          selectedRowKeys.filter((key) => key !== record[rowKey])
        );
      }
    }
  };

  handleAllChange = (checked) => {
    const { rowKey, rowSelection = {}, records } = this.props;
    const { onSelectAll, getCheckboxProps } = rowSelection;

    if (onSelectAll) {
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
            .map((item) => item[rowKey])
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

    if (isSelectAll) {
      if (index > 0) {
        return null;
      }

      return (
        <th rowSpan={checkboxRowSpan}>
          <Checkbox
            checked={
              selectedRowKeys.length ===
                records.filter((item) => {
                  if (getCheckboxProps) {
                    const result = getCheckboxProps(item);
                    if (result && result.disabled) {
                      return false;
                    }
                  }
                  return true;
                }).length && selectedRowKeys.length > 0
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
    if (isFunction(getCheckboxProps)) {
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

    if (!expandedRowRender || !showExpand) {
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
