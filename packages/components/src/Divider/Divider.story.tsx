import React from 'react';
import { Meta } from '@storybook/react';
import { Group, Button, Divider } from '@kubed/components';

export default {
  title: 'Components/Divider',
  component: Divider,
} as Meta;

export const Basic = () => <Divider />;

export const VariantAndMargin = () => (
  <>
    <Divider />
    <Divider variant="dotted" margins={20} />
    <Divider variant="dashed" margins={20} />
  </>
);

export const Label = () => (
  <>
    <Divider />
    <Divider variant="dotted" margins={20} label="label name" />
    <Divider margins={20} label="label name" labelPosition="right" />
  </>
);

export const Vertical = () => (
  <Group>
    <Button>1</Button>
    <Divider direction="vertical" margins="sm" />
    <Button>2</Button>
    <Divider direction="vertical" margins="sm" />
    <Button>3</Button>
  </Group>
);
