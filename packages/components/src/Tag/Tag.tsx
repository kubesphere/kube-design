import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Close } from '@kubed/icons';
import forwardRef from '../utils/forwardRef';
import { DefaultProps, KubedTheme, KubedNumberSize, themeUtils } from '../theme';
import { addColorAlpha } from '../utils/color';

const colorMap = {
  default: {
    color: 'background',
    background: 'accents_8',
  },
  primary: {
    color: 'green4',
    background: 'green0',
  },
  success: {
    color: 'green4',
    background: 'green0',
  },
  secondary: {
    color: 'accents_7',
    background: 'accents_2',
  },
  warning: {
    color: 'yellow4',
    background: 'yellow0',
  },
  error: {
    color: 'red4',
    background: 'red0',
  },
  info: {
    color: 'blue4',
    background: 'blue0',
  },
};

const getColor = (color = 'default', theme: KubedTheme) => {
  const colorValue = themeUtils.getColor(colorMap[color].color, theme);
  const background = themeUtils.getColor(colorMap[color].background, theme);

  return css`
    background-color: ${background};
    color: ${colorValue};
  `;
};

const TagWrapper = styled('div')<TagProps>`
  display: inline-flex;
  align-items: center;
  padding: ${({ title }) => (title ? '0 6px 0 2px' : '0 4px')};
  line-height: 20px;
  border-radius: ${({ title, radius, theme }) =>
    radius ? themeUtils.getSizeValue(radius, theme.layout.radius) : title ? '3px' : '2px'};
  word-break: break-all;
  white-space: normal;
  font-weight: 600;
  ${({ color, theme }) => getColor(color, theme)};

  .tag-close {
    margin-left: 6px;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
      background-color: ${({ theme }) => addColorAlpha(theme.palette.accents_6, 0.6)};
    }
  }
`;

const TagTitle = styled('span')`
  display: inline-flex;
  padding: 0 6px;
  margin: 2px 6px 2px 0;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.background};
  background-color: ${({ theme }) => theme.palette.accents_7};
  border-radius: 1px;
  font-weight: 500;
`;

export interface TagProps extends DefaultProps {
  /** Title of the tag  */
  title?: React.ReactNode;

  /** Style of title  */
  titleStyle?: React.CSSProperties;

  /** Tag color from theme  */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | string;

  /** Append element of the tag  */
  append?: React.ReactNode;

  /** Prepend element of the tag  */
  prepend?: React.ReactNode;

  /** Radius of the tag  */
  radius?: KubedNumberSize;

  visible?: boolean;

  closable?: boolean;

  onClose?: (e: React.MouseEvent<SVGElement>) => void;
}

export const Tag = forwardRef<TagProps, 'div'>(
  (
    { radius, title, titleStyle, color, onClose, children, prepend, append, closable, ...rest },
    ref
  ) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      if ('visible' in rest) {
        setVisible(rest.visible!);
      }
    }, [rest.visible]);

    const handleClose = (e: React.MouseEvent<SVGElement>) => {
      e.stopPropagation();
      onClose?.(e);

      if (e.defaultPrevented) {
        return;
      }
      if (!('visible' in rest)) {
        setVisible(false);
      }
    };

    if (!visible) return null;

    return (
      <TagWrapper ref={ref} radius={radius} title={title} color={color} {...rest}>
        {prepend}
        {title && <TagTitle style={titleStyle}>{title}</TagTitle>}
        {children}
        {append}
        {closable && <Close variant="light" className="tag-close" onClick={handleClose} />}
      </TagWrapper>
    );
  }
);

Tag.displayName = '@kubed/components/Tag';
