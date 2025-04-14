import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { Navs } from '@kubed/components';
import { Banner, BannerTip } from './Banner';

vi.mock('@kubed/components', async () => {
  const actual = await vi.importActual<typeof import('@kubed/components')>('@kubed/components');
  return {
    ...actual,
    Navs: ({ data }) => <div data-testid="navs">{JSON.stringify(data)}</div>,
  };
});

describe('@kubed/components/Banner', () => {
  it('has correct displayName', () => {
    expect(Banner.displayName).toEqual('@kubed/components/Banner');
  });

  it('to match snapshot', () => {
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
    const { asFragment } = renderWithTheme(
      <Banner icon title="集群节点" description="集群" navs={data}>
        <Navs data={data} />
        <BannerTip title="集群节点的类型?" key="node-type">
          节点分为主控 (Master) 节点和工作 (Worker) 节点
        </BannerTip>
        <BannerTip title="什么是节点污点?" key="node-dirty">
          节点污点 (Taints) 可以阻止某些容器组 (Pod) 副本部署至该节点中, 与容忍度 (Tolerations)
          一起工作确保容器组不会被调度到不合适的节点上
        </BannerTip>
      </Banner>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
