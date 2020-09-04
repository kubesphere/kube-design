import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { findParentNode } from "../../utils/index";
import ElementPagePos from "./elementPos.js";
import { isEmpty, debounce, isEqual, cloneDeep } from "lodash";

import Icon from "@kube-design/icons";
import Tag from "../Tag/Tag";
import Option from "./Option";
import Loading from "../Loading/Loading";

import "./styles.scss";

export default class Select extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    options: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
    valueKey: PropTypes.string,
    labelKey: PropTypes.string,
    searchable: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    multi: PropTypes.bool,
    onChange: PropTypes.func,
    optionRenderer: PropTypes.func,
    valueRenderer: PropTypes.func,
    prefixIcon: PropTypes.node,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    className: "",
    style: {},
    valueKey: "value",
    labelKey: "label",
    searchable: false,
    disabled: false,
    clearable: false,
    placeholder: "请选择",
    name: null,
    multi: false,
    onChange() {},
    prefixIcon: null,
    isLoading: false,
    options: [],
  };

  state = {
    visible: false,
    value: this.props.multi ? [] : "",
    options: this.props.options,
    oldOption: this.props.options,
    inputValue: this.props.defaultValue,
    inputVisible: true,
  };

  input = null;
  select = null;
  inputSearchMessage = null;

  componentDidMount() {
    this.handleInitValue();

    this.selectPos = new ElementPagePos(this.select);
    this.selectPos.init();

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
        throw "default value 类型不对";
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
        throw "value 类型不对";
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
        this.setState({ a: 1 });
      }
    }
  };

  handleOptionClick = (option) => {
    if (option.disabled) {
      return;
    }

    const { labelKey, multi, searchable } = this.props;
    const { visible, value } = this.state;
    const selectValue = option[labelKey];

    if (multi) {
      let chooseValue = cloneDeep(value);
      if (value.includes(selectValue)) {
        chooseValue = chooseValue.filter((v) => v !== selectValue);
      } else {
        chooseValue = [...chooseValue, selectValue];
      }

      if (isEmpty(chooseValue)) {
        this.setState({ inputVisible: true });
      }

      if (searchable) {
        this.inputEle.focus();
        if (isEmpty(chooseValue)) {
          this.inputWidth = "auto";
        } else {
          this.inputWidth = "2px";
        }
      }

      this.setState({ value: chooseValue, inputVisible: false }, () => {
        this.selectPos.init();
      });
    } else {
      this.setState({
        value: selectValue,
        visible: !visible,
        inputVisible: false,
      });
    }
    this.props.onChange(`select ${selectValue}`);
  };

  handleOptionsOpen = (e) => {
    const { visible, oldOption } = this.state;
    const { searchable } = this.props;

    this.handleDocumentScroll(false);

    this.setState({ visible: !visible, options: oldOption });

    if (searchable) {
      this.inputEle.focus();
      this.handleInputStatus(true);
    }
  };

  handleOptionsClose = () => {
    const { visible, oldOption } = this.state;
    this.setState({ visible: !visible, options: oldOption });
  };

  handleDocumentClick = (e) => {
    const { visible } = this.state;
    const { searchable } = this.props;
    if (visible) {
      const eventNode = e.target;
      const isInSelect = findParentNode(eventNode, this.select);

      if (!isInSelect) {
        this.handleOptionsClose();
      } else if (searchable) {
        this.handleInputStatus(true);
      }
    }
  };

  handleInputStatus = (visible) => {
    const { value } = this.state;
    const { multi } = this.props;
    const currentValue = multi ? "" : value;
    this.inputEle.value = currentValue;
    this.setState({ inputVisible: visible, inputValue: currentValue }, () => {
      if (multi) {
        this.inputWidth = isEmpty(value) ? "auto" : "2px";
      }
    });
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const { multi, searchable } = this.props;
    this.setState({ inputValue: value }, () => {
      if (multi && searchable) {
        this.inputWidth = this.inputSearchMessage.clientWidth + 5;
      }
    });

    this.handleOptionsChange(value);
  };

  handleOptionsChange = debounce((value) => {
    const { oldOption } = this.state;
    const { labelKey } = this.props;
    const filterOptions = oldOption.filter(
      (v, i) => v[labelKey].indexOf(value) > -1
    );

    if (isEmpty(filterOptions)) {
      filterOptions.push({ label: "暂无数据" });
    }

    this.setState({ options: filterOptions });
  }, 200);

  handleMultiValueDelete = (e, i) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();

    let { value } = this.state;
    value.splice(i, 1);
    this.setState({ value });

    if (isEmpty(value)) {
      if (this.props.searchable) {
        this.inputWidth = "auto";
      }
      this.setState({ inputVisible: true });
    }
  };

  handleClearValue = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    const { multi } = this.props;

    this.setState({
      value: multi ? [] : null,
      inputVisible: true,
    });
  };

  renderIcon = () => {
    const { clearable, disabled } = this.props;
    const { visible, value } = this.state;

    return (
      <span
        className="select-icon"
        onClick={disabled ? null : this.handleOptionsOpen}
      >
        <span className="select-icon-item">
          {clearable && !isEmpty(value) ? (
            <Icon name="close" onClick={this.handleClearValue} />
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
    const { visible, options } = this.state;
    const { isLoading } = this.props;

    if (!visible) {
      return null;
    }

    const elementTop =
      this.selectPos.top +
      this.select.clientHeight -
      this.selectPos.docScrollTop;
    const elementLeft = this.selectPos.left - this.selectPos.docScrollLeft;

    return (
      <div
        className="select-options"
        style={{
          top: elementTop,
          left: elementLeft,
          width: this.select.clientWidth,
        }}
        ref={(ref) => (this.selectOptions = ref)}
      >
        {isLoading === true ? (
          <div className="select-options-loading">
            <Loading size="small" />
          </div>
        ) : (
          this.renderOption(options)
        )}
      </div>
    );
  };

  renderOption = (options) => {
    const { value } = this.state;
    const { labelKey, multi, optionRenderer } = this.props;
    const isActive = (v) =>
      multi ? value.includes(v[labelKey]) : v[labelKey] === value;

    return options.map((v, i) => {
      if (v.options) {
        return (
          <div className="select-group-option" key={i}>
            <p className="select-group-title">{v[labelKey]}</p>
            {this.renderOption(v.options)}
          </div>
        );
      } else {
        return (
          <Option
            key={i}
            label={v[labelKey]}
            multi={multi}
            disabled={v.disabled}
            onClick={this.handleOptionClick}
            isActive={isActive(v)}
            option={v}
          >
            {optionRenderer ? optionRenderer(v) : v[labelKey]}
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
          style={{ width: this.inputWidth }}
          readOnly={!searchable}
          ref={(ref) => {
            this.inputEle = ref;
          }}
          placeholder={multiPlaceholder}
          name={name}
          onChange={this.handleInputChange}
        />
        <span
          className="select-input-search"
          ref={(ref) => (this.inputSearchMessage = ref)}
        >
          {inputValue}
        </span>
      </div>
    );
  };

  renderMultiValue = (v, i) => {
    const { valueRenderer } = this.props;

    return (
      <Tag className="select-multi-value-item" key={i}>
        <span>
          <span className="select-multi-value-item-label">
            {valueRenderer ? valueRenderer(v) : v}
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
    const { multi, valueRenderer } = this.props;

    if (isEmpty(value)) {
      return null;
    }

    if (multi) {
      return <>{value.map(this.renderMultiValue)}</>;
    }

    return (
      <div
        className={classNames({
          "select-value": !multi,
          "select-value-opacity": inputVisible,
          "select-multi-value": multi,
        })}
      >
        {valueRenderer ? valueRenderer(value) : value}
      </div>
    );
  };

  render() {
    const { style, className, multi, prefixIcon, disabled } = this.props;
    const { value } = this.state;

    return (
      <div
        className={classNames(
          { select: !multi, "select-multi": multi },
          { "select-disabled": disabled },
          className
        )}
        style={style}
        ref={(ref) => (this.select = ref)}
      >
        <div
          className={classNames("select-container", {
            "padding-left8": multi && !isEmpty(value),
          })}
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
