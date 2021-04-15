import React from "react";
import classnames from "classnames";

export interface ProgressProps {
  className?: string,
  percent: number,
  status: "primary" | "warning" | "danger" | "auto",
  range: number[]
}

export default class Progress extends React.Component<ProgressProps> {
  static defaultProps = {
    percent: 0,
    status: "auto",
    range: [80, 95],
  };

  render() {
    const { percent, status, range, className } = this.props;

    const style = {
      width: `${percent}%`,
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
