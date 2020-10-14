import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isFunction } from "lodash";
import Radio from "./Radio";
import RadioButton from "./RadioButton";

class RadioGroup extends Component {
  static propTypes = {
    options: PropTypes.array,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    prefixCls: PropTypes.string,
    children: PropTypes.node,
    mode: PropTypes.string,
    buttonWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static childContextTypes = {
    radioGroup: PropTypes.any,
  };

  static defaultProps = {
    prefixCls: "radio-group",
    buttonWidth: "auto",
    mode: "",
  };

  constructor(props) {
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

  getChildContext() {
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

  static getDerivedStateFromProps(nextProps) {
    if ("value" in nextProps) {
      return { value: nextProps.value };
    }

    let newValue = null;
    let matched = false;

    React.Children.forEach(nextProps.children, (radio) => {
      if (radio && radio.props && radio.props.checked) {
        newValue = radio.props.value;
        matched = true;
      }
    });

    return matched ? { value: newValue } : null;
  }

  handleChange = (e) => {
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

    let newChildren = children;

    if (options && options.length > 0) {
      newChildren = options.map((option) => {
        const restProps = {
          name,
          className,
        };

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
        {newChildren}
      </div>
    );
  }
}

export default RadioGroup;
