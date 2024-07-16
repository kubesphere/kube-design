import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { CloseDuotone } from '@kubed/icons';
import { isNull } from 'lodash';

import {
  StyledSheetContent,
  StyledSheetOverlay,
  StyledSheetHeader,
  StyledSheetFooter,
  StyledSheetTitle,
  StyledSheetDescription,
  StyledHeaderClose,
  HeaderWrapper,
} from './Sheet.styles';
import { Button, Field } from '../index';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetHeaderClose = StyledHeaderClose;

const SheetFieldTitle = (props: {
  header?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  titleIcon?: React.ReactNode;
  headerExtra?: React.ReactNode;
}) => {
  const { header, title, description, titleIcon, headerExtra } = props;
  if (header || isNull(header)) return header;

  let body;
  if (headerExtra) {
    body = (
      <HeaderWrapper>
        <Field value={title} label={description} avatar={titleIcon} />
        {headerExtra}
      </HeaderWrapper>
    );
  } else {
    body = <Field value={title} label={description} avatar={titleIcon} />;
  }

  return <div className="kubed-modal-title">{body}</div>;
};

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <StyledSheetOverlay {...props} ref={ref} className={className} />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof StyledSheetContent> {
  side?: 'right' | 'top' | 'left' | 'bottom';
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <StyledSheetContent ref={ref} side={side} className={className} {...props}>
      <SheetHeaderClose asChild>
        <Button variant="filled" color="secondary" radius="sm" size="sm">
          <CloseDuotone size={24} variant="light" />
        </Button>
      </SheetHeaderClose>
      {children}
    </StyledSheetContent>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledSheetHeader {...props} className={className} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledSheetFooter {...props} className={className} />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <StyledSheetTitle ref={ref} className={className} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <StyledSheetDescription ref={ref} className={className} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetHeaderClose,
  SheetFieldTitle,
};
