import React from 'react';
import { Card } from '@kubed/components';
import { LoadingOverlay } from '../LoadingOverlay/LoadingOverlay';

export default {
  title: 'Components/LoadingOverlay',
  component: LoadingOverlay,
};

export const Basic = () => (
  <Card style={{ width: '500px', height: '200px' }}>
    <LoadingOverlay visible />
    内容
  </Card>
);
