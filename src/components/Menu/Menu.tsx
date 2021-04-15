import React, { Component, cloneElement } from "react";
import classnames from "classnames";

import MenuItem from './MenuItem';

export interface MenuProps {
  style: object,
  width?: number,
  label?: string,
  className?: string,
  selectedKey?: string,
  children: React.ReactElement | React.ReactElement[]
  onClick: (e: React.SyntheticEvent<HTMLLIElement>, key: string, value: any) => void,
};

class Menu extends Component<MenuProps> {
  static defaultProps = {
    onClick() { },
    style: {},
  };

  static MenuItem: typeof MenuItem

  renderMenuItem = (component: React.ReactElement, index: number) => {
    if (!component) {
      return null;
    }

    if (!component) return null;

    const { selectedKey, onClick } = this.props;

    const newChildProps = {
      onClick,
      specKey: component.key || `menu-${index}`,
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

Menu.MenuItem = MenuItem;

export default Menu;
