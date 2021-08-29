import * as React from 'react';
import { Meta } from '@storybook/react';
import { Tag, Group } from '@kubed/components';
import { Add } from '@kubed/icons';

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
