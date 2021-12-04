import React from 'react';
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
  ({ children, icon, color, disabled, rightSection, as: Element = 'button', ...rest }, ref) => {
    return (
      <MenuButtonElement as={Element} ref={ref} {...rest}>
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