import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Description, Card, Descriptions } from '../index';

export default {
  title: 'Components/Descriptions',
  component: Descriptions,
  args: {
    data: [
      { label: 'Cluster', value: 'default' },
      { label: 'Project', value: 'ifcloud' },
      { label: 'Instance Name', value: 'dev-node1' },
      { label: 'Instance IP', value: '10.233.74.19' },
    ],
    variant: 'default',
  },
  argTypes: {
    data: {
      name: 'data',
      description: 'Descriptions Data',
      control: 'object',
    },
    variant: {
      name: 'variant',
      description: 'Descriptions Variant',
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'unstyled'],
      control: { type: 'select' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Descriptions>;

type Story = StoryObj<typeof Descriptions>;

export const Explame: Story = {
  render: (args) => {
    const [descriptionsData, setDescriptionsData] = React.useState(args.data);

    React.useEffect(() => {
      if (args.data) {
        setDescriptionsData(args.data);
      }
    }, [args.data]);

    return (
      <Card>
        <Descriptions {...args} data={descriptionsData} />
      </Card>
    );
  },
};

export const DescriptionMeta: Meta<typeof Description> = {
  title: 'Components/Description',
  component: Description,
  args: {
    label: 'Label',
    children: 'Content',
    variant: 'default',
  },
  argTypes: {
    label: {
      name: 'label',
      description: '标签文本',
      control: 'text',
    },
    children: {
      name: 'children',
      description: '内容',
      control: 'text',
    },
    variant: {
      name: 'variant',
      description: '样式变体',
      defaultValue: 'default',
      options: ['default', 'unstyled'],
      control: { type: 'select' },
    },
    labelStyle: {
      name: 'labelStyle',
      description: '标签样式',
      control: 'object',
    },
    contentStyle: {
      name: 'contentStyle',
      description: '内容样式',
      control: 'object',
    },
  },
};

export const DescriptionExample: StoryObj<typeof Description> = {
  render: (args) => {
    return <Description {...args} />;
  },
};

export const Basic = () => (
  <Description label="cni.projectcalico.org/podIP">10.233.74.19/32</Description>
);

export const Unstyled = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card style={{ width: '300px' }}>
      <Description label="project" variant="unstyled">
        KubeSphere
      </Description>
      <Description label="cluster" variant="unstyled">
        default
      </Description>
    </Card>
  </div>
);

const data = [
  { label: 'Cluster', value: 'default' },
  { label: 'Project', value: 'ifcloud' },
  { label: 'Instance Name', value: 'dev-node1' },
  { label: 'Instance IP', value: '10.233.74.19' },
];

export const DescriptionsDemo = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card style={{ width: '300px' }}>
      <Descriptions data={data} variant="unstyled" />
    </Card>
    <Card style={{ marginTop: '50px' }}>
      <Descriptions data={data} variant="default" />
    </Card>
  </div>
);
