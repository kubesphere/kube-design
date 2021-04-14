import React, { PureComponent } from "react";
import classnames from "classnames";

import Icon from "../Icon";

const ICON_COLORS = {
  info: {
    primary: "#3385b0",
    secondary: "#fff",
  },
  error: {
    primary: "#8c3231",
    secondary: "#fff",
  },
  warning: {
    primary: "#8d663e",
    secondary: "#ffc781",
  },
  default: {}
};

const ICONS = {
  info: "check",
  error: "close",
  warning: "substract",
  default: "information",
};

type AlertType = "info" | "error" | "warning" | "default"

export interface AlertProps {
  className?: string,
  type: AlertType,
  icon?: string,
  title?: JSX.Element,
  message: JSX.Element,
}

export default class Alert extends PureComponent<AlertProps, {}> {
  static defaultProps = {
    type: "default",
  };

  render() {
    const { className, type, title, message } = this.props;

    return (
      <div className={classnames("alert", className, `alert-${type}`)}>
        {this.renderIcon()}
        <div className="alert-content">
          {title && <div className="alert-title">{title}</div>}
          <span className="alert-message">{message}</span>
        </div>
      </div>
    );
  }

  renderIcon() {
    const { icon, type, title } = this.props;

    if (!icon && !title) {
      return null;
    }

    const iconName = icon || ICONS[type];

    return (
      <Icon
        className="alert-icon"
        name={iconName}
        size={!!title ? 32 : 20}
        color={ICON_COLORS[type]}
      />
    );
  }
}
