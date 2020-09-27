import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Tag extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    type: PropTypes.oneOf(["default", "warning", "primary"]),
    className: PropTypes.string,
  };

  static defaultProps = {
    type: "default",
  };

  render() {
    const { type, children, className, color } = this.props;

    const style = {};

    if (color) {
      style.backgroundColor = color;
    }

    return (
      <span
        className={classNames("tag", `tag-${type}`, className)}
        style={style}
      >
        {children}
      </span>
    );
  }
}
