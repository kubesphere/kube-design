import * as React from 'react';
import { Description, Card, Descriptions } from '../index';

export default {
  title: 'Components/Descriptions',
  component: Description,
};

export const Basic = () => (
  <Description label="cni.projectcalico.org/podIP">10.233.74.19/32</Description>
);

export const Unstyled = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card style={{ width: '300px' }}>
      <Description label="project" variant="unstyled">
        KubeSphere
      </Description>
      <Description label="cluster" variant="unstyled">
        default
      </Description>
    </Card>
  </div>
);

const data = [
  { label: 'Cluster', value: 'default' },
  { label: 'Project', value: 'ifcloud' },
  { label: 'Instance Name', value: 'dev-node1' },
  { label: 'Instance IP', value: '10.233.74.19' },
];

export const DescriptionsDemo = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card style={{ width: '300px' }}>
      <Descriptions data={data} variant="unstyled" />
    </Card>
    <Card style={{ marginTop: '50px' }}>
      <Descriptions data={data} variant="default" />
    </Card>
  </div>
);
