import React from 'react';
import styled from 'styled-components';
import { LegendFormatter } from '../types';

const LegendWrapper = styled.div`
  display: inline-flex;
`;

const LegendItem = styled('div')<LegendItemProps>`
  margin: 0 4px;
  opacity: 0.85;
  cursor: pointer;
  user-select: none;
  color: #242e42;

  &:hover {
    opacity: 1;
  }

  &:before {
    display: inline-block;
    content: ' ';
    width: 6px;
    height: 6px;
    margin-right: 8px;
    border-radius: 50%;
    background: ${({ active, color }) => (active ? color : '#79879c')};
    overflow: hidden;
    pointer-events: none;
  }
`;

interface LegendItemProps {
  color: string;
  active: boolean;
}

export interface LegendProps {
  className?: string;
  payload: any[];
  /** Append element of the tag  */
  append?: React.ReactNode;
  /** Prepend element of the tag  */
  prepend?: React.ReactNode;
  onClick?: (key: string) => void;
  formatter?: LegendFormatter;
}

export function Legend({
  className,
  payload = [],
  append,
  prepend,
  onClick,
  formatter,
}: LegendProps) {
  return (
    <LegendWrapper className={className}>
      {prepend && <div className="legend-prepend">{prepend}</div>}
      {payload.map((item, index) => {
        const content = formatter ? formatter(item) : item.value;
        return (
          <LegendItem
            onClick={() => {
              onClick(item.value);
            }}
            color={item.color}
            active={!item.inactive}
            key={`item-${index}`}
          >
            {content}
          </LegendItem>
        );
      })}
      {append && <div className="legend-append">{append}</div>}
    </LegendWrapper>
  );
}
