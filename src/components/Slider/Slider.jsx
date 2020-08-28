import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isEqual, isUndefined, isEmpty } from "lodash";

import Tooltip from "../Tooltip";

import "./styles.scss";

export default class Slider extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    marks: PropTypes.object,
    unit: PropTypes.string,
    range: PropTypes.bool,
    hasTooltip: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    min: 0,
    unit: "",
    step: 1,
    marks: {},
    range: false,
    hasTooltip: false,
    className: "",
    style: {},
    onChange() {},
  };

  constructor(props) {
    super(props);

    this.state = this.getStateFromProps();

    const index = String(props.step).indexOf(".");
    this.precision =
      index === -1 ? 0 : String(props.step).slice(index).length - 1;

    this.ref = React.createRef();
  }

  getValueFromPercent(percent) {
    const { min, max, step } = this.props;
    const value = ((max - min) * percent) / 100;
    return Math.min(
      (value - ((value - min) % step)).toFixed(this.precision),
      max
    );
  }

  getValuePercent(value) {
    const { min, max } = this.props;
    return Math.min((value - min) / (max - min), 1);
  }

  getStateFromProps() {
    const { range, value: _value, defaultValue } = this.props;
    const value = !isUndefined(_value) ? _value : defaultValue;

    let left;
    let right;
    let stateValue;

    if (range) {
      left = this.getValuePercent(value[0]) * 100;
      right = this.getValuePercent(value[1]) * 100;
      stateValue = value;
    } else {
      left = 0;
      right = this.getValuePercent(value) * 100;
      stateValue = [0, value];
    }

    return { left, right, value: stateValue };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.value &&
      !isEqual(
        this.props.value,
        this.props.range ? prevState.value : prevState.value[1]
      )
    ) {
      this.setState(this.getStateFromProps());
    }
  }

  componentDidMount() {
    if (this.ref && this.ref.current) {
      this.ref.current.addEventListener("mousedown", this.handleMouseDown);
      this.rect = this.ref.current.getBoundingClientRect();
      window.addEventListener("resize", this.handleResize);
    }
  }

  componentWillUnmount() {
    if (this.ref && this.ref.current) {
      this.ref.current.removeEventListener("mousedown", this.handleMouseDown);
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
      window.removeEventListener("resize", this.handleResize);
    }
  }

  triggerChange = ({ left, right }) => {
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
    this.rect = this.ref.current.getBoundingClientRect();
  };

  handleMouseDown = (e) => {
    document.addEventListener("mouseup", this.handleMouseUp);

    const { left, right } = this.state;
    const { range } = this.props;

    if (e.target.getAttribute("role") === "slider") {
      document.addEventListener("mousemove", this.handleMouseMove);
      this.type = e.target.dataset.type;
    } else if (this.ref.current.contains(e.target)) {
      let dx = ((e.x - this.rect.x) / this.rect.width) * 100;

      if (dx > this.endPercent) {
        dx = 100;
      }

      const middle = range ? left + right / 2 : 0;
      this.triggerChange(
        dx < middle ? { left: dx, right } : { left, right: dx }
      );
    }
  };

  handleMouseMove = (e) => {
    const { range } = this.props;
    const { left, right } = this.state;
    let percent = ((e.x - this.rect.x) * 100) / this.rect.width;

    if (percent > this.endPercent) {
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
  };

  handleMouseUp = () => {
    document.removeEventListener("mousemove", this.handleMouseMove);
  };

  renderSlider(type) {
    const { hasTooltip, unit } = this.props;
    const { value } = this.state;
    const percent = this.state[type];

    const slider = (
      <div
        className="slider-handler"
        role="slider"
        data-type={type}
        style={{ left: `calc(${percent}% - 10px)` }}
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
              left: `${100 * Math.min((key - min) / (max - min), 1)}%`,
            }}
          >
            {marks[key]}
          </span>
        ))}
      </div>
    );
  }

  render() {
    const { left, right } = this.state;
    const { className, style, range } = this.props;

    return (
      <div
        className={classNames("slider", className)}
        ref={this.ref}
        style={style}
      >
        <div className="slider-rail" />
        <div
          className="slider-track"
          role="track"
          style={{ left: `${left}%`, width: `${right - left}%` }}
        />
        {range && this.renderSlider("left")}
        {this.renderSlider("right")}
        {this.renderMarks()}
      </div>
    );
  }
}
