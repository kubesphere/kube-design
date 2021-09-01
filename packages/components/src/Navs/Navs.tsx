import React, { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { useId, useUncontrolled, useReducedMotion } from '@kubed/hooks';
import { KubedNumberSize, KubedSizes } from '../theme';
import {
  NavsContainer,
  NavItemList,
  NavItemDiv,
  NavItemLabel,
  WRAPPER_PADDING,
  PillsBg,
  LineBg,
} from './Navs.styles';

export interface NavItem {
  value: string;
  label: React.ReactNode;
}

export interface NavProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Data based on which controls are rendered */
  data: NavItem[];

  /** Current selected value */
  variant?: 'pills' | 'line';

  /** Current selected value */
  value?: string;

  /** Default value for uncontrolled component */
  defaultValue?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Name of the radio group, default to random id */
  name?: string;

  /** True if component should have 100% width */
  fullWidth?: boolean;

  /** Active control color from theme, defaults to white in light color scheme and theme.colors.dark[9] in dark */
  color?: string | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /** Controls font-size, paddings and height */
  size?: KubedSizes;

  /** Border-radius from theme or number to set border-radius in px */
  radius?: KubedNumberSize;

  /** Transition duration in ms, set to 0 to turn off transitions */
  transitionDuration?: number;

  /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;
}

export function Navs({
  data,
  name,
  variant = 'pills',
  value,
  onChange,
  color,
  fullWidth,
  radius = 'lg',
  size = 'sm',
  transitionDuration = 150,
  transitionTimingFunction,
  defaultValue,
  ...others
}: NavProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [_value, handleValueChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: Array.isArray(data) ? data[0].value : null,
    onChange,
    rule: (val) => !!val,
  });

  const [activePosition, setActivePosition] = useState({ width: 0, translate: 0 });
  const uuid = useId(name);
  const reduceMotion = useReducedMotion();
  const refs = useRef<Record<string, HTMLLabelElement>>({});
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (_value in refs.current && wrapperRef.current) {
        const element = refs.current[_value];
        const rect = element.getBoundingClientRect();
        setActivePosition({
          width: rect.width,
          translate: rect.x - wrapperRef.current.getBoundingClientRect().x - WRAPPER_PADDING,
        });

        if (!shouldAnimate) {
          setTimeout(() => {
            setShouldAnimate(true);
          }, 4);
        }
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [_value]);

  const items = data.map((item) => {
    const isActive = _value === item.value;
    return (
      <NavItemDiv
        key={item.value}
        active={isActive}
        radius={radius}
        size={size}
        reduceMotion={reduceMotion || !shouldAnimate}
        transitionTimingFunction={transitionTimingFunction}
        transitionDuration={transitionDuration}
        className={cx('nav-item', { 'nav-item__active': isActive })}
      >
        <input
          className="nav-input"
          type="radio"
          name={uuid}
          value={item.value}
          id={`${uuid}-${item.value}`}
          checked={isActive}
          onChange={() => handleValueChange(item.value)}
        />
        <NavItemLabel
          active={isActive}
          htmlFor={`${uuid}-${item.value}`}
          ref={(node) => {
            refs.current[item.value] = node;
          }}
        >
          {item.label}
        </NavItemLabel>
      </NavItemDiv>
    );
  });

  return (
    <NavsContainer variant={variant}>
      <NavItemList
        variant={variant}
        fullWidth={fullWidth}
        radius={radius}
        size={size}
        ref={wrapperRef}
        {...others}
      >
        {!!_value &&
          (variant === 'pills' ? (
            <PillsBg
              variant={variant}
              radius={radius}
              color={color}
              width={activePosition.width}
              transform={activePosition.translate}
            />
          ) : (
            <LineBg
              variant={variant}
              radius={radius}
              color={color}
              width={activePosition.width}
              transform={activePosition.translate}
            />
          ))}
        {items}
      </NavItemList>
    </NavsContainer>
  );
}

Navs.displayName = '@kubed/components/Navs';
