import * as React from 'react';
import { Kubesphere } from '@kubed/icons';
import { SliderConfirm } from './SliderConfirm';
import { Notify, notify } from '../Notify/Notify';

export default {
  title: 'Components/SliderConfirm',
  component: SliderConfirm,
};

export const basic = () => {
  const confirm = () => {
    notify.success('confirmed!');
  };
  return (
    <>
      <SliderConfirm
        tip="我了解移除集群的风险"
        dragIcon={<Kubesphere size={30} color="#50b484" />}
        onConfirm={confirm}
      />
      <Notify position="top-right" />
    </>
  );
};
