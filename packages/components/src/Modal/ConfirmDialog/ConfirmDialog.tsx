import React from 'react';
import cx from 'classnames';
import styled from 'styled-components';
import Modal, { ModalFuncProps } from '../Modal';
import forwardRef from '../../utils/forwardRef';

const ConfirmWrap = styled.div`
  display: flex;
  position: relative;
`;

const IconWrap = styled.div``;

const ConfirmMain = styled.div``;

const Title = styled.div``;

const Content = styled.div``;

interface ConfirmDialogProps extends ModalFuncProps {
  afterClose?: () => void;
  close?: (...args: any[]) => void;
  autoFocusButton?: null | 'ok' | 'cancel';
}

const ConfirmDialog = forwardRef<ConfirmDialogProps, any>(
  ({ icon, title, content, width = 416, ...restProps }, ref) => {
    return (
      <Modal ref={ref} width={width} {...restProps}>
        <ConfirmWrap>
          {icon && <IconWrap>{icon}</IconWrap>}
          <ConfirmMain>
            {title && <Title>{title}</Title>}
            <Content>{content}</Content>
          </ConfirmMain>
        </ConfirmWrap>
      </Modal>
    );
  }
);

export default ConfirmDialog;
