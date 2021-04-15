import React, { PureComponent } from "react";
import classNames from "classnames";

import Icon from "../Icon";

import Loading from "../Loading";

export type ButtonType = "submit" | "button" | "reset"

export type ButtonSize = "small" | "normal" | "large"

type omitProps = "type"
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, omitProps> {
  type: string,
  htmlType: ButtonType,
  size: ButtonSize,
  icon: string,
  iconSize?: string | number,
  iconType: string,
  loading: boolean,
  ghost: boolean,
}

export default class Button extends PureComponent<ButtonProps, {}> {
  static defaultProps = {
    type: "default",
    htmlType: "button",
    size: "normal",
    icon: "",
    iconType: "dark",
    loading: false,
    disabled: false,
    ghost: false,
  };

  render() {
    const {
      children,
      type,
      htmlType,
      className,
      size,
      icon,
      iconType,
      iconSize,
      loading,
      ghost,
      ...rest
    } = this.props;

    return (
      <button
        className={classNames(
          "button",
          `button-${type}`,
          `button-size-${size}`,
          {
            "has-icon": icon,
            "is-loading": loading,
            "is-ghost": ghost,
          },
          className
        )}
        type={htmlType}
        {...rest}
      >
        {icon && <Icon name={icon} type={iconType} size={iconSize} />}
        {children && <div className="button-content">{children}</div>}
        {loading && <Loading size={16} />}
      </button>
    );
  }
}
