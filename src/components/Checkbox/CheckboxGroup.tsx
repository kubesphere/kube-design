import React, { Component } from "react";
import classNames from "classnames";

import Checkbox, { CheckboxValue } from "./Checkbox";

export interface CheckboxGroupOption {
  label: string,
  value: CheckboxValue,
  disabled?: boolean
}

export interface CheckboxGroupProps {
  name: string,
  value: Array<CheckboxValue>,
  options: Array<CheckboxGroupOption>,
  onChange: (value: Array<CheckboxValue>) => void,
  children: Array<React.ReactElement>,
  direction: "row" | "column",
  className?: string,
  disabled?: boolean,
}

export interface CheckboxGroupState {
  values: Array<CheckboxValue>,
}

export default class CheckboxGroup extends Component<CheckboxGroupProps, {}> {
  static defaultProps = {
    direction: "row",
    options: [],
    value: [],
    onChange() { },
  };

  state = {
    values: this.props.value || [],
  };

  handleOptionChange = (checked: boolean, value: any) => {
    const { onChange } = this.props;
    const { values } = this.state;
    let newValues: Array<CheckboxValue>;
    if (checked) {
      newValues = [...values, value];
    } else {
      newValues = values.filter((item) => item !== value);
    }

    this.setState({ values: newValues }, () => onChange(newValues));
  };

  render() {
    const { className, name, direction, options, children } = this.props;
    const { values } = this.state;

    if (children && children.length > 0) {
      const childContent = React.Children.map(children, (child) =>
        React.cloneElement(child, {
          ...child.props,
          name,
          checked: values.includes(child.props.value),
          onChange: this.handleOptionChange,
        })
      );

      return (
        <div
          data-direction={direction}
          className={classNames(`checkbox-group`, className)}
        >
          {childContent}
        </div>
      );
    }

    return (
      <div
        data-direction={direction}
        className={classNames(`checkbox-group`, className)}
      >
        {options.map((option) => (
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
