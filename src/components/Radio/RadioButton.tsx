import React, { Component } from "react";
import classNames from "classnames";
import Radio, { RadioProps } from "./Radio";
import { RadioGroupContext, IRadioGroupContext } from "./context";

export interface RadioButtonProps extends RadioProps {
  buttonWidth?: number,
}

export default class RadioButton extends Component<RadioButtonProps> {
  static defaultProps = {
    prefixCls: "radio-button",
    style: {},
  };

  static contextType = RadioGroupContext

  context!: IRadioGroupContext

  render() {
    const { value, disabled, style } = this.props;
    const { radioGroup } = this.context || {};
    const radioProps = { ...this.props };
    if (radioGroup) {
      radioProps.onChange = radioGroup.onChange;
      radioProps.checked = value === radioGroup.value;
      radioProps.disabled = disabled || radioGroup.disabled;
      radioProps.style = { ...style, width: radioGroup.buttonWidth };
    }

    delete radioProps.buttonWidth;

    radioProps.className = classNames(radioProps.className, "button");

    return <Radio {...radioProps} />;
  }
}
