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
      type: props.type || "text",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && nextProps.value !== prevState.value) {
      return {
        value: nextProps.value,
      };
    }

    if ("type" in nextProps && nextProps.type !== prevState.type) {
      return { type: nextProps.type };
    }
    return null;
  }

  componentDidMount() {
    if (this.state.type === "password") {
      this.clearPasswordValueAttribute();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.type !== prevState.type && prevState.type === "text") {
      this.clearPasswordValueAttribute();
    }
  }

  clearPasswordValueAttribute = () => {
    const { innerRef } = this.props;
    const ref = innerRef || this.inputRef;
    ref.current.removeAttribute("value");
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { value: propsValue, onChange } = this.props;
    const newValue = propsValue || value;
    onChange(e, value);
    this.setState({ value: newValue });
  };

  render() {
    const { className, innerRef, ...rest } = this.props;
    const { value, type } = this.state;

    const params = { ...omit(rest, "onChange", "value", "defaultValue") };

    return (
      <input
        {...params}
        ref={innerRef || this.inputRef}
        type={type}
        value={value}
        onChange={this.handleChange}
        className={classNames("input", className)}
      />
    );
  }
}
