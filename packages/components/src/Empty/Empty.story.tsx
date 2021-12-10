import * as React from 'react';
import { Add } from '@kubed/icons';
import { Empty } from './Empty';

export default {
  title: 'Components/Empty',
  component: Empty,
};

export const Basic = () => {
  return <Empty />;
};

export const Icon = () => {
  return (
    <Empty
      desc={<span>No_Data</span>}
      icon={<Add />}
      imageStyle={{ width: '48px', height: '48px' }}
    />
  );
};
