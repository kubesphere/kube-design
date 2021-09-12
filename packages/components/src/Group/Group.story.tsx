import * as React from 'react';
import { Meta } from '@storybook/react';
import { Group, Button, Divider } from '../index';

export default {
  title: 'Components/Group',
  component: Group,
} as Meta;

export const Basic = () => (
  <Group>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Group>
);

export const Position = () => (
  <>
    <Group position="center">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
    <Group position="right">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
  </>
);

export const Spacing = () => (
  <>
    <Group position="center" spacing="xl">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
    <Group position="center" spacing={100} style={{ marginTop: '40px' }}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Group>
  </>
);

export const Direction = () => (
  <Group direction="column">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Group>
);

export const Grow = () => (
  <Group grow>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Group>
);

export const withDivider = () => (
  <Group>
    <Button>1</Button>
    <Divider direction="vertical" margins="sm" />
    <Button>2</Button>
    <Divider direction="vertical" margins="sm" />
    <Button>3</Button>
  </Group>
);
