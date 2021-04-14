import React, { Component } from "react";

import Icon from "../Icon";

import Input, { InputProps } from "./Input";

type InputPasswordProps = Omit<InputProps, "type">

interface InputPasswordState {
  type: string,
}

export default class InputPassword extends Component<InputPasswordProps, InputPasswordState> {
  state = {
    type: "password",
  };

  toggleType = () => {
    this.setState(({ type }) => ({
      type: type === "text" ? "password" : "text",
    }));
  };

  render() {
    const { type } = this.state;

    return (
      <div className="input-password has-icons-right">
        <Input {...this.props} type={type} />
        <Icon
          className="is-right"
          name={type === "text" ? "eye" : "eye-closed"}
          size="small"
          clickable
          onClick={this.toggleType}
        />
      </div>
    );
  }
}
