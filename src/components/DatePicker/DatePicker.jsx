import React, { Component } from "react";
import ReactDomServer from "react-dom/server";
import classNames from "classnames";
import PropTypes from "prop-types";
import Flatpickr from "flatpickr";
import { isEqual, noop, omit } from "lodash";
import getDefaultLocale from "./locale";
import Icon from "../Icon";

import CustomUI from "./plugins/customUI";

const propsKey = [
  "onChange",
  "onOpen",
  "onClose",
  "onMonthChange",
  "onYearChange",
  "onReady",
  "onValueUpdate",
  "onDayCreate",
  "defaultDate",
  "enableTime",
  "enableSeconds",
  "defaultHour",
  "defaultMinute",
  "dateFormat",
  "formatDate",
  "hourIncrement",
  "minuteIncrement",
  "enable",
  "disable",
  "maxDate",
  "minDate",
  "mode",
  "conjunction",
  "noCalendar",
  "enableSeconds",
  "weekNumbers",
  "appendTo",
  "locale",
];

const defaultOptions = {
  locale: {},
  plugins: [new CustomUI()],
  time_24hr: true,
  nextArrow: ReactDomServer.renderToString(<Icon name="next" size={20} />),
  prevArrow: ReactDomServer.renderToString(<Icon name="previous" size={20} />),
};

const pickFormValidateStatusClassNames = (className = "") => {
  return [
    "is-danger",
    "has-danger-help",
    "is-warning",
    "has-warning-help",
    "is-success",
  ]
    .filter((acceptableClassName) => {
      return className.indexOf(acceptableClassName) !== -1;
    })
    .join(" ");
};

class DatePicker extends Component {
  static propTypes = {
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
      PropTypes.number,
    ]),
    options: PropTypes.object,
    onChange: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onClear: PropTypes.func,
    onMonthChange: PropTypes.func,
    onYearChange: PropTypes.func,
    onReady: PropTypes.func,
    onValueUpdate: PropTypes.func,
    onDayCreate: PropTypes.func,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
      PropTypes.number,
    ]),
    className: PropTypes.string,
    children: PropTypes.node,
    showClearBtn: PropTypes.bool,
    disabled: PropTypes.bool,
    enableTime: PropTypes.bool,
    mode: PropTypes.string,
  };

  static defaultProps = {
    options: {},
    onChange: noop,
    onOpen: noop,
    onClose: noop,
    onClear: noop,
    showClearBtn: true,
    mode: "single",
  };

  constructor(props) {
    super(props);
    this.instance = null;
    this.state = {
      value:
        "value" in props || "defaultValue" in props
          ? props.value || props.defaultValue
          : undefined,
      isHover: false,
      isOpen: false,
      isFocus: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ("value" in nextProps && !isEqual(nextProps.value, prevState.value)) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  componentDidMount() {
    const { props } = this;
    const { options: propsOptions } = this.props;
    const { value } = this.state;
    const options = {
      ...defaultOptions,
      ...propsOptions,
    };

    propsKey.forEach((key) => {
      if (props[key]) {
        options[key] = props[key];
      }
    });
    options.locale = { ...getDefaultLocale(), ...options.locale };
    this.instance = new Flatpickr(this.node, this.bindEvents(options));

    this.instance.setDate(value, false);
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    const { options: propsOptions } = this.props;
    const prevOptions = { ...prevProps.options };
    const nextOptions = { ...propsOptions };

    propsKey.forEach((key) => {
      if (key in this.props) {
        nextOptions[key] = props[key];
      }
      if (key in prevProps) {
        prevOptions[key] = prevProps[key];
      }
    });

    let optionsKeys = Object.getOwnPropertyNames(nextOptions);
    optionsKeys = omit(optionsKeys, [
      "onChange",
      "onOpen",
      "onClose",
      "onMonthChange",
      "onYearChange",
      "onReady",
      "onValueUpdate",
      "onDayCreate",
    ]);
    for (let index = optionsKeys.length - 1; index >= 0; index -= 1) {
      const key = optionsKeys[index];
      const value = nextOptions[key];
      if (value !== prevOptions[key]) {
        this.instance.set(key, value);
      }
    }

    if ("value" in this.props && this.instance) {
      this.instance.setDate(props.value, false);
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
  }

  bindEvents = (options = {}) => {
    const { onOpen, onClose, onChange } = this.props;
    const nextOptions = {
      ...options,
      onOpen: (dates, dateStr, instance) => {
        this.setState(
          {
            isFocus: true,
            value: dates,
            isOpen: true,
          },
          () => {
            onOpen(dates, dateStr, instance);
          }
        );
      },

      onClose: (dates, dateStr, instance) => {
        if (this.node.blur) {
          this.node.blur();
        }
        this.setState(
          {
            isFocus: false,
            value: dates,
            isOpen: false,
          },
          () => {
            this.instance.setDate(dates, false);
            onClose(dates, dateStr, instance);
          }
        );
      },

      onChange: (dates, dateStr, instance) => {
        this.setState({ value: dates }, () => {
          onChange(dates, dateStr, instance);
        });
      },
    };

    return nextOptions;
  };

  handleMouseEnter = () => {
    const { showClearBtn } = this.props;
    const { isHover, isOpen } = this.state;
    if (showClearBtn && !isHover && !isOpen) {
      this.setState({ isHover: true });
    }
  };

  handleMouseLeave = () => {
    const { showClearBtn } = this.props;
    const { isHover } = this.state;
    if (showClearBtn && isHover) {
      this.setState({ isHover: false });
    }
  };

  handleClear = (e) => {
    e.stopPropagation();
    const { onClear, onChange } = this.props;
    if (this.instance.isOpen) {
      this.instance.close();
    }

    if (!("value" in this.props)) {
      this.setState({ value: "" }, () => {
        this.instance.setDate([], false);
      });
    }
    onClear();
    onChange([], "", this.instance);
  };

  renderIcon() {
    const { showClearBtn, disabled } = this.props;
    const { value, isHover, isFocus } = this.state;
    const iconName =
      "noCalendar" in this.props && "enableTime" in this.props
        ? "clock"
        : "calendar";
    if (showClearBtn && (isFocus || isHover) && !disabled && value !== "") {
      return (
        <Icon
          className="is-right"
          name="close"
          clickable
          onClick={this.handleClear}
        />
      );
    }

    return <Icon className="is-right" name={iconName} />;
  }

  render() {
    const {
      options,
      defaultValue,
      value,
      children,
      className,
      showClearBtn,
      ...props
    } = this.props;
    const { isHover, isOpen } = this.state;

    propsKey.forEach((key) => {
      delete props[key];
    });

    delete props.onClear;

    props.className = classNames(
      "datepicker-input input",
      pickFormValidateStatusClassNames(className),
      { "is-hover": isHover },
      { "is-active": isOpen }
    );

    return options.wrap ? (
      <div
        {...props}
        ref={(n) => {
          this.node = n;
        }}
      >
        {children}
      </div>
    ) : (
      <div
        className={classNames(className, "has-icons-right")}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <input
          {...props}
          ref={(n) => {
            this.node = n;
          }}
        />
        {this.renderIcon()}
      </div>
    );
  }
}

export default DatePicker;
