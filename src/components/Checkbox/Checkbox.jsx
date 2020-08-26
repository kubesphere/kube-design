import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./styles.scss";

export default class Checkbox extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
    ]),
    checked: PropTypes.bool,
    children: PropTypes.node,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checked: false,
    indeterminate: false,
    onChange() {},
  };

  state = {
    checked: !!this.props.checked,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.checked !== prevState.checked) {
      this.setState({ checked: this.props.checked });
    }
  }

  handleChange = (e) => {
    const { onChange, value } = this.props;
    const checked = e.target.checked;

    this.setState({ checked });

    onChange(checked, value, e);
  };

  render() {
    const {
      className,
      children,
      onChange,
      indeterminate,
      ...rest
    } = this.props;
    const { checked } = this.state;

    return (
      <label
        className={classNames(
          "checkbox",
          {
            indeterminate,
            checked,
            disabled: rest.disabled,
          },
          className
        )}
      >
        <input
          type="checkbox"
          {...rest}
          onChange={this.handleChange}
          checked={checked}
        />
        {children ? <span className="label-value">{children}</span> : null}
      </label>
    );
  }
}
