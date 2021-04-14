import React, { Component } from "react";
import { isEqual } from "lodash";
import classNames from "classnames";

import { RadioGroupContext, IRadioGroupContext } from './context'

export interface RadioProps {
  name?: string,
  disabled?: boolean,
  checked?: boolean,
  defaultChecked: boolean,
  className?: string,
  prefixCls: string,
  style?: object,
  value?: string | number,
  children: JSX.Element | string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  context?: IRadioGroupContext,
}

export interface RadioState {
  checked: boolean,
}

class Radio extends Component<RadioProps, RadioState> {
  static defaultProps = {
    prefixCls: "radio",
    defaultChecked: false,
  };

  state = {
    checked: 'checked' in this.props ? !!this.props.checked : this.props.defaultChecked,
  }

  static getDerivedStateFromProps(nextProps: RadioProps, prevState: RadioState) {
    if ("checked" in nextProps && nextProps.checked !== prevState.checked) {
      return {
        checked: nextProps.checked,
      };
    }
    return null;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { disabled, onChange, context } = this.props;
    const { radioGroup } = context || {};

    if (disabled) return;

    if (!("checked" in this.props)) {
      this.setState({
        checked: e.target.checked,
      });
    }

    if (radioGroup) {
      return radioGroup.onChange(e);
    }

    if (onChange) {
      onChange(e);
    }
  };

  render() {
    const {
      prefixCls,
      className,
      children,
      style,
      defaultChecked,
      onChange,
      context,
      ...restProps
    } = this.props;
    const { checked } = this.state;

    const { radioGroup } = context || {};

    const radioProps = { ...restProps };

    if (radioGroup) {
      radioProps.name = radioGroup.name;
      radioProps.checked = isEqual(this.props.value, radioGroup.value);
      radioProps.disabled = this.props.disabled || radioGroup.disabled;
    } else {
      radioProps.checked = checked;
    }

    const wrapperClassString = classNames(className, {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-checked`]: radioProps.checked,
      [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
    });

    return (
      <label
        className={classNames(
          prefixCls,
          wrapperClassString,
          { checked: radioProps.checked, disabled: radioProps.disabled },
          className
        )}
        style={style}
      >
        <input type="radio" onChange={this.handleChange} {...radioProps} />
        {children ? <span className="label-value">{children}</span> : null}
      </label>
    );
  }
}

export default function RadioWrapper(props: Omit<RadioProps, "context">) {
  return (
    <RadioGroupContext.Consumer>
      {(context) =>
        <Radio {...props} context={context} />
      }
    </RadioGroupContext.Consumer>
  );
}
