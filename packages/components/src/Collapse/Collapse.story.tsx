import * as React from 'react';
import { Error, Pod } from '@kubed/icons';
import Collapse from './Collapse';
import { BadgeAnchor, Entity, Field, Tooltip, Text, Card } from '../index';

export default {
  title: 'Components/Collapse',
  component: Collapse,
};

const { Panel } = Collapse;

const Avatar = (
  <BadgeAnchor offset={[5, 5]}>
    <Tooltip content="Badge information">
      <Error className="badge" size={18} color="#fff" fill="rgb(245, 166, 35)" />
    </Tooltip>
    <Pod size={40} />
  </BadgeAnchor>
);

export const basic = () => (
  <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>Panel content Panel content Panel content</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>Panel content 2 Panel content 2 Panel content 2</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>Panel content3 Panel content3 Panel content3</p>
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
