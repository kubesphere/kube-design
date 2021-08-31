import React from 'react';
import { Popover, Button } from '@kubed/components';

export default {
  title: 'Components/Popover',
  component: Popover,
};

export const Basic = () => (
  <div style={{ marginTop: '70px', marginLeft: '100px' }}>
    <Popover title="popover title" content="Display additional, floating content on click">
      <Button radius="xl">KubeSphere</Button>
    </Popover>
  </div>
);
