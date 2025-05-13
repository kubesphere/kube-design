import * as React from 'react';
import { createRef, useState } from 'react';
import { Button, Drawer } from '@kubed/components';
import { Cluster } from '@kubed/icons';

//  TODO:组件为top和botttom的时候显示是有问题的
export default {
  title: 'Components/Drawer',
  component: Drawer,
};

export const Basic = () => {
  const [visible, setVisible] = useState(false);
  const ref = createRef();

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    console.log(ref.current);
    setVisible(false);
  };

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer
        ref={ref}
        visible={visible}
        title="Modal demo"
        description="Modal description"
        titleIcon={<Cluster size={40} />}
        onClose={closeDrawer}
        width={100}
        maskClosable
        placement="right"
      >
        Drawer content
        <Button onClick={closeDrawer}>Close Drawer</Button>
      </Drawer>
    </>
  );
};

export const Right = () => {
  const [visible, setVisible] = useState(false);
  const ref = createRef();

  const openDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    console.log(ref.current);
    setVisible(false);
  };

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer
        ref={ref}
        visible={visible}
        titleIcon={<Cluster size={40} />}
        onClose={closeDrawer}
        width={100}
        maskClosable
        placement="left"
      >
        Drawer content
        <Button onClick={closeDrawer}>Close Drawer</Button>
      </Drawer>
    </>
  );
};
