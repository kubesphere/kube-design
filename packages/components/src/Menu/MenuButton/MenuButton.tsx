import React from 'react';
import cx from 'classnames';
import forwardRef from '../../utils/forwardRef';
import { MenuItemProps } from '../MenuItem/MenuItem';
import { KubedNumberSize } from '../../theme';
import { MenuButtonElement } from './MenuButton.styles';

export interface MenuButtonProps extends MenuItemProps {
  children: React.ReactNode;
  as?: any;
  radius?: KubedNumberSize;
}

export const MenuButton = forwardRef<MenuButtonProps, 'button'>(
  (
    {
      className,
      children,
      icon,
      color,
      disabled,
      rightSection,
      as: Element = 'button',
      themeType,
      ...rest
    },
    ref
  ) => {
    return (
      <MenuButtonElement
        as={Element}
        ref={ref}
        $themeType={themeType}
        {...rest}
        className={cx(className, { 'menu-disabled': disabled })}
      >
        <div className="item-inner">
          {icon && <div className="item-icon">{icon}</div>}
          <div className="item-body">
            <div className="item-label">{children}</div>
            {rightSection}
          </div>
        </div>
      </MenuButtonElement>
    );
  }
);
