import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Cluster } from '@kubed/icons';
import { Navs } from '../Navs/Navs';
import { Banner } from './Banner';
import { BannerTip } from './BannerTip';
import { Button } from '../Button/Button';

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

export default {
  title: 'Components/Banner',
  component: Banner,
  args: {
    icon: <Cluster />,
    title: '集群节点',
    description: '集群节点提供了当前集群下节点的运行状态，以及可以编辑删除节点',
  },
  argTypes: {
    icon: {
      name: 'icon',
      description: 'Icon of banner',
      control: { type: 'boolean' },
      mapping: {
        true: <Cluster />,
        false: null,
      },
      defaultValue: true,
    },
    title: {
      name: 'title',
      description: 'Title of banner',
      defaultValue: '集群节点',
      control: { type: 'text' },
    },
    description: {
      name: 'description',
      description: 'Description of banner',
      defaultValue: '集群节点提供了当前集群下节点的运行状态，以及可以编辑删除节点',
      control: { type: 'text' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '100%', backgroundColor: '#eff4f9', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Banner>;

type Story = StoryObj<typeof Banner>;

export const Explame: Story = {
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState<string>();
    const [removedTips, setRemovedTips] = React.useState<string[]>([]);

    const handleTipClick = (key: string) => {
      if (key === activeKey) {
        setActiveKey('');
      } else {
        setActiveKey(key);
      }
    };

    const handleTipRemove = (key: string) => {
      setRemovedTips([...removedTips, key]);
    };

    const tipData = [
      {
        key: 'node-type',
        title: '集群节点的类型?',
        content: '节点分为主控 (Master) 节点和工作 (Worker) 节点',
        removable: true,
      },
      {
        key: 'node-dirty',
        title: '什么是节点污点?',
        content:
          '节点污点 (Taints) 可以阻止某些容器组 (Pod) 副本部署至该节点中, 与容忍度 (Tolerations) 一起工作确保容器组不会被调度到不合适的节点上',
        removable: true,
        operations: <Button>Action</Button>,
      },
    ];

    return (
      <Banner {...args}>
        <Navs data={data} />
        {tipData
          .filter((tip) => !removedTips.includes(tip.key))
          .map((tip) => (
            <BannerTip
              key={tip.key}
              tipKey={tip.key}
              title={tip.title}
              removable={tip.removable}
              open={activeKey === tip.key}
              onClick={() => handleTipClick(tip.key)}
              operations={tip.operations}
              onRemove={handleTipRemove}
            >
              {tip.content}
            </BannerTip>
          ))}
      </Banner>
    );
  },
};

export const Basic = () => (
  <div style={{ height: '300px', width: '100%', backgroundColor: '#eff4f9', padding: '20px' }}>
    <Banner
      icon={<Cluster />}
      title="集群节点"
      description="集群节点提供了当前集群下节点的运行状态，以及可以编辑删除节点"
      navs={data}
    >
      <Navs data={data} />
      <BannerTip title="集群节点的类型?" key="node-type">
        节点分为主控 (Master) 节点和工作 (Worker) 节点
      </BannerTip>
      <BannerTip title="什么是节点污点?" key="node-dirty">
        节点污点 (Taints) 可以阻止某些容器组 (Pod) 副本部署至该节点中, 与容忍度 (Tolerations)
        一起工作确保容器组不会被调度到不合适的节点上
      </BannerTip>
    </Banner>
  </div>
);

export const Operations = () => (
  <div style={{ height: '300px', width: '100%', backgroundColor: '#eff4f9', padding: '20px' }}>
    <Banner
      icon={<Cluster />}
      title="集群节点"
      description="集群节点提供了当前集群下节点的运行状态，以及可以编辑删除节点"
      navs={data}
    >
      <Navs data={data} />
      <BannerTip
        title="集群节点的类型?"
        key="node-type"
        removable={false}
        operations={<Button>Action</Button>}
      >
        节点分为主控 (Master) 节点和工作 (Worker) 节点
      </BannerTip>
      <BannerTip title="什么是节点污点?" key="node-dirty">
        节点污点 (Taints) 可以阻止某些容器组 (Pod) 副本部署至该节点中, 与容忍度 (Tolerations)
        一起工作确保容器组不会被调度到不合适的节点上
      </BannerTip>
    </Banner>
  </div>
);
