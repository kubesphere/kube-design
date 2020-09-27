import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    type: "text",
    value: "",
    onChange() {},
  };

  render() {
    const { className, innerRef, ...rest } = this.props;
    return (
      <input
        {...rest}
        ref={innerRef}
        className={classNames("input", className)}
      />
    );
  }
}
