import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import forwardRef from '../utils/forwardRef';
import { DefaultProps } from '../theme';

const ShowMoreWrapper = styled.div`
  position: relative;
`;

interface ShowMoreContentProps {
  $transitionDuration?: number;
}

const ShowMoreContent = styled('div')<ShowMoreContentProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition-property: max-height;
  transition-duration: ${({ $transitionDuration }) => $transitionDuration}ms;
  transition-timing-function: ease-in-out;
`;

const ShowMoreButton = styled.div``;

export interface ShowMoreProps extends DefaultProps {
  /** Max height of visible content, when this point is reached ShowMore appears */
  maxHeight: number;

  /** Label for close ShowMore action */
  hideLabel: React.ReactNode;

  /** Label for open ShowMore action */
  showLabel: React.ReactNode;

  /** Get ref of ShowMore toggle button */
  controlRef?: React.ForwardedRef<HTMLButtonElement>;

  /** Initial ShowMore state, true to wrap content in ShowMore, false to show content without ShowMore, opened state will be updated on mount */
  expanded?: boolean;

  /** ShowMore reveal transition duration in ms, 0 or null to turn off animation */
  transitionDuration?: number;
}

export const ShowMore = forwardRef<ShowMoreProps, 'div'>(
  (
    {
      expanded = false,
      maxHeight = 100,
      transitionDuration = 300,
      hideLabel,
      showLabel,
      children,
      controlRef,
      ...rest
    },
    ref
  ) => {
    const [show, setShowState] = useState(expanded);
    const [showMore, setShowMore] = useState(expanded);
    const [contentHeight, setContentHeight] = useState<number>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const showMoreLabel = show ? hideLabel : showLabel;

    useEffect(() => {
      if (contentRef.current) {
        setShowMore(maxHeight < contentRef.current.offsetHeight);
        setContentHeight(contentRef.current.offsetHeight);
      }
    }, [maxHeight, children]);

    return (
      <ShowMoreWrapper ref={ref} {...rest}>
        <ShowMoreContent
          $transitionDuration={transitionDuration}
          style={{ maxHeight: !show ? maxHeight : contentHeight || undefined }}
        >
          <div ref={contentRef}>{children}</div>
        </ShowMoreContent>
        {showMore && (
          <ShowMoreButton
            className="showmore-button"
            ref={contentRef}
            onClick={() => setShowState((opened) => !opened)}
          >
            {showMoreLabel}
          </ShowMoreButton>
        )}
      </ShowMoreWrapper>
    );
  }
);

ShowMore.displayName = '@kubed/components/ShowMore';
