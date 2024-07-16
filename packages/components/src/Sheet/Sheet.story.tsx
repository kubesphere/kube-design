import * as React from 'react';
import styled from 'styled-components';

import * as Sheets from './Sheet';
import { Button } from '../index';

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
  const renderItem = (side: SheetSide) => {
    const Wrapper = wrapper(side);
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">{side}</Button>
        </SheetTrigger>
        <SheetContent width={1200} side={side}>
          <Wrapper>
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
          </Wrapper>
        </SheetContent>
      </Sheet>
    );
  };
  return SHEET_SIDES.map(renderItem);
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
