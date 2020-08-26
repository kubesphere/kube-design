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
