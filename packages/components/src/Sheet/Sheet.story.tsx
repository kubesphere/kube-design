import * as React from 'react';
import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import * as Sheets from './Sheet';
import { Button, Modal } from '../index';

const { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger, SheetFieldTitle } =
  Sheets;

export default {
  title: 'Components/Sheet',
  component: Sheet,
  args: {
    side: 'right',
    width: 500,
    hasOverlay: true,
    maskClosable: true,
  },
  argTypes: {
    modal: {
      name: 'modal',
      description: 'Whether the sheet is modal',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    side: {
      name: 'side',
      description: 'The side from which the sheet will appear',
      table: {
        defaultValue: { summary: 'right' },
      },
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
    },
    width: {
      name: 'width',
      description: 'The width of the sheet',
      table: {
        defaultValue: { summary: '500' },
      },
      control: { type: 'range', min: 300, max: 1200, step: 50 },
    },
    hasOverlay: {
      name: 'hasOverlay',
      description: 'Whether the sheet has an overlay',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
    maskClosable: {
      name: 'maskClosable',
      description: 'Whether clicking the overlay closes the sheet',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Sheet>;

type StoryWithCustomProps = StoryObj<typeof Sheet & Record<string, any>>;

const SheetContentChildrenWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

export const Explame: StoryWithCustomProps = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [sheetProps, setSheetProps] = useState<Record<string, any>>(args);

    useEffect(() => {
      setSheetProps(args);
    }, [args]);

    const { modal, side, width, hasOverlay, maskClosable } = sheetProps;

    const Wrapper = side === 'left' || side === 'right' ? SheetContentChildrenWrapper : 'div';

    return (
      <div>
        <Sheet open={open} onOpenChange={setOpen} modal={modal}>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet ({side})</Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            width={width}
            hasOverlay={hasOverlay}
            maskClosable={maskClosable}
          >
            <Wrapper>
              <SheetHeader>
                <SheetFieldTitle
                  title="Sheet Example"
                  description="This is a dynamic example of the Sheet component."
                />
              </SheetHeader>
              <div style={{ padding: '20px' }}>
                <p>Sheet content area</p>
                <p>Try adjusting the parameters in the control panel to see different behaviors.</p>
                <ul style={{ marginTop: '10px' }}>
                  <li>Side: {side}</li>
                  <li>Width: {width}px</li>
                  <li>Modal: {modal ? 'Yes' : 'No'}</li>
                  <li>Has Overlay: {hasOverlay ? 'Yes' : 'No'}</li>
                  <li>Mask Closable: {maskClosable ? 'Yes' : 'No'}</li>
                </ul>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Close Sheet</Button>
                </SheetClose>
              </SheetFooter>
            </Wrapper>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
};

export const Basic = () => {
  const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

  type SheetSide = (typeof SHEET_SIDES)[number];
  const wrapper = (side: SheetSide) => {
    if (side === 'left' || side === 'right') {
      return SheetContentChildrenWrapper;
    }
    return 'div';
  };
  const [show, setShow] = React.useState(false);
  const [showOut, setShowOut] = React.useState(false);

  const avoidDefaultDomBehavior = (e: Event) => {
    e.preventDefault();
  };

  const renderItem = (side: SheetSide) => {
    const Wrapper = wrapper(side);
    return (
      <>
        <Sheet modal={false}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent
            onPointerDownOutside={avoidDefaultDomBehavior}
            onInteractOutside={avoidDefaultDomBehavior}
            width={1200}
            side={side}
          >
            <Wrapper>
              <SheetHeader>
                <SheetFieldTitle
                  title="Edit profile"
                  description="Make changes to your profile here. Click save when you are done."
                />
              </SheetHeader>
              <div>
                <Button
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  show modal
                </Button>
                <Button
                  onClick={() => {
                    setShowOut(true);
                  }}
                >
                  show modal out
                </Button>
              </div>
              <Modal
                visible={show}
                onCancel={() => {
                  setShow(false);
                }}
                content="modal info"
              >
                modal content
                <input />
              </Modal>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </Wrapper>
          </SheetContent>
        </Sheet>
      </>
    );
  };
  return (
    <>
      {SHEET_SIDES.map(renderItem)}
      <Modal
        visible={showOut}
        onCancel={() => {
          setShowOut(false);
        }}
        content="modal out info"
      >
        modal out content
        <input />
      </Modal>
    </>
  );
};

export const WithOpen = () => {
  const [open, setOpen] = React.useState(false);
  const side = 'right';
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">{side}</Button>
        </SheetTrigger>
        <SheetContent width={1200} side={side}>
          <SheetContentChildrenWrapper>
            <SheetHeader>
              <SheetFieldTitle
                title="Edit profile"
                description="Make changes to your profile here. Click save when you are done."
              />
            </SheetHeader>
            body
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContentChildrenWrapper>
        </SheetContent>
      </Sheet>
    </>
  );
};
