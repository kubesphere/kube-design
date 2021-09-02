import React from 'react';
import { Group, Loading } from '@kubed/components';
import { Magnifier, Appcenter } from '@kubed/icons';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Basic = () => <Input placeholder="please input some text" />;

export const PrefixAndSuffix = () => (
  <Group direction="column">
    <Input prefix={<Magnifier size={16} />} suffix={<Loading size={16} />} />
    <Input prefix="https://" suffix={<Appcenter size={16} />} />
  </Group>
);

export const Disabled = () => <Input placeholder="please input some text" disabled />;

export const Addon = () => (
  <Group direction="column">
    <Input addonBefore="https://" />
    <Input addonAfter=".com" prefix={<Appcenter size={16} />} />
  </Group>
);
