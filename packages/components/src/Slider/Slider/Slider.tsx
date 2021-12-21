import React, { useRef, useState, forwardRef } from 'react';
import { useUncontrolled, useMove, useMergedRef } from '@kubed/hooks';
import { DefaultProps, KubedNumberSize } from '../../theme/index';
import { getUnevenPosition } from '../utils/getPosition';
import { getUnevenChangeValue } from '../utils/getChangeValue';
import { Thumb } from '../Thumb/Thumb';
import { Track } from '../Track/Track';
import { SliderRoot } from '../SliderRoot/SliderRoot';

export interface SliderProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Track border-radius from theme or number to set border-radius in px */
  radius?: KubedNumberSize;

  /** Predefined track and thumb size, number to set sizes in px */
  size?: KubedNumberSize;

  /** Minimal possible value */
  min?: number;

  /** keep decimals **/
  decimals?: number;

  /** Maximum possible value */
  max?: number;

  /** Number by which value will be incremented/decremented with thumb drag and arrows */
  step?: number;

  /** Current value for controlled slider */
  value?: number;

  /** Default value for uncontrolled slider */
  defaultValue?: number;

  /** Called each time value changes */
  onChange?(value: number): void;

  /** Hidden input name, use with uncontrolled variant */
  name?: string;

  /** Marks which will be placed on the track */
  marks?: { value: number; label?: React.ReactNode }[];

  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Label appear/disappear transition */
  labelTransition?: string;

  /** Label appear/disappear transition duration in ms */
  labelTransitionDuration?: number;

  /** Label appear/disappear transition timing function, defaults to theme.transitionRimingFunction */
  labelTransitionTimingFunction?: string;

  /** If true label will be not be hidden when user stops dragging */
  labelAlwaysOn?: boolean;

  /** Thumb aria-label */
  thumbLabel?: string;

  /** If true slider label will appear on hover */
  showLabelOnHover?: boolean;

  /** Thumb children, can be used to add icon */
  thumbChildren?: React.ReactNode;
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      classNames,
      styles,
      color,
      value,
      onChange,
      size = 'md',
      radius = 'xl',
      min = 0,
      max = 100,
      decimals = 0,
      step = 1,
      defaultValue,
      name,
      marks = [],
      label = (f) => f,
      labelTransitionTimingFunction,
      labelAlwaysOn = false,
      thumbLabel = '',
      showLabelOnHover = true,
      thumbChildren,
      ...others
    }: SliderProps,
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const [_value, setValue] = useUncontrolled({
      value,
      defaultValue,
      finalValue: 0,
      rule: (val) => typeof val === 'number',
      onChange,
    });
    // const container = useRef<HTMLDivElement>();
    const thumb = useRef<HTMLDivElement>();
    // const start = useRef<number>();
    // const offset = useRef<number>();
    const position = getUnevenPosition({ value: _value, min, max, marks });
    const _label = typeof label === 'function' ? label(_value) : label;

    const handleChange = (val: number) => {
      const nextValue = getUnevenChangeValue({ value: val, marks, decimals, min, max, step });
      setValue(nextValue);
    };

    const { ref: container, active } = useMove(({ x }) => handleChange(x));

    function handleThumbMouseDown(
      event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
    ) {
      if (event.cancelable) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.nativeEvent.code) {
        case 'ArrowUp':
        case 'ArrowRight': {
          event.preventDefault();
          thumb.current.focus();
          setValue(Math.min(Math.max(_value + step, min), max));
          break;
        }

        case 'ArrowDown':
        case 'ArrowLeft': {
          event.preventDefault();
          thumb.current.focus();
          setValue(Math.min(Math.max(_value - step, min), max));
          break;
        }

        default: {
          break;
        }
      }
    };

    return (
      <SliderRoot
        {...others}
        size={size}
        ref={useMergedRef(container, ref)}
        onMouseDownCapture={() => container.current?.focus()}
        onKeyDownCapture={handleTrackKeydownCapture}
        classNames={classNames}
        styles={styles}
      >
        <Track
          offset={0}
          filled={position}
          marks={marks}
          size={size}
          radius={radius}
          min={min}
          max={max}
          value={_value}
          onChange={setValue}
          onMouseEnter={showLabelOnHover ? () => setHovered(true) : undefined}
          onMouseLeave={showLabelOnHover ? () => setHovered(false) : undefined}
          styles={styles}
          classNames={classNames}
        >
          <Thumb
            max={max}
            min={min}
            value={_value}
            position={position}
            dragging={active}
            label={_label}
            ref={thumb}
            onMouseDown={handleThumbMouseDown}
            labelAlwaysOn={labelAlwaysOn}
            classNames={classNames}
            styles={styles}
            thumbLabel={thumbLabel}
            showLabelOnHover={showLabelOnHover && hovered}
          >
            {thumbChildren}
          </Thumb>
        </Track>

        <input type="hidden" name={name} value={_value} />
      </SliderRoot>
    );
  }
);

Slider.displayName = '@kubed/components/Slider';
