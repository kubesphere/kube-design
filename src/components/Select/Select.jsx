import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { get, isEmpty, isUndefined, isFunction } from "lodash";

import Tag from "../Tag";
import Icon from "../Icon";
import Loading from "../Loading";
import Option from "./Option";
import LocaleProvider from "../LocaleProvider";
import { getScrollParents } from "../../utils";

const { locale } = LocaleProvider;

export default class Select extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
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
    placeholder: "KUBE_PLEASE_SELECT",
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
    inputValue: "",
    inputVisible: true,
  };

  inputRef = React.createRef();
  selectRef = React.createRef();
  optionsRef = React.createRef();
  inputValueRef = React.createRef();
  reachBottom = false;

  componentDidMount() {
    this.handleInitValue();

    if (this.selectRef && this.selectRef.current) {
      this.addScrollEvents();
    }

    document.body.addEventListener("click", this.handleDocumentClick);
  }

  componentDidUpdate(prevProps, prevState) {
    const { value, options } = this.props;
    if (prevProps.options.length !== options.length) {
      this.reachBottom = false;
    }

    if (!isUndefined(value) && value !== prevState.value) {
      this.setState({
        value,
        inputValue: value,
        inputVisible: false,
      });
    }

    if (this.state.visible && !prevState.visible) {
      this.handleParentScroll();
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleDocumentClick);
  }

  addScrollEvents = () => {
    this.scrollParents = getScrollParents(this.selectRef.current);

    if (this.scrollParents.length > 0) {
      this.scrollParents.forEach((parent) => {
        parent.addEventListener("scroll", this.handleParentScroll);
      });
    }
  };

  removeScrollEvents = () => {
    if (this.scrollParents.length > 0) {
      this.scrollParents.forEach((parent) => {
        parent.removeEventListener("scroll", this.handleParentScroll);
      });
    }
  };

  handleInitValue = () => {
    const { value, defaultValue } = this.props;

    if (!isUndefined(value)) {
      return this.setState({ value, inputValue: value, inputVisible: false });
    }

    if (!isUndefined(defaultValue)) {
      return this.setState({
        value: defaultValue,
        inputValue: defaultValue,
        inputVisible: false,
      });
    }
  };

  handleParentScroll = (e) => {
    const { visible } = this.state;

    if (
      this.optionsRef &&
      this.optionsRef.current &&
      this.scrollParents.length > 0
    ) {
      const scrollParent = e ? e.target : this.scrollParents[0];
      const controlRect = this.selectRef.current.getBoundingClientRect();
      const optionsRect = this.optionsRef.current.getBoundingClientRect();

      const top = controlRect.top + controlRect.height;
      const optionsMargin = 4;

      this.optionsRef.current.style.left = `${controlRect.left}px`;

      if (scrollParent === window || scrollParent === document) {
        const hasRoomBelow =
          top + optionsRect.height + optionsMargin < window.innerHeight;
        const hasRoomAbove =
          controlRect.top - optionsRect.height - optionsMargin * 2 > 0;
        if ((!hasRoomBelow && !hasRoomAbove) || hasRoomBelow) {
          this.optionsRef.current.style.top = `${top}px`;
        }
        if (!hasRoomBelow && hasRoomAbove) {
          this.optionsRef.current.style.top = `${
            controlRect.top - optionsRect.height - optionsMargin * 2
          }px`;
        }
      } else {
        const scrollRect = scrollParent.getBoundingClientRect();
        const scrollerBottom = scrollRect.top + scrollRect.height;
        const hasRoomBelow =
          top + optionsRect.height + optionsMargin < scrollerBottom;
        const hasRoomAbove =
          controlRect.top - optionsRect.height - optionsMargin * 2 >
          scrollRect.top;
        if ((!hasRoomBelow && !hasRoomAbove) || hasRoomBelow) {
          this.optionsRef.current.style.top = `${top}px`;
          if (scrollRect.top > top && visible) {
            this.handleOptionsClose();
          }
        }
        if (!hasRoomBelow && hasRoomAbove) {
          this.optionsRef.current.style.top = `${
            controlRect.top - optionsRect.height - optionsMargin * 2
          }px`;
          if (scrollerBottom < controlRect.top && visible) {
            this.handleOptionsClose();
          }
        }
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
          if (searchable) {
            this.updateInputDOM({
              width: isEmpty(this.state.value) ? "100%" : "2px",
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
    if (this.reachBottom) {
      return;
    }

    const { onFetch, pagination = {} } = this.props;
    const { page = 1 } = pagination;
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight - scrollHeight >= 0) {
      this.reachBottom = true;
      onFetch({ page: page + 1, more: true });
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
            width: isEmpty(value) ? "100%" : "2px",
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
          ? "100%"
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
        this.updateInputDOM({ width: "100%" });
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

    const dimensions = this.selectRef.current.getBoundingClientRect();
    const optionsTop = dimensions.top + dimensions.height;
    const optionsLeft = dimensions.left;

    const canFetch = isFunction(onFetch) && page * limit < total;

    return (
      <div
        className="select-options"
        style={{
          top: optionsTop,
          left: optionsLeft,
          width: dimensions.width,
        }}
        ref={this.optionsRef}
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
    return (
      <div className="select-options-empty">
        {locale.get("KUBE_NO_AVAILABLE_DATA")}
      </div>
    );
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

    const localePlaceholder = locale.get(placeholder);
    const multiPlaceholder =
      multi && searchable
        ? isEmpty(value)
          ? localePlaceholder
          : ""
        : localePlaceholder;

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

    if (multi) {
      if (isEmpty(value)) {
        return null;
      }
      return value.map(this.renderMultiValue);
    }

    let option = { label: value, value };
    options.forEach((item) => {
      if (item.value === value) {
        option = item;
      } else if (item.options) {
        item.options.forEach((op) => {
          if (op.value === value) {
            option = op;
          }
        });
      }
    });

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
