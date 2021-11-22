import * as React from 'react';
import { Popover, Button } from '../index';

export default {
  title: 'Components/Popover',
  component: Popover,
};

export const Basic = () => (
  <div style={{ marginTop: '70px', marginLeft: '100px' }}>
    <Popover
      title="popover title"
      content="Display additional, floating content on click"
      width={240}
      contentClassName="test-classname"
    >
      <Button radius="xl">KubeSphere</Button>
    </Popover>
  </div>
);
