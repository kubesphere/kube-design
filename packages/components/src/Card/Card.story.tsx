import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '../index';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    children:
      'Kubesphere.io is an upstream project of the KubeSphere container management platform.',
    sectionTitle: '',
    padding: 'sm',
    hoverable: false,
    shadow: true,
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'Card content',
      table: {
        defaultValue: {
          summary:
            'Kubesphere.io is an upstream project of the KubeSphere container management platform.',
        },
      },
      control: { type: 'text' },
    },
    sectionTitle: {
      name: 'sectionTitle',
      description: 'Section title of the card',
      table: {
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    padding: {
      name: 'padding',
      description: 'Controls card content padding',
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    hoverable: {
      name: 'hoverable',
      description: 'Add effect on hover',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    shadow: {
      name: 'shadow',
      description: 'Display shadow or not',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Explame: Story = {
  render: (args) => {
    return <Card {...args} />;
  },
};

export const Basic = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card>
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Card>
  </div>
);

export const SectionTitle = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card sectionTitle="section title">
      Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with.
      <br />
      New functionality can even be introduced by a simple agreement between a client and a server
      <br />
      about a new header&apos;s semantics.
    </Card>
  </div>
);

export const Hoverable = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card sectionTitle="section title" hoverable>
      Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with.
      <br />
      New functionality can even be introduced by a simple agreement between a client and a server
      <br />
      about a new headers&apos;s semantics.
    </Card>
  </div>
);
