import React from 'react';
import { storiesOf } from '@storybook/react';
import { Add } from '@kubed/icons';
import { Group } from '../Group/Group';
import { Button } from './Button';

storiesOf('@kubed/components/Button', module)
  .addParameters({ component: Button })
  .add('Demos', () => (
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
      <Button variant="filled" color="default" radius="xl" disabled>
        KubeSphere
      </Button>
    </Group>
  ));

storiesOf('@kubed/components/Button', module).add('Colors', () => (
  <Button variant="filled" color="warning" shadow radius="xl">
    KubeSphere
  </Button>
));

storiesOf('@kubed/components/Button', module).add('With Icon', () => (
  <Button variant="filled" color="default" radius="xl" leftIcon={<Add size={16} />}>
    KubeSphere
  </Button>
));
