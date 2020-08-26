import React, { Component } from "react";
import PropTypes from "prop-types";

import ColGroup from "./ColGroup";
import Thead from "./Thead";
import Tbody from "./Tbody";
import TableContext from "./context";

import Loading from "../Loading";

import "./styles.scss";

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

  render() {
    const { title, footer, loading, ...rest } = this.props;
    return (
      <TableContext.Provider value={rest}>
        <Loading spinning={loading}>
          <div className="table">
            {title && <div className="table-title">{title}</div>}
            <table>
              <ColGroup />
              <Thead />
              <Tbody />
            </table>
            {footer && <div className="table-footer">{footer}</div>}
          </div>
        </Loading>
      </TableContext.Provider>
    );
  }
}
