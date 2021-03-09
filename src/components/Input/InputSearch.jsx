import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isEmpty, trim } from "lodash";

import Icon from "../Icon";

import Input from "./Input";

export default class InputSearch extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    style: {},
    onSearch() {},
    disabled: false,
  };

  constructor(props) {
    super(props);

    this.state = { value: props.value, defaultValue: props.value };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.defaultValue) {
      return {
        value: props.value,
        defaultValue: props.value,
      };
    }
    return null;
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ value }, () => {
      if (isEmpty(value)) {
        this.props.onSearch();
      }
    });
  };

  handleClear = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ value: "" }, () => {
      this.props.onSearch(this.state.value);
    });
  };

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      const { value } = this.state;
      if (!isEmpty(value)) {
        this.props.onSearch(trim(this.state.value));
      }
    }
  };

  render() {
    const { value } = this.state;
    const {
      name,
      placeholder,
      disabled,
      className,
      style,
      ...rest
    } = this.props;

    return (
      <div
        className={classNames(
          "has-icons-left",
          "has-icons-right",
          "input-search",
          className
        )}
        style={style}
      >
        <Icon className="is-left" name="magnifier" />
        <Input
          type="text"
          placeholder={placeholder}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          name={name}
          value={value || ""}
          disabled={disabled}
          {...rest}
        />
        {!isEmpty(value) && (
          <Icon
            className="is-right"
            name="close"
            clickable
            onClick={this.handleClear}
          />
        )}
      </div>
    );
  }
}
