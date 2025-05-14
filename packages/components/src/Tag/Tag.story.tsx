import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Add, Close } from '@kubed/icons';
import { Tag, Group } from '../index';

export default {
  title: 'Components/Tag',
  component: Tag,
  args: {
    visible: true,
    children: 'KubeSphere',
    color: 'default',
    radius: 'sm',
    closable: false,
    title: '',
    append: null,
    prepend: null,
    titleStyle: {},
  },
  argTypes: {
    visible: {
      name: 'visible',
      description: 'Whether the tag is visible',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    children: {
      name: 'children',
      description: 'Content of the tag',
      defaultValue: 'KubeSphere',
      table: {
        defaultValue: { summary: 'KubeSphere' },
      },
      control: 'text',
    },
    color: {
      name: 'color',
      description: 'Tag color from theme',
      table: {
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'],
      control: { type: 'select' },
    },
    radius: {
      name: 'radius',
      description: 'Border radius of the tag',
      table: {
        defaultValue: { summary: 'sm' },
      },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    closable: {
      name: 'closable',
      description: 'Whether the tag can be closed',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    title: {
      name: 'title',
      description: 'Title of the tag',
      table: {
        defaultValue: { summary: '' },
      },
      control: 'text',
    },
    append: {
      name: 'append',
      description: 'Append element of the tag',
      table: {
        defaultValue: { summary: 'none' },
      },
      control: 'select',
      options: ['none', 'close'],
      mapping: {
        none: null,
        close: <Close variant="light" size={14} />,
      },
    },
    prepend: {
      name: 'prepend',
      description: 'Prepend element of the tag',
      table: {
        defaultValue: { summary: 'none' },
      },
      control: 'select',
      options: ['none', 'add'],
      mapping: {
        none: null,
        add: <Add variant="light" size={14} />,
      },
    },
    titleStyle: {
      name: 'titleStyle',
      description: 'Style of title',
      table: {
        defaultValue: { summary: '{}' },
      },
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
} as Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Explame: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(args.visible !== false);

    const handleClose = () => {
      setVisible(false);
      console.log('Tag closed');
    };

    // 当控制面板中的 visible 变化时，更新状态
    React.useEffect(() => {
      if (args.visible !== undefined) {
        setVisible(args.visible);
      }
    }, [args.visible]);

    return (
      <Tag {...args} visible={visible} onClose={handleClose}>
        {args.children}
      </Tag>
    );
  },
};

export const Basic = () => (
  <Group>
    <Tag>KubeSphere</Tag>
    <Tag title="job-name" color="secondary">
      KubeSphere
    </Tag>
  </Group>
);

export const Colors = () => (
  <Group>
    <Tag color="warning">KubeSphere</Tag>
    <Tag color="error">KubeSphere</Tag>
    <Tag color="secondary">KubeSphere</Tag>
    <Tag color="success">KubeSphere</Tag>
    <Tag color="info">KubeSphere</Tag>
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

export const Closable = () => {
  const tags = ['apple', 'banana'];

  return tags.map((tag) => (
    <Tag
      radius="lg"
      closable
      className="filter-tag"
      onClose={() => {
        console.log(tag);
      }}
    >
      {tag}
    </Tag>
  ));
};
