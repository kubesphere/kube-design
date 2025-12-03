import React from 'react';
import { renderWithTheme } from '@kubed/tests';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetFieldTitle,
} from './Sheet';
import { Button } from '../Button/Button';

describe('@kubed/components/Sheet', () => {
  describe('Sheet displayName', () => {
    it('has correct displayName', () => {
      expect(Sheet.displayName).toBe('@kubed/components/Sheet');
    });
  });

  describe('Sheet basic functionality', () => {
    it('renders Sheet with open state', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <div>Sheet content</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Sheet content')).toBeInTheDocument();
      });
    });

    it('does not render content when closed', () => {
      renderWithTheme(
        <Sheet open={false}>
          <SheetContent>
            <div>Hidden content</div>
          </SheetContent>
        </Sheet>
      );

      expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
    });

    it('renders with trigger', async () => {
      renderWithTheme(
        <Sheet>
          <SheetTrigger asChild>
            <Button>Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <div>Sheet content</div>
          </SheetContent>
        </Sheet>
      );

      expect(screen.getByText('Open Sheet')).toBeInTheDocument();
    });
  });

  describe('Sheet side prop', () => {
    it('renders with default right side', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <div>Right sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Right sheet')).toBeInTheDocument();
      });
    });

    it('renders with left side', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent side="left">
            <div>Left sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Left sheet')).toBeInTheDocument();
      });
    });

    it('renders with top side', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent side="top">
            <div>Top sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Top sheet')).toBeInTheDocument();
      });
    });

    it('renders with bottom side', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent side="bottom">
            <div>Bottom sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Bottom sheet')).toBeInTheDocument();
      });
    });
  });

  describe('Sheet width prop', () => {
    it('renders with custom numeric width', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent width={500}>
            <div>Custom width sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Custom width sheet')).toBeInTheDocument();
      });
    });

    it('renders with string width', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent width="50%">
            <div>Percentage width sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Percentage width sheet')).toBeInTheDocument();
      });
    });
  });

  describe('Sheet overlay props', () => {
    it('renders with overlay by default', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <div>Content with overlay</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Content with overlay')).toBeInTheDocument();
      });
    });

    it('renders without overlay when hasOverlay is false', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent hasOverlay={false}>
            <div>Content without overlay</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Content without overlay')).toBeInTheDocument();
      });
    });

    it('renders with maskClosable true', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent maskClosable>
            <div>Mask closable content</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Mask closable content')).toBeInTheDocument();
      });
    });

    it('renders with maskClosable false', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent maskClosable={false}>
            <div>Mask not closable content</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Mask not closable content')).toBeInTheDocument();
      });
    });
  });

  describe('Sheet subcomponents', () => {
    it('renders SheetHeader', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetHeader>
              <div>Header content</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Header content')).toBeInTheDocument();
      });
    });

    it('renders SheetFooter', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetFooter>
              <div>Footer content</div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Footer content')).toBeInTheDocument();
      });
    });

    it('renders SheetTitle', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetTitle>Sheet Title</SheetTitle>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Sheet Title')).toBeInTheDocument();
      });
    });

    it('renders SheetDescription', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Sheet Description')).toBeInTheDocument();
      });
    });

    it('renders SheetClose button', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Close')).toBeInTheDocument();
      });
    });
  });

  describe('SheetFieldTitle component', () => {
    it('renders with title only', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetFieldTitle title="Field Title" />
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Field Title')).toBeInTheDocument();
      });
    });

    it('renders with title and description', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetFieldTitle title="Field Title" description="Field description text" />
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Field Title')).toBeInTheDocument();
        expect(screen.getByText('Field description text')).toBeInTheDocument();
      });
    });

    it('renders with custom header element', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetFieldTitle header={<div>Custom Header</div>} />
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Custom Header')).toBeInTheDocument();
      });
    });

    it('renders with headerExtra', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <SheetFieldTitle
              title="Field Title"
              description="Description"
              headerExtra={<Button>Extra Action</Button>}
            />
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Field Title')).toBeInTheDocument();
        expect(screen.getByText('Extra Action')).toBeInTheDocument();
      });
    });
  });

  describe('Sheet callbacks', () => {
    it('calls onOpenChange when state changes', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();

      renderWithTheme(
        <Sheet onOpenChange={handleOpenChange}>
          <SheetTrigger asChild>
            <Button>Open</Button>
          </SheetTrigger>
          <SheetContent>
            <div>Content</div>
          </SheetContent>
        </Sheet>
      );

      const trigger = screen.getByText('Open');
      await user.click(trigger);

      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(true);
      });
    });
  });

  describe('Sheet modal prop', () => {
    it('renders as modal by default', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <div>Modal sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Modal sheet')).toBeInTheDocument();
      });
    });

    it('renders as non-modal when modal is false', async () => {
      renderWithTheme(
        <Sheet open modal={false}>
          <SheetContent>
            <div>Non-modal sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Non-modal sheet')).toBeInTheDocument();
      });
    });
  });

  describe('Sheet complex scenarios', () => {
    it('renders complete sheet with all subcomponents', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent side="right" width={500}>
            <SheetHeader>
              <SheetFieldTitle title="Complete Sheet" description="With all components" />
            </SheetHeader>
            <div>Body content</div>
            <SheetFooter>
              <SheetClose asChild>
                <Button>Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Complete Sheet')).toBeInTheDocument();
        expect(screen.getByText('With all components')).toBeInTheDocument();
        expect(screen.getByText('Body content')).toBeInTheDocument();
        expect(screen.getByText('Close')).toBeInTheDocument();
      });
    });

    it('handles controlled open state', async () => {
      const TestComponent = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <>
            <Button onClick={() => setOpen(true)}>Open Sheet</Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent>
                <div>Controlled content</div>
                <SheetClose asChild>
                  <Button>Close</Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </>
        );
      };

      const user = userEvent.setup();
      renderWithTheme(<TestComponent />);

      const openButton = screen.getByText('Open Sheet');
      await user.click(openButton);

      await waitFor(() => {
        expect(screen.getByText('Controlled content')).toBeInTheDocument();
      });
    });
  });

  describe('Sheet styling', () => {
    it('accepts custom className', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent className="custom-sheet">
            <div>Custom styled sheet</div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Custom styled sheet')).toBeInTheDocument();
      });
    });
  });

  describe('Sheet with nested content', () => {
    it('renders with complex nested children', async () => {
      renderWithTheme(
        <Sheet open>
          <SheetContent>
            <div>
              <header>Header Section</header>
              <section>
                <article>Article Content</article>
              </section>
              <footer>Footer Section</footer>
            </div>
          </SheetContent>
        </Sheet>
      );

      await waitFor(() => {
        expect(screen.getByText('Header Section')).toBeInTheDocument();
        expect(screen.getByText('Article Content')).toBeInTheDocument();
        expect(screen.getByText('Footer Section')).toBeInTheDocument();
      });
    });
  });
});
