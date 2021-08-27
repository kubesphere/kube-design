import React from 'react';
import styled from 'styled-components';
import { Tooltip, TooltipProps } from '../Tooltip/Tooltip';
import { addColorAlpha } from '../utils/color';

const PopoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
}

export function Popover({
  title,
  children,
  maxWidth = '264px',
  interactive = true,
  content,
  ...rest
}: PopoverProps) {
  const popContent = (
    <PopoverWrapper>
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
