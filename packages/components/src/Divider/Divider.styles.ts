import styled from 'styled-components';
import React from 'react';
import { Text } from '../Text/Text';
import { getSizeValue } from '../theme/utils';

export const sizes = {
  xs: '1px',
  sm: '2px',
  md: '3px',
  lg: '4px',
  xl: '5px',
};

export const DividerWrapper = styled('div')<React.ComponentPropsWithoutRef<any>>`
  border: 0;

  &.with-label {
    border-top: 0 !important;
  }

  &.horizontal {
    border-top-style: ${({ variant }) => variant};
    border-top-width: ${({ size }) => getSizeValue(size, sizes)};
    border-top-color: ${({ theme }) => theme.palette.border};
    margin: ${({ $margins, theme }) => getSizeValue($margins, theme.layout.spacing)} 0;
  }

  &.vertical {
    align-self: stretch;
    border-left-style: ${({ variant }) => variant};
    border-left-color: ${({ theme }) => theme.palette.border};
    border-left-width: ${({ size }) => getSizeValue(size, sizes)};
    margin-left: ${({ $margins, theme }) => getSizeValue($margins, theme.layout.spacing)};
    margin-right: ${({ $margins, theme }) => getSizeValue($margins, theme.layout.spacing)};
  }
`;

export const Label = styled(Text)<React.ComponentPropsWithoutRef<any>>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.accents_5};
  font-size: 12px;

  &.left {
    &:before {
      display: none;
    }
  }

  &.right {
    &:after {
      display: none;
    }
  }

  &:before {
    content: '';
    flex: 1;
    height: 1px;
    margin-right: ${({ theme }) => theme.layout.spacing.xs};
    border-top: 1px ${({ theme, $variant }) => `${$variant} ${theme.palette.border}`};
  }

  &:after {
    content: '';
    flex: 1;
    height: 1px;
    margin-left: ${({ theme }) => theme.layout.spacing.xs};
    border-top: 1px ${({ theme, $variant }) => `${$variant} ${theme.palette.border}`};
  }
`;
