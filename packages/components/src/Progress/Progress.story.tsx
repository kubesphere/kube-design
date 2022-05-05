import * as React from 'react';
import { Progress } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
};

export const Basic = () => <Progress value={50} color="#ca2621" striped />;

export const segments = () => (
  <Progress
    size="xl"
    total={80}
    sections={[
      { value: 30, color: 'success' },
      { value: 40, color: 'warning' },
      { value: 10, color: 'error' },
    ]}
  />
);
