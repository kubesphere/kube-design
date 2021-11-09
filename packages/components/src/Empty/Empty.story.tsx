import * as React from 'react';
import { Empty } from './Empty';

export default {
  title: 'Components/Empty',
  component: Empty,
};

export const Basic = () => {
  return <Empty desc={'No_Data'} />
};
