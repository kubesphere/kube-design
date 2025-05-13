import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Group, Button, Divider } from '../index';

export default {
  title: 'Components/Divider',
  component: Divider,
  args: {
    direction: 'horizontal',
    variant: 'solid',
    margins: 0,
    labelPosition: 'left',
    size: 'xs',
    label: '',
    color: '',
    height: undefined,
  },
  argTypes: {
    direction: {
      name: 'direction',
      description: 'Line direction',
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
    },
    variant: {
      name: 'variant',
      description: 'Divider borderStyle',
      defaultValue: 'solid',
      options: ['solid', 'dashed', 'dotted'],
      control: { type: 'select' },
    },
    margins: {
      name: 'margins',
      description: 'Top and bottom margins for horizontal variant, left and right for vertical',
      defaultValue: 0,
      control: { type: 'number' },
    },
    labelPosition: {
      name: 'labelPosition',
      description: 'Label position',
      defaultValue: 'left',
      options: ['left', 'center', 'right'],
      control: { type: 'select' },
    },
    size: {
      name: 'size',
      description: 'Sets height in horizontal orientation and with in vertical',
      defaultValue: 'xs',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    label: {
      name: 'label',
      description: 'Adds text after line in horizontal orientation',
      defaultValue: '',
      control: { type: 'text' },
    },
    color: {
      name: 'color',
      description:
        'Line color - use color name (e.g. "red", "blue"), hex code (e.g. "#ff0000"), or theme color (e.g. "primary")',
      defaultValue: '',
      control: { type: 'text' },
    },
    height: {
      name: 'height',
      description: 'Divider height in pixels, only available if direction is vertical',
      control: { type: 'number' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Divider>;

type Story = StoryObj<typeof Divider>;

export const Explame: Story = {
  render: (args) => {
    const [dividerProps, setDividerProps] = React.useState(args);

    React.useEffect(() => {
      setDividerProps(args);
    }, [args]);

    return (
      <div style={{ padding: '20px', width: '100%' }}>
        {args.direction === 'horizontal' ? (
          <>
            <div>Content above divider</div>
            <Divider {...dividerProps} />
            <div>Content below divider</div>
          </>
        ) : (
          <Group style={{ height: args.height ? `${args.height + 40}px` : '100px' }}>
            <div>Left content</div>
            <Divider {...dividerProps} />
            <div>Right content</div>
          </Group>
        )}
      </div>
    );
  },
};

export const Basic = () => <Divider />;

export const VariantAndMargin = () => (
  <>
    <Divider />
    <Divider variant="dotted" margins={20} />
    <Divider variant="dashed" margins={20} />
  </>
);

export const Label = () => (
  <>
    <Divider />
    <Divider variant="dotted" margins={20} label="label name" />
    <Divider margins={20} label="label name" labelPosition="right" />
  </>
);

export const Vertical = () => (
  <Group>
    <Button>1</Button>
    <Divider direction="vertical" height={20} margins="sm" />
    <Button>2</Button>
    <Divider direction="vertical" margins="sm" />
    <Button>3</Button>
  </Group>
);
