import * as React from 'react';
import { Button, Group } from '../index';
import { Notify, notify } from './Notify';

export default {
  title: 'Components/Notify',
};

export const Basic = () => {
  const trigger = () => notify('Here is your Info.');
  const triggerSuccess = () => notify.success('Here is your success message.');
  const triggerError = () => notify.error('Here is your error message.');
  const triggerLoading = () => notify.loading('Here is your error message.');
  return (
    <div>
      <Group>
        <Button onClick={trigger}>Blank</Button>
        <Button onClick={triggerSuccess}>Success</Button>
        <Button onClick={triggerError}>Error</Button>
        <Button onClick={triggerLoading}>Loading</Button>
      </Group>
      <Notify position="top-right" />
    </div>
  );
};

export const LongContent = () => {
  const trigger = () =>
    notify.success(
      'Here is your toast.Here is your toast.Here is your toast.Here is your toast.Here is your toast.Here is your toast.Here is your toast.'
    );
  return (
    <div>
      <Button onClick={trigger}>Make me a toast</Button>
      <Notify position="top-right" />
    </div>
  );
};

export const UpdateContent = () => {
  let notifyId;
  const trigger = () => {
    notifyId = notify.loading('uploading...');
  };

  const update = () => {
    notify.success('upload success !', { id: notifyId });
  };

  return (
    <div>
      <Group>
        <Button onClick={trigger}>Make me a notify</Button>
        <Button onClick={update}>Update the notify</Button>
      </Group>
      <Notify position="top-right" />
    </div>
  );
};
