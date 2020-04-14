/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon";

import "./styles.scss";

const ICON_COLORS = {
  info: {
    primary: "#3385b0",
    secondary: "#fff"
  },
  error: {
    primary: "#8c3231",
    secondary: "#fff"
  },
  warning: {
    primary: "#8d663e",
    secondary: "#ffc781"
  }
};

const ICONS = {
  info: "check",
  error: "close",
  warning: "substract",
  default: "information"
};

export default class Alert extends React.PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(["info", "error", "warning", "default"]),
    icon: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  };

  static defaultProps = {
    type: "default",
    message: ""
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
