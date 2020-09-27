import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { get, isEmpty, isEqual, isFunction } from "lodash";

import Tag from "../Tag";
import Icon from "../Icon";
import Loading from "../Loading";
import Option from "./Option";
import ElementPagePos from "./elementPos.js";

export default class Select extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    options: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
    searchable: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
    placeholder: PropTypes.string,
    multi: PropTypes.bool,
    prefixIcon: PropTypes.node,
    isLoading: PropTypes.bool,
    pagination: PropTypes.shape({
      page: PropTypes.number,
      limit: PropTypes.number,
      total: PropTypes.number,
    }),
    onFetch: PropTypes.func,
    onChange: PropTypes.func,
    optionRenderer: PropTypes.func,
    valueRenderer: PropTypes.func,
  };

  static defaultProps = {
    className: "",
    style: {},
    searchable: false,
    disabled: false,
    clearable: false,
    placeholder: "PLEASE_SELECT",
    name: null,
    multi: false,
    prefixIcon: null,
    isLoading: false,
    options: [],
    onChange() {},
    onPaging() {},
  };

  state = {
    visible: false,
    value: this.props.multi ? [] : "",
    inputValue: this.props.defaultValue,
    inputVisible: true,
  };

  inputRef = React.createRef();
  selectRef = React.createRef();
  inputValueRef = React.createRef();

  componentDidMount() {
    this.handleInitValue();

    if (this.selectRef && this.selectRef.current) {
      this.selectPos = new ElementPagePos(this.selectRef.current);
      this.selectPos.init();
    }

    document.body.addEventListener("click", this.handleDocumentClick);
    document.addEventListener("scroll", this.handleDocumentScroll);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value && isEqual(props.value, state.value)) {
      return { value: props.value };
    }
    return null;
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleDocumentClick);
    document.removeEventListener("scroll", this.handleDocumentScroll);
  }

  handleInitValue = () => {
    const { value, defaultValue, multi } = this.props;
    const isType = (testValue) =>
      Object.prototype.toString
        .call(testValue)
        .toLowerCase()
        .match(/\[object ([a-z]+)\]/)[1];

    const valueType = isType(value);
    const defaultValueType = isType(defaultValue);

    if (defaultValueType !== "undefined") {
      if (
        (defaultValueType !== "array" && multi) ||
        (!multi && defaultValueType === "array")
      ) {
        throw "wrong default value type";
      } else {
        this.setState({
          inputValue: defaultValue,
          value: defaultValue,
          inputVisible: false,
        });
      }
    }

    if (valueType !== "undefined") {
      if (
        (valueType !== "array" && multi) ||
        (!multi && valueType === "array")
      ) {
        throw "wrong value type";
      } else {
        this.setState({ value, inputValue: value, inputVisible: false });
      }
    }
  };

  handleDocumentScroll = (isNeedRender = true) => {
    const { visible } = this.state;

    if (visible || !isNeedRender) {
      this.selectPos.getDocumentscrollTop();
      this.selectPos.getDocumentscrollLeft();
      if (isNeedRender) {
        this.forceUpdate();
      }
    }
  };

  updateInputDOM = ({ width, focus }) => {
    if (this.inputRef && this.inputRef.current) {
      this.inputRef.current.style.width = width;
      if (focus) {
        this.inputRef.current.focus();
      }
    }
  };

  handleOptionClick = (option) => {
    if (option.disabled) {
      return;
    }

    const { multi, searchable } = this.props;
    const { visible, value } = this.state;
    const selectValue = option.value;

    if (multi) {
      let chooseValue = [...value];
      if (value.includes(selectValue)) {
        chooseValue = chooseValue.filter((v) => v !== selectValue);
      } else {
        chooseValue = [...chooseValue, selectValue];
      }

      if (isEmpty(chooseValue)) {
        this.setState({ inputVisible: true });
      }

      this.setState(
        { value: chooseValue, inputValue: "", inputVisible: false },
        () => {
          this.selectPos.init();
          if (searchable) {
            this.updateInputDOM({
              width: isEmpty(this.state.value) ? "auto" : "2px",
              focus: true,
            });
          }
          this.props.onChange(this.state.value);
        }
      );
    } else {
      this.setState(
        {
          visible: !visible,
          value: selectValue,
          inputValue: selectValue,
          inputVisible: false,
        },
        () => {
          this.props.onChange(this.state.value);
        }
      );
    }
  };

  handleOptionsOpen = (e) => {
    const { visible } = this.state;
    const { searchable } = this.props;

    this.handleDocumentScroll(false);

    this.setState({ visible: searchable ? true : !visible });

    if (searchable) {
      this.handleInputStatus(true);
    }
  };

  handleOptionsClose = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };

  handleOptionsScroll = (e) => {
    const { onFetch, pagination = {} } = this.props;
    const { page = 1 } = pagination;
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight - scrollHeight >= 0) {
      onFetch({ page: page + 1 });
    }
  };

  handleDocumentClick = (e) => {
    const { visible } = this.state;
    if (visible && this.selectRef && this.selectRef.current) {
      if (!this.selectRef.current.contains(e.target)) {
        this.handleOptionsClose();
      }
    }
  };

  handleInputStatus = (visible) => {
    const { value, inputValue } = this.state;
    const { multi, searchable, options } = this.props;
    const option = options.find((item) => item.value === value) || {};
    const currentInputValue = multi ? "" : option.label || inputValue || "";
    this.setState(
      { inputVisible: visible, inputValue: currentInputValue },
      () => {
        if (multi && searchable) {
          this.updateInputDOM({
            width: isEmpty(value) ? "auto" : "2px",
            focus: visible,
          });
        }
      }
    );
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const { multi, searchable, onFetch } = this.props;
    this.setState({ inputValue: value }, () => {
      if (multi && searchable) {
        const width = isEmpty(this.state.value)
          ? "auto"
          : `${get(this.inputValueRef, "current.clientWidth", 0) + 5}px`;
        this.updateInputDOM({ width });
      }
    });

    if (isFunction(onFetch)) {
      onFetch({ name: value });
    }
  };

  handleMultiValueDelete = (e, i) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

    let { value } = this.state;
    value.splice(i, 1);
    this.setState({ value });

    if (isEmpty(value)) {
      if (this.props.searchable) {
        this.updateInputDOM({ width: "auto" });
      }
      this.setState({ inputVisible: true });
    }
  };

  handleClearValue = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    const { multi, searchable, onChange, onFetch } = this.props;

    this.setState(
      {
        value: multi ? [] : "",
        inputValue: "",
        inputVisible: true,
      },
      () => {
        onChange();
        if (searchable && isFunction(onFetch)) {
          onFetch();
        }
      }
    );
  };

  renderIcon = () => {
    const { clearable, disabled } = this.props;
    const { visible, inputValue } = this.state;
    return (
      <span
        className="select-icon"
        onClick={disabled ? null : this.handleOptionsOpen}
      >
        <span className="select-icon-item">
          {clearable && !isEmpty(inputValue) ? (
            <Icon name="close" onClick={this.handleClearValue} clickable />
          ) : visible ? (
            <Icon name="chevron-up" />
          ) : (
            <Icon name="chevron-down" />
          )}
        </span>
      </span>
    );
  };

  renderPrefixIcon = (icon) => {
    const nodeType = typeof icon;
    return icon ? (
      <span className="select-icon select-icon-prefixIcon">
        <span className="select-icon-item">
          {nodeType === "function" ? prefixIcon() : icon}
        </span>
      </span>
    ) : null;
  };

  renderOptions = () => {
    const { visible } = this.state;
    const { options, isLoading, pagination = {}, onFetch } = this.props;
    const { page = 1, total = 0, limit = 10 } = pagination;

    if (!visible || !get(this.selectRef, "current")) {
      return null;
    }

    const { clientWidth, clientHeight } = this.selectRef.current;
    const { top, left, docScrollTop, docScrollLeft } = this.selectPos;

    const elementTop = top + clientHeight - docScrollTop;
    const elementLeft = left - docScrollLeft;

    const canFetch = isFunction(onFetch) && page * limit < total;

    return (
      <div
        className="select-options"
        style={{
          top: elementTop,
          left: elementLeft,
          width: clientWidth,
        }}
        onScrollCapture={canFetch ? this.handleOptionsScroll : null}
      >
        {options.length === 0 && !isLoading
          ? this.renderEmpty()
          : this.renderOption(options)}
        {isLoading && (
          <div className="select-options-loading">
            <Loading size={20} />
          </div>
        )}
      </div>
    );
  };

  renderEmpty = () => {
    return <div className="select-options-empty">No Data</div>;
  };

  renderOption = (options) => {
    const { value } = this.state;
    const { multi, optionRenderer } = this.props;
    const isActive = (v) =>
      multi ? value.includes(v.value) : v.value === value;

    return options.map((item, i) => {
      if (item.options) {
        return (
          <div className="select-group-option" key={i}>
            <p className="select-group-title">{item.label}</p>
            {this.renderOption(item.options)}
          </div>
        );
      } else {
        return (
          <Option
            key={i}
            multi={multi}
            disabled={item.disabled}
            onClick={this.handleOptionClick}
            isActive={isActive(item)}
            option={item}
          >
            {optionRenderer ? optionRenderer(item) : item.label}
          </Option>
        );
      }
    });
  };

  renderInput = () => {
    const { searchable, name, placeholder, multi } = this.props;
    const { inputVisible, inputValue, value } = this.state;
    const multiClassName =
      multi && searchable
        ? classNames("select-input", {
            "select-input-multi": !isEmpty(value) && multi,
          })
        : classNames("select-input", {
            "select-input-opacity": !inputVisible,
            "select-input-multi": !isEmpty(value) && multi,
          });
    const multiPlaceholder =
      multi && searchable ? (isEmpty(value) ? placeholder : "") : placeholder;

    return (
      <div className={multiClassName}>
        <input
          name={name}
          ref={this.inputRef}
          placeholder={multiPlaceholder}
          value={inputValue || ""}
          onChange={this.handleInputChange}
          readOnly={!searchable}
          autoComplete="off"
        />
        <span className="select-input-search" ref={this.inputValueRef}>
          {inputValue}
        </span>
      </div>
    );
  };

  renderMultiValue = (value, i) => {
    const { valueRenderer, options } = this.props;

    const option = options.find((item) => item.value === value) || {
      label: value,
      value,
    };

    return (
      <Tag className="select-multi-value-item" key={i}>
        <span>
          <span className="select-multi-value-item-label">
            {valueRenderer ? valueRenderer(option) : option.label}
          </span>
          <span
            className="select-multi-value-item-icon"
            onClick={(e) => this.handleMultiValueDelete(e, i)}
          >
            <Icon name="close" type="light" />
          </span>
        </span>
      </Tag>
    );
  };

  renderBaseValues = () => {
    const { value, inputVisible } = this.state;
    const { multi, valueRenderer, options } = this.props;

    if (isEmpty(value)) {
      return null;
    }

    if (multi) {
      return value.map(this.renderMultiValue);
    }

    const option = options.find((item) => item.value === value) || {
      label: value,
      value,
    };

    return (
      <div
        className={classNames({
          "select-value": !multi,
          "select-value-opacity": inputVisible,
          "select-multi-value": multi,
        })}
      >
        {valueRenderer ? valueRenderer(option) : option.label}
      </div>
    );
  };

  render() {
    const { style, className, multi, prefixIcon, disabled } = this.props;
    const { visible } = this.state;

    return (
      <div
        className={classNames(
          multi ? "select-multi" : "select",
          { "select-disabled": disabled },
          { "is-open": visible },
          className
        )}
        style={style}
        ref={this.selectRef}
      >
        <div
          className="select-control"
          onClick={disabled ? null : this.handleOptionsOpen}
        >
          {this.renderPrefixIcon(prefixIcon)}
          <div className="select-value-wrapper">
            {this.renderBaseValues()}
            {this.renderInput()}
          </div>
          {this.renderIcon()}
        </div>
        {this.renderOptions()}
      </div>
    );
  }
}
