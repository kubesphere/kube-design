import React, { Children, ComponentPropsWithoutRef } from 'react';
import styled, { css } from 'styled-components';
import { Col, ColProps, GutterType } from './Col';
import { themeUtils } from '../theme';

export { Col };
export type { ColProps };

const getGutter = (gutter: GutterType, theme) => {
  const [gutterVertical, gutterHorizontal] = gutter;
  if (gutterHorizontal) {
    const marginV = themeUtils.getSizeValue(gutterVertical, theme.layout.spacing) / -2;
    const marginH = themeUtils.getSizeValue(gutterHorizontal, theme.layout.spacing) / -2;
    return css`
      margin: calc(${marginV}) calc(${marginH});
    `;
  }
  const margin = themeUtils.getSizeValue(gutterHorizontal, theme.layout.spacing) / -2;
  return css`
    margin: calc(${margin});
  `;
};

const RowElement = styled('div')<RowProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  ${({ gutter, theme }) => getGutter(gutter, theme)};
`;

export interface RowProps extends ComponentPropsWithoutRef<'div'> {
  /** <Col /> components only */
  children: React.ReactNode;

  /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
  gutter?: GutterType;

  /** Should columns in the last row take 100% of grid width */
  grow?: boolean;

  /** Set grid justify-content property */
  justify?: React.CSSProperties['justifyContent'];

  /** Set grid align-content property */
  align?: React.CSSProperties['alignContent'];

  /** Amount of columns in each row */
  columns?: number;
}

export function Row({
  gutter = ['md'],
  children,
  grow = false,
  justify = 'flex-start',
  align = 'stretch',
  columns = 12,
  ...others
}: RowProps) {
  const cols = (Children.toArray(children) as React.ReactElement[]).map((col, index) =>
    React.cloneElement(col, { gutter, grow, columns, key: index })
  );

  return (
    <RowElement gutter={gutter} align={align} justify={justify} {...others}>
      {cols}
    </RowElement>
  );
}

Row.displayName = '@kubed/components/Row';
