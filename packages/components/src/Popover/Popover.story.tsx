import * as React from 'react';

import type { PopoverInstance } from '../index';
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

export const ManualControl = () => {
  const ref = React.useRef<PopoverInstance | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        marginTop: '70px',
        marginLeft: '100px',
      }}
    >
      <Popover
        title="popover title"
        content="Display additional, floating content on click"
        width={240}
        contentClassName="test-classname"
        onMount={(instance) => {
          ref.current = instance;
        }}
      >
        <Button radius="xl">hover me</Button>
      </Popover>
      <Button radius="xl" onClick={() => ref.current?.show()}>
        show Popover
      </Button>
    </div>
  );
};
