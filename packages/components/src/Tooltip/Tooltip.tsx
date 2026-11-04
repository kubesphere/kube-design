import React from 'react';
import type { Instance, Props } from 'tippy.js';
import type { TippyProps } from '@tippyjs/react';
import { useMergedRef } from '@kubed/hooks';
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
  children: React.ReactElement | null;

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

export type TooltipInstance<T = Props> = Instance<T>;

export const Tooltip = React.forwardRef<Element, TooltipProps>(
  (
    { children, content, maxWidth = 200, animation = 'shift-toward-subtle', reference, ...rest },
    forwardedRef
  ) => {
    const [trigger, setTrigger] = React.useState<Element | null>(null);
    const child = children as React.ReactElement<{ ref?: React.Ref<Element> }>;
    const childRef =
      parseInt(React.version, 10) >= 19
        ? child?.props.ref
        : (child as unknown as { ref?: React.Ref<Element> })?.ref;
    const mergedRef = useMergedRef(setTrigger, childRef, forwardedRef);
    // Bind through reference so Tippy does not clone children through its legacy ref API.
    const target = reference || trigger;

    return (
      <>
        {child && React.cloneElement(child, { ref: mergedRef })}
        {target && (
          // @ts-ignore Tippy and styled-components both define a theme prop.
          <StyledTippy
            content={content}
            maxWidth={maxWidth}
            animation={animation}
            {...rest}
            reference={target}
          />
        )}
      </>
    );
  }
);

Tooltip.displayName = '@kubed/components/Tooltip';
