import styled from 'styled-components';
import Dialog from 'rc-dialog';
import { addColorAlpha } from '../utils/color';

export const StyledDialog = styled(Dialog)`
  top: 100px;
  margin: 0 auto;
  max-width: calc(100vw - 32px);
  position: relative;
  padding: 0 0 24px;

  .kubed-modal-close {
    position: absolute;
    top: 14px;
    right: 20px;
    z-index: 10;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.palette.accents_8};
    box-shadow: 0 8px 16px ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.28)};
    background-color: ${({ theme }) => theme.palette.accents_8};
    border-radius: 4px;
    height: 32px;
    transition: all 0.3s ease-in-out;
    padding: 3px;

    &:hover {
      box-shadow: none;
    }

    .kubed-icon {
      color: ${({ theme }) => theme.palette.background};
    }
  }

  .kubed-modal-header {
    position: relative;
    padding: 10px 40px 10px 20px;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    background-color: ${({ theme }) => theme.palette.accents_0};
  }

  .kubed-modal-title {
    color: ${({ theme }) => theme.palette.accents_8};
    min-height: 40px;
    display: flex;
  }

  .kubed-modal-content {
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.background};
    vertical-align: middle;
    outline: none;
    box-shadow: 0 4px 8px 0 rgb(72 91 127 / 20%);
  }

  .kubed-modal-footer {
    background-color: ${({ theme }) => theme.palette.accents_1};
    padding: 16px 20px;
    border-radius: 0 0 4px 4px;
    text-align: right;

    button {
      &:not(:first-child) {
        margin-left: 12px;
      }
    }
  }
`;

export const CloseIcon = styled.span``;
