import * as React from 'react';
import { Progress } from './Progress';

export default {
  title: 'Components/Progress',
  component: Progress,
};

export const Basic = () => <Progress value={50} color="success" striped />;

export const segments = () => (
  <Progress
    size="lg"
    sections={[
      { value: 30, color: 'success' },
      { value: 40, color: 'warning' },
      { value: 10, color: 'error' },
    ]}
  />
);
