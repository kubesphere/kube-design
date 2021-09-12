import * as React from 'react';
import { Switch } from './Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const Basic = () => <Switch label="Label" />;

export const Text = () => <Switch okText="开启" offText="关闭" />;

export const Disabled = () => <Switch disabled />;

export const ButtonMode = () => <Switch variant="button" label="Edit Yaml" />;
