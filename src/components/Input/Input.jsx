import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit } from "lodash";

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    type: "text",
    defaultValue: "",
    onChange() {},
  };

  inputRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      value: "value" in props ? props.value : props.defaultValue,
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

  componentDidMount() {
    this.clearPasswordValueAttribute();
  }

  componentWillUnmount() {
    if (this.removePasswordTimeout) {
      clearTimeout(this.removePasswordTimeout);
    }
  }

  clearPasswordValueAttribute = (e) => {
    const { innerRef } = this.props;
    const ref = innerRef || this.inputRef;
    this.removePasswordTimeout = setTimeout(() => {
      if (
        ref.current.getAttribute("type") === "password" &&
        ref.current.getAttribute("value")
      ) {
        ref.current.removeAttribute("value");
      }
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { value: propsValue, onChange } = this.props;
    const newValue = propsValue || value;

    this.setState({ value: newValue }, this.clearPasswordValueAttribute);
    onChange(e, value);
  };

  render() {
    const { className, innerRef, ...rest } = this.props;
    const { value } = this.state;

    return (
      <input
        {...omit(rest, "onChange", "value", "defaultValue")}
        ref={innerRef || this.inputRef}
        value={value}
        onChange={this.handleChange}
        className={classNames("input", className)}
      />
    );
  }
}
