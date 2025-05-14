import * as React from 'react';
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './Dropzone';

export default {
  title: 'Components/Dropzone',
  component: Dropzone,
  args: {
    disabled: false,
    loading: false,
    multiple: true,
    maxSize: 5242880, // 5MB
    accept: ['image/jpeg', 'image/png', 'application/pdf'],
    activateOnClick: true,
    activateOnDrag: true,
    activateOnKeyboard: true,
    dragEventsBubbling: true,
    preventDropOnDocument: true,
    useFsAccessApi: true,
  },
  argTypes: {
    disabled: {
      name: 'disabled',
      description: 'Disable files capturing',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    loading: {
      name: 'loading',
      description: 'Display loading overlay over dropzone',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    multiple: {
      name: 'multiple',
      description: 'Allow selection of multiple files',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    maxSize: {
      name: 'maxSize',
      description: 'Set maximum file size in bytes',
      table: {
        defaultValue: { summary: '5242880' },
      },
      control: 'number',
    },
    accept: {
      name: 'accept',
      description: 'File types to accept',
      control: 'object',
    },
    activateOnClick: {
      name: 'activateOnClick',
      description: 'If false, disables click to open the native file selection dialog',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    activateOnDrag: {
      name: 'activateOnDrag',
      description: 'If false, disables drag n drop',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    activateOnKeyboard: {
      name: 'activateOnKeyboard',
      description: 'If false, disables Space/Enter to open the native file selection dialog',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    dragEventsBubbling: {
      name: 'dragEventsBubbling',
      description: 'If false, stops drag event propagation to parents',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    preventDropOnDocument: {
      name: 'preventDropOnDocument',
      description: 'If false, allow dropped items to take over the current browser window',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    useFsAccessApi: {
      name: 'useFsAccessApi',
      description: 'Set to true to use the File System Access API to open the file picker',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    onDrop: {
      name: 'onDrop',
      description: 'Called when valid files are dropped into dropzone',
      control: 'select',
    },
    onReject: {
      name: 'onReject',
      description: "Called when selected files don't meet file restrictions",
      control: 'select',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Dropzone>;

type Story = StoryObj<typeof Dropzone>;

export const Explame: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const [rejectedFiles, setRejectedFiles] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(args.loading);

    // Handle file drop
    const handleDrop = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      if (args.onDrop) {
        args.onDrop(acceptedFiles);
      }

      // Simulate loading state
      if (acceptedFiles.length > 0) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
      }
    };

    // Handle file rejection
    const handleReject = (fileRejections: any[]) => {
      setRejectedFiles(fileRejections);
      if (args.onReject) {
        args.onReject(fileRejections);
      }
    };

    // Update loading state when args.loading changes
    React.useEffect(() => {
      setIsLoading(args.loading);
    }, [args.loading]);

    // Format file size
    const formatFileSize = (size: number) => {
      if (size < 1024) return `${size} bytes`;
      if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    };

    return (
      <div>
        <Dropzone {...args} loading={isLoading} onDrop={handleDrop} onReject={handleReject}>
          <Dropzone.Accept>
            <div style={{ textAlign: 'center', padding: '20px', color: '#40a9ff' }}>
              <p>Drop files here</p>
              <p>Files will be accepted</p>
            </div>
          </Dropzone.Accept>
          <Dropzone.Reject>
            <div style={{ textAlign: 'center', padding: '20px', color: '#ff4d4f' }}>
              <p>File type not accepted or too large</p>
              <p>Please try another file</p>
            </div>
          </Dropzone.Reject>
          <Dropzone.Idle>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p>Drag files here or click to select files</p>
              <p>
                Accepted types: {Array.isArray(args.accept) ? args.accept.join(', ') : 'All files'}
              </p>
              <p>Max size: {formatFileSize(args.maxSize)}</p>
            </div>
          </Dropzone.Idle>
        </Dropzone>

        {files.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3>Accepted Files:</h3>
            <ul>
              {files.map((file, index) => (
                <li key={`file-${index}`}>
                  {file.name} - {formatFileSize(file.size)}
                </li>
              ))}
            </ul>
          </div>
        )}

        {rejectedFiles.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <h3>Rejected Files:</h3>
            <ul>
              {rejectedFiles.map((rejection, index) => (
                <li key={`rejection-${index}`} style={{ color: '#ff4d4f' }}>
                  {rejection.file.name} - {formatFileSize(rejection.file.size)}
                  <ul>
                    {rejection.errors.map((error: any, errorIndex: number) => (
                      <li key={`error-${errorIndex}`}>{error.message}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
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
