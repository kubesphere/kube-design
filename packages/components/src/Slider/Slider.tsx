import * as React from 'react';
import { isEmpty, throttle } from 'lodash';
import { useEffect, useState, useRef } from 'react';
import { Tooltip } from '../Tooltip/Tooltip';
import {
  SliderWrapper,
  SliderStyle,
  SliderRail,
  SliderTrack,
  SliderHandler,
  SliderMarkStyle,
  SliderBaseProps,
  SliderMark,
} from './Slider.styles';

export function Slider(props: SliderBaseProps) {
  const {
    value = [0, 0],
    marks = [],
    unit = '',
    onChange = () => {},
    valueFormatter = () => {},
  } = props;

  const sliderRef = useRef<HTMLDivElement>(null);
  const totalWeight = marks.reduce((prev, cur) => prev + (cur.weight || 1), 0) - 1;
  const endPercent = (totalWeight * 100) / (totalWeight + 1);
  const [leftState, setLeftState] = useState(0);
  const [rightState, setRightState] = useState(0);
  let rightData = 0;
  let leftData = 0;

  let rect = {} as DOMRect;
  let typeSlider;

  const getValuePercent = (mark: Array<SliderMark>, valueData: number) => {
    let ret = 0;
    for (let i = 0; i < marks.length - 1; i++) {
      const markWeight = marks[i].weight || 1;
      if (valueData >= marks[i + 1].value) {
        ret += markWeight / totalWeight;
      } else if (valueData >= marks[i].value && valueData < marks[i + 1].value) {
        const percent = (valueData - marks[i].value) / (marks[i + 1].value - marks[i].value);
        ret += (markWeight * percent) / totalWeight;
      }
    }
    return ret;
  };

  const getValueFromPercent = (mark: Array<SliderMark>, percent: number) => {
    const weight = (totalWeight * percent) / 100; //计算权重占整体的百分比
    let currentValue = 0;
    let usedWeight = 0;
    for (let i = 0; i < mark.length - 1; i++) {
      const markWeight = marks[i].weight || 1;
      usedWeight += markWeight;
      if (usedWeight >= weight && usedWeight < markWeight + weight) {
        const _percent = (weight + markWeight - usedWeight) / markWeight; //计算权重
        currentValue = (marks[i + 1].value - marks[i].value) * _percent + marks[i].value;
      }
    }
    if (valueFormatter) {
      return Number(valueFormatter(currentValue));
    }
    return Number(currentValue.toFixed(2));
  };

  const getStateFromProps = (newMarks, newValue) => {
    const left = getValuePercent(newMarks, newValue[0]) * 100;
    const right = getValuePercent(newMarks, newValue[1]) * 100;
    return { left, right };
  };

  const triggerChange = ({ left, right }) => {
    leftData = left;
    rightData = right;
    onChange([getValueFromPercent(marks, left), getValueFromPercent(marks, right)]);
  };

  const handleMouseMove = throttle((e) => {
    let percent = ((e.x - rect.x) * 100) / rect.width;
    if (percent > endPercent) {
      percent = 100;
    }
    if (percent < 0) {
      percent = 0;
    }

    if (typeSlider === 'left') {
      if (percent >= rightData) {
        typeSlider = 'right';
        return triggerChange({
          left: rightData,
          right: percent,
        });
      }

      return triggerChange({
        left: percent,
        right: rightData,
      });
    }

    if (percent <= leftData) {
      typeSlider = 'left';
      return triggerChange({
        left: percent,
        right: leftData,
      });
    }

    return triggerChange({
      left: leftData,
      right: percent,
    });
  }, 80);

  const handleMouseUp = (): void => {
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = (e): void => {
    document.addEventListener('mouseup', handleMouseUp);
    if (e.target.getAttribute('role') === 'slider') {
      document.addEventListener('mousemove', handleMouseMove);
      typeSlider = e.target.dataset.type;
    } else if (sliderRef.current.contains(e.target)) {
      rect = sliderRef.current.getBoundingClientRect();
      let dx = ((e.x - rect.x) / rect.width) * 100;
      if (dx > endPercent) {
        dx = 100;
      }
      const middle = (leftData + rightData) / 2;
      triggerChange(dx < middle ? { left: dx, right: rightData } : { left: leftData, right: dx });
    }
  };

  const handleResize = (): void => {
    rect = sliderRef.current.getBoundingClientRect();
  };

  useEffect(() => {
    const { left, right } = getStateFromProps(marks, value);
    setRightState(right);
    setLeftState(left);
    rightData = right;
    leftData = left;
  }, []);

  useEffect(() => {
    const { left, right } = getStateFromProps(marks, value);
    if (left <= right) {
      setRightState(right);
      setLeftState(left);
      rightData = right;
      leftData = left;
    }
  }, [marks, value]);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      sliderRef.current.addEventListener('mousedown', handleMouseDown);
      rect = sliderRef.current.getBoundingClientRect();
      window.addEventListener('resize', handleResize);
    }
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
    };
  }, [sliderRef]);

  const renderSlider = (type: string) => {
    const { hasTooltip } = props;
    const percent = type === 'left' ? leftState : rightState;
    const slider = (
      <SliderHandler style={{ left: `calc(${percent}% - 10px)` }} role="slider" data-type={type} />
    );
    if (!hasTooltip) {
      return slider;
    }
    const tip = `${type === 'left' ? value[0] : value[1]} ${unit}`;
    return <Tooltip content={tip}>{slider}</Tooltip>;
  };

  const renderMarks = () => {
    if (isEmpty(marks)) {
      return null;
    }
    let usedWeight = 0;

    return (
      <SliderMarkStyle>
        {marks.map((mark: any) => {
          const weight = mark.weight || 1;
          usedWeight += weight;
          const percent = ((usedWeight - weight) * 100) / totalWeight;
          return (
            <span
              key={mark.value}
              style={{
                position: 'absolute',
                left: `${percent}%`,
              }}
            >
              {mark.label}
            </span>
          );
        })}
      </SliderMarkStyle>
    );
  };

  return (
    <SliderWrapper>
      <SliderStyle ref={sliderRef}>
        <SliderRail />
        <SliderTrack
          role="track"
          style={{
            left: `${leftState}%`,
            width: `${rightState - leftState}%`,
          }}
        />
        {renderSlider('left')}
        {renderSlider('right')}
        {renderMarks()}
      </SliderStyle>
    </SliderWrapper>
  );
}

Slider.displayName = 'Slider';

export default Slider;
