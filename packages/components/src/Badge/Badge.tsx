import React from 'react';
import styled, { css } from 'styled-components';
import cx from 'clsx';
import forwardRef from '../utils/forwardRef';
import { DefaultProps, KubedSizes, KubedTheme, themeUtils } from '../theme';
import { colorToRgbValues } from '../utils/color';
import { BadgeAnchor } from './BadgeAnchor';
import { StatusDot } from '../StatusDot/StatusDot';

export { BadgeAnchor };

const getColor = (color, theme: KubedTheme, shadow) => {
  const { palette } = theme;
  if (color) {
    const colorHex = themeUtils.getColor(color, theme);
    const colorRgb = colorToRgbValues(colorHex).join(' ');
    return css`
      color: ${palette.background};
      background-color: ${themeUtils.getColor(color, theme)};
      box-shadow: ${shadow ? `0 2px 4px 0 rgb(${colorRgb} / 36%)` : null};
    `;
  }

  return css`
    background-color: ${palette.accents_1};
    color: ${palette.accents_8};
  `;
};

const BadgeWrapper = styled('div')<BadgeProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;
  white-space: normal;
  padding: 0 8px;
  border-radius: 16px;
  min-width: 32px;
  line-height: 20px;
  font-weight: 500;
  ${({ color, theme, shadow }) => getColor(color, theme, shadow)};
`;

export interface BadgeProps extends DefaultProps {
  /** Badge color from theme  */
  color?: string | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /** Display shadow or not	 */
  shadow?: boolean;

  /** Display Dot or not	 */
  dot?: boolean;

  /** Predefined button size */
  size?: KubedSizes;

  /** Disable animation status or not, only affect when dot is true   */
  motion?: boolean;
}

export const Badge = forwardRef<BadgeProps, 'div'>(({ children, dot, className, ...rest }, ref) => {
  if (dot) {
    return <StatusDot ref={ref} className="badge" {...rest} />;
  }
  return (
    <BadgeWrapper {...rest} ref={ref} className={cx('badge', className)}>
      {children}
    </BadgeWrapper>
  );
});

Badge.displayName = '@kubed/components/Badge';
