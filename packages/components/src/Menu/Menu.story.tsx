import * as React from 'react';
import { Add, Stop, Pen, Trash } from '@kubed/icons';
import { Menu, MenuItem, MenuLabel, Card, Divider } from '../index';

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
