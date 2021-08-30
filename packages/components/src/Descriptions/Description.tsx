import React from 'react';
import styled, { css } from 'styled-components';
import { DefaultProps, KubedTheme } from '../theme';
import forwardRef from '../utils/forwardRef';

const getStyles = (variant, theme: KubedTheme) => {
  const { palette } = theme;
  if (variant === 'unstyled') {
    return css`
      padding: 6px 0;
      overflow: hidden;

      .desc-label {
        width: 110px;
        padding-right: 5px;

        &:after {
          content: ': ';
        }
      }
      .desc-content {
        white-space: pre-wrap;
      }
    `;
  }
  return css`
    padding: 12px 32px;
    border-radius: 60px;
    background-color: ${palette.accents_1};
    border: 1px solid ${palette.border};
    &:not(:last-child) {
      margin-bottom: 8px;
    }

    .desc-label {
      width: 317px;
    }

    .desc-content {
      margin-left: 75px;
    }
  `;
};

const DescWrapper = styled('div')<DescriptionProps>`
  line-height: 1.67;
  ${({ variant, theme }) => getStyles(variant, theme)};
  font-family: Roboto, PingFang SC, Lantinghei SC, Helvetica Neue, Helvetica, Arial, Microsoft YaHei,
    微软雅黑, STHeitiSC-Light, simsun, 宋体, WenQuanYi Zen Hei, WenQuanYi Micro Hei, sans-serif;
`;

const Label = styled('div')`
  display: inline-block;
  color: ${({ theme }) => theme.palette.accents_6};
  word-break: break-all;
  white-space: normal;
`;

const Content = styled('div')`
  display: inline-block;
`;

export interface DescriptionProps extends DefaultProps {
  /** Controls Description appearance */
  variant?: 'default' | 'unstyled';

  /** Label of Description */
  label?: React.ReactNode;

  /** Styles of label element */
  labelStyle?: React.CSSProperties;

  /** Styles of content */
  contentStyle?: React.CSSProperties;

  /** Value of Description */
  children?: React.ReactNode;
}

export const Description = forwardRef<DescriptionProps, 'div'>(
  ({ variant, label, labelStyle, contentStyle, children, ...rest }, ref) => {
    const wrapperProps = { variant, ...rest };
    return (
      <DescWrapper ref={ref} {...wrapperProps}>
        <Label style={labelStyle} className="desc-label">
          {label}
        </Label>
        <Content style={contentStyle} className="desc-content">
          {children}
        </Content>
      </DescWrapper>
    );
  }
);

Description.displayName = '@kubed/components/Description';
