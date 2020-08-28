import React, { Component } from "react";
import { get } from "lodash";

import Icon from "@kube-design/icons";

import Dropdown from "../Dropdown";
import Menu from "../Menu";

const MenuItem = Menu.MenuItem;

export default class Th extends Component {
  get hasFilter() {
    const { column } = this.props;
    return column.sorter || column.filters;
  }

  handleSorterChange = (e, key) => {
    const { column, onChange } = this.props;
    onChange({}, { field: column.dataIndex, order: key });
  };

  handleFiltersChange = (e, key) => {
    const { column, onChange } = this.props;
    onChange({ [column.dataIndex]: key }, {});
  };

  renderFilters() {
    const { column, filters, sorter } = this.props;

    if (column.sorter) {
      return (
        <Menu
          label="OPERATE"
          selectedKey={sorter.field === column.dataIndex ? sorter.order : ""}
          onClick={this.handleSorterChange}
        >
          <MenuItem key="asc">
            <Icon name="sort-ascending" />
            <span>ASC...</span>
          </MenuItem>
          <MenuItem key="desc">
            <Icon name="sort-descending" />
            <span>DESC...</span>
          </MenuItem>
        </Menu>
      );
    }

    if (column.filters) {
      return (
        <Menu
          label="FILTER"
          selectedKey={get(filters, column.dataIndex, "")}
          onClick={this.handleFiltersChange}
        >
          {column.filters.map((filter) => (
            <MenuItem key={filter.value}>{filter.text}</MenuItem>
          ))}
        </Menu>
      );
    }

    return null;
  }

  render() {
    const { column } = this.props;

    if (this.hasFilter) {
      return (
        <th className="table-column-has-filters">
          <Dropdown content={this.renderFilters()}>
            <a>
              <span>{column.title}</span>
              <Icon name="caret-down" />
            </a>
          </Dropdown>
        </th>
      );
    }

    return <th>{column.title}</th>;
  }
}
