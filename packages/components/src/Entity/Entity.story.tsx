import * as React from 'react';
import { Error, Pod, Docker } from '@kubed/icons';
import { BadgeAnchor, Entity, Field, Tooltip, Text } from '../index';

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
    <Field avatar={Avatar} label="存储类型: rocksdb" value="rocksdbpvc" />
    <Field label="存储卷" value="rocksdbpvc" />
    <Field label="容量" value="1Gi" width={100} />
    <Field label="访问模式" value="ReadWriteOnce" />
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
