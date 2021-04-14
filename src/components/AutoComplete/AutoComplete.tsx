import React, { Component } from "react";
import classNames from "classnames";
import { get, isEqual, isString } from "lodash";
import Fuse from "fuse.js";

import Dropdown from "../Dropdown";
import Menu from "../Menu";
import { Input } from "../Input";

export interface AutoCompleteProps {
  value?: string,
  defaultValue?: string,
  onChange: (data: string | undefined) => void,
  className: string,
  options: string[],
  optionRenderer?: (option: string) => {}
}

export interface AutoCompleteState {
  value: string | undefined,
  options: string[],
  searchResult: Fuse.FuseResult<string>[],
  showOptions: boolean,
}

export default class AutoComplete extends Component<AutoCompleteProps, AutoCompleteState> {
  static defaultProps = {
    className: "",
    defaultValue: "",
    onChange() { },
    options: [],
  };

  state = {
    value: "value" in this.props ? this.props.value : this.props.defaultValue,
    options: [...this.props.options],
    searchResult: [] as Fuse.FuseResult<string>[],
    showOptions: false,
  };

  fuseOptions = {
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 1,
  };

  modifiers = {
    hide: { enabled: false },
    preventOverflow: { enabled: false },
  };

  componentDidUpdate(prevProps: AutoCompleteProps, prevState: AutoCompleteState) {
    if (!isEqual(prevProps.options, this.props.options)) {
      this.setState({ options: [...this.props.options], searchResult: [] });
      this.fuse = new Fuse(this.props.options, this.fuseOptions);
    }

    if ("value" in this.props && this.props.value !== prevState.value) {
      this.setState({ value: this.props.value });
    }
  }

  fuse = new Fuse(this.props.options, this.fuseOptions);

  showOptions = () => {
    this.setState({ showOptions: true });
  };

  hideOptions = () => {
    this.setState({ showOptions: false });
  };

  triggerChange = () => {
    const { onChange } = this.props;
    const { value } = this.state;

    onChange(value);
  };

  handleOptionsClick = (e: React.SyntheticEvent<HTMLLIElement>, key: string) => {
    this.handleInputChange(key);
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | string) => {
    const value = isString(e) ? e : e.target.value;
    const { options } = this.props;
    let newOptions = [...options];
    let searchResult: Fuse.FuseResult<string>[] = [];
    if (value) {
      searchResult = this.fuse.search(value);
      if (searchResult.some((item) => item.score === 0)) {
        searchResult = searchResult.filter((item) => item.score === 0);
      }
      newOptions = searchResult.map((item) => item.item);
    }
    this.setState(
      { value, options: newOptions, showOptions: true, searchResult },
      this.triggerChange
    );
  };

  renderHighlight(value: string) {
    const { searchResult } = this.state;
    const result = searchResult.find((item) => item.item === value);
    if (result && result.matches && result.matches[0]) {
      const { value, indices } = result.matches[0];
      if (value && indices) {
        let newValue = "";
        let start = 0;
        indices.forEach((ind) => {
          newValue += value.slice(start, ind[0]);
          newValue += `<mark>${value.slice(ind[0], ind[1] + 1)}</mark>`;
          start = ind[1] + 1;
        });
        newValue += value.slice(start);
        return <span dangerouslySetInnerHTML={{ __html: newValue }} />;
      }
    }
    return value;
  }

  renderOptions() {
    const { optionRenderer } = this.props;
    const { options } = this.state;

    if (options.length <= 0) {
      return null;
    }

    return (
      <Menu className="auto-complete-content" onClick={this.handleOptionsClick}>
        {options.map((option) => (
          <Menu.MenuItem key={option}>
            {optionRenderer
              ? optionRenderer(option)
              : this.renderHighlight(option)}
          </Menu.MenuItem>
        ))}
      </Menu>
    );
  }

  render() {
    const { options, optionRenderer, className, ...rest } = this.props;
    const { value } = this.state;

    return (
      <div className={classNames("auto-complete", className)}>
        <Dropdown
          visible={this.state.showOptions}
          content={this.renderOptions()}
          always={this.state.showOptions}
          onOpen={this.showOptions}
          onClose={this.hideOptions}
          modifiers={this.modifiers}
        >
          <Input
            className="auto-complete-input"
            {...rest}
            value={value}
            onChange={this.handleInputChange}
          />
        </Dropdown>
      </div>
    );
  }
}
