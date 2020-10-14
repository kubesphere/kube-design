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
    expandedRowRender: PropTypes.func,
  };

  static defaultProps = {
    rowKey: "name",
    columns: [],
    dataSource: [],
    filters: {},
    sorter: {},
    loading: false,
    defaultExpandAllRows: false,
    onChange() {},
  };

  constructor(props) {
    super(props);

    const [heads, columns] = this.getColumns(props);
    this.state = { heads, columns };
  }

  getColumns(props) {
    const { columns } = props;

    const heads = [];
    const newColumns = [];
    const walk = (data) => {
      heads.push([]);
      const index = heads.length - 1;
      const children = [];
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
