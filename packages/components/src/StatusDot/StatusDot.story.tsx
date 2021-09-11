import * as React from 'react';
import { Meta } from '@storybook/react';
import { StatusDot, Group, Tooltip } from '../index';

export default {
  title: 'Components/StatusDot',
  component: StatusDot,
} as Meta;

export const basic = () => (
  <Group>
    <StatusDot color="success">Ready</StatusDot>
    <StatusDot color="warning">Warning</StatusDot>
    <Tooltip content="Warning tips">
      <StatusDot color="error" />
    </Tooltip>
  </Group>
);

export const withoutLabel = () => (
  <Group>
    <StatusDot />
    <StatusDot color="warning" />
    <StatusDot color="success" />
    <StatusDot color="error" />
  </Group>
);

export const Motion = () => (
  <Group spacing={30}>
    <StatusDot motion />
    <StatusDot motion color="warning" />
    <StatusDot motion color="success">
      启动中
    </StatusDot>
    <StatusDot motion color="error">
      重启中
    </StatusDot>
  </Group>
);
