import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from "@kube-design/icons";

import CollapseTransition from "./CollapseTransition";

export default class CollapseItem extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool,
    specKey: PropTypes.string,
    isLast: PropTypes.bool,
    handleVisible: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    visible: false,
  };

  handleVisible = () => {
    const { specKey, handleVisible, visible } = this.props;
    handleVisible(specKey, !visible);
  };

  render() {
    const { label, children, visible, isLast, className, style } = this.props;
    const prefixCls = "collapse";
    const classLabel = classNames({
      [`${prefixCls}-item-label`]: true,
      [`${prefixCls}-item-label-border-bottom`]: !!visible,
      [`${prefixCls}-item-label-last-border-bottom`]: isLast && !visible,
    });
    const classContent = classNames({
      [`${prefixCls}-item-content`]: true,
      [`${prefixCls}-item-content-last-border-bottom`]: isLast && !!visible,
    });
    return (
      <li className={classNames(`${prefixCls}-item`, className)} style={style}>
        <div className={classLabel} onClick={this.handleVisible}>
          {label}
          <Icon
            name={`caret-${visible ? "up" : "down"}`}
            type="dark"
            size={20}
          />
        </div>
        <CollapseTransition visible={visible}>
          <div className={classContent}>{children}</div>
        </CollapseTransition>
      </li>
    );
  }
}
