import * as React from 'react';
import { Error, Pod } from '@kubed/icons';
import Collapse from './Collapse';
import { BadgeAnchor, Entity, Field, Tooltip } from '../index';

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
  <Collapse accordion collapsible="header">
    <Panel key="1" header="This is panel header 1" collapsible="header">
      <p>Panel content 1 Panel content 1 Panel content 1</p>
    </Panel>
    <Panel key="2" header="This is panel header 2" collapsible="icon">
      <p>Panel content 2 Panel content 2 Panel content 2</p>
    </Panel>
    <Panel key="3" header="This is panel header 3" collapsible="disabled">
      <p>Panel content 3 Panel content 3 Panel content 3</p>
    </Panel>
    <Panel key="4" header="This is panel header 4" showArrow={false}>
      <p>Panel content 4 Panel content 4 Panel content 4</p>
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
