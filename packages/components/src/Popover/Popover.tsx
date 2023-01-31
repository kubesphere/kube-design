import React from 'react';
import styled from 'styled-components';
import type { Props } from 'tippy.js';
import type { TooltipProps, TooltipInstance } from '../Tooltip/Tooltip';
import { Tooltip } from '../Tooltip/Tooltip';
import { addColorAlpha } from '../utils/color';

interface WrapperProps {
  $width?: number;
}

const PopoverWrapper = styled('div')<WrapperProps>`
  display: flex;
  flex-direction: column;
  ${({ $width }) => ($width ? `width: ${$width}px` : null)};
`;

const PopoverTitle = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.fontSizeBase};
`;

const PopoverContent = styled.div`
  color: ${({ theme }) => addColorAlpha(theme.palette.background, 0.7)};
`;

export interface PopoverProps extends TooltipProps {
  title?: string;
  width?: number;
  contentClassName?: string;
}

export type PopoverInstance<T = Props> = TooltipInstance<T>;

export function Popover({
  title,
  children,
  maxWidth = '264px',
  width,
  interactive = true,
  content,
  contentClassName,
  ...rest
}: PopoverProps) {
  const popContent = (
    <PopoverWrapper $width={width} className={contentClassName}>
      {title && <PopoverTitle>{title}</PopoverTitle>}
      <PopoverContent>{content}</PopoverContent>
    </PopoverWrapper>
  );

  return (
    <Tooltip {...rest} content={popContent} interactive={interactive} maxWidth={maxWidth}>
      {children}
    </Tooltip>
  );
}

Popover.displayName = '@kubed/components/Popover';
