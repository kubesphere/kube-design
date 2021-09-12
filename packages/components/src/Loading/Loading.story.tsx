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
