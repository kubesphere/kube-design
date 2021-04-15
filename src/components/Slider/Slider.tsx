import React from "react";
import classNames from "classnames";
import { isUndefined, isEmpty, clone, throttle, isArray } from "lodash";

import Tooltip from "../Tooltip";
import { Input } from "../Input";

interface SliderMark {
  [key: number]: string | number
}

type SliderValue = string | number | string[] | number[]

export interface SliderProps {
  value?: SliderValue,
  defaultValue?: SliderValue,
  min: number,
  max: number,
  step: number,
  marks: SliderMark,
  unit: string,
  range: boolean,
  hasTooltip: boolean,
  className: string,
  style: object,
  railStyle: object,
  handlerStyle: object,
  trackStyle: object,
  withInput?: boolean,
  onChange: (value: SliderValue) => void,
}

export interface SliderState {
  left: number,
  right: number,
  value: number[],
  originValue?: SliderValue
}

export default class Slider extends React.Component<SliderProps, SliderState> {
  static defaultProps = {
    min: 0,
    unit: "",
    step: 1,
    marks: {},
    range: false,
    hasTooltip: false,
    className: "",
    style: {},
    railStyle: {},
    handlerStyle: {},
    trackStyle: {},
    onChange() { },
  };

  precision: number

  ref = React.createRef<HTMLDivElement>()

  type?: string

  rect?: DOMRect

  constructor(props: SliderProps) {
    super(props);

    this.state = this.getStateFromProps();

    const index = String(props.step).indexOf(".");
    this.precision =
      index === -1 ? 0 : String(props.step).slice(index).length - 1;
  }

  getValueFromPercent(percent: number) {
    const { min, max, step } = this.props;
    const value = ((max - min) * percent) / 100 + min;
    return Math.min(
      Number((value - ((value - min) % step)).toFixed(this.precision)),
      max
    );
  }

  getValuePercent(value: number) {
    const { min, max } = this.props;
    return Math.min((value - min) / (max - min), 1);
  }

  getStateFromProps() {
    const { unit, range, min, value: _value, defaultValue } = this.props;
    let value = clone(!isUndefined(_value) ? _value : defaultValue);

    let left;
    let right;
    let stateValue: number[];

    if (range) {
      if (!value) {
        value = [min, min];
      } else {
        if (isArray(value)) {
          value = [Number(String(value[0]).replace(unit, "")), Number(String(value[1]).replace(unit, ""))]
        } else {
          value = Number(String(value).replace(unit, ""))
          value = [value, value]
        }
      }
      left = this.getValuePercent(value[0]) * 100;
      right = this.getValuePercent(value[1]) * 100;
      stateValue = value;
    } else {
      if (!value) {
        value = min;
      } else {
        value = Number(String(value).replace(unit, ""));
      }
      left = 0;
      right = this.getValuePercent(value) * 100;
      stateValue = [min, value];
    }

    return { left, right, value: stateValue, originValue: _value };
  }

  componentDidMount() {
    if (this.ref && this.ref.current) {
      this.ref.current.addEventListener("mousedown", this.handleMouseDown);
    }
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps: SliderProps, prevState: SliderState) {
    if (this.props.value !== prevState.originValue) {
      this.setState(this.getStateFromProps());
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseDown);
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
    window.removeEventListener("resize", this.handleResize);
  }

  triggerChange = ({ left, right }: Pick<SliderState, "left" | "right">) => {
    const { range, onChange } = this.props;

    const value = [
      this.getValueFromPercent(left),
      this.getValueFromPercent(right),
    ];

    if (value[0] !== this.state.value[0] || value[1] !== this.state.value[1]) {
      this.setState(
        {
          left: this.getValuePercent(value[0]) * 100,
          right: this.getValuePercent(value[1]) * 100,
          value,
        },
        () => {
          onChange(range ? value : value[1]);
        }
      );
    }
  };

  handleResize = () => {
    this.rect = this.ref.current?.getBoundingClientRect();
  };

