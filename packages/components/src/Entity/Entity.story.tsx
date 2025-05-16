import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Error, Pod, Docker, Warning } from '@kubed/icons';
import styled from 'styled-components';
import { BadgeAnchor, Entity, Field, Tooltip, Text, Card } from '../index';

export default {
  title: 'Components/Entity',
  component: Entity,
  args: {
    hoverable: true,
    expandable: false,
    bordered: true,
    gap: 20,
    footer: null,
  },
  argTypes: {
    hoverable: {
      name: 'hoverable',
      description: 'Add effect on hover',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    expandable: {
      name: 'expandable',
      description: 'Whether Entity can expand',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    bordered: {
      name: 'bordered',
      description: 'Whether Entity has border',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    gap: {
      name: 'gap',
      description: 'Gap between children',
      table: {
        defaultValue: { summary: '20' },
      },
      control: { type: 'number', min: 0, max: 50 },
    },
    footer: {
      name: 'footer',
      description: 'Footer content',
      options: ['none', 'simple', 'icons'],
      mapping: {
        none: null,
        simple: <div style={{ padding: '8px' }}>Simple Footer</div>,
        icons: (
          <>
            <div style={{ display: 'inline-flex', minWidth: '200px', alignItems: 'center' }}>
              <Docker size={20} style={{ marginRight: '8px' }} />
              <Text weight={500}>docker-container</Text>
            </div>
            <div style={{ display: 'inline-flex', minWidth: '200px', alignItems: 'center' }}>
              <Pod size={20} style={{ marginRight: '8px' }} />
              <Text weight={500}>pod-instance</Text>
            </div>
          </>
        ),
      },
      control: {
        type: 'select',
        labels: {
          none: 'No Footer',
          simple: 'Simple Footer',
          icons: 'Icons Footer',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px', maxWidth: '800px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Entity>;

type Story = StoryObj<typeof Entity>;

// Create different avatar options for the story
const getAvatar = (type: 'error' | 'warning' | 'none' = 'error') => {
  if (type === 'none') return null;

  const IconComponent = type === 'error' ? Error : Warning;

  return (
    <BadgeAnchor offset={[5, 5]}>
      <Tooltip content={`${type} information`}>
        <IconComponent
          className="badge"
          size={18}
          color="#fff"
          fill={type === 'error' ? '#f5222d' : '#faad14'}
        />
      </Tooltip>
      <Pod size={40} />
    </BadgeAnchor>
  );
};

// Sample expand content for expandable entities
const sampleExpandContent = (
  <Card sectionTitle="Container Details" className="entity-card" padding={0}>
    <Entity bordered={false}>
      <Field avatar={getAvatar('warning')} label="Image" value="kubespheredev/ks-console:master" />
      <Field label="Volume" value="data-volume" />
      <Field label="Capacity" value="1Gi" />
      <Field label="Access Mode" value="ReadWriteOnce" />
    </Entity>
  </Card>
);

export const Explame: Story = {
  render: (args) => {
    const [entityProps, setEntityProps] = React.useState(args);

    // Update state when args change
    React.useEffect(() => {
      setEntityProps(args);
    }, [args]);

    // Create fields with different avatars
    const fields = [
      <Field
        key="field1"
        avatar={getAvatar('error')}
        label="Storage Type"
        value="rocksdb"
        width="30%"
      />,
      <Field key="field2" label="Volume" value="rocksdbpvc" width="25%" />,
      <Field key="field3" label="Capacity" value="1Gi" width="20%" />,
      <Field key="field4" label="Access Mode" value="ReadWriteOnce" width="25%" />,
    ];

    return (
      <Entity
        {...entityProps}
        expandContent={entityProps.expandable ? sampleExpandContent : undefined}
      >
        {fields}
      </Entity>
    );
  },
};

const Avatar = (
  <BadgeAnchor offset={[5, 5]}>
    <Tooltip content="Badge information">
      <Error className="badge" size={18} color="#fff" fill="rgb(245, 166, 35)" />
    </Tooltip>
    <Pod size={40} />
  </BadgeAnchor>
);

export const Basic = () => <Field avatar={Avatar} label="Storage Type" value="rocksdbpvc" />;

export const EntityDemo = () => (
  <Entity>
    <Field
      avatar={Avatar}
      label="Storage Type: rocksdb Storage Type: rocksdb Storage Type: rocksdb Storage Type: rocksdb"
      value="rocksdbpvc"
      width="30%"
    />
    <Field label="Volume" value="rocksdbpvc" width="20%" />
    <Field label="Capacity" value="1Gi" width="30%" />
    <Field label="Access Mode" value="ReadWriteOnce" width="20%" />
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
    <Field avatar={Avatar} label="Storage Type: rocksdb" value="rocksdbpvc" />
    <Field label="Volume" value="rocksdbpvc" />
    <Field label="Capacity" value="1Gi" width={100} />
    <Field label="Access Mode" value="ReadWriteOnce" />
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
    <Card sectionTitle="Container" className="entity-card" padding={0} onClick={onCardClick}>
      <Entity>
        <Field avatar={Avatar} label="Image: rocksdb" value="kubespheredev/ks-console:master" />
        <Field label="Volume" value="rocksdbpvc" />
        <Field label="Capacity" value="1Gi" />
        <Field label="Access Mode" value="ReadWriteOnce" />
      </Entity>
    </Card>
  );
  return (
    <Wrapper>
      <Entity expandable hoverable expandContent={expandContent} className="test-classname">
        <Field avatar={Avatar} label="Storage Type: rocksdb" value={<a href="/">rocksdbpvc</a>} />
        <Field label="Volume" value="rocksdbpvc" />
        <Field label="Capacity" value="1Gi" width={100} />
        <Field label="Access Mode" value="ReadWriteOnce" />
      </Entity>
      <Entity expandable hoverable expandContent={expandContent} className="test-classname">
        <Field avatar={Avatar} label="Storage Type: rocksdb" value={<a href="/">rocksdbpvc</a>} />
        <Field label="Volume" value="rocksdbpvc" />
        <Field label="Capacity" value="1Gi" width={100} />
        <Field label="Access Mode" value="ReadWriteOnce" />
      </Entity>
    </Wrapper>
  );
};

export const WithCard = () => (
  <Card hoverable>
    <Entity bordered={false}>
      <Field avatar={Avatar} label="Storage Type: rocksdb" value="rocksdbpvc" />
      <Field label="Volume" value="rocksdbpvc" />
      <Field label="Capacity" value="1Gi" width={100} />
      <Field label="Access Mode" value="ReadWriteOnce" />
    </Entity>
  </Card>
);
