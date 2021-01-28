import React, { Component, cloneElement, Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { noop, remove, isEqual } from "lodash";
import CollapseItem from "./CollapseItem";

export default class Collapse extends Component {
  static CollapseItem = CollapseItem;

  static propTypes = {
    activeKey: PropTypes.arrayOf(PropTypes.string),
    defaultActiveKey: PropTypes.arrayOf(PropTypes.string),
    accordion: PropTypes.bool,
    children: PropTypes.node,
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    accordion: false,
    onChange: noop,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeKey: props.activeKey || props.defaultActiveKey || [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      "activeKey" in nextProps &&
      !isEqual(nextProps.activeKey, prevState.activeKey)
    ) {
      return { activeKey: nextProps.activeKey };
    }
    return null;
  }

  handleVisible = (key, visible) => {
    const { accordion, onChange } = this.props;
    const { activeKey } = this.state;

    let nextKey = [...activeKey];

    if (accordion) {
      nextKey = visible ? [key] : [];
    }
    if (!accordion && visible && !activeKey.includes(key)) {
      nextKey = activeKey.concat(key);
    }
    if (!accordion && !visible && activeKey.includes(key)) {
      remove(nextKey, (k) => k === key);
    }

    if (!("activeKey" in this.props)) {
      this.setState({ activeKey: nextKey });
    }

    onChange(nextKey);
  };

  renderChildren = () => {
    const { children } = this.props;
    const { activeKey } = this.state;

    if (!children) return null;

    return Children.map(children, (child, i) => {
      if (!child) {
        return null;
      }
      return cloneElement(child, {
        visible: activeKey.includes(child.key),
        specKey: child.key,
        isLast: children.length - 1 === i,
        handleVisible: this.handleVisible,
      });
    });
  };

  render() {
    const { children, className, style } = this.props;
    return (
      <div
        className={classNames({ collapse: !!children.length }, className)}
        style={style}
      >
        <ul>{this.renderChildren()}</ul>
      </div>
    );
  }
}
