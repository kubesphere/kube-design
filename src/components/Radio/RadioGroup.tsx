import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { isFunction } from "lodash";
import Radio, { RadioProps } from "./Radio";
import RadioButton from "./RadioButton";

import { RadioGroupContext, IRadioGroupContext } from "./context";

export interface RadioGroupProps {
  options: Array<{
    label: string,
    value: string,
    disabled?: boolean
  }>,
  value?: string | number,
  defaultValue?: string | number,
  onChange: (value: string | number, name: string) => void,
  disabled?: boolean,
  name?: string,
  style?: object,
  className?: string,
  wrapClassName?: string,
  prefixCls: string,
  mode: string,
  buttonWidth: string | number,
  children?: React.ReactElement
}

export interface RadioGroupState {
  value?: string | number,
}

export default class RadioGroup extends Component<RadioGroupProps, RadioGroupState> {
  static defaultProps = {
    prefixCls: "radio-group",
    buttonWidth: "auto",
    mode: "",
  };

  static childContextTypes = {
    radioGroup: PropTypes.any,
  };

  constructor(props: RadioGroupProps) {
    super(props);

    let newValue;
    if ("value" in props) {
      newValue = props.value;
    } else if ("defaultValue" in props) {
      newValue = props.defaultValue;
    }

    this.state = {
      value: newValue,
    };
  }

  getChildContext(): IRadioGroupContext {
    const { disabled, name, buttonWidth } = this.props;
    const { value } = this.state;
    return {
      radioGroup: {
        onChange: this.handleChange,
        value,
        disabled,
        name,
        buttonWidth,
      },
    };
  }

  static getDerivedStateFromProps(nextProps: RadioGroupProps) {
    if ("value" in nextProps) {
      return { value: nextProps.value };
    }

    let newValue = null;
    let matched = false;

    if (nextProps.children) {
      React.Children.forEach(nextProps.children, (radio) => {
        if (radio && radio.props && radio.props.checked) {
          newValue = radio.props.value;
          matched = true;
        }
      });
    }

    return matched ? { value: newValue } : null;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange, name } = this.props;
    const { value: stateValue } = this.state;
    const { value } = e.target;
    if (!e.target.checked) return;
    if (!("value" in this.props)) {
      this.setState({
        value,
      });
    }

    if (isFunction(onChange) && value !== stateValue) {
      onChange(value, name);
    }
  };

  render() {
    const {
      options,
      className,
      wrapClassName,
      prefixCls,
      name,
      style,
      children,
      disabled,
      mode,
    } = this.props;
    const { value } = this.state;

    let newChildren: React.ReactNode = children;

    if (options && options.length > 0) {
      newChildren = options.map((option) => {
        const restProps = {
          name,
          className,
        } as RadioProps;

        let newLabel = null;
        if (typeof option === "string") {
          restProps.value = option;
          restProps.checked = value === option;
          restProps.disabled = disabled;
          newLabel = option;
        } else {
          restProps.value = option.value;
          restProps.checked = value === option.value;
          restProps.disabled = option.disabled || disabled;
          newLabel = option.label;
        }

        const RadioComponent = mode === "button" ? RadioButton : Radio;

        return (
          <RadioComponent
            key={`radio-${restProps.value}`}
            {...restProps}
            onChange={this.handleChange}
          >
            {newLabel}
          </RadioComponent>
        );
      });
    }

    return (
      <div
        className={classNames(prefixCls, wrapClassName, {
          "radio-group-button": mode === "button",
        })}
        style={style}
      >
        <RadioGroupContext.Provider value={this.getChildContext()}>
          {newChildren}
        </RadioGroupContext.Provider>
      </div>
    );
  }
}