  handleMouseDown = (e: MouseEvent) => {
    document.removeEventListener("mouseup", this.handleMouseUp);
    document.addEventListener("mouseup", this.handleMouseUp);
    
    const target = e.target as HTMLElement
    if (target && this.ref.current?.contains(target)) {
      this.rect = this.ref.current.getBoundingClientRect();

      if (target.getAttribute("role") === "slider") {
        document.addEventListener("mousemove", this.handleMouseMove);
        this.type = target.dataset.type;
        return;
      }

      const { left, right } = this.state;
      const { range } = this.props;

      let dx = Math.min(((e.x - this.rect.x) / this.rect.width) * 100, 100);

      const middle = range ? left + right / 2 : 0;
      this.triggerChange(
        dx < middle ? { left: dx, right } : { left, right: dx }
      );
    }
  };

  handleMouseMove = throttle((e: MouseEvent) => {
    const { range } = this.props;
    const { left, right } = this.state;
    
    if (!this.rect) {
      return
    }

    let percent = ((e.x - this.rect.x) * 100) / this.rect.width;

    if (percent > 100) {
      percent = 100;
    }

    if (percent < 0) {
      percent = 0;
    }

    if (this.type === "left" && range) {
      if (percent >= right) {
        this.type = "right";

        return this.triggerChange({
          left: right,
          right: percent,
        });
      }

      return this.triggerChange({
        left: percent,
        right,
      });
    }

    if (percent <= left) {
      this.type = "left";

      return this.triggerChange({
        left: percent,
        right: left,
      });
    }

    return this.triggerChange({
      left,
      right: percent,
    });
  }, 80);

  handleMouseUp = () => {
    document.removeEventListener("mousemove", this.handleMouseMove);
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { min, unit, onChange } = this.props;
    const { value } = e.target;
    this.setState(
      {
        value: [min, Number(value)],
        left: 0,
        right: this.getValuePercent(Number(value)) * 100,
      },
      () => {
        onChange(`${value}${unit}`);
      }
    );
  };

  renderSlider(type: keyof SliderState) {
    const { hasTooltip, handlerStyle, unit } = this.props;
    const { value } = this.state;
    const percent = this.state[type];

    const slider = (
      <div
        className="slider-handler"
        role="slider"
        data-type={type}
        style={{ ...handlerStyle, left: `calc(${percent}% - 10px)` }}
      />
    );

    if (!hasTooltip) {
      return slider;
    }

    const tip = `${type === "left" ? value[0] : value[1]} ${unit}`;

    return <Tooltip content={tip}>{slider}</Tooltip>;
  }

  renderMarks() {
    const { marks, max, min } = this.props;

    if (isEmpty(marks)) {
      return null;
    }

    return (
      <div className="slider-marks">
        {Object.keys(marks).map((key) => (
          <span
            key={key}
            style={{
              left: `${100 * Math.min((Number(key) - min) / (max - min), 1)}%`,
            }}
          >
            {marks[Number(key)]}
          </span>
        ))}
      </div>
    );
  }

  render() {
    const { left, right, value } = this.state;
    const {
      className,
      style,
      railStyle,
      trackStyle,
      range,
      unit,
      withInput,
      min,
      max,
    } = this.props;

    return (
      <div className="slider-wrapper">
        <div
          className={classNames("slider", className)}
          ref={this.ref}
          style={style}
        >
          <div className="slider-rail" style={railStyle} />
          <div
            className="slider-track"
            role="track"
            style={{
              ...trackStyle,
              left: `${left}%`,
              width: `${right - left}%`,
            }}
          />
          {range && this.renderSlider("left")}
          {this.renderSlider("right")}
          {this.renderMarks()}
        </div>
        {withInput && (
          <div className="has-icons-right">
            <Input
              type="number"
              value={value[1]}
              onChange={this.handleInputChange}
              max={max}
              min={min}
            />
            {unit && <span className="is-right">{unit}</span>}
          </div>
        )}
      </div>
    );
  }
}
