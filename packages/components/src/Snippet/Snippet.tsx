import React from 'react';
import styled from 'styled-components';
import { Copy, Check } from '@kubed/icons';
import { useClipboard } from '@kubed/hooks';
import { Button } from '../Button/Button';
import { KubedNumberSize, themeUtils, useTheme } from '../theme';

const { getSizeValue } = themeUtils;

const ICON_SIZE = 18;

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
  height: 100%;
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

  /** The value to be written to the clipboard */
  valueToCopy?: any;
}

export function Snippet({
  symbol = '$',
  width = 300,
  content,
  radius,
  valueToCopy,
  children,
  ...others
}: SnippetProps) {
  const { copy, copied } = useClipboard();
  const { palette } = useTheme();

  return (
    <SnippetWrapper radius={radius} width={width} {...others}>
      <SnippetPre symbol={symbol}>{children}</SnippetPre>
      {copied ? (
        <SnippetIcon>
          <Check size={ICON_SIZE} color={palette.success} />
        </SnippetIcon>
      ) : (
        <SnippetIcon as={Button} variant="text" onClick={() => copy(valueToCopy)}>
          <Copy size={ICON_SIZE} />
        </SnippetIcon>
      )}
    </SnippetWrapper>
  );
}

Snippet.displayName = '@kubed/components/Snippet';
