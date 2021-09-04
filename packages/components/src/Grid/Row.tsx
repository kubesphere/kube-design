import React, { Children, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import { Col, ColProps } from './Col';
import { KubedNumberSize, themeUtils } from '../theme';

export { Col };
export type { ColProps };

const RowDiv = styled('div')<RowProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: calc(
    ${({ gutter, theme }) => themeUtils.getSizeValue(gutter, theme.layout.spacing)} / -2
  );
`;

export interface RowProps extends ComponentPropsWithoutRef<'div'> {
  /** <Col /> components only */
  children: React.ReactNode;

  /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
  gutter?: KubedNumberSize;

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
  gutter = 'md',
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
    <RowDiv gutter={gutter} align={align} justify={justify} {...others}>
      {cols}
    </RowDiv>
  );
}

Row.displayName = '@kubed/components/Row';
