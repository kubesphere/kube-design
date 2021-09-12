import React, { useRef } from 'react';
import { DefaultProps } from '../theme';
import { MenuItem, MenuItemType } from './MenuItem/MenuItem';
import { Divider } from '../Divider/Divider';
import { MenuLabel } from './MenuLabel/MenuLabel';
import { MenuButton } from './MenuButton/MenuButton';
import { Text } from '../Text/Text';
import { MenuWrapper } from './Menu.styles';

export { MenuItem, MenuLabel };

export interface MenuProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  width?: number;

  children?: React.ReactElement;
}

export function Menu({ children }: MenuProps) {
  const items = React.Children.toArray(children).filter(
    (item: MenuItemType) =>
      item.type === MenuItem || item.type === Divider || item.type === MenuLabel
  ) as MenuItemType[];

  const buttonsRefs = useRef<Record<string, HTMLButtonElement>>({});

  const buttons = items.map((item, index) => {
    if (item.type === MenuItem) {
      return (
        <MenuButton<'button'>
          {...item.props}
          key={index}
          ref={(node) => {
            buttonsRefs.current[index] = node;
          }}
        />
      );
    }

    if (item.type === MenuLabel) {
      return <Text key={index} className="menu-label" {...(item.props as any)} />;
    }

    if (item.type === Divider) {
      return (
        <Divider
          variant="solid"
          margins={10}
          className="menu-divider"
          key={index}
          {...(item.props as any)}
        />
      );
    }

    return null;
  });

  return <MenuWrapper>{buttons}</MenuWrapper>;
}

Menu.displayName = '@kubed/component/Menu';
