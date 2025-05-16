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
    title: 'Cluster Node    ',
    description:
      'Cluster node provides the running status of nodes in the current cluster, and allows editing and deleting nodes',
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
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    title: {
      name: 'title',
      description: 'Title of banner',
      defaultValue: 'Cluster Node',
      table: {
        defaultValue: { summary: 'Cluster Node' },
      },
      control: { type: 'text' },
    },
    description: {
      name: 'description',
      description: 'Description of banner',
      defaultValue:
        'Cluster node provides the running status of nodes in the current cluster, and allows editing and deleting nodes',
      table: {
        defaultValue: {
          summary:
            'Cluster node provides the running status of nodes in the current cluster, and allows editing and deleting nodes',
        },
      },
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
        title: 'What is the type of cluster node?',
        content: 'Nodes are divided into master (Master) and worker (Worker) nodes',
        removable: true,
      },
      {
        key: 'node-dirty',
        title: 'What is node taint?',
        content:
          'Node taint (Taints) can prevent certain container group (Pod) replicas from being deployed to the node, and work with tolerance (Tolerations) to ensure that the container group is not scheduled to an unsuitable node',
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
      title="Cluster Node"
      description="Cluster node provides the running status of nodes in the current cluster, and allows editing and deleting nodes"
      navs={data}
    >
      <Navs data={data} />
      <BannerTip title="What is the type of cluster node?" key="node-type">
        Nodes are divided into master (Master) and worker (Worker) nodes
      </BannerTip>
      <BannerTip title="What is node taint?" key="node-dirty">
        Node taint (Taints) can prevent certain container group (Pod) replicas from being deployed
        to the node, and work with tolerance (Tolerations) to ensure that the container group is not
        scheduled to an unsuitable node
      </BannerTip>
    </Banner>
  </div>
);

export const Operations = () => (
  <div style={{ height: '300px', width: '100%', backgroundColor: '#eff4f9', padding: '20px' }}>
    <Banner
      icon={<Cluster />}
      title="Cluster Node"
      description="Cluster node provides the running status of nodes in the current cluster, and allows editing and deleting nodes"
      navs={data}
    >
      <Navs data={data} />
      <BannerTip
        title="What is the type of cluster node?"
        key="node-type"
        removable={false}
        operations={<Button>Action</Button>}
      >
        Nodes are divided into master (Master) and worker (Worker) nodes
      </BannerTip>
      <BannerTip title="What is node taint?" key="node-dirty">
        Node taint (Taints) can prevent certain container group (Pod) replicas from being deployed
        to the node, and work with tolerance (Tolerations) to ensure that the container group is not
        scheduled to an unsuitable node
      </BannerTip>
    </Banner>
  </div>
);
