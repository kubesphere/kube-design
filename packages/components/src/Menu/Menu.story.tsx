import React from 'react';
import { Menu, MenuItem, MenuLabel, Card, Divider } from '@kubed/components';
import { Add, Stop, Pen, Trash } from '@kubed/icons';

export default {
  title: 'Components/Menu',
  component: Menu,
};

export const Basic = () => (
  <Card style={{ width: '230px' }}>
    <Menu>
      <MenuLabel>menu label</MenuLabel>
      <MenuItem icon={<Add />}>创建</MenuItem>
      <MenuItem icon={<Stop />}>停止调度</MenuItem>
      <MenuItem icon={<Pen />}>Edit</MenuItem>
      <Divider />
      <MenuItem icon={<Trash />}>Delete</MenuItem>
    </Menu>
  </Card>
);
