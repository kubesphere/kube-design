import React, { Component } from "react";
import classnames from "classnames";

export interface MenuItemProps {
  className?: string,
  disabled: boolean,
  selected?: boolean,
  value?: any,
  key: string,
  specKey?: string,
  onClick: (e: React.SyntheticEvent<HTMLLIElement>, key?: string, value?: any) => void,
}

export default class MenuItem extends Component<MenuItemProps> {
  static menuType = "MenuItem";

  static defaultProps = {
    disabled: false,
    onClick() {}
  }

  handleClick = (e: React.SyntheticEvent<HTMLLIElement>) => {
    const { specKey, value, onClick, disabled } = this.props;
    if (disabled) return;

    onClick(e, specKey, value);
  };

  render() {
    const { className, children, disabled, selected } = this.props;

    return (
      <li
        className={classnames("menu-item", className, {
          "menu-item-disabled": disabled,
          "menu-item-selected": selected,
        })}
        onClick={this.handleClick}
      >
        {children}
      </li>
    );
  }
}
