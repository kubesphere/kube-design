import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Checkbox from "./Checkbox";

export default class CheckboxGroup extends Component {
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
    value: [],
    onChange() {}
  };

  state = {
    values: this.props.value || []
  };

  handleOptionChange = (checked, value) => {
    const { onChange } = this.props;
    const { values } = this.state;
    let newValues = [];
    if (checked) {
      newValues = [...values, value];
    } else {
      newValues = values.filter(item => item === value);
    }

    this.setState(
      {
        values: newValues
      },
      () => onChange(newValues)
    );
  };

  render() {
    const { className, name, direction, options } = this.props;
    const { values } = this.state;

    return (
      <div
        data-direction={direction}
        className={classNames(`checkbox-group`, className)}
      >
        {options.map(option => (
          <Checkbox
            key={option.value}
            name={name}
            value={option.value}
            checked={values.includes(option.value)}
            onChange={this.handleOptionChange}
          >
            {option.label}
          </Checkbox>
        ))}
      </div>
    );
  }
}
