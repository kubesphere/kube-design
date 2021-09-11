import * as React from 'react';
import { Add, Pen, Stop, Trash, More } from '@kubed/icons';
import { Button, Dropdown, Menu, MenuItem, MenuLabel } from '../index';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const MenuComponent = (
  <Menu>
    <MenuLabel>menu label</MenuLabel>
    <MenuItem icon={<Add />}>创建</MenuItem>
    <MenuItem icon={<Stop />}>停止调度</MenuItem>
    <MenuItem icon={<Pen />}>Edit</MenuItem>
    <MenuItem icon={<Trash />}>Delete</MenuItem>
  </Menu>
);

export const Basic = () => (
  <div style={{ height: '300px', width: '100%', backgroundColor: '#f9fbfd' }}>
    <Dropdown content={MenuComponent}>
      <Button variant="text" radius="lg">
        <More size={16} />
      </Button>
    </Dropdown>
  </div>
);
