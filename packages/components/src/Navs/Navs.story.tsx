import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@kubed/components';
import styled from 'styled-components';
import { Navs } from './Navs';

export default {
  title: 'Components/Navs',
  component: Navs,
  args: {
    variant: 'pills',
    size: 'sm',
    radius: 'lg',
    color: 'default',
    fullWidth: false,
    transitionDuration: 150,
    data: [
      { label: 'KubeSphere', value: 'KubeSphere' },
      { label: 'Jenkins', value: 'Jenkins' },
      { label: 'Kubernetes', value: 'Kubernetes' },
    ],
  },
  argTypes: {
    variant: {
      name: 'variant',
      description: 'Navigation style variant',
      table: {
        defaultValue: { summary: 'pills' },
      },
      options: ['pills', 'line'],
      control: { type: 'radio' },
    },
    size: {
      name: 'size',
      description: 'Controls font-size, paddings and height',
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    radius: {
      name: 'radius',
      description: 'Border-radius from theme or number to set border-radius in px',
      table: {
        defaultValue: { summary: 'lg' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    color: {
      name: 'color',
      description: 'Active control color from theme',
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
    fullWidth: {
      name: 'fullWidth',
      description: 'True if component should have 100% width',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    transitionDuration: {
      name: 'transitionDuration',
      description: 'Transition duration in ms, set to 0 to turn off transitions',
      table: {
        defaultValue: { summary: '150' },
      },
      control: { type: 'range', min: 0, max: 500, step: 10 },
    },
    data: {
      name: 'data',
      description: 'Data based on which controls are rendered',
      control: 'object',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Navs>;

type Story = StoryObj<typeof Navs>;

export const Explame: Story = {
  render: (args) => {
    const [value, setValue] = useState<string>(args.data?.[0]?.value || '');
    const [navsData, setNavsData] = useState(args.data || []);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      console.log('Selected value:', newValue);
    };

    useEffect(() => {
      if (args.data) {
        setNavsData(args.data);
      }
    }, [args.data]);

    return (
      <div>
        <Navs {...args} data={navsData} value={value} onChange={handleChange} />
        <div style={{ marginTop: '20px' }}>
          <p>
            Selected value: <strong>{value}</strong>
          </p>
        </div>
      </div>
    );
  },
};

const WithLabelWrapper = styled.div`
  .nav-item {
    padding-right: 25px;
    box-sizing: content-box;

    .badge {
      position: absolute;
      right: 4px;
      top: 4px;
    }
  }
`;

const data = [
  {
    label: 'KubeSphere',
    value: 'KubeSphere',
  },
  {
    label: 'Jenkins',
    value: 'Jenkins',
  },
  {
    label: 'Kubernetes',
    value: 'Kubernetes',
  },
];

export const Basic = () => <Navs data={data} />;

export const Variant = () => (
  <>
    <Navs data={data} variant="line" />
    <Navs data={data} variant="pills" style={{ marginTop: '50px' }} />
  </>
);

export const Size = () => (
  <>
    <Navs data={data} variant="line" size="lg" />
    <Navs data={data} variant="pills" size="md" radius="xl" style={{ marginTop: '50px' }} />
  </>
);

export const Colors = () => (
  <>
    <Navs data={data} variant="line" color="primary" />
    <Navs data={data} color="primary" style={{ marginTop: '50px' }} />
  </>
);

export const WithLabel = () => {
  const navData = [
    {
      label: (
        <>
          <Badge color="success" shadow>
            12
          </Badge>
          <span>KubeSphere</span>
        </>
      ),
      value: 'kubesphere',
    },
    {
      label: (
        <>
          <Badge color="warning" shadow>
            1
          </Badge>
          <span>Jenkins</span>
        </>
      ),
      value: 'Jenkins',
    },
  ];
  return (
    <WithLabelWrapper>
      <Navs data={navData} style={{ marginTop: '50px' }} />
    </WithLabelWrapper>
  );
};
