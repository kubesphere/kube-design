import React, { Component } from "react";
import classNames from "classnames";

export type CheckboxValue = string | number
export interface CheckboxProps {
  className?: string,
  name?: string,
  value?: CheckboxValue,
  checked?: boolean,
  indeterminate: boolean,
  disabled: boolean,
  onChange: (checked: boolean, value?: CheckboxValue, e?: React.ChangeEvent<HTMLInputElement>) => void
}

export interface CheckboxState {
  checked: boolean,
}

export default class Checkbox extends Component<CheckboxProps, CheckboxState> {
  static defaultProps = {
    indeterminate: false,
    disabled: false,
    onChange() { },
  };

  isControlled = "checked" in this.props

  state = {
    checked: !!this.props.checked,
  }

  componentDidUpdate(prevProps: CheckboxProps, prevState: CheckboxState) {
    if (this.isControlled && this.props.checked !== prevState.checked) {
      this.setState({ checked: !!this.props.checked });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, value } = this.props;
    const { checked } = this.state;

    if (!this.isControlled) {
      this.setState({ checked: !checked });
    }

    onChange(!checked, value, e);
  };

  render() {
    const {
      className,
      children,
      onChange,
      indeterminate,
      checked,
      value,
      ...rest
    } = this.props;

    return (
      <label
        className={classNames(
          "checkbox",
          {
            indeterminate,
            checked: this.state.checked,
            disabled: rest.disabled,
          },
          className
        )}
      >
        <input
          type="checkbox"
          {...rest}
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        {children ? <span className="label-value">{children}</span> : null}
      </label>
    );
  }
}
