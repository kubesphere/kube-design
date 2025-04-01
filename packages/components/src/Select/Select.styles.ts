import styled, { createGlobalStyle } from 'styled-components';
import RcSelect, { SelectProps as RcSelectProps } from 'rc-select';
import React from 'react';
import { KubedSizes } from '../theme';
import { addColorAlpha } from '../utils/color';

export interface InternalSelectProps<VT> extends Omit<RcSelectProps<VT>, 'mode'> {
  suffixIcon?: React.ReactNode;
  size?: KubedSizes;
  mode?: 'multiple' | 'tags' | 'SECRET_COMBOBOX_MODE_DO_NOT_USE';
  bordered?: boolean;
}

export interface SelectProps<VT>
  extends Omit<
    InternalSelectProps<VT>,
    'inputIcon' | 'mode' | 'getInputElement' | 'getRawInputElement' | 'backfill'
  > {
  mode?: 'multiple' | 'tags';
  showArrow?: boolean;
}

export const SelectStyles = createGlobalStyle`
  .kubed-select-dropdown-hidden {
    display: none;
  }
  .kubed-select-dropdown {
    position: absolute;
    z-index: 1000;
    padding: 4px 0;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.accents_8};
    box-shadow: 0 4px 8px 0 ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.16)};
  }

  .kubed-select-item {
    position: relative;
    padding: 6px 12px;
    color: ${({ theme }) => theme.palette.background};
    line-height: 1.67;
    cursor: pointer;
    font-family: Roboto,PingFang SC,Lantinghei SC,Helvetica Neue,Helvetica,Arial,Microsoft YaHei,微软雅黑,STHeitiSC-Light,simsun,宋体,WenQuanYi Zen Hei,WenQuanYi Micro Hei,sans-serif;
    user-select: none;

    &.kubed-select-item-option-selected,
    &:hover {
      background-color: ${({ theme }) => theme.palette.accents_7};
      font-weight: 600;
    }
  }

  .kubed-select-item-option {
    display: flex;
  }

  .kubed-select-selection-wrap {
    min-height: 30px;
  }
  
  .kubed-select-item-option-content {
    flex-grow: 1;
    word-break: break-all;
  }

  .kubed-select-item-option-state {
    display: inline-flex;
    align-items: center;

    .kubed-icon {
      color: ${({ theme }) => theme.palette.colors.green[2]};
    }
  }
`;

export const Empty = styled.div`
  color: ${({ theme }) => theme.palette.background};
  padding: 20px 0;
  text-align: center;
`;

export const StyledSelect = styled(RcSelect)<SelectProps<any>>`
  display: inline-block;
  line-height: 1.67;
  position: relative;
  cursor: pointer;
  min-width: 100px;

  &.kubed-select-open {
    .kubed-select-selector {
      border-color: ${({ theme }) => theme.palette.colors.green[2]} !important;
    }
  }

  &.kubed-select-show-search {
    input {
      cursor: auto !important;
    }
  }

  .kubed-select-selection-overflow {
    overflow-x: hidden;
    max-width: 100%;
  }

  &:hover {
    .kubed-select-clear {
      opacity: 1;
    }
  }

  .kubed-select-selector {
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    width: 100%;
    padding: 0 11px;
    background-color: ${({ theme }) => theme.palette.background};
    border: 1px solid ${({ theme }) => theme.palette.accents_4};
    border-radius: 4px;
    transition: border-color 0.3s ease-in-out;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.accents_7};

    &:hover {
      border-color: ${({ theme }) => theme.palette.accents_5};
    }

    .kubed-select-selection-search-input {
      margin: 0;
      padding: 0;
      background: 0 0;
      outline: none;
      border: none;
      appearance: none;
    }
  }

  .kubed-select-selection-item {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 30px;
  }

  .kubed-select-arrow {
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 11px;
    width: 16px;
    height: 16px;
    pointer-events: none;
    text-align: center;
    transform: translateY(-50%);
  }

  .kubed-select-clear {
    position: absolute;
    top: 50%;
    right: 11px;
    z-index: 1;
    display: inline-block;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    text-align: center;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.background};
    opacity: 0;
    transition: all 0.1s ease; // todo

    &:hover {
      background-color: ${({ theme }) => theme.palette.accents_1};
    }
  }

  .kubed-select-selection-placeholder {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .kubed-select-selection-overflow {
    position: relative;
    display: flex;
    flex: auto;
    flex-wrap: wrap;
    max-width: 100%;
    cursor: text;
    line-height: 24px;
  }

  .kubed-select-selection-overflow-item {
    flex: none;
    align-self: center;
    max-width: 100%;
  }

  &.kubed-select-single {
    &.kubed-select-show-arrow {
      .kubed-select-selection-item,
      .kubed-select-selection-placeholder {
        padding-right: 18px;
      }

      .kubed-select-selection-search {
        right: 25px !important;
      }
    }

    .kubed-select-selection-wrap {
      position: relative;
      flex: 1;
      display: flex;
      width: 100%;
      position: relative;
      min-width: 0;
      max-width: 100%;
    }

    .kubed-select-selector {
      height: 32px; // to

      input {
        cursor: pointer;
      }

      .kubed-select-selection-item {
        position: relative;
        user-select: none;
      }

      .kubed-select-selection-search {
        width: 100%;
        position: absolute;
        top: 0;
        right: 11px;
        bottom: 0;
        left: 0;
      }

      .kubed-select-selection-search-input {
        width: calc(100% - 18px);
        height: 30px;
        line-height: 30px;
      }

      .kubed-select-selection-placeholder {
        padding: 0;
        line-height: 30px;
        transition: all 0.3s;
      }
    }
  }

  &.kubed-select-multiple {
    &.kubed-select-show-arrow {
      .kubed-select-selection-wrap {
        max-width: calc(100% - 24px);
      }
    }
    &.kubed-select-allow-clear {
      .kubed-select-selector {
        padding-right: 24px;
      }
    }

    .kubed-select-selector {
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      padding: 1px 4px;
    }
    .kubed-select-selection-wrap {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }

    .kubed-select-selection-placeholder {
      position: relative;
      /* line-height: 30px;
      position: absolute;
      top: 50%;
      right: 11px;
      left: 11px;
      transform: translateY(-50%); */
      /* transition: all 0.3s; */
    }

    .kubed-select-selection-item {
      position: relative;
      color: ${({ theme }) => theme.palette.background};
      background-color: ${({ theme }) => theme.palette.accents_8};
      font-weight: 600;
      border-radius: 2px;
      display: inline-flex;
      height: 20px;
      line-height: 20px;
      padding: 0 4px;
      align-items: center;
      margin-right: 5px;
    }

    .kubed-select-selection-item-remove {
      cursor: pointer;
      display: inline-flex;
      margin-left: 8px;
      .kubed-icon {
        color: #fff;
        fill: #fff;
      }
    }

    .kubed-select-selection-search {
      position: relative;
      max-width: 100%;
      margin-top: 2px;
      margin-bottom: 2px;
      margin-inline-start: 7px;
    }

    .kubed-select-selection-search-input {
      height: 20px;
      line-height: 20px;
      min-width: 100%;
    }

    .kubed-select-selection-overflow-item-suffix {
      overflow-x: hidden;
    }

    .kubed-select-selection-search-mirror {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      white-space: pre;
      visibility: hidden;
      height: 20px;
      line-height: 20px;
    }
  }
`;
