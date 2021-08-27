import React from 'react';
import styled from 'styled-components';
import { KubedNumberSize, useTheme, themeUtils } from '../theme';

interface ColDivProps {
  flex: string;
  margin: string;
  marginLeft: string;
}

const ColDiv = styled('div')<ColDivProps>`
  box-sizing: border-box;
  flex: ${(props) => props.flex};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft || null};
`;

export interface ColProps extends React.ComponentPropsWithoutRef<'div'> {
  span: number;
  columns?: number;
  offset?: number;
  gutter?: KubedNumberSize;
  grow?: boolean;
}

export function isValidSpan(span: number) {
  return typeof span === 'number' && span > 0 && span % 1 === 0;
}

export function Col({ span, gutter, offset = 0, grow, columns, className, ...others }: ColProps) {
  const theme = useTheme();
  const spacing = themeUtils.getSizeValue(gutter, theme.layout.spacing);

  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  const flex = `${grow ? '1' : '0'} 0 calc(${100 / (columns / span)}% - ${spacing})`;
  const margin = `calc(${spacing} / 2)`;
  const marginLeft = isValidSpan(offset) ? `calc(${100 / (columns / offset)}% + ${margin})` : null;

  return <ColDiv flex={flex} margin={margin} marginLeft={marginLeft} {...others} />;
}

Col.displayName = '@kubed/components/Col';
