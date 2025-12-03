import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen, waitFor } from '@testing-library/react';
import { Notify, notify } from './Notify';

describe('@kubed/components/Notify', () => {
  afterEach(() => {
    // Clear all toasts after each test
    const toasts = document.querySelectorAll('[role="status"]');
    toasts.forEach((toast) => toast.remove());
  });

  describe('Notify component', () => {
    it('renders Notify component correctly', () => {
      const { container } = renderWithTheme(<Notify />);

      expect(container.querySelector('.kubed-notify')).toBeInTheDocument();
    });

    it('renders with custom duration', () => {
      const { container } = renderWithTheme(<Notify duration={5000} />);

      expect(container.querySelector('.kubed-notify')).toBeInTheDocument();
    });

    it('renders with custom position', () => {
      const { container } = renderWithTheme(<Notify position="bottom-right" />);

      expect(container.querySelector('.kubed-notify')).toBeInTheDocument();
    });
  });

  describe('notify function', () => {
    it('displays a basic notification', async () => {
      renderWithTheme(<Notify />);

      notify('Test message');

      await waitFor(() => {
        expect(screen.getByText('Test message')).toBeInTheDocument();
      });
    });

    it('displays a success notification', async () => {
      renderWithTheme(<Notify />);

      notify.success('Success message');

      await waitFor(() => {
        expect(screen.getByText('Success message')).toBeInTheDocument();
      });
    });

    it('displays an error notification', async () => {
      renderWithTheme(<Notify />);

      notify.error('Error message');

      await waitFor(() => {
        expect(screen.getByText('Error message')).toBeInTheDocument();
      });
    });

    it('displays a loading notification', async () => {
      renderWithTheme(<Notify />);

      notify.loading('Loading message');

      await waitFor(() => {
        expect(screen.getByText('Loading message')).toBeInTheDocument();
      });
    });

    it('displays notification with custom duration', async () => {
      renderWithTheme(<Notify />);

      notify('Short duration message', { duration: 1000 });

      await waitFor(() => {
        expect(screen.getByText('Short duration message')).toBeInTheDocument();
      });
    });

    it('allows dismissing notifications', async () => {
      renderWithTheme(<Notify />);

      const toastId = notify('Dismissible message');

      await waitFor(() => {
        expect(screen.getByText('Dismissible message')).toBeInTheDocument();
      });

      notify.dismiss(toastId);

      await waitFor(
        () => {
          expect(screen.queryByText('Dismissible message')).not.toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });

    it('supports custom icon', async () => {
      renderWithTheme(<Notify />);

      notify('Message with icon', {
        icon: '🔔',
      });

      await waitFor(() => {
        expect(screen.getByText('Message with icon')).toBeInTheDocument();
        expect(screen.getByText('🔔')).toBeInTheDocument();
      });
    });
  });

  describe('Notify.WithTitle', () => {
    it('renders notification with title', async () => {
      renderWithTheme(<Notify />);

      notify(<Notify.WithTitle title="Title" message="Message content" />);

      await waitFor(() => {
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Message content')).toBeInTheDocument();
      });
    });

    it('renders notification with title in success type', async () => {
      renderWithTheme(<Notify />);

      notify.success(<Notify.WithTitle title="Success Title" message="Success content" />);

      await waitFor(() => {
        expect(screen.getByText('Success Title')).toBeInTheDocument();
        expect(screen.getByText('Success content')).toBeInTheDocument();
      });
    });

    it('renders notification with title in error type', async () => {
      renderWithTheme(<Notify />);

      notify.error(<Notify.WithTitle title="Error Title" message="Error content" />);

      await waitFor(() => {
        expect(screen.getByText('Error Title')).toBeInTheDocument();
        expect(screen.getByText('Error content')).toBeInTheDocument();
      });
    });

    it('renders title with className kubed-notify-title-wrap', async () => {
      renderWithTheme(<Notify />);

      notify(<Notify.WithTitle title="Styled Title" message="Content" />);

      await waitFor(() => {
        const titleElement = screen.getByText('Styled Title');
        expect(titleElement).toHaveClass('kubed-notify-title-wrap');
      });
    });
  });

  describe('Notify styling and structure', () => {
    it('applies correct className for success notifications', async () => {
      const { container } = renderWithTheme(<Notify />);

      notify.success('Success notification');

      await waitFor(() => {
        const successToast = container.querySelector('.kubed-notify-success');
        expect(successToast).toBeInTheDocument();
      });
    });

    it('applies correct className for error notifications', async () => {
      const { container } = renderWithTheme(<Notify />);

      notify.error('Error notification');

      await waitFor(() => {
        const errorToast = container.querySelector('.kubed-notify-error');
        expect(errorToast).toBeInTheDocument();
      });
    });

    it('applies correct className for loading notifications', async () => {
      const { container } = renderWithTheme(<Notify />);

      notify.loading('Loading notification');

      await waitFor(() => {
        const loadingToast = container.querySelector('.kubed-notify-loading');
        expect(loadingToast).toBeInTheDocument();
      });
    });

    it('applies correct className for blank notifications', async () => {
      const { container } = renderWithTheme(<Notify />);

      notify('Blank notification');

      await waitFor(() => {
        const blankToast = container.querySelector('.kubed-notify-blank');
        expect(blankToast).toBeInTheDocument();
      });
    });
  });

  describe('Notify advanced features', () => {
    it('supports notification with JSX content', async () => {
      renderWithTheme(<Notify />);

      notify(
        <div>
          <strong>Bold text</strong> and <em>italic text</em>
        </div>
      );

      await waitFor(() => {
        expect(screen.getByText('Bold text')).toBeInTheDocument();
        expect(screen.getByText('italic text')).toBeInTheDocument();
      });
    });

    it('supports multiple notifications simultaneously', async () => {
      renderWithTheme(<Notify />);

      notify('First notification');
      notify('Second notification');
      notify('Third notification');

      await waitFor(() => {
        expect(screen.getByText('First notification')).toBeInTheDocument();
        expect(screen.getByText('Second notification')).toBeInTheDocument();
        expect(screen.getByText('Third notification')).toBeInTheDocument();
      });
    });

    it('dismisses all notifications at once', async () => {
      renderWithTheme(<Notify />);

      notify('Message 1');
      notify('Message 2');
      notify('Message 3');

      await waitFor(() => {
        expect(screen.getByText('Message 1')).toBeInTheDocument();
      });

      notify.dismiss();

      await waitFor(
        () => {
          expect(screen.queryByText('Message 1')).not.toBeInTheDocument();
          expect(screen.queryByText('Message 2')).not.toBeInTheDocument();
          expect(screen.queryByText('Message 3')).not.toBeInTheDocument();
        },
        { timeout: 3000 }
      );
    });
  });
});
