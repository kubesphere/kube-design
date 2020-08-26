import React, { Component, cloneElement } from "react";
import classnames from "classnames";
import { noop, isFunction } from "lodash";
import PropTypes from "prop-types";

import MenuItem from "./MenuItem";

import "./styles.scss";

class Menu extends Component {
  static MenuItem = MenuItem;

  static propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object,
    width: PropTypes.number,
    label: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    selectedKey: PropTypes.string,
  };

  static defaultProps = {
    onClick: noop,
    style: {},
  };

  handleClick = (e, key, value) => {
    const { onClick } = this.props;
    if (isFunction(onClick)) {
      onClick(e, key, value);
    }
  };

  renderMenuItem = (component, index) => {
    if (!component) {
      return null;
    }

    if (!component) return null;

    const { selectedKey } = this.props;

    const newChildProps = {
      specKey: component.key || `menu-${index}`,
      onClick: this.handleClick,
      selected: component.key === selectedKey,
    };

    return cloneElement(component, newChildProps);
  };

  render() {
    const { children, className, style, width, label } = this.props;

    const classString = classnames("menu", className);

    const widthStyle = width ? { width } : null;

    return (
      <ul className={classString} style={Object.assign({}, style, widthStyle)}>
        {label && <div className="menu-label">{label}</div>}
        {React.Children.map(children, this.renderMenuItem)}
      </ul>
    );
  }
}

export default Menu;
