import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

export default class TextArea extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rows: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    rows: "2",
    onChange() {}
  };

  render() {
    const { className, ...rest } = this.props;
    return <textarea {...rest} className={classNames("textarea", className)} />;
  }
}
