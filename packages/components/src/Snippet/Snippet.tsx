import React from 'react';
import styled from 'styled-components';
import { Copy } from '@kubed/icons';
import { KubedNumberSize, themeUtils } from '../theme';

const { getSizeValue } = themeUtils;

const SnippetWrapper = styled('div')<SnippetProps>`
  position: relative;
  border: 1px solid ${(props) => props.theme.palette.border};
  background-color: ${(props) => props.theme.palette.accents_1};
  padding: 10px 40px 10px 10px;
  box-sizing: border-box;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  border-radius: ${({ radius, theme }) => getSizeValue(radius, theme.layout.radius)};
`;

const SnippetPre = styled('pre')<SnippetProps>`
  color: ${(props) => props.theme.palette.accents_7};
  margin: 0;
  padding: 0;
  background: transparent;
  font-size: inherit;
  border: none;

  &:before {
    content: '${(props) => props.symbol} ';
    user-select: none;
  }
`;

const SnippetIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: pointer;
  user-select: none;
  color: ${(props) => props.theme.palette.accents_7};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
`;

export interface SnippetProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Symbol of snippet, default value is $ */
  symbol?: string;

  /** Width of snippet */
  width?: number;

  /** Content of snippet */
  content?: string | string[] | React.ReactNode;

  /** Border-radius from theme or number to set border-radius in px */
  radius?: KubedNumberSize;
}

export function Snippet({
  symbol = '$',
  width = 300,
  content,
  radius,
  children,
  ...others
}: SnippetProps) {
  return (
    <SnippetWrapper radius={radius} width={width} {...others}>
      <SnippetPre symbol={symbol}>{children}</SnippetPre>
      <SnippetIcon>
        <Copy size={18} />
      </SnippetIcon>
    </SnippetWrapper>
  );
}

Snippet.displayName = '@kubed/components/Snippet';
