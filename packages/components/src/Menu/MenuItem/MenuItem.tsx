import React from 'react';
import { DefaultProps } from '../../theme';
import forwardRef from '../../utils/forwardRef';

export interface MenuItemProps extends DefaultProps {
  /** Item ClassName*/
  className?: string;

  /** Item label */
  children: React.ReactNode;

  /** Icon rendered on the left side of label */
  icon?: React.ReactNode;

  /** Any color from theme.colors */
  color?: string;

  /** disabled for menuItem */
  disabled?: boolean;

  /** Any react node to render on the right side of item, for example, keyboard shortcut or badge */
  rightSection?: React.ReactNode;
}

export interface MenuItemType {
  type: any;
  props: MenuItemProps;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

export const MenuItem = forwardRef<MenuItemProps, 'button'>(() => {
  return null;
});

MenuItem.displayName = '@kubed/component/MenuItem';
