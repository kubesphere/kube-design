import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Badge extends Component {
  static propTypes = {
    count: PropTypes.number,
    children: PropTypes.node,
    overflowCount: PropTypes.number,
    status: PropTypes.oneOf(["default", "success", "error", "warning"]),
    style: PropTypes.object,
    text: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    status: "success",
    overflowCount: 99,
    count: 0,
  };

  renderBadge = () => {
    const { status, text, overflowCount, count } = this.props;

    let number = "";

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
