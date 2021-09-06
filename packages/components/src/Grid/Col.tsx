import React from 'react';
import styled from 'styled-components';
import { KubedNumberSize, useTheme, themeUtils } from '../theme';

interface ColDivProps {
  flex: string;
  margin: string;
  marginLeft: string;
}

export type GutterType = [KubedNumberSize, KubedNumberSize?];

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
  gutter?: GutterType;
  grow?: boolean;
}

export function isValidSpan(span: number) {
  return typeof span === 'number' && span > 0 && span % 1 === 0;
}

export function getGutter(gutter: GutterType, theme) {
  const [gutterV, gutterH] = gutter;
  if (gutterH) {
    const spacingV = themeUtils.getSizeValue(gutterV, theme.layout.spacing);
    const spacingH = themeUtils.getSizeValue(gutterH, theme.layout.spacing);
    return [spacingV, spacingH];
  }

  const spacing = themeUtils.getSizeValue(gutterV, theme.layout.spacing);
  return [spacing, spacing];
}

export function Col({ span, gutter, offset = 0, grow, columns, ...others }: ColProps) {
  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  const theme = useTheme();
  const [spacingV, spacingH] = getGutter(gutter, theme);

  const flex = `${grow ? '1' : '0'} 0 calc(${100 / (columns / span)}% - ${spacingH})`;
  const margin = `calc(${spacingV} / 2) calc(${spacingH} / 2)`;
  const marginV = `calc(${spacingH} / 2)`;
  const marginLeft = isValidSpan(offset) ? `calc(${100 / (columns / offset)}% + ${marginV})` : null;

  return <ColDiv flex={flex} margin={margin} marginLeft={marginLeft} {...others} />;
}

Col.displayName = '@kubed/components/Col';
