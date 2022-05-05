import * as React from 'react';
import { Error, Pod, Docker } from '@kubed/icons';
import styled from 'styled-components';
import { BadgeAnchor, Entity, Field, Tooltip, Text, Card } from '../index';

export default {
  title: 'Components/Entity',
  component: Field,
};

const Avatar = (
  <BadgeAnchor offset={[5, 5]}>
    <Tooltip content="Badge information">
      <Error className="badge" size={18} color="#fff" fill="rgb(245, 166, 35)" />
    </Tooltip>
    <Pod size={40} />
  </BadgeAnchor>
);

export const Basic = () => <Field avatar={Avatar} label="存储类型: rocksdb" value="rocksdbpvc" />;

export const EntityDemo = () => (
  <Entity>
    <Field
      avatar={Avatar}
      label="存储类型: rocksdb 存储类型: rocksdb存储类型: rocksdb存储类型: rocksdb"
      value="rocksdbpvc"
      width="30%"
    />
    <Field label="存储卷" value="rocksdbpvc" width="20%" />
    <Field label="容量" value="1Gi" width="30%" />
    <Field label="访问模式" value="ReadWriteOnce" width="20%" />
  </Entity>
);

const footer = (
  <>
    <div style={{ display: 'inline-flex', minWidth: '200px', alignItems: 'center' }}>
      <Docker size={20} style={{ marginRight: '8px' }} />
      <Text weight={500}>moqlus-runtime</Text>
    </div>
    <div style={{ display: 'inline-flex', minWidth: '200px', alignItems: 'center' }}>
      <Pod size={20} style={{ marginRight: '8px' }} />
      <Text weight={500}>moqlus-runtime</Text>
    </div>
  </>
);

export const EntityHover = () => (
  <Entity hoverable footer={footer}>
    <Field avatar={Avatar} label="存储类型: rocksdb" value="rocksdbpvc" />
    <Field label="存储卷" value="rocksdbpvc" />
    <Field label="容量" value="1Gi" width={100} />
    <Field label="访问模式" value="ReadWriteOnce" />
  </Entity>
);

export const EntityExpand = () => {
  const Wrapper = styled.div`
    width: 100%;
    height: 300px;
  `;

  const onCardClick = (e) => {
    e.stopPropagation();
  };

  const expandContent = (
    <Card sectionTitle="容器" className="entity-card" padding={0} onClick={onCardClick}>
      <Entity>
        <Field avatar={Avatar} label="镜像: rocksdb" value="kubespheredev/ks-console:master" />
        <Field label="存储卷" value="rocksdbpvc" />
        <Field label="容量" value="1Gi" />
        <Field label="访问模式" value="ReadWriteOnce" />
      </Entity>
    </Card>
  );
  return (
    <Wrapper>
      <Entity expandable hoverable expandContent={expandContent} className="test-classname">
        <Field avatar={Avatar} label="存储类型: rocksdb" value={<a href="/">rocksdbpvc</a>} />
        <Field label="存储卷" value="rocksdbpvc" />
        <Field label="容量" value="1Gi" width={100} />
        <Field label="访问模式" value="ReadWriteOnce" />
      </Entity>
      <Entity expandable hoverable expandContent={expandContent} className="test-classname">
        <Field avatar={Avatar} label="存储类型: rocksdb" value={<a href="/">rocksdbpvc</a>} />
        <Field label="存储卷" value="rocksdbpvc" />
        <Field label="容量" value="1Gi" width={100} />
        <Field label="访问模式" value="ReadWriteOnce" />
      </Entity>
    </Wrapper>
  );
};

export const WithCard = () => (
  <Card hoverable>
    <Entity bordered={false}>
      <Field avatar={Avatar} label="存储类型: rocksdb" value="rocksdbpvc" />
      <Field label="存储卷" value="rocksdbpvc" />
      <Field label="容量" value="1Gi" width={100} />
      <Field label="访问模式" value="ReadWriteOnce" />
    </Entity>
  </Card>
);
