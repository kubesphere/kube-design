import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Add } from '@kubed/icons';
import { Group } from '../Group/Group';
import { Button } from './Button';

storiesOf('Components/Button', module)
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
      <Button variant="filled" shadow color="secondary" radius="xl" disabled>
        KubeSphere
      </Button>
    </Group>
  ));

storiesOf('Components/Button', module).add('Colors', () => (
  <Button variant="filled" color="warning" shadow radius="xl">
    KubeSphere
  </Button>
));

storiesOf('Components/Button', module).add('With Icon', () => (
  <Button variant="filled" color="default" radius="xl" leftIcon={<Add size={16} />}>
    KubeSphere
  </Button>
));

storiesOf('Components/Button', module).add('Size', () => (
  <Button variant="filled" color="default" radius="xl" size="md" leftIcon={<Add size={16} />}>
    KubeSphere
  </Button>
));

storiesOf('Components/Button', module).add('Loading', () => (
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
));
