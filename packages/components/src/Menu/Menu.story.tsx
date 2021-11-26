import * as React from 'react';
import { Add, Stop, Pen, Trash } from '@kubed/icons';
import { Menu, MenuItem, MenuLabel, Card, Divider } from '../index';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const clickCallback = () => {
  console.log('you click me');
};

export const Basic = () => (
  <Card style={{ width: '230px' }}>
    <Menu>
      <MenuLabel>menu label</MenuLabel>
      <MenuItem disabled icon={<Add />} as="a" href="/logout">
        创建
      </MenuItem>
      <MenuItem icon={<Stop />} onClick={clickCallback}>
        停止调度
      </MenuItem>
      <MenuItem disabled icon={<Pen />}>Edit</MenuItem>
      <Divider />
      <MenuItem icon={<Trash />}>Delete</MenuItem>
    </Menu>
  </Card>
);
