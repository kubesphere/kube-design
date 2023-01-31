import * as React from 'react';
import { Dropzone } from './Dropzone';

export default {
  title: 'Components/Dropzone',
  component: Dropzone,
};

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']}>
        <div>Drag and drop files</div>
      </Dropzone>
    </div>
  );
}

export function Statues() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']}>
        <Dropzone.Accept>
          <div>Accept file</div>
        </Dropzone.Accept>
        <Dropzone.Reject>
          <div>Rejected files</div>
        </Dropzone.Reject>
        <Dropzone.Idle>Idling</Dropzone.Idle>
      </Dropzone>
    </div>
  );
}
