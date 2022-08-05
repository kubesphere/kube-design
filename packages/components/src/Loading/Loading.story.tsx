import * as React from 'react';
import { Loading, Group } from '../index';

export default {
  title: 'Components/Loading',
  component: Loading,
};

export const Basic = () => (
  <Group>
    <Loading size="sm" />
    <Loading size="md" />
    <Loading size="lg" />
  </Group>
);

export const CircleLoading2 = () => (
  <Group>
    <Loading size="xs" variant="circle2" />
    <Loading size="sm" variant="circle2" />
    <Loading size="md" variant="circle2" />
    <Loading size="lg" variant="circle2" />
    <Loading size="md" variant="circle2" color="warning" />
  </Group>
);
