import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useId, useUncontrolled, useReducedMotion } from '@kubed/hooks';
import { KubedNumberSize, KubedSizes } from '../theme';
import { Group, GroupPosition, GroupDirection } from '../Group/Group';
import { Tab, TabProps } from './Tab/Tab';
import toArray from '../utils/toArray';

import {
  TabsContainer,
  TabControlList,
  TabControl,
  TabControlLabel,
  TabPanel,
  WRAPPER_PADDING,
  PillsBg,
  LineBg,
} from './Tabs.styles';

export { Tab };
export type { TabProps };

const directionMapping = {
  horizontal: 'row',
  vertical: 'column',
};

const findDefaultTab = (tabs: TabProps[]) => {
  for (let i = 0; i < tabs.length; i += 1) {
    if (!tabs[i].disabled) {
      return tabs[i].key;
    }
  }

  return -1;
};

export interface TabsProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'value' | 'onChange'> {
  /** Current selected value */
  variant?: 'pills' | 'line' | 'outline';

  /** Current selected value */
  activeKey?: string;

  /** Default value for uncontrolled component */
  defaultActiveKey?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Name of the radio group, default to random id */
  name?: string;

  /** True if component should have 100% width */
  grow?: boolean;

  /** Active control color from theme, defaults to white in light color scheme and theme.colors.dark[9] in dark */
  color?: string | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /** Controls font-size, paddings and height */
  size?: KubedSizes;

  /** Border-radius from theme or number to set border-radius in px */
  radius?: KubedNumberSize;

  /** Tab controls position */
  position?: GroupPosition;

  /** Tab controls direction */
  direction?: 'horizontal' | 'vertical';

  /** Controls tab content padding-top */
  tabPadding?: KubedNumberSize;

  /** Called when tab control is clicked with tab index */
  onTabChange?(tabKey: string): void;

  /** Transition duration in ms, set to 0 to turn off transitions */
  transitionDuration?: number;

  /** Transition timing function for all transitions, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;
}

// 修改 parseTabList 函数的返回类型和实现
const parseTabList = (children: React.ReactNode): TabProps[] => {
  return toArray(children)
    .map((node: React.ReactElement<TabProps>) => {
      if (React.isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined;
        return {
          key,
          ...node.props,
          node,
        } as TabProps;
      }
      return null;
    })
    .filter((tab): tab is TabProps => tab !== null);
};

export function Tabs({
  children,
  name,
  variant = 'pills',
  activeKey,
  defaultActiveKey,
  onTabChange,
  color,
  grow,
  radius = 'lg',
  size = 'sm',
  position = 'left',
  direction = 'horizontal',
  tabPadding = 'xs',
  transitionDuration = 150,
  transitionTimingFunction,
  ...others
}: TabsProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const tabs = parseTabList(children);

  const [_activeKey, handleActiveTabChange] = useUncontrolled({
    value: activeKey,
    defaultValue: defaultActiveKey,
    finalValue: findDefaultTab(tabs),
    onChange: onTabChange,
    rule: (val) => !!val,
  });

  const [activePosition, setActivePosition] = useState({
    width: 0,
    height: 0,
    translate: 0,
    translateY: 0,
  });
  const uuid = useId(name);
  const reduceMotion = useReducedMotion();
  // 修改 refs 的类型定义
  const refs = useRef<Record<string, HTMLLabelElement | null>>({});
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variant === 'outline') return null;
    const observer = new ResizeObserver(() => {
      if (_activeKey in refs.current && wrapperRef.current) {
        const element = refs.current[_activeKey];
        const rect = element.getBoundingClientRect();

        const wrapperStyle = window.getComputedStyle(wrapperRef.current);
        const borderLeftWidth = parseFloat(wrapperStyle.borderLeftWidth);

        setActivePosition({
          width: rect.width,
          height: rect.height,
          translate:
            rect.x -
            (wrapperRef.current.getBoundingClientRect().x + borderLeftWidth + 1) -
            WRAPPER_PADDING,
          translateY: rect.y - wrapperRef.current.getBoundingClientRect().y - WRAPPER_PADDING,
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
  }, [_activeKey]);

  const items = tabs.map((item) => {
    const { key, label } = item;
    const isActive = _activeKey === key;
    return (
      <TabControl
        key={key}
        active={isActive}
        radius={radius}
        size={size}
        reduceMotion={reduceMotion || !shouldAnimate}
        transitionTimingFunction={transitionTimingFunction}
        transitionDuration={transitionDuration}
        className={cx('tab-item', { 'tab-item__active': isActive })}
      >
        <TabControlLabel
          active={isActive}
          htmlFor={`${uuid}-${key}`}
          ref={(node) => {
            if (key) {
              refs.current[key] = node;
            }
          }}
          onClick={() => handleActiveTabChange(key)}
          className="tab-label"
        >
          {label}
        </TabControlLabel>
      </TabControl>
    );
  });

  return (
    <TabsContainer variant={variant} direction={direction} position={position} {...others}>
      <TabControlList
        variant={variant}
        fullWidth={grow}
        radius={radius}
        size={size}
        position={position}
        direction={direction}
        color={color}
        ref={wrapperRef}
      >
        {!!_activeKey &&
          variant !== 'outline' &&
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
              direction={direction}
              position={position}
              width={activePosition.width}
              height={activePosition.height}
              transform={activePosition.translate}
              translateY={activePosition.translateY}
              className="line-bg"
            />
          ))}
        <Group
          grow={grow}
          spacing={0}
          position={position}
          direction={directionMapping[direction] as GroupDirection}
          className="tab-group"
        >
          {items}
        </Group>
      </TabControlList>

      <TabPanel direction={direction} position={position} variant={variant} tabPadding={tabPadding}>
        {tabs.map((tab) => {
          if (tab.key === _activeKey) {
            return tab.children;
          }
          return null;
        })}
      </TabPanel>
    </TabsContainer>
  );
}
