import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Text, Group } from '../index';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Sample text',
    color: 'default',
    size: 'md',
    variant: 'text',
    weight: 400,
    underline: false,
    delete: false,
    italic: false,
    align: 'left',
    transform: undefined,
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'Text content',
      table: {
        defaultValue: { summary: 'Sample text' },
      },
      control: 'text',
    },
    color: {
      name: 'color',
      description: 'Text color from theme',
      defaultValue: 'default',
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'secondary', 'success', 'warning', 'error'],
      control: { type: 'select' },
    },
    size: {
      name: 'size',
      description: 'Predefined font-size from theme',
      defaultValue: 'md',
      table: {
        defaultValue: { summary: 'md' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    variant: {
      name: 'variant',
      description: 'Text variant',
      defaultValue: 'text',
      table: {
        defaultValue: { summary: 'text' },
      },
      options: ['text', 'link', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    weight: {
      name: 'weight',
      description: 'Font weight',
      defaultValue: 400,
      table: {
        defaultValue: { summary: '400' },
      },
      options: [300, 400, 500, 600, 700],
      control: { type: 'select' },
    },
    underline: {
      name: 'underline',
      description: 'Underline style',
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    delete: {
      name: 'delete',
      description: 'Delete (line-through) style',
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    italic: {
      name: 'italic',
      description: 'Italic style',
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    align: {
      name: 'align',
      description: 'Text alignment',
      defaultValue: 'left',
      table: {
        defaultValue: { summary: 'left' },
      },
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
    transform: {
      name: 'transform',
      description: 'Text transform',
      defaultValue: undefined,
      table: {
        defaultValue: { summary: 'undefined' },
      },
      options: [undefined, 'capitalize', 'uppercase', 'lowercase'],
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
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Explame: Story = {
  render: (args) => {
    return <Text {...args} />;
  },
};

export const Basic = () => <Text>text normal</Text>;

export const Colors = () => (
  <Group>
    <Text color="warning">text warning</Text>
    <Text color="error">text error</Text>
    <Text color="success">text success</Text>
  </Group>
);

export const Styles = () => (
  <Group>
    <Text underline>text underline</Text>
    <Text delete>text delete</Text>
    <Text italic>text italic</Text>
    <Text weight={600}>text weight</Text>
    <Text size="lg">text size</Text>
  </Group>
);

export const HeadText = () => (
  <Group direction="column">
    <Text variant="h1">h1 title</Text>
    <Text variant="h2">h2 title</Text>
    <Text variant="h3">h3 title</Text>
    <Text variant="h4">h4 title</Text>
    <Text variant="h5">h5 title</Text>
    <Text variant="h6">h6 title</Text>
  </Group>
);
