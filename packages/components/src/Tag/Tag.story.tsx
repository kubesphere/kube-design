import * as React from 'react';
import { Meta } from '@storybook/react';
import { Add, Close } from '@kubed/icons';
import { Tag, Group } from '../index';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

export const basic = () => (
  <Group>
    <Tag>KubeSphere</Tag>
    <Tag title="job-name">KubeSphere</Tag>
  </Group>
);

export const Colors = () => (
  <Group>
    <Tag color="warning">KubeSphere</Tag>
    <Tag color="error">KubeSphere</Tag>
    <Tag color="secondary">KubeSphere</Tag>
    <Tag color="success">KubeSphere</Tag>
    <Tag title="job-name" color="success">
      KubeSphere
    </Tag>
  </Group>
);

export const WithIcon = () => (
  <Tag
    color="success"
    title={<Add variant="light" size={14} />}
    titleStyle={{ backgroundColor: 'transparent', margin: '0', padding: '0 3px' }}
  >
    Add
  </Tag>
);

export const Append = () => (
  <Tag
    color="success"
    append={<Close variant="light" size={14} />}
    titleStyle={{ backgroundColor: 'transparent', margin: '0', padding: '0 3px' }}
  >
    Add
  </Tag>
);
