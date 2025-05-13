import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Error, Pod } from '@kubed/icons';
import Collapse from './Collapse';
import { BadgeAnchor, Entity, Field, Tooltip } from '../index';

const { Panel } = Collapse;

const Avatar = (
  <BadgeAnchor offset={[5, 5]}>
    <Tooltip content="Badge information">
      <Error className="badge" size={18} color="#fff" fill="rgb(245, 166, 35)" />
    </Tooltip>
    <Pod size={40} />
  </BadgeAnchor>
);

export default {
  title: 'Components/Collapse',
  component: Collapse,
  args: {
    accordion: true,
    destroyInactivePanel: false,
    defaultActiveKey: ['1'],
    collapsible: undefined,
  },
  argTypes: {
    accordion: {
      name: 'accordion',
      description: 'If true, only one panel can be expanded at a time',
      defaultValue: true,
      control: { type: 'boolean' },
    },
    destroyInactivePanel: {
      name: 'destroyInactivePanel',
      description: 'Destroy inactive panel when collapsed',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    defaultActiveKey: {
      name: 'defaultActiveKey',
      description: 'Key of the initial active panel',
      defaultValue: ['1'],
      control: 'object',
    },
    collapsible: {
      name: 'collapsible',
      description: 'Specify the collapsible mode',
      options: [undefined, 'header', 'icon', 'disabled'],
      control: { type: 'select' },
    },
    onChange: {
      name: 'onChange',
      description: 'Callback when active panel changes',
      action: 'select',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Collapse>;

type Story = StoryObj<typeof Collapse>;

export const Explame: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState<string | string[]>(
      (args.defaultActiveKey as string | string[]) || []
    );

    const handleChange = (key: string | string[]) => {
      setActiveKey(key);
      if (args.onChange) {
        args.onChange(key);
      }
    };

    return (
      <Collapse
        {...args}
        activeKey={args.activeKey !== undefined ? (args.activeKey as string | string[]) : activeKey}
        onChange={handleChange}
      >
        <Panel key="1" header="This is panel header 1">
          <p>Panel content 1 Panel content 1 Panel content 1</p>
        </Panel>
        <Panel
          key="2"
          header='This is panel header 2, collapsible is "header"'
          collapsible="header"
        >
          <p>Panel content 2 Panel content 1 Panel content 2</p>
        </Panel>
        <Panel key="3" header='This is panel header 3, collapsible is "icon"' collapsible="icon">
          <p>Panel content 3 Panel content 3 Panel content 3</p>
        </Panel>
        <Panel
          key="4"
          header='This is panel header 4, collapsible is "disabled"'
          collapsible="disabled"
        >
          <p>Panel content 4 Panel content 4 Panel content 4</p>
        </Panel>
        <Panel key="5" header='This is panel header 5, showArrow is "false"' showArrow={false}>
          <p>Panel content 5 Panel content 5 Panel content 5</p>
        </Panel>
      </Collapse>
    );
  },
};

export const Basic = () => (
  <Collapse accordion>
    <Panel key="1" header="This is panel header 1">
      <p>Panel content 1 Panel content 1 Panel content 1</p>
    </Panel>
    <Panel key="2" header='This is panel header 2, collapsible is "header"' collapsible="header">
      <p>Panel content 2 Panel content 1 Panel content 2</p>
    </Panel>
    <Panel key="3" header='This is panel header 3, collapsible is "icon"' collapsible="icon">
      <p>Panel content 3 Panel content 3 Panel content 3</p>
    </Panel>
    <Panel
      key="4"
      header='This is panel header 4, collapsible is "disabled"'
      collapsible="disabled"
    >
      <p>Panel content 4 Panel content 4 Panel content 4</p>
    </Panel>
    <Panel key="5" header='This is panel header 5, showArrow is "false"' showArrow={false}>
      <p>Panel content 5 Panel content 5 Panel content 5</p>
    </Panel>
  </Collapse>
);

export const EntityCollapse = () => {
  const header = (
    <Entity hoverable className="test-classname">
      <Field avatar={Avatar} label="存储类型: rocksdb" value={<a href="/">rocksdbpvc</a>} />
      <Field label="存储卷" value="rocksdbpvc" />
      <Field label="容量" value="1Gi" width={100} />
      <Field label="访问模式" value="ReadWriteOnce" />
    </Entity>
  );

  return (
    <Collapse accordion>
      <Panel header={header} key="sda">
        <p>Panel content1 Panel content1</p>
      </Panel>
      <Panel header="This is panel header 2" key="fds">
        <p>Panel content2 Panel content2 Panel content2</p>
      </Panel>
      <Panel header="This is panel header 3" key="wrs">
        <p>Panel content3 Panel content3 Panel content3</p>
      </Panel>
    </Collapse>
  );
};
