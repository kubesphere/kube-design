import * as React from 'react';
import { Cluster } from '@kubed/icons';
import { Navs } from '../Navs/Navs';
import { Banner } from './Banner';
import { BannerTip } from './BannerTip';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Banner',
  component: Banner,
};

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
