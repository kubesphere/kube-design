import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Icon from "@kube-design/icons";

import Loading from "../Loading";

import "./styles.scss";

export default class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    htmlType: PropTypes.oneOf(["submit", "button", "reset"]),
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOf(["small", "normal", "large"]),
    icon: PropTypes.string,
    iconType: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    type: "default",
    htmlType: "button",
    size: "normal",
    icon: "",
    iconType: "dark",
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
        {icon && <Icon name={icon} type={iconType} />}
        {children && <div className="button-content">{children}</div>}
        {loading && <Loading size={16} />}
      </button>
    );
  }
}
