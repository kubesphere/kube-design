import * as React from 'react';
import { Badge } from '@kubed/components';
import styled from 'styled-components';
import { Navs } from './Navs';

export default {
  title: 'Components/Navs',
  component: Navs,
};

const WithLabelWrapper = styled.div`
  .nav-item {
    padding-right: 25px;
    box-sizing: content-box;

    .badge {
      position: absolute;
      right: 4px;
      top: 4px;
    }
  }
`;

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

export const Basic = () => <Navs data={data} />;

export const Variant = () => (
  <>
    <Navs data={data} variant="line" />
    <Navs data={data} variant="pills" style={{ marginTop: '50px' }} />
  </>
);

export const Size = () => (
  <>
    <Navs data={data} variant="line" size="lg" />
    <Navs data={data} variant="pills" size="md" radius="xl" style={{ marginTop: '50px' }} />
  </>
);

export const Colors = () => (
  <>
    <Navs data={data} variant="line" color="primary" />
    <Navs data={data} color="primary" style={{ marginTop: '50px' }} />
  </>
);

export const WithLabel = () => {
  const navData = [
    {
      label: (
        <>
          <Badge color="success" shadow>
            12
          </Badge>
          <span>KubeSphere</span>
        </>
      ),
      value: 'kubesphere',
    },
    {
      label: (
        <>
          <Badge color="warning" shadow>
            1
          </Badge>
          <span>Jenkins</span>
        </>
      ),
      value: 'Jenkins',
    },
  ];
  return (
    <WithLabelWrapper>
      <Navs data={navData} style={{ marginTop: '50px' }} />
    </WithLabelWrapper>
  );
};
