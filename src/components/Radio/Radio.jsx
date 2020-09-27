import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEqual } from "lodash";
import classNames from "classnames";

class Radio extends Component {
  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
    value: PropTypes.any,
    defaultChecked: PropTypes.bool,
    children: PropTypes.node,
  };

  static defaultProps = {
    prefixCls: "radio",
    defaultChecked: false,
  };

  static contextTypes = {
    radioGroup: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || props.defaultChecked,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ("checked" in nextProps && nextProps.checked !== prevState.checked) {
      return {
        checked: nextProps.checked,
      };
    }
    return null;
  }

  handleChange = (e) => {
    const { disabled, onChange } = this.props;
    const { radioGroup } = this.context;

    if (disabled) return;

    if (!("checked" in this.props)) {
      this.setState({
        checked: e.target.checked,
      });
    }

    const params = {
      target: {
        ...this.props,
        checked: e.target.checked,
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    };

    if (radioGroup) {
      radioGroup.onChange(params);
      return;
    }

    if (onChange) {
      onChange(params);
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

    const { radioGroup } = context;

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

export default Radio;
