import * as React from 'react';
import styled from 'styled-components';

import * as Sheets from './Sheet';
import { Button, Modal } from '../index';

export default {
  title: 'Components/Sheet',
  component: Sheets,
};

const { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger, SheetFieldTitle } =
  Sheets;

const SheetContentChildrenWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

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
            // hasRadixOverlay
            // hasOverlay={true}
            // maskClosable={false}
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
