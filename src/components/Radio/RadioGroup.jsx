import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Radio from "./Radio";

export default class RadioGroup extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          value: PropTypes.any,
          label: PropTypes.string,
          disabled: PropTypes.bool
        })
      ])
    ),
    value: PropTypes.array,
    onChange: PropTypes.func,
    direction: PropTypes.oneOf(["row", "column"]),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    direction: "row",
    options: [],
    onChange() {}
  };

  state = {
    value: this.props.value || ""
  };

  handleOptionChange = (checked, value) => {
    const { onChange } = this.props;

    this.setState({ value }, () => onChange(value));
  };

  render() {
    const { className, name, direction, options } = this.props;
    const { value } = this.state;

    return (
      <div
        data-direction={direction}
        className={classNames(`radio-group`, className)}
      >
        {options.map(option => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={this.handleOptionChange}
          >
            {option.label}
          </Radio>
        ))}
      </div>
    );
  }
}
