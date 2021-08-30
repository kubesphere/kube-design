import React from 'react';
import { Alert, Group } from '@kubed/components';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

export const basic = () => (
  <Alert title="KubeSphere">
    Kubesphere.io is an upstream project of the KubeSphere container management platform.
  </Alert>
);

export const Types = () => (
  <Group direction="row" grow>
    <Alert title="KubeSphere">
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Alert>
    <Alert title="KubeSphere" type="warning">
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Alert>
    <Alert title="KubeSphere" type="error">
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Alert>
    <Alert title="KubeSphere" type="info" closable>
      Kubesphere.io is an upstream project of the KubeSphere container management platform.
    </Alert>
  </Group>
);
