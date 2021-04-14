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
}

export interface RadioState {
  checked: boolean,
}

export default class Radio extends Component<RadioProps, RadioState> {
  static defaultProps = {
    prefixCls: "radio",
    defaultChecked: false,
  };

  static contextType = RadioGroupContext

  context!: IRadioGroupContext

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
    const { disabled, onChange } = this.props;
    const { radioGroup } = this.context || {};

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
    const { props, context } = this;
    const {
      prefixCls,
      className,
      children,
      style,
      defaultChecked,
      onChange,
      ...restProps
    } = props;
    const { checked } = this.state;

    const { radioGroup } = context || {};

    const RadioProps = { ...restProps };

    if (radioGroup) {
      RadioProps.name = radioGroup.name;
      RadioProps.checked = isEqual(props.value, radioGroup.value);
      RadioProps.disabled = props.disabled || radioGroup.disabled;
    } else {
      RadioProps.checked = checked;
    }

    const wrapperClassString = classNames(className, {
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-checked`]: RadioProps.checked,
      [`${prefixCls}-wrapper-disabled`]: RadioProps.disabled,
    });

    return (
      <label
        className={classNames(
          prefixCls,
          wrapperClassString,
          { checked: RadioProps.checked, disabled: RadioProps.disabled },
          className
        )}
        style={style}
      >
        <input type="radio" onChange={this.handleChange} {...RadioProps} />
        {children ? <span className="label-value">{children}</span> : null}
      </label>
    );
  }
}
