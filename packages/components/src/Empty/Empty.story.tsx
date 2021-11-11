import * as React from 'react';
import { Add } from '@kubed/icons';
import { Empty } from './Empty';

export default {
  title: 'Components/Empty',
  component: Empty,
};

export const Basic = () => {
  return <Empty desc="No_Data" />;
};

export const Icon = () => {
  return <Empty desc="No_Data" icon={<Add />} imageStyle={{ width: '48px', height: '48px' }} />;
};
