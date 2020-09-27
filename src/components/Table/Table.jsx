import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { get, isEmpty } from "lodash";

import ColGroup from "./ColGroup";
import Thead from "./Thead";
import Tbody from "./Tbody";
import TableContext from "./context";

import Loading from "../Loading";

export default class Table extends Component {
  static propTypes = {
    columns: PropTypes.array,
    dataSource: PropTypes.array,
    rowKey: PropTypes.string,
    rowSelection: PropTypes.object,
    filters: PropTypes.object,
    sorter: PropTypes.object,
    title: PropTypes.node,
    footer: PropTypes.node,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    rowKey: "name",
    columns: [],
    dataSource: [],
    filters: {},
    sorter: {},
    loading: false,
    onChange() {},
  };

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
      <TableContext.Provider value={rest}>
        <Loading spinning={loading}>
          <div
            className={classNames(
              "table",
              {
                "table-hasSelected": this.hasSelected,
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
