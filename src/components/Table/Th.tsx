import React, { Component } from "react";
import { get } from "lodash";

import Icon from "../Icon";

import Dropdown from "../Dropdown";
import Menu from "../Menu";
import LocaleProvider from "../LocaleProvider";
import { Column, Sorter } from "./Table";

const MenuItem = Menu.MenuItem;

const { locale } = LocaleProvider;

export interface ThProps {
  column: Column,
  filters?: object,
  sorter?: Sorter,
  onChange: (filter: object, sorter: Sorter) => void,
}

export default class Th extends Component<ThProps> {
  get hasFilter() {
    const { column } = this.props;
    return column.sorter || column.filters;
  }

  handleSorterChange = (e: React.SyntheticEvent<HTMLLIElement, Event>, key: string) => {
    const { column, onChange } = this.props;
    if (column.dataIndex) {
      onChange({}, { field: column.dataIndex, order: key });
    }
  };

  handleFiltersChange = (e: React.SyntheticEvent<HTMLLIElement, Event>, key: string) => {
    const { column, onChange } = this.props;
    if (column.dataIndex) {
      onChange({ [column.dataIndex]: key }, {} as Sorter);
    }
  };

  renderFilters() {
    const { column, filters, sorter } = this.props;

    if (column.sorter && sorter) {
      return (
        <Menu
          label={locale.get("KUBE_OPERATE")}
          selectedKey={sorter.field === column.dataIndex ? sorter.order : ""}
          onClick={this.handleSorterChange}
        >
          <MenuItem key="ascend">
            <Icon name="sort-ascending" />
            <span>{locale.get("KUBE_ASCENDING_ORDER")}</span>
          </MenuItem>
          <MenuItem key="descend">
            <Icon name="sort-descending" />
            <span>{locale.get("KUBE_DESCENDING_ORDER")}</span>
          </MenuItem>
        </Menu>
      );
    }

    if (column.filters && column.dataIndex) {
      return (
        <Menu
          label={locale.get("KUBE_FILTER")}
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

    const props = {
      colSpan: Number(column.colspan) < 2 ? undefined : column.colspan,
      rowSpan: Number(column.rowspan) < 2 ? undefined : column.rowspan,
    };

    if (this.hasFilter) {
      return (
        <th {...props} className="table-column-has-filters">
          <Dropdown content={this.renderFilters()}>
            <a>
              <span>{column.title}</span>
              <Icon name="caret-down" />
            </a>
          </Dropdown>
        </th>
      );
    }

    return <th {...props}>{column.title}</th>;
  }
}
