import * as React from 'react';
import { Navs } from './Navs';

export default {
  title: 'Components/Navs',
  component: Navs,
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
