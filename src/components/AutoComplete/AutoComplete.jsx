import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { get, isEqual } from "lodash";
import Fuse from "fuse.js/dist/fuse.min.js";

import Dropdown from "../Dropdown";
import Menu from "../Menu";
import { Input } from "../Input";

export default class AutoComplete extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    options: PropTypes.array,
    optionsRenderer: PropTypes.func,
  };

  static defaultProps = {
    className: "",
    defaultValue: "",
    onChange() {},
    options: [],
  };

  state = {
    value: "value" in this.props ? this.props.value : this.props.defaultValue,
    options: [...this.props.options],
    searchResult: [],
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

  componentDidUpdate(prevProps, prevState) {
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

  handleOptionsClick = (e, key) => {
    this.handleInputChange({ target: { value: key } });
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    const { options } = this.props;
    let newOptions = [...options];
    let searchResult = [];
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

  renderHighlight(value) {
    const { searchResult } = this.state;
    const result = searchResult.find((item) => item.item === value);
    if (result) {
      const { value, indices } = get(result, "matches[0]", {});
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
