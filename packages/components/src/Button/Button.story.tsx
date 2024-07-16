import * as React from 'react';
import { Add } from '@kubed/icons';
import { Group } from '../Group/Group';
import { Button } from './Button';

export default {
  title: 'Components/Button',

  parameters: {
    component: Button,
  },
};

export const Demos = () => (
  <Group spacing="xl">
    <Button variant="filled" color="secondary" shadow radius="xl">
      KubeSphere
    </Button>
    <Button variant="filled" color="default" radius="xl">
      KubeSphere
    </Button>
    <Button variant="text" radius="xl">
      KubeSphere
    </Button>
    <Button variant="filled" shadow color="secondary" radius="xl" disabled>
      KubeSphere
    </Button>
  </Group>
);

export const Colors = () => (
  <Button variant="filled" color="warning" shadow radius="xl">
    KubeSphere
  </Button>
);

export const WithIcon = () => (
  <Button variant="filled" color="default" radius="xl" leftIcon={<Add size={16} />}>
    KubeSphere
  </Button>
);

export const Size = () => (
  <Button variant="filled" color="default" radius="xl" size="md" leftIcon={<Add size={16} />}>
    KubeSphere
  </Button>
);

export const Loading = () => (
  <Group>
    <Button variant="filled" color="default" radius="xl" loading>
      KubeSphere
    </Button>
    <Button variant="filled" color="secondary" shadow radius="xl" loading>
      KubeSphere
    </Button>
    <Button variant="text" radius="xl" loading>
      KubeSphere
    </Button>
    <Button variant="filled" color="warning" radius="xl" loading>
      KubeSphere
    </Button>
    <Button variant="filled" color="error" radius="xl" loading>
      KubeSphere
    </Button>
  </Group>
);
