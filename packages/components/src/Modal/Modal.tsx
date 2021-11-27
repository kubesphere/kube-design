import React, { RefObject, useEffect, useImperativeHandle, useState } from 'react';
import cx from 'classnames';
import { isNull } from 'lodash';
import { Close } from '@kubed/icons';
import { StyledDialog } from './Modal.styles';
import { ButtonProps, Button } from '../Button/Button';
import { useLocales } from '../ConfigProvider/LocaleProvider/LocaleContext';
import { getTransitionName } from '../utils/motion';
import { Field } from '../Entity/Field';
import forwardRef from '../utils/forwardRef';

type getContainerFunc = () => HTMLElement;

export interface ModalProps {
  /** Mounts modal if true */
  visible?: boolean;

  /** Whether to apply loading visual effect for OK button or not */
  confirmLoading?: boolean;

  /** Modal title, displayed in header before close button */
  title?: React.ReactNode | string;

  /** Modal description */
  description?: React.ReactNode | string;

  /** Modal Icon */
  titleIcon?: React.ReactNode;

  /** Show or hide close button, modal still can be closed with escape key and by clicking outside */
  closable?: boolean;

  /** Specify a function that will be called when a user clicks the OK button */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;

  /** Specify a function that will be called when a user clicks mask, close button on top right or Cancel button */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;

  /** Specify a function that will be called when modal is closed completely */
  afterClose?: () => void;

  /** Centered Modal */
  centered?: boolean;

  /** Width of the modal dialog */
  width?: string | number;

  /** Custom header content */
  header?: React.ReactNode;

  /** Custom footer content */
  footer?: React.ReactNode;

  /** 确认按钮文字 */
  okText?: React.ReactNode;

  /** 取消按钮文字 */
  cancelText?: React.ReactNode;

  /** Whether to close the modal dialog when the mask (area outside the modal) is clicked */
  maskClosable?: boolean;

  /** Force render Modal */
  forceRender?: boolean;

  /** Props of the ok button */
  okButtonProps?: ButtonProps;

  /** Props of the cancel button */
  cancelButtonProps?: ButtonProps;

  /** Whether to unmount child components on onClose */
  destroyOnClose?: boolean;
  style?: React.CSSProperties;
  wrapClassName?: string;
  maskTransitionName?: string;
  transitionName?: string;
  className?: string;
  getContainer?: string | HTMLElement | getContainerFunc | false;

  /** Modal z-index property */
  zIndex?: number;
  bodyStyle?: React.CSSProperties;

  /** Style for modal's mask element */
  maskStyle?: React.CSSProperties;

  /** Whether show mask or not */
  mask?: boolean;

  /** Whether support press esc to close */
  keyboard?: boolean;
  wrapProps?: any;
  closeIcon?: React.ReactNode;
  modalRender?: (node: React.ReactNode) => React.ReactNode;
  focusTriggerAfterClose?: boolean;
}

interface ModalRef {
  close?: () => void;
}

export type ModalType = 'info' | 'success' | 'error' | 'warn' | 'warning' | 'confirm' | 'open';

export interface ModalFuncProps extends Omit<ModalProps, 'forceRender' | 'destroyOnClose'> {
  content?: React.ReactNode;
  icon?: React.ReactNode;
  type?: ModalType;
  autoFocusButton?: null | 'ok' | 'cancel';
  okCancel?: boolean;
  id?: string;
  ref?: RefObject<ModalRef>;
}

const Modal = forwardRef<ModalProps, any>((props, ref) => {
  const { Modal: locales } = useLocales();

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onCancel } = props;
    onCancel?.(e);
  };

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { onOk } = props;
    onOk?.(e);
  };

  const renderHeader = () => {
    const { header, title, description, titleIcon } = props;
    if (header || isNull(header)) return header;

    return <Field value={title} label={description} avatar={titleIcon} />;
  };

  const renderFooter = () => {
    const { footer, okText, cancelText, confirmLoading, cancelButtonProps, okButtonProps } = props;
    if (footer || isNull(footer)) return footer;

    return (
      <>
        <Button onClick={handleCancel} radius="xl" {...cancelButtonProps}>
          {cancelText || locales.cancelText}
        </Button>
        <Button
          loading={confirmLoading}
          onClick={handleOk}
          radius="xl"
          shadow
          color="secondary"
          {...okButtonProps}
        >
          {okText || locales.okText}
        </Button>
      </>
    );
  };

  const {
    visible,
    centered = true,
    getContainer,
    closeIcon,
    focusTriggerAfterClose = true,
    width = 600,
    wrapClassName,
    ...restProps
  } = props;
  const [internalVisible, setInternalVisible] = useState(visible);

  useEffect(() => {
    setInternalVisible(visible);
  }, [visible]);

  useImperativeHandle(ref, () => ({
    // only use for imperative mode
    close: (callback) => {
      setInternalVisible(false);
      return callback && callback();
    },
  }));

  const renderCloseIcon = <>{closeIcon || <Close size={24} />}</>;

  return (
    <StyledDialog
      {...restProps}
      prefixCls="kubed-modal"
      wrapClassName={cx(wrapClassName, { 'kubed-modal-centered': centered })}
      focusTriggerAfterClose={focusTriggerAfterClose}
      visible={internalVisible}
      width={width}
      closeIcon={renderCloseIcon}
      onClose={handleCancel}
      title={renderHeader()}
      footer={renderFooter()}
      transitionName={getTransitionName('kubed', 'zoom', props.transitionName)}
      maskTransitionName={getTransitionName('kubed', 'fade', props.maskTransitionName)}
    />
  );
});

Modal.displayName = 'kubed/components/Modal';

export default Modal;
