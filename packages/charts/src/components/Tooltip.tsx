import React from 'react';
import styled from 'styled-components';
import { LegendFormatter, ValueFormatter } from '../types';

const TooltipWrapper = styled.div`
  width: auto;
  min-width: 120px;
  padding: 8px 12px;
  color: #fff;
  font-size: 12px;
  line-height: 1.67;
  border-radius: 4px;
  background-color: rgba(36, 46, 66, 0.8);
  box-shadow: 0 6px 12px 0 rgba(2, 5, 8, 0.08), 0 1px 2px 0 rgba(2, 5, 8, 0.08);
  z-index: 100;
`;

const TooltipLabel = styled.div`
  margin-bottom: 2px;
  font-weight: bold;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
  }

  img {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`;

const ItemWrapper = styled.div``;

const TooltipItem = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  color: #fff;
  word-break: break-all;

  &:before {
    display: inline-block;
    content: ' ';
    width: 6px;
    height: 6px;
    margin-right: 7px;
    border-radius: 50%;
    background: ${({ color }) => color};
    overflow: hidden;
    pointer-events: none;
  }
`;

export interface TooltipProps {
  className?: string;
  payload: any[];
  label: string | React.ReactNode;
  active?: boolean;
  valueFormatter: ValueFormatter;
  legendFormatter?: LegendFormatter;
}

export function Tooltip({
  className,
  payload,
  label,
  valueFormatter,
  legendFormatter,
}: TooltipProps) {
  return (
    <TooltipWrapper className={className}>
      <TooltipLabel>{label}</TooltipLabel>
      <ItemWrapper>
        {payload.map((item) => {
          const legend = legendFormatter ? legendFormatter(item) : item.name;
          const color = item.color || item.payload?.fill;
          return (
            <TooltipItem color={color}>
              {legend}: {valueFormatter(item.value)}
            </TooltipItem>
          );
        })}
      </ItemWrapper>
    </TooltipWrapper>
  );
}
