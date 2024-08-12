import React from 'react';
import styled from 'styled-components';
import toast, { Toaster, ToastBar, ToastOptions } from 'react-hot-toast';
import { Close, Information } from '@kubed/icons';
// import { Loading } from '../Loading/Loading';
import { addColorAlpha } from '../utils/color';
import { useTheme } from '../theme';

export { toast as notify };

export interface NotifyProps extends ToastOptions {
  duration?: number;
  title?: React.ReactNode;
}

interface WrapType {
  type?: string;
}

const getTypeColors = (type, theme) => {
  const { palette } = theme;
  if (type === 'error') {
    return palette.error;
  }
  if (type === 'success') {
    return palette.colors.green[2];
  }
  if (type === 'loading') {
    return palette.colors.blue[2];
  }
  return palette.colors.blue[2];
};

const IconWrap = styled('div')<WrapType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  min-width: 50px;
  height: 100%;
  ${({ type, theme }) => `background-color: ${getTypeColors(type, theme)};`}
`;

const MessageWrap = styled('div')<WrapType>`
  padding: 7px 16px 7px 3px;
  justify-content: left;
  font-weight: 500;
  flex-grow: 1;

  div[role='status'] {
    justify-content: left;
    flex-direction: column;
  }

  .title-wrap {
    margin-bottom: 4px;
    ${({ type, theme }) => `color: ${getTypeColors(type, theme)};`}
  }
`;

const CloseButton = styled('div')`
  position: absolute;
  cursor: pointer;
  right: 5px;
  top: 8px;
  &:hover {
    background-color: ${({ theme }) => addColorAlpha(theme.palette.accents_1, 0.5)};
  }

  .kubed-icon {
    color: ${({ theme }) => theme.palette.accents_7};
  }
`;

const WithTitle = ({ title, message }: { title: React.ReactNode; message: React.ReactNode }) => {
  return (
    <>
      <div className="title-wrap kubed-notify-title-wrap">{title}</div>
      <div className="kubed-notify-message-wrap">{message}</div>
    </>
  );
};

export const Notify = ({ duration, title, ...restProps }: NotifyProps) => {
  const theme = useTheme();
  const { colors, error } = theme.palette;

  return (
    <Toaster
      position="top-right"
      containerClassName="kubed-notify"
      gutter={20}
      toastOptions={{
        duration,
        className: 'kubed-notify-item',
        success: { className: 'kubed-notify-success', style: { borderColor: colors.green[2] } },
        error: { className: 'kubed-notify-error', style: { borderColor: error } },
        blank: {
          className: 'kubed-notify-blank',
          style: { borderColor: colors.blue[2] },
          icon: <Information variant="light" />,
        },
        loading: {
          className: 'kubed-notify-loading',
          style: { borderColor: colors.blue[2] },
          // icon: <Loading size={15} />,
          iconTheme: {
            primary: '#ccc',
            secondary: '#eee',
          },
        },
        style: {
          padding: 0,
          borderRadius: '4px',
          width: '360px',
          borderWidth: '1px',
          borderStyle: 'solid',
          position: 'relative',
          // boxShadow: '0 8px 16px 0 rgb(72 91 127 / 20%)',
        },
      }}
      {...restProps}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => {
            return (
              <>
                <IconWrap type={t.type}>{icon}</IconWrap>
                <MessageWrap type={t.type}>{message}</MessageWrap>
                {t.type !== 'loading' && (
                  <CloseButton onClick={() => toast.dismiss(t.id)}>
                    <Close size={20} />
                  </CloseButton>
                )}
              </>
            );
          }}
        </ToastBar>
      )}
    </Toaster>
  );
};

Notify.WithTitle = WithTitle;

Notify.dispalyName = '@kubed/components/Notify';
