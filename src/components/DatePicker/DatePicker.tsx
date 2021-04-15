import React, { Component } from "react";
import ReactDomServer from "react-dom/server";
import classNames from "classnames";
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
  plugins: [CustomUI()],
  time_24hr: true,
  nextArrow: ReactDomServer.renderToString(<Icon name="next" size={20} />),
  prevArrow: ReactDomServer.renderToString(<Icon name="previous" size={20} />),
};

export interface DatePickerProps {
  value?: any,
  defaultValue?: any,
  options: object,
  onChange: Flatpickr.Options.Hook,
  onOpen: Flatpickr.Options.Hook,
  onClose: Flatpickr.Options.Hook,
  onMonthChange?: Flatpickr.Options.Hook,
  onYearChange?: Flatpickr.Options.Hook,
  onReady?: Flatpickr.Options.Hook,
  onValueUpdate?: Flatpickr.Options.Hook,
  onDayCreate?: Flatpickr.Options.Hook,
  onClear: () => void,
  className?: string,
  showClearBtn: boolean,
  disabled?: boolean,
  enableTime?: boolean,
  mode: string,
}

export interface DatePickerState {
  value: any,
  isHover: boolean,
  isOpen: boolean,
  isFocus: boolean,
}

class DatePicker extends Component<DatePickerProps, DatePickerState> {
  static defaultProps = {
    options: {},
    onChange: noop,
    onOpen: noop,
    onClose: noop,
    onClear: noop,
    showClearBtn: true,
    mode: "single",
  };

  instance: (Flatpickr.Instance | undefined) = undefined

  ref = React.createRef<HTMLInputElement>()

  state = {
    value:
      "value" in this.props || "defaultValue" in this.props
        ? this.props.value || this.props.defaultValue
        : undefined,
    isHover: false,
    isOpen: false,
    isFocus: false,
  }

  static getDerivedStateFromProps(nextProps: DatePickerProps, prevState: DatePickerState) {
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
    const options: any = {
      ...defaultOptions,
      ...propsOptions,
    };

    propsKey.forEach((key) => {
      if (key in props) {
        options[key] = (props as any)[key];
      }
    });
    options.locale = { ...getDefaultLocale(), ...options.locale };
    if (this.ref.current) {
      this.instance = Flatpickr(this.ref.current, this.bindEvents(options));
      this.instance.setDate(value, false);
    }
  }

  componentDidUpdate(prevProps: DatePickerProps) {
    const { props } = this;
    const { options: propsOptions } = this.props;
    const prevOptions = { ...prevProps.options } as any;
    const nextOptions = { ...propsOptions } as any;

    propsKey.forEach((key) => {
      if (key in this.props) {
        nextOptions[key] = (props as any)[key];
      }
      if (key in prevProps) {
        prevOptions[key] = (prevProps as any)[key];
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
    ]) as string[];
    for (let index = optionsKeys.length - 1; index >= 0; index -= 1) {
      const key = optionsKeys[index];
      const value = nextOptions[key];
      if (value !== prevOptions[key] && this.instance) {
        this.instance.set(key as Flatpickr.Options.Options, value);
      }
    }

    if ("value" in this.props && this.instance) {
      this.instance.setDate(props.value, false);
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
      this.instance = undefined;
    }
  }

  bindEvents = (options = {}) => {
    const { onOpen, onClose, onChange } = this.props;
    const nextOptions = {
      ...options,
      onOpen: (dates: Date[], dateStr: string, instance: Flatpickr.Instance) => {
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

      onClose: (dates: Date[], dateStr: string, instance: Flatpickr.Instance) => {
        if (this.ref.current && this.ref.current.blur) {
          this.ref.current.blur();
        }
        this.setState(
          {
            isFocus: false,
            value: dates,
            isOpen: false,
          },
          () => {
            if (this.instance) {
              this.instance.setDate(dates, false);
            }
            onClose(dates, dateStr, instance);
          }
        );
      },

      onChange: (dates: Date[], dateStr: string, instance: Flatpickr.Instance) => {
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

  handleClear = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    const { onClear, onChange } = this.props;
    if (!this.instance) {
      return;
    }

    if (this.instance.isOpen) {
      this.instance.close();
    }

    if (!("value" in this.props)) {
      this.setState({ value: "" }, () => {
        if (this.instance) {
          this.instance.setDate([], false);
        }
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
      className,
      showClearBtn,
      ...props
    } = this.props as any;
    const { isHover, isOpen } = this.state;

    propsKey.forEach((key) => {
      delete props[key];
    });

    delete props.onClear;

    props.className = classNames(
      "datepicker-input input",
      { "is-hover": isHover },
      { "is-active": isOpen }
    );

    return (
      <div
        className={classNames("datepicker has-icons-right", className)}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <input
          {...props}
          ref={this.ref}
        />
        {this.renderIcon()}
      </div>
    );
  }
}

export default DatePicker;
