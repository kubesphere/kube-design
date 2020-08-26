import React, { Component } from "react";
import classNames from 'classnames';
import { Checkbox } from "../Checkbox";

export default class Tr extends Component {
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
    const { onSelectAll } = rowSelection;

    if (onSelectAll) {
      if (checked) {
        onSelectAll(
          checked,
          records.map((item) => item[rowKey])
        );
      } else {
        onSelectAll(checked, []);
      }
    }
  };

  renderSelection() {
    const { rowSelection, isSelectAll, records } = this.props;

    if (!rowSelection) {
      return null;
    }

    const { selectedRowKeys = [] } = rowSelection;

    if (isSelectAll) {
      return (
        <th>
          <Checkbox
            checked={selectedRowKeys.length === records.length}
            indeterminate={
              selectedRowKeys.length < records.length &&
              selectedRowKeys.length > 0
            }
            onChange={this.handleAllChange}
          />
        </th>
      );
    }

    return (
      <td>
        <Checkbox checked={this.isChecked} onChange={this.handleChange} />
      </td>
    );
  }

  render() {
    const { data, columns, children } = this.props;
    return (
      <tr
        className={classNames("table-row", {
          "table-row-selected": this.isChecked,
        })}
      >
        {this.renderSelection()}
        {columns.map((column) => children(column, data))}
      </tr>
    );
  }
}
