import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Radio from "./Radio";

class RadioButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.any,
    style: PropTypes.object,
  };

  static contextTypes = {
    radioGroup: PropTypes.any,
  };

  static defaultProps = {
    prefixCls: "radio-button",
    style: {},
  };

  render() {
    const { value, disabled, style } = this.props;
    const { radioGroup } = this.context;
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

export default RadioButton;
