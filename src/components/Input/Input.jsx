import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    type: "text",
    onChange() {},
  };

  render() {
    const { className, ...rest } = this.props;
    return <input {...rest} className={classNames("input", className)} />;
  }
}
