import * as React from 'react';
import { Card } from '../index';

export default {
  title: 'Components/Card',
  component: Card,
};

export const basic = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card>
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Card>
  </div>
);

export const SectionTitle = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card sectionTitle="section title">
      Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with.
      <br />
      New functionality can even be introduced by a simple agreement between a client and a server
      <br />
      about a new header's semantics.
    </Card>
  </div>
);

export const Hoverable = () => (
  <div style={{ backgroundColor: '#eff4f9', padding: '50px' }}>
    <Card sectionTitle="section title" hoverable>
      Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with.
      <br />
      New functionality can even be introduced by a simple agreement between a client and a server
      <br />
      about a new header's semantics.
    </Card>
  </div>
);
