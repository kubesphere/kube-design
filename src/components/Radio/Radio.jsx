import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

export default class Radio extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
    ]),
    checked: PropTypes.bool,
    children: PropTypes.node,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    onChange() {},
  };

  handleChange = (e) => {
    const { onChange, value } = this.props;
    const checked = e.target.checked;

    onChange(checked, value, e);
  };

  render() {
    const { className, children, onChange, checked, ...rest } = this.props;

    return (
      <label
        className={classNames(
          "radio",
          {
            checked,
            disabled: rest.disabled,
          },
          className
        )}
      >
        <input
          type="radio"
          {...rest}
          onChange={this.handleChange}
          checked={checked}
        />
        {children ? <span className="label-value">{children}</span> : null}
      </label>
    );
  }
}
