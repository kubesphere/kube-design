import React from 'react';
import { DefaultProps } from '../../theme';

export interface MenuLabelProps extends DefaultProps {
  /** Label content */
  children: React.ReactNode;
}

export function MenuLabel(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  props: MenuLabelProps
) {
  return null;
}

MenuLabel.displayName = '@mantine/core/MenuLabel';
