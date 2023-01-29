import React from 'react';
import {
  useDropzone,
  FileRejection,
  Accept,
  FileWithPath,
  DropEvent,
  FileError,
} from 'react-dropzone';
import { assignRef } from '@kubed/hooks';

import { ForwardRefWithStaticComponents } from '../utils/ForwardRefWithStaticComponents';
import { LoadingOverlay } from '../LoadingOverlay/LoadingOverlay';
import { DefaultProps, KubedNumberSize } from '../theme';
import { DropzoneProvider } from './Dropzone.context';
import { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';

import { DropzoneWrapper, DropzoneInner } from './Dropzone.styles';

export interface DropzoneProps
  extends DefaultProps,
    Omit<React.ComponentPropsWithRef<'div'>, 'onDrop'> {
  /** Padding from theme.spacing, or number to set padding in px */
  padding?: KubedNumberSize;

  /** Border radius from theme.radius or number to set border-radius in px */
  radius?: KubedNumberSize;

  /** Dropzone statues */
  children: React.ReactNode;

  /** Disable files capturing */
  disabled?: boolean;

  /** Called when any files are dropped into dropzone */
  onDropAny?(files: FileWithPath[], fileRejections: FileRejection[]): void;

  /** Called when valid files are dropped into dropzone */
  onDrop(files: FileWithPath[]): void;

  /** Called when selected files don't meet file restrictions */
  onReject?(fileRejections: FileRejection[]): void;

  /** Display loading overlay over dropzone */
  loading?: boolean;

  /** File types to accept  */
  accept?: Accept | string[];

  /** Get open function as ref */
  openRef?: React.ForwardedRef<() => void | undefined>;

  /** Allow selection of multiple files */
  multiple?: boolean;

  /** Set maximum file size in bytes */
  maxSize?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  name?: string;

  /** Number of files that user can pick */
  maxFiles?: number;

  /** Set to true to autofocus the root element */
  autoFocus?: boolean;

  /** If false, disables click to open the native file selection dialog */
  activateOnClick?: boolean;

  /** If false, disables drag 'n' drop */
  activateOnDrag?: boolean;

  /** If false, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state. */
  activateOnKeyboard?: boolean;

  /** If false, stops drag event propagation to parents */
  dragEventsBubbling?: boolean;

  /** Called when the `dragenter` event occurs */
  onDragEnter?(event: React.DragEvent<HTMLElement>): void;

  /** Called when the `dragleave` event occurs */
  onDragLeave?(event: React.DragEvent<HTMLElement>): void;

  /** Called when the `dragover` event occurs */
  onDragOver?(event: React.DragEvent<HTMLElement>): void;

  /** Called when user closes the file selection dialog with no selection */
  onFileDialogCancel?(): void;

  /** Called when user opens the file selection dialog */
  onFileDialogOpen?(): void;

  /** If false, allow dropped items to take over the current browser window */
  preventDropOnDocument?: boolean;

  /** Set to true to use the File System Access API to open the file picker instead of using an <input type="file"> click event, defaults to true */
  useFsAccessApi?: boolean;

  /** Use this to provide a custom file aggregator */
  getFilesFromEvent?: (event: DropEvent) => Promise<Array<File | DataTransferItem>>;

  /** Custom validation function. It must return null if there's no errors. */
  validator?: <T extends File>(file: T) => FileError | FileError[] | null;
}

export function _Dropzone(props: DropzoneProps) {
  const {
    className,
    padding,
    radius,
    disabled,
    classNames,
    styles,
    loading = false,
    multiple = true,
    maxSize = Infinity,
    accept,
    children,
    onDropAny,
    onDrop,
    onReject,
    openRef,
    name,
    // unstyled,
    maxFiles,
    autoFocus,
    activateOnClick = true,
    activateOnDrag = true,
    dragEventsBubbling = true,
    activateOnKeyboard = true,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi = true,
    getFilesFromEvent,
    validator,
    ...others
  } = props;

  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone({
    onDrop: onDropAny,
    onDropAccepted: onDrop,
    onDropRejected: onReject,
    disabled: disabled || loading,
    accept: Array.isArray(accept) ? accept.reduce((r, key) => ({ ...r, [key]: [] }), {}) : accept,
    multiple,
    maxSize,
    maxFiles,
    autoFocus,
    noClick: !activateOnClick,
    noDrag: !activateOnDrag,
    noDragEventsBubbling: !dragEventsBubbling,
    noKeyboard: !activateOnKeyboard,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    validator,
    ...(getFilesFromEvent ? { getFilesFromEvent } : null),
  });

  assignRef(openRef, open);
  const isIdle = !isDragAccept && !isDragReject;

  return (
    <DropzoneProvider value={{ accept: isDragAccept, reject: isDragReject, idle: isIdle }}>
      <DropzoneWrapper
        {...others}
        {...getRootProps()}
        data-accept={isDragAccept || undefined}
        data-reject={isDragReject || undefined}
        data-idle={isIdle || undefined}
        data-loading={loading || undefined}
        className={className}
      >
        <LoadingOverlay visible={loading} />
        <input {...getInputProps()} name={name} />
        <DropzoneInner>{children}</DropzoneInner>
      </DropzoneWrapper>
    </DropzoneProvider>
  );
}

_Dropzone.displayName = '@mantine/dropzone/Dropzone';
_Dropzone.Accept = DropzoneAccept;
_Dropzone.Reject = DropzoneReject;
_Dropzone.Idle = DropzoneIdle;

export const Dropzone: ForwardRefWithStaticComponents<
  DropzoneProps,
  {
    Accept: typeof DropzoneAccept;
    Reject: typeof DropzoneReject;
    Idle: typeof DropzoneIdle;
  }
> = _Dropzone as any;
