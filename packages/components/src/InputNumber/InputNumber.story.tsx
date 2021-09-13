import * as React from 'react';
import { InputNumber } from './InputNumber';

export default {
  title: 'Components/InputNumber',
  component: InputNumber,
};

export const Basic = () => <InputNumber min={-2} />;

export const Disabled = () => <InputNumber disabled placeholder="请输入.." />;
