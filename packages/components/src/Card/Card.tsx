import React from 'react';
import styled from 'styled-components';
import { DefaultProps, KubedNumberSize } from '../theme';
import forwardRef from '../utils/forwardRef';
import { addColorAlpha } from '../utils/color';

const CardWrapper = styled.div``;

const SectionTitle = styled.div`
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.accents_7};
`;

const CardContent = styled('div')<CardProps>`
  padding: 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.background};
  box-shadow: ${({ theme }) => `0 4px 8px ${addColorAlpha(theme.palette.accents_8, 0.06)}`};
  transition: all 0.3s;

  &:hover {
    ${({ theme, hoverable }) =>
      hoverable
        ? `box-shadow: 0 6px 16px 0 ${addColorAlpha(theme.palette.accents_8, 0.18)}`
        : null};
  }
`;

export interface CardProps extends DefaultProps {
  /** Display shadow or not	 */
  shadow?: boolean;

  /** Section title	of the card */
  sectionTitle?: React.ReactNode;

  /** Controls card content padding */
  padding?: KubedNumberSize;

  /** Add effect on hover	 */
  hoverable?: boolean;

  /** Style of content  */
  contentStyle?: React.CSSProperties;

  /** className of content  */
  contentClassName?: string;
}

export const Card = forwardRef<CardProps, 'div'>(
  ({ sectionTitle, children, contentStyle, contentClassName, hoverable, ...rest }, ref) => {
    const contentProps = { contentStyle, contentClassName, hoverable };
    return (
      <CardWrapper ref={ref} {...rest}>
        {sectionTitle && <SectionTitle>{sectionTitle}</SectionTitle>}
        <CardContent {...contentProps}>{children}</CardContent>
      </CardWrapper>
    );
  }
);

Card.displayName = '@kubed/components/Card';
