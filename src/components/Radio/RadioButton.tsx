import React, { Component } from "react";
import classNames from "classnames";
import Radio, { RadioProps } from "./Radio";
import { RadioGroupContext } from "./context";

export interface RadioButtonProps extends RadioProps {
  buttonWidth?: number,
}

class RadioButton extends Component<RadioButtonProps> {
  static defaultProps = {
    prefixCls: "radio-button",
    style: {},
  };

  render() {
    const { value, disabled, style, context } = this.props;
    const { radioGroup } = context || {};
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


export default function RadioButtonWrapper(props: Omit<RadioButtonProps, "context">) {
  return (
    <RadioGroupContext.Consumer>
      {(context) =>
        <RadioButton {...props} context={context} />
      }
    </RadioGroupContext.Consumer>
  );
}
