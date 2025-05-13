import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

export default {
  title: 'Components/Container',
  component: Container,
  args: {
    children:
      'To get the most out of this module, you should have worked your way through the previous JavaScript modules in the series. Those modules typically involve simple API usage, as it is often difficult to write client-side JavaScript examples without them.',
    size: 'md',
    padding: 'md',
    fluid: false,
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'Content of the container',
      defaultValue:
        'To get the most out of this module, you should have worked your way through the previous JavaScript modules in the series. Those modules typically involve simple API usage, as it is often difficult to write client-side JavaScript examples without them.',
      control: { type: 'text' },
    },
    size: {
      name: 'size',
      description: 'Predefined container max-width or number for max-width in px',
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    padding: {
      name: 'padding',
      description: 'Horizontal padding defined in theme.spacing, or number value for padding in px',
      defaultValue: 'md',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    fluid: {
      name: 'fluid',
      description:
        'If fluid is set to true, size prop is ignored and Container always take 100% of width',
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '20px',
          background: '#f5f5f5',
          border: '1px dashed #ccc',
          width: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Container>;

type Story = StoryObj<typeof Container>;

export const Explame: Story = {
  render: (args) => {
    return <Container {...args} />;
  },
};

export const Demo = () => (
  <Container>
    To get the most out of this module, you should have worked your way through the previous
    JavaScript modules in the series. Those modules typically involve simple API usage, as it is
    often difficult to write client-side JavaScript examples without them.
  </Container>
);

export const Size = () => (
  <>
    <Container size="xl">
      To get the most out of this module, you should have worked your way through the previous
      JavaScript modules in the series. Those modules typically involve simple API usage, as it is
      often difficult to write client-side JavaScript examples without them.
    </Container>
    <Container size="sm" style={{ marginTop: '30px' }}>
      To get the most out of this module, you should have worked your way through the previous
      JavaScript modules in the series. Those modules typically involve simple API usage, as it is
      often difficult to write client-side JavaScript examples without them.
    </Container>
  </>
);

export const Padding = () => (
  <>
    <Container padding="xl">
      To get the most out of this module, you should have worked your way through the previous
      JavaScript modules in the series. Those modules typically involve simple API usage, as it is
      often difficult to write client-side JavaScript examples without them.
    </Container>
    <Container size="sm" style={{ marginTop: '30px' }}>
      To get the most out of this module, you should have worked your way through the previous
      JavaScript modules in the series. Those modules typically involve simple API usage, as it is
      often difficult to write client-side JavaScript examples without them.
    </Container>
  </>
);

export const Fluid = () => (
  <Container fluid>
    To get the most out of this module, you should have worked your way through the previous
    JavaScript modules in the series. Those modules typically involve simple API usage, as it is
    often difficult to write client-side JavaScript examples without them.
  </Container>
);
