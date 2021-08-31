import React from 'react';
import styled from 'styled-components';
import { DefaultProps } from '../theme';
import forwardRef from '../utils/forwardRef';

const FieldWrapper = styled('div')<FieldProps>`
  font-family: Roboto, PingFang SC, Lantinghei SC, Helvetica Neue, Helvetica, Arial, Microsoft YaHei,
    微软雅黑, STHeitiSC-Light, simsun, 宋体, WenQuanYi Zen Hei, WenQuanYi Micro Hei, sans-serif;
  line-height: 1.67;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  ${({ width }) => (width ? `flex-basis: ${width}px;flex-grow:0;flex-shrink:0;` : null)};
`;

const FieldAvatar = styled('div')`
  margin-right: 12px;
`;

const FieldContent = styled('div')``;

const FieldLabel = styled('div')`
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  color: ${({ theme }) => theme.palette.accents_5};
`;

const FieldValue = styled('div')`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.accents_8};
`;

export interface FieldProps extends DefaultProps {
  /** Field label  */
  label?: React.ReactNode;

  /** Field value  */
  value?: React.ReactNode;

  /** Field avatar  */
  avatar?: React.ReactNode;

  /** Width of Field  */
  width?: number;
}

export const Field = forwardRef<FieldProps, 'div'>(({ label, value, avatar, ...rest }, ref) => {
  return (
    <FieldWrapper ref={ref} {...rest}>
      {avatar && <FieldAvatar>{avatar}</FieldAvatar>}
      <FieldContent>
        <FieldValue>{value}</FieldValue>
        <FieldLabel>{label}</FieldLabel>
      </FieldContent>
    </FieldWrapper>
  );
});

Field.displayName = '@kubed/components/Field';
