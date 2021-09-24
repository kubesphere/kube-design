import styled, { createGlobalStyle } from 'styled-components';
import { addColorAlpha } from '../utils/color';

export const PickerDropdown = createGlobalStyle`
  .kubed-picker-dropdown {
    position: absolute;
  }

  .kubed-picker-panel {
    font-size: 14px;
    min-width: 300px;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.background};
    box-shadow: 0 4px 16px 0 ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.25)};
  }

  .kubed-picker-content {
    th {
      font-size: 12.5px;
      color: #abb4be;
    }
  }

  .kubed-picker-cell {
    padding: 0;
  }

  .kubed-picker-cell-inner {
    display: inline-block;
    width: 32px;
    max-width: 32px;
    height: 32px;
    padding: 0;
    border: solid 1px transparent;
    border-radius: 3px;
    margin: 4px;
    color: #abb4be;
    background-color: #fff;
    line-height: 32px;
    text-align: center;
    cursor: pointer;

    &:hover {
      border-color: #f9fbfd;
      background-color: #f9fbfd;
    }
  }

  .kubed-picker-cell-in-view {
    .kubed-picker-cell-inner {
      color: #242e42;
    }
  }

  .kubed-picker-cell-today {
    .kubed-picker-cell-inner {
      border-color: #c6d1dc;
    }
  }

  .kubed-picker-cell-selected {
    .kubed-picker-cell-inner {
      background-color: ${({ theme }) => theme.palette.colors.green[2]};
      color: ${({ theme }) => theme.palette.background};
    }
  }

  .kubed-picker-header {
    display: flex;
    padding: 0 8px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    min-width: 100%;
    text-align: center;

    button {
      cursor: pointer;
      border: 0;
      line-height: 38px;
      background-color: transparent;
    }
  }

  .kubed-picker-prev-icon,.kubed-picker-next-icon,.kubed-picker-super-prev-icon,.kubed-picker-super-next-icon {
    position: relative;
    display: inline-block;
    width: 7px;
    height: 7px
  }

  .kubed-picker-prev-icon:before,.kubed-picker-next-icon:before,.kubed-picker-super-prev-icon:before,.kubed-picker-super-next-icon:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 0 solid currentColor;
    border-width: 1.5px 0 0 1.5px;
    content: ""
  }

  .kubed-picker-super-prev-icon:after,.kubed-picker-super-next-icon:after {
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 0 solid currentColor;
    border-width: 1.5px 0 0 1.5px;
    content: ""
  }

  .kubed-picker-prev-icon,.kubed-picker-super-prev-icon {
    transform: rotate(-45deg)
  }

  .kubed-picker-next-icon,.kubed-picker-super-next-icon {
    transform: rotate(135deg)
  }

  .kubed-picker-header-view {
    flex: auto;
    font-weight: 500;
    line-height: 38px;
  }

  .kubed-picker-footer {
    border-top: 1px solid ${({ theme }) => theme.palette.border};
    min-width: 100%;
    text-align: center;
    line-height: 38px;
  }
`;
