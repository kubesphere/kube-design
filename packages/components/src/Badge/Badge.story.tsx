import * as React from 'react';
import { Meta } from '@storybook/react';
import { Storage, Pod, Error } from '@kubed/icons';
import { Badge, BadgeAnchor, Group, Tooltip } from '../index';

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta;

export const basic = () => (
  <Group>
    <Badge>3</Badge>
    <Badge color="warning">12</Badge>
  </Group>
);

export const Colors = () => (
  <Group>
    <Badge color="warning">KubeSphere</Badge>
    <Badge color="error">#12</Badge>
    <Badge color="secondary">KubeSphere</Badge>
    <Badge color="success">KubeSphere</Badge>
    <Badge color="blue">9</Badge>
  </Group>
);

export const Shadow = () => (
  <Group>
    <Badge color="warning" shadow>
      KubeSphere
    </Badge>
    <Badge color="error" shadow>
      #12
    </Badge>
    <Badge color="secondary" shadow>
      KubeSphere
    </Badge>
    <Badge color="success" shadow>
      KubeSphere
    </Badge>
    <Badge color="blue" shadow>
      9
    </Badge>
    <Badge color="#abb4be" shadow>
      9
    </Badge>
  </Group>
);

export const Anchor = () => (
  <Group spacing={30}>
    <BadgeAnchor>
      <Tooltip content="Badge information">
        <Badge color="success">12</Badge>
      </Tooltip>
      <Storage size={40} />
    </BadgeAnchor>
    <BadgeAnchor offset={[5, 5]}>
      <Tooltip content="Badge information">
        <Badge color="success" dot />
      </Tooltip>
      <Pod size={40} />
    </BadgeAnchor>
    <BadgeAnchor offset={[5, 5]}>
      <Tooltip content="Badge information">
        <Badge color="warning" dot motion />
      </Tooltip>
      <Pod size={40} />
    </BadgeAnchor>
    <BadgeAnchor offset={[5, 5]}>
      <Tooltip content="Badge information">
        <Error className="badge" size={18} color="#fff" fill="rgb(245, 166, 35)" />
      </Tooltip>
      <Pod size={40} />
    </BadgeAnchor>
  </Group>
);
