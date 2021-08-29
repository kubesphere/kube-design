import React from 'react';
import styled, { css } from 'styled-components';
import { DefaultProps } from '../theme';
import forwardRef from '../utils/forwardRef';

const getTransform = (placement, offset) => {
  const [offsetX, offsetY] = offset;
  const styles = {
    topLeft: css`
      top: ${offsetY}px;
      left: ${offsetX}px;
      transform: translate(-50%, -50%);
      transform-origin: 0 0;
    `,
    topRight: css`
      top: ${offsetY}px;
      right: ${offsetX}px;
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
    `,
    bottomLeft: css`
      bottom: ${offsetY}px;
      left: ${offsetX}px;
      transform: translate(-50%, 50%);
      transform-origin: 0 100%;
    `,
    bottomRight: css`
      bottom: ${offsetY}px;
      right: ${offsetX}px;
      transform: translate(50%, 50%);
      transform-origin: 100% 100%;
    `,
  };
  return styles[placement];
};

const AnchorWrapper = styled('div')<AnchorProps>`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;

  .badge {
    position: absolute;
    ${({ placement, offset = [0, 0] }) => getTransform(placement, offset)};
    z-index: 9;
  }
`;

export interface AnchorProps extends DefaultProps {
  /** Placement of the BadgeAnchor */
  placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

  /** Offset of the badge element */
  offset?: number[];
}

export const BadgeAnchor = forwardRef<AnchorProps, 'div'>(
  ({ placement = 'bottomRight', children, ...rest }, ref) => {
    return (
      <AnchorWrapper ref={ref} placement={placement} {...rest}>
        {children}
      </AnchorWrapper>
    );
  }
);

BadgeAnchor.displayName = '@kubed/components/BadgeAnchor';
