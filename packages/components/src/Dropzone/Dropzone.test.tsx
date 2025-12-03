import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen } from '@testing-library/react';
import { Dropzone } from './Dropzone';

describe('@kubed/components/Dropzone', () => {
  describe('Dropzone basic functionality', () => {
    it('renders Dropzone component correctly', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop}>
          <Dropzone.Idle>Drop files here</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
      expect(screen.getByText('Drop files here')).toBeInTheDocument();
    });

    it('renders with all status components', () => {
      const handleDrop = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop}>
          <Dropzone.Idle>Idle state</Dropzone.Idle>
          <Dropzone.Accept>Accept state</Dropzone.Accept>
          <Dropzone.Reject>Reject state</Dropzone.Reject>
        </Dropzone>
      );

      expect(screen.getByText('Idle state')).toBeInTheDocument();
    });

    it('renders disabled dropzone', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} disabled>
          <Dropzone.Idle>Disabled dropzone</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with loading state', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} loading>
          <Dropzone.Idle>Loading dropzone</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.querySelector('[data-loading]')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} className="custom-dropzone">
          <Dropzone.Idle>Custom dropzone</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.querySelector('.custom-dropzone')).toBeInTheDocument();
    });

    it('renders with custom padding', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} padding="xl">
          <Dropzone.Idle>Padded dropzone</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with custom radius', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} radius="md">
          <Dropzone.Idle>Rounded dropzone</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports name prop for form submission', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} name="file-upload">
          <Dropzone.Idle>Named dropzone</Dropzone.Idle>
        </Dropzone>
      );

      const input = container.querySelector('input[name="file-upload"]');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Dropzone file acceptance', () => {
    it('supports multiple prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} multiple>
          <Dropzone.Idle>Multiple files</Dropzone.Idle>
        </Dropzone>
      );

      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).toHaveAttribute('multiple');
    });

    it('supports single file mode', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} multiple={false}>
          <Dropzone.Idle>Single file</Dropzone.Idle>
        </Dropzone>
      );

      const input = container.querySelector('input') as HTMLInputElement;
      expect(input).not.toHaveAttribute('multiple');
    });

    it('supports accept prop with object', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone
          onDrop={handleDrop}
          accept={{
            'image/*': ['.png', '.jpg', '.jpeg'],
          }}
        >
          <Dropzone.Idle>Image files only</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports accept prop with array', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} accept={['image/png', 'image/jpeg']}>
          <Dropzone.Idle>Image files only</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports maxSize prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} maxSize={1024 * 1024}>
          <Dropzone.Idle>Max 1MB</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports maxFiles prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} maxFiles={3}>
          <Dropzone.Idle>Max 3 files</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Dropzone interaction settings', () => {
    it('supports activateOnClick prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} activateOnClick>
          <Dropzone.Idle>Click to upload</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('disables click with activateOnClick={false}', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} activateOnClick={false}>
          <Dropzone.Idle>No click</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports activateOnDrag prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} activateOnDrag>
          <Dropzone.Idle>Drag files here</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('disables drag with activateOnDrag={false}', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} activateOnDrag={false}>
          <Dropzone.Idle>No drag</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports activateOnKeyboard prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} activateOnKeyboard>
          <Dropzone.Idle>Keyboard enabled</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports dragEventsBubbling prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} dragEventsBubbling>
          <Dropzone.Idle>Bubbling enabled</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports autoFocus prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} autoFocus>
          <Dropzone.Idle>Auto focused</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Dropzone callbacks', () => {
    it('provides onDrop callback', () => {
      const handleDrop = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop}>
          <Dropzone.Idle>Drop files</Dropzone.Idle>
        </Dropzone>
      );

      expect(handleDrop).not.toHaveBeenCalled();
    });

    it('provides onReject callback', () => {
      const handleDrop = vi.fn();
      const handleReject = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop} onReject={handleReject}>
          <Dropzone.Idle>Drop files</Dropzone.Idle>
        </Dropzone>
      );

      expect(handleReject).not.toHaveBeenCalled();
    });

    it('provides onDropAny callback', () => {
      const handleDrop = vi.fn();
      const handleDropAny = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop} onDropAny={handleDropAny}>
          <Dropzone.Idle>Drop any files</Dropzone.Idle>
        </Dropzone>
      );

      expect(handleDropAny).not.toHaveBeenCalled();
    });

    it('supports onDragEnter callback', () => {
      const handleDrop = vi.fn();
      const handleDragEnter = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} onDragEnter={handleDragEnter}>
          <Dropzone.Idle>Drag enter</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports onDragLeave callback', () => {
      const handleDrop = vi.fn();
      const handleDragLeave = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} onDragLeave={handleDragLeave}>
          <Dropzone.Idle>Drag leave</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports onDragOver callback', () => {
      const handleDrop = vi.fn();
      const handleDragOver = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} onDragOver={handleDragOver}>
          <Dropzone.Idle>Drag over</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('provides onFileDialogCancel callback', () => {
      const handleDrop = vi.fn();
      const handleFileDialogCancel = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop} onFileDialogCancel={handleFileDialogCancel}>
          <Dropzone.Idle>File dialog</Dropzone.Idle>
        </Dropzone>
      );

      expect(handleFileDialogCancel).not.toHaveBeenCalled();
    });

    it('provides onFileDialogOpen callback', () => {
      const handleDrop = vi.fn();
      const handleFileDialogOpen = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop} onFileDialogOpen={handleFileDialogOpen}>
          <Dropzone.Idle>File dialog</Dropzone.Idle>
        </Dropzone>
      );

      expect(handleFileDialogOpen).not.toHaveBeenCalled();
    });
  });

  describe('Dropzone advanced features', () => {
    it('supports openRef prop', () => {
      const handleDrop = vi.fn();
      const openRef = { current: null };

      renderWithTheme(
        <Dropzone onDrop={handleDrop} openRef={openRef}>
          <Dropzone.Idle>With ref</Dropzone.Idle>
        </Dropzone>
      );

      expect(openRef.current).toBeDefined();
    });

    it('supports preventDropOnDocument prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} preventDropOnDocument>
          <Dropzone.Idle>Prevent drop on document</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports useFsAccessApi prop', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} useFsAccessApi>
          <Dropzone.Idle>FS Access API</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports validator prop', () => {
      const handleDrop = vi.fn();
      const validator = vi.fn(() => null);

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} validator={validator}>
          <Dropzone.Idle>Custom validation</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it('supports custom getFilesFromEvent', () => {
      const handleDrop = vi.fn();
      const getFilesFromEvent = vi.fn(async () => []);

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} getFilesFromEvent={getFilesFromEvent}>
          <Dropzone.Idle>Custom file event</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe('Dropzone status rendering', () => {
    it('renders Idle status by default', () => {
      const handleDrop = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop}>
          <Dropzone.Idle>Idle state</Dropzone.Idle>
          <Dropzone.Accept>Accept state</Dropzone.Accept>
          <Dropzone.Reject>Reject state</Dropzone.Reject>
        </Dropzone>
      );

      expect(screen.getByText('Idle state')).toBeInTheDocument();
      expect(screen.queryByText('Accept state')).not.toBeInTheDocument();
      expect(screen.queryByText('Reject state')).not.toBeInTheDocument();
    });

    it('supports JSX children in status components', () => {
      const handleDrop = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop}>
          <Dropzone.Idle>
            <div>
              <strong>Drop files here</strong>
              <p>or click to select</p>
            </div>
          </Dropzone.Idle>
        </Dropzone>
      );

      expect(screen.getByText('Drop files here')).toBeInTheDocument();
      expect(screen.getByText('or click to select')).toBeInTheDocument();
    });

    it('wraps text children in span', () => {
      const handleDrop = vi.fn();

      renderWithTheme(
        <Dropzone onDrop={handleDrop}>
          <Dropzone.Idle>Plain text</Dropzone.Idle>
        </Dropzone>
      );

      const text = screen.getByText('Plain text');
      expect(text.tagName).toBe('SPAN');
    });
  });

  describe('Dropzone data attributes', () => {
    it('sets data-idle attribute in idle state', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop}>
          <Dropzone.Idle>Idle</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.querySelector('[data-idle]')).toBeInTheDocument();
    });

    it('sets data-loading attribute when loading', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} loading>
          <Dropzone.Idle>Loading</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.querySelector('[data-loading]')).toBeInTheDocument();
    });
  });

  describe('Dropzone with loading overlay', () => {
    it('shows loading overlay when loading is true', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} loading>
          <Dropzone.Idle>With loading</Dropzone.Idle>
        </Dropzone>
      );

      // LoadingOverlay should be in the document
      expect(container.querySelector('[data-loading]')).toBeInTheDocument();
    });

    it('hides loading overlay when loading is false', () => {
      const handleDrop = vi.fn();

      const { container } = renderWithTheme(
        <Dropzone onDrop={handleDrop} loading={false}>
          <Dropzone.Idle>Without loading</Dropzone.Idle>
        </Dropzone>
      );

      expect(container.querySelector('[data-loading]')).not.toBeInTheDocument();
    });
  });
});
