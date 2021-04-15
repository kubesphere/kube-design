import React, { Component } from "react";
import classNames from "classnames";
import { omit } from "lodash";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  defaultValue: string | number,
  innerRef?: React.LegacyRef<HTMLInputElement>,
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void,
}

export interface InputState {
  value: string,
}

export default class Input extends Component<InputProps, InputState> {
  static defaultProps = {
    type: "text",
    defaultValue: "",
    onChange() { },
  };

  state = {
    value: String("value" in this.props ? this.props.value : this.props.defaultValue),
  };

  componentDidUpdate(prevProps: InputProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: String(this.props.value) })
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { onChange } = this.props;

    this.setState({ value });
    onChange(e, value);
  };

  render() {
    const { className, innerRef, ...rest } = this.props;
    const { value } = this.state;

    return (
      <input
        {...omit(rest, "onChange", "value", "defaultValue")}
        ref={innerRef}
        value={value}
        onChange={this.handleChange}
        className={classNames("input", className)}
      />
    );
  }
}
