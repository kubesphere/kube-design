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
  HiddenTitle,
  FieldWrapper as Field,
} from './Sheet.styles';
import { Button } from '../index';

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

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof StyledSheetContent> {
  /** Use the side property to <SheetContent /> to indicate the edge of the screen where the component will appear. The values can be top, right, bottom or left.Default 'right'. */
  side?: 'right' | 'top' | 'left' | 'bottom';
  /** The width of the SheetContent. Accepts any number, string. */
  width?: number | string;
  /** The accessible title of the SheetContent. */
  title?: string;
  /** The accessible description of the SheetContent. */
  description?: string;
  /** Whether the SheetContent has overlay. */
  hasOverlay?: boolean;
}

const SheetBaseContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    { side = 'right', hasOverlay = true, className, children, title, description, ...props },
    ref
  ) => (
    <SheetPortal>
      {hasOverlay && <SheetOverlay />}
      <StyledSheetContent ref={ref} side={side} className={className} {...props}>
        {children}
      </StyledSheetContent>
    </SheetPortal>
  )
);

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    { side = 'right', hasOverlay = true, className, children, title, description, ...props },
    ref
  ) => (
    <SheetPortal>
      {hasOverlay && <SheetOverlay />}
      <StyledSheetContent ref={ref} side={side} className={className} {...props}>
        <HiddenTitle>
          <SheetPrimitive.Title>{title ?? 'sheet'}</SheetPrimitive.Title>
        </HiddenTitle>
        <HiddenTitle>
          <SheetPrimitive.Description>
            {description ?? 'sheet description'}
          </SheetPrimitive.Description>
        </HiddenTitle>
        <SheetHeaderClose asChild>
          <Button variant="filled" color="secondary" radius="sm" size="sm">
            <CloseDuotone size={24} variant="light" />
          </Button>
        </SheetHeaderClose>
        {children}
      </StyledSheetContent>
    </SheetPortal>
  )
);

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledSheetHeader {...props} className={className} />
);

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledSheetFooter {...props} className={className} />
);

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <StyledSheetTitle ref={ref} className={className} {...props} />
));

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <StyledSheetDescription ref={ref} className={className} {...props} />
));

Sheet.displayName = '@kubed/components/Sheet';

SheetDescription.displayName = SheetPrimitive.Description.displayName;
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
SheetTitle.displayName = SheetPrimitive.Title.displayName;
SheetContent.displayName = SheetPrimitive.Content.displayName;

SheetHeader.displayName = 'SheetHeader';
SheetFooter.displayName = 'SheetFooter';
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
  SheetBaseContent,
};
