import React from 'react';
import { TippyProps } from '@tippyjs/react';
import { StyledTippy } from './Tooltip.styles';

export type BasePlacement = 'top' | 'left' | 'right' | 'bottom';
export type AutoPlacement = 'auto' | 'auto-start' | 'auto-end';
export type VariationPlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';

export interface TooltipProps extends TippyProps {
  /** The element to append the tooltip to */
  appendTo?: 'parent' | Element | ((ref: Element) => Element);

  /** The react component to use as the trigger for the tooltip */
  children: React.ReactElement;

  /** Tooltip content */
  content?: React.ReactNode;

  /** Tooltip show or not (in controlled mode) */
  visible?: boolean;

  /** True to disable tooltip */
  disabled?: boolean;

  /** Delay in ms once a trigger event is fired before a Tooltip shows or hides */
  delay?: number | [number | null, number | null];

  /** Duration in ms of the transition animation */
  duration?: number | [number | null, number | null];

  /** Determines if the tooltip hides upon clicking the reference or outside of the tooltip */
  hideOnClick?: boolean | 'toggle';

  /** Determines if the tooltip has interactive content inside of it, so that it can be hovered over and clicked inside without hiding */
  interactive?: boolean;

  /** className of Tooltip */
  className?: string;

  /** Determines if the tooltip is shown once it gets created, respecting delay */
  showOnCreate?: boolean;

  /** Specifies the maximum width of the tooltip */
  maxWidth?: number | string;

  /** The preferred placement of the tooltip */
  placement?: AutoPlacement | BasePlacement | VariationPlacement;

  /** Determines the events that cause the tooltip to show. Multiple event names are separated by spaces */
  trigger?: string;
}

export function Tooltip({ children, content, ...rest }: TooltipProps) {
  return (
    // @ts-ignore
    <StyledTippy content={content} animation="shift-toward-subtle" {...rest}>
      {children}
    </StyledTippy>
  );
}

Tooltip.displayName = '@kubed/components/Tooltip';
