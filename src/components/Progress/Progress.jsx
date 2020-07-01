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

import "./styles.scss";

export default class Progress extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    percent: PropTypes.number.isRequired,
    status: PropTypes.oneOf(["primary", "warning", "danger", "auto"]),
    range: PropTypes.arrayOf(PropTypes.number)
  };

  static defaultProps = {
    percent: 0,
    status: "auto",
    range: [80, 95]
  };

  render() {
    const { percent, status, range, className } = this.props;

    const style = {
      width: `${percent}%`
    };

    let type = status;
    if (status === "auto") {
      if (percent < range[0]) {
        type = "primary";
      } else if (percent >= range[0] && percent < range[1]) {
        type = "warning";
      } else if (percent >= range[1]) {
        type = "danger";
      }
    }

    return (
      <div className={classnames("progress", className)}>
        <div
          className={classnames("progress-bar", `progress-bar-${type}`)}
          style={style}
        />
      </div>
    );
  }
}
