import React from 'react';
import styled, { css } from 'styled-components';
import { Check, Close, Substract, Information } from '@kubed/icons';
import { DefaultProps, KubedTheme } from '../theme';
import forwardRef from '../utils/forwardRef';
import { addColorAlpha } from '../utils/color';

const getColors = (type, theme: KubedTheme) => {
  const { palette } = theme;
  const typeMapper = {
    default: {
      color: palette.accents_8,
      backgroundColor: palette.accents_0,
    },
    warning: {
      color: palette.colors.yellow[4],
      backgroundColor: palette.colors.yellow[0],
    },
    error: {
      color: palette.colors.red[4],
      backgroundColor: palette.colors.red[0],
    },
    info: {
      color: palette.colors.blue[4],
      backgroundColor: palette.colors.blue[0],
    },
  };
  return typeMapper[type];
};

const getColorStyle = (type = 'default', theme: KubedTheme) => {
  const { color, backgroundColor } = getColors(type, theme);
  return css`
    color: ${color};
    background-color: ${backgroundColor};

    .kubed-icon {
      color: ${color};
      fill: ${backgroundColor};
    }
  `;
};

const AlertWrapper = styled('div')<AlertProps>`
  position: relative;
  display: flex;
  padding: 12px;
  border-radius: 4px;
  ${({ type, theme }) => getColorStyle(type, theme)};
`;

const IconWrapper = styled('span')`
  display: inline-flex;
  align-self: center;
  align-items: center;
  margin-right: 12px;
  flex-shrink: 0;

  width: 20px;
  height: 20px;

  &.has-title {
    width: 32px;
    height: 32px;

    .kubed-icon {
      width: 32px;
      height: 32px;
    }
  }
`;

const AlertContent = styled('div')`
  line-height: 1.67;
`;

const AlertTitle = styled('div')`
  font-weight: 600;
`;

const CloseWrapper = styled('div')`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 8px;
  top: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => addColorAlpha(theme.palette.accents_1, 0.3)};
  }
`;

const ICONS = {
  info: <Check />,
  error: <Close />,
  warning: <Substract />,
  default: <Information />,
};

export interface AlertProps extends DefaultProps {
  /** Icon of Alert */
  icon?: React.ReactNode;

  /** Whether to show icon */
  showIcon?: boolean;

  /** Optional alert title */
  title?: React.ReactNode;

  /** Alert message */
  children: React.ReactNode;

  /** Alert color */
  type?: 'default' | 'info' | 'warning' | 'error';

  /** Whether Alert can be closed */
  closable?: boolean;
}

export const Alert = forwardRef<AlertProps, 'div'>(
  ({ children, icon, showIcon = true, title, closable, ...rest }, ref) => {
    const iconElement = icon || ICONS[rest.type || 'default'];
    const hasTitle = !!title;

    return (
      <AlertWrapper ref={ref} {...rest}>
        {showIcon && <IconWrapper className={hasTitle && 'has-title'}>{iconElement}</IconWrapper>}
        <AlertContent>
          {hasTitle && <AlertTitle>{title}</AlertTitle>}
          {children}
        </AlertContent>
        {closable && (
          <CloseWrapper>
            <Close size={20} />
          </CloseWrapper>
        )}
      </AlertWrapper>
    );
  }
);

Alert.displayName = '@kubed/components/Alert';
