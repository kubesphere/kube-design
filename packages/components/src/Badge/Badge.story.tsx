import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Storage, Pod, Error } from '@kubed/icons';
import { Badge, BadgeAnchor, Group, Tooltip } from '../index';

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: '3',
    color: 'success',
    shadow: false,
    dot: false,
    motion: false,
  },
  argTypes: {
    children: {
      name: 'children',
      description: 'Badge content',
      table: {
        defaultValue: { summary: '3' },
      },
      control: { type: 'text' },
    },
    color: {
      name: 'color',
      description: 'Badge color from theme',
      table: {
        defaultValue: { summary: 'success' },
      },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'blue'],
      control: { type: 'select' },
    },
    shadow: {
      name: 'shadow',
      description: 'Display shadow or not',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    dot: {
      name: 'dot',
      description: 'Display Dot or not',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    motion: {
      name: 'motion',
      description: 'Disable animation status or not, only affect when dot is true',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Explame: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
      if (args.dot && args.motion) {
        const timer = setInterval(() => {
          setVisible((prev) => !prev);
        }, 2000);
        return () => clearInterval(timer);
      }
      return undefined;
    }, [args.dot, args.motion]);

    const safeColor = [
      'default',
      'primary',
      'secondary',
      'success',
      'warning',
      'error',
      'blue',
    ].includes(args.color || '')
      ? args.color
      : 'success';

    return (
      <Group>
        {args.dot ? (
          <BadgeAnchor offset={[5, 5]}>
            <Badge {...args} color={safeColor} motion={args.motion && visible} />
            <Pod size={40} />
          </BadgeAnchor>
        ) : (
          <Badge {...args} color={safeColor} />
        )}
      </Group>
    );
  },
};

export const Basic = () => (
  <Group>
    <Badge>3</Badge>
    <Badge color="warning">12</Badge>
  </Group>
);

export const Colors = () => (
  <Group>
    <Badge color="warning">KubeSphere</Badge>
    <Badge color="error">#12</Badge>
    <Badge color="secondary">KubeSphere</Badge>
    <Badge color="success">KubeSphere</Badge>
    <Badge color="blue">9</Badge>
  </Group>
);

export const Shadow = () => (
  <Group>
    <Badge color="warning" shadow>
      KubeSphere
    </Badge>
    <Badge color="error" shadow>
      #12
    </Badge>
    <Badge color="secondary" shadow>
      KubeSphere
    </Badge>
    <Badge color="success" shadow>
      KubeSphere
    </Badge>
    <Badge color="blue" shadow>
      9
    </Badge>
    <Badge color="#abb4be" shadow>
      9
    </Badge>
  </Group>
);

export const Anchor = () => (
  <Group spacing={30}>
    <BadgeAnchor>
      <Tooltip content="Badge information">
        <Badge color="success">12</Badge>
      </Tooltip>
      <Storage size={40} />
    </BadgeAnchor>
    <BadgeAnchor offset={[5, 5]}>
      <Tooltip content="Badge information">
        <Badge color="success" dot />
      </Tooltip>
      <Pod size={40} />
    </BadgeAnchor>
    <BadgeAnchor offset={[5, 5]}>
      <Tooltip content="Badge information">
        <Badge color="warning" dot motion />
      </Tooltip>
      <Pod size={40} />
    </BadgeAnchor>
    <BadgeAnchor offset={[5, 5]}>
      <Tooltip content="Badge information">
        <Error className="badge" size={18} color="#fff" fill="rgb(245, 166, 35)" />
      </Tooltip>
      <Pod size={40} />
    </BadgeAnchor>
  </Group>
);
