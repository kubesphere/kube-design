import React, { PureComponent } from "react";
import propTypes from "prop-types";
import { noop } from "lodash";

import Icon from "@kube-design/icons";

import Input from "./Input";

class InputPassword extends PureComponent {
  static propTypes = {
    value: propTypes.string,
    defaultValue: propTypes.string,
    onChange: propTypes.func,
  };

  static defaultProps = {
    defaultValue: "",
    onChange: noop,
  };

  constructor(props) {
    super(props);
    this.state = {
      type: "password",
      value: String(props.value || props.defaultValue),
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && nextProps.value !== prevState.value) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  handleInputChange = (e, value) => {
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange && onChange !== noop) {
      onChange(e, value);
    }
  };

  handleChange = () => {
    this.setState((prevState) => ({
      type: prevState.type === "text" ? "password" : "text",
    }));
  };

  render() {
    const { type, value } = this.state;
    const { defaultValue, ...rest } = this.props;

    return (
      <div className="input-password has-icons-right">
        <Input
          {...rest}
          type={type}
          value={value}
          onChange={this.handleInputChange}
        />
        <Icon
          className="is-right"
          name={type === "text" ? "eye" : "eye-closed"}
          size="small"
          clickable
          onClick={this.handleChange}
        />
      </div>
    );
  }
}

export default InputPassword;
