import React, { Component } from "react";
import classNames from "classnames";
import { isEmpty, trim } from "lodash";

import Icon from "../Icon";

import Input, { InputProps, InputState } from "./Input";

interface InputSearchProps extends Omit<InputProps, "type" | "onChange" | "onKeyUp"> {
  onSearch: (value?: string) => void
}

type InputSearchState = InputState

export default class InputSearch extends Component<InputSearchProps, InputSearchState> {
  static defaultProps = {
    style: {},
    onSearch() { },
    defaultValue: '',
    disabled: false,
  };

  state = {
    value: String("value" in this.props ? this.props.value : this.props.defaultValue),
  };

  handleSearch = () => {
    const { onSearch } = this.props
    const { value } = this.state
    onSearch(trim(value || ''))
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
    this.setState({ value });
  };

  handleClear = (e: React.SyntheticEvent<HTMLElement>) => {
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ value: "" }, () => this.handleSearch());
  };

  handleKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    const { value } = this.state;
    const { className, style, value: propsValue, defaultValue, onSearch, ...rest } = this.props;

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
          {...rest}
          type="text"
          value={value}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
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
