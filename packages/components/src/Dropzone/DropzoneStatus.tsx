import React, { cloneElement } from 'react';
import { isElement } from '../utils/isElement';
import { upperFirst } from '../utils/upperFirst';
import { DropzoneContextValue, useDropzoneContext } from './Dropzone.context';

export interface DropzoneStatusProps {
  // eslint-disable-next-line react/no-unused-prop-types
  children: React.ReactNode;
}

function createDropzoneStatus(status: keyof DropzoneContextValue) {
  const Component = (props: DropzoneStatusProps): JSX.Element => {
    const { children, ...others } = props;

    const ctx = useDropzoneContext();
    const _children = isElement(children) ? children : <span>{children}</span>;

    if (ctx[status]) {
      return cloneElement(_children, others);
    }

    return null;
  };

  Component.displayName = `@kubed/components/Dropzone/${upperFirst(status)}`;

  return Component;
}

export const DropzoneAccept = createDropzoneStatus('accept');
export const DropzoneReject = createDropzoneStatus('reject');
export const DropzoneIdle = createDropzoneStatus('idle');

export type DropzoneAcceptProps = DropzoneStatusProps;
export type DropzoneRejectProps = DropzoneStatusProps;
export type DropzoneIdleProps = DropzoneStatusProps;
