import React, { Component } from "react";
import classNames from "classnames";

export type BadgeStatus = "default" | "success" | "error" | "warning"
export interface BadgeProps {
  count: number,
  overflowCount: number,
  status: BadgeStatus,
  style?: object,
  text?: string,
  className?: string,
}

class Badge extends Component<BadgeProps, {}> {
  static defaultProps = {
    status: "success",
    overflowCount: 99,
    count: 0,
  };

  renderBadge = () => {
    const { status, text, overflowCount, count } = this.props;

    let number;

    if (text) {
      number = text;
    } else if (overflowCount && count > overflowCount) {
      number = `${overflowCount}+`;
    } else {
      number = count;
    }

    return (
      <span className={classNames(`is-${status}`, "badge")}>{number}</span>
    );
  };

  render = () => {
    const { style, className, children } = this.props;
    return (
      <div className={classNames("badge-wrapper", className)} style={style}>
        {children}
        {this.renderBadge()}
      </div>
    );
  };
}
export default Badge;
