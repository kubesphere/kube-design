import React from 'react';
import styled, { css } from 'styled-components';
import { Check, Close } from '@kubed/icons';
import { Loading } from '../Loading/Loading';
import forwardRef from '../utils/forwardRef';
import { DefaultProps } from '../theme';

interface WrapperProps {
  $visible?: boolean;
}

const getStyles = (visible) => {
  if (visible) {
    return css`
      visibility: visible;
      opacity: 1;
      transform: translate(0);
    `;
  }

  return css`
    visibility: hidden;
    opacity: 0;
    transform: translateY(48px);
  `;
};

const Wrapper = styled('div')<WrapperProps>`
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: center;
  z-index: 999;
  border-radius: 4px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 12px;
  background-color: ${({ theme }) => theme.palette.accents_8};
  transition: all 0.3s;

  ${({ $visible }) => getStyles($visible)};
`;

interface ButtonProps {
  $loading?: boolean;
}

const Button = styled('div')<ButtonProps>`
  display: inline-flex;
  padding: 10px 20px;
  margin-right: 12px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.background};

  &:hover {
    background-color: ${({ theme }) => theme.palette.accents_7};
  }

  ${({ $loading }) =>
    $loading &&
    css`
      background-color: ${({ theme }) => theme.palette.accents_7};
      cursor: not-allowed;
    `}
`;

export interface ActionConfirmProps extends DefaultProps {
  visible: boolean;

  /** text of ok button */
  okText?: React.ReactNode;

  /** text of cancel button */
  cancelText?: React.ReactNode;

  /** Specify a function that will be called when a user clicks the OK button */
  onOk?: () => void;

  /** Specify a function that will be called when a user clicks the OK button */
  onCancel?: () => void;

  confirmLoading?: boolean;
}

export const ActionConfirm = forwardRef<ActionConfirmProps, null>(
  ({ visible, onCancel, onOk, confirmLoading, cancelText, okText }, ref) => {
    const handleCancel = () => {
      if (onCancel) {
        onCancel();
      }
    };

    const handleOk = () => {
      if (onOk && !confirmLoading) {
        onOk();
      }
    };

    return (
      <Wrapper $visible={visible} ref={ref}>
        <Button onClick={handleCancel}>{cancelText || <Close variant="light" />}</Button>
        <Button onClick={handleOk} $loading={confirmLoading}>
          {confirmLoading ? <Loading size={14} /> : okText || <Check variant="light" />}
        </Button>
      </Wrapper>
    );
  }
);

ActionConfirm.displayName = '@kubed/components/ActionConfirm';
