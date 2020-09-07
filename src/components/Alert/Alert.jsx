import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Icon from "@kube-design/icons";

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
};

const ICONS = {
  info: "check",
  error: "close",
  warning: "substract",
  default: "information",
};

export default class Alert extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(["info", "error", "warning", "default"]),
    icon: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    type: "default",
    message: "",
  };

  render() {
    const { className, type, title, message } = this.props;

    return (
      <div className={classnames("alert", className, `alert-${type}`)}>
        {!!title && this.renderIcon()}
        <div className="alert-content">
          {title && <div className="alert-title">{title}</div>}
          <span className="alert-message">{message}</span>
        </div>
      </div>
    );
  }

  renderIcon() {
    const { icon, type } = this.props;
    const iconName = icon || ICONS[type];
    return (
      <Icon
        className="alert-icon"
        name={iconName}
        size={32}
        color={ICON_COLORS[type]}
      />
    );
  }
}
