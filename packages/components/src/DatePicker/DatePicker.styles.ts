import { createGlobalStyle } from 'styled-components';
import { addColorAlpha } from '../utils/color';

export const PickerDropdown = createGlobalStyle`
  .kubed-picker {
    display: inline-flex;
    min-width: 200px;
    border-radius: 3px;
    height: 32px;
    padding: 6px 12px;
    border: 1px solid ${({ theme }) => theme.palette.accents_4};
    line-height: 1.67;
    color: ${({ theme }) => theme.palette.accents_7};
    outline: none;
    transition: all 0.3s ease-in-out;

    &.kubed-picker-focused {
      border-color: ${({ theme }) => theme.palette.colors.green[2]} !important;
      box-shadow: 0 4px 8px 0 ${({ theme }) =>
        addColorAlpha(theme.palette.colors.green[2], 0.2)} !important;
    }

    &:hover {
      border-color: ${({ theme }) => theme.palette.accents_5};
    }

    input {
      font-weight: 600;
      border: none;
      outline: none;
      padding: 0;
      width: 100%;
      line-height: 1;

      &[disabled] {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.palette.accents_1};
      }
    }
  }

  .kubed-picker-input {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
  }

  .kubed-picker-dropdown {
    position: absolute;
  }

  .kubed-picker-dropdown-hidden {
    display: none;
  }

  .kubed-picker-input {
    position: relative;

    &:hover {
      .kubed-picker-clear {
        opacity: 1;
      }
    }
  }

  .kubed-picker-suffix {
    align-self: center;
    margin-left: 4px;
    line-height: 1;
    pointer-events: none;
  }

  .kubed-picker-clear {
    position: absolute;
    height: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0;
    right: 0;
    background-color: ${({ theme }) => theme.palette.background};
  }

  .kubed-picker-range-separator {
    align-items: center;
    padding: 0 8px;
    line-height: 1;
  }

  .kubed-picker-panel {
    font-size: 14px;
    min-width: 300px;
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.background};
    box-shadow: 0 4px 16px 0 ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.25)};
  }

  .kubed-picker-datetime-panel {
    display: flex;

    .kubed-picker-time-panel {
      display: flex;
      flex-direction: column;
      width: auto;
      border-left: 1px solid ${({ theme }) => theme.palette.border};
    }
  }

  .kubed-picker-time-panel {
    .kubed-picker-header-view {
      line-height: 40px;
    }

    .kubed-picker-content {
      display: flex;
      flex: auto;
      height: 224px;
    }
  }

  .kubed-picker-content {
    width: 100%;
    text-align: center;
    border-collapse: collapse;

    th {
      font-size: 12.5px;
      color: #abb4be;
    }

    td {
      position: relative;
    }
  }

  .kubed-picker-year-panel .kubed-picker-cell-inner, .kubed-picker-quarter-panel .kubed-picker-cell-inner, .kubed-picker-month-panel .kubed-picker-cell-inner {
    width: 60px;
  }

  .kubed-picker-week-panel-row {
    &:hover {
      td {
        background-color: #f9fbfd;
      }
    }
  }

  .kubed-picker-week-panel-row-selected {
    td, .kubed-picker-cell-inner {
      background-color: ${({ theme }) => theme.palette.colors.green[2]} !important;
      color: ${({ theme }) => theme.palette.background} !important;
    }
  }

  .kubed-picker-cell {
    padding: 0;
    min-width: 32px;
    background-color: #fff;
  }

  .kubed-picker-cell-inner {
    display: inline-block;
    min-width: 32px;
    height: 32px;
    padding: 0;
    border: solid 1px transparent;
    border-radius: 3px;
    margin: 4px 0;
    color: #abb4be;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    z-index: 2;
    position: relative;

    &:hover {
      //border-color: #f9fbfd;
      background-color: #f9fbfd;
    }
  }

  .kubed-picker-cell-range-hover-end,
  .kubed-picker-cell-range-hover
  {
    .kubed-picker-cell-inner {
      &:hover {
        background-color: transparent;
      }
    }
  }

  .kubed-picker-cell-in-view {
    .kubed-picker-cell-inner {
      color: ${({ theme }) => theme.palette.accents_8};
    }
  }

  .kubed-picker-cell-today {
    .kubed-picker-cell-inner {
      border-color: #c6d1dc;
    }
  }

  .kubed-picker-cell-selected .kubed-picker-cell-inner,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-start .kubed-picker-cell-inner {
    background-color: ${({ theme }) => theme.palette.colors.green[2]};
    color: ${({ theme }) => theme.palette.background};
    border-color: transparent;
  }

  .kubed-picker-header {
    display: flex;
    padding: 0 8px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    min-width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.palette.accents_5};

    button {
      cursor: pointer;
      border: 0;
      line-height: 38px;
      background-color: transparent;

      &:hover {
        color: ${({ theme }) => theme.palette.accents_8};
      }
    }
  }

  .kubed-picker-header-view {
    button {
      color: ${({ theme }) => theme.palette.accents_8};

      &:hover {
        font-weight: 500;
      }
    }
  }

  .kubed-picker-body {
    padding: 0 6px;
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

  // time picker
  .kubed-picker-time-panel-column {
    flex: 1 0 auto;
    width: 56px;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    text-align: left;
    list-style: none;
    transition: background .3s;

    &:not(:first-child) {
      border-left: 1px solid ${({ theme }) => theme.palette.border};
    }

    li {
      margin: 0;
      padding: 0;
    }
  }

  .kubed-picker-time-panel-cell-inner {
    display: block;
    width: 100%;
    height: 28px;
    padding-left: 14px;
    color: ${({ theme }) => theme.palette.accents_8};
    cursor: pointer;
    line-height: 28px;

    &:hover {
      background-color: #f9fbfd;
    }
  }

  .kubed-picker-time-panel-cell-selected {
    .kubed-picker-time-panel-cell-inner {
      background-color: ${({ theme }) => theme.palette.accents_1};
    }
  }

  .kubed-picker-ranges {
    margin-bottom: 0;
    padding: 4px 12px;
    overflow: hidden;
    line-height: 34px;
    text-align: left;
    list-style: none;

    & > li {
      display: inline-block;
    }

    .kubed-picker-ok {
      float: right;
      margin-left: 8px;
    }
  }

  .kubed-picker-panel-container {
    overflow: hidden;
    vertical-align: top;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.palette.background};
    box-shadow: 0 4px 16px 0 ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.25)};
    transition: margin .3s;

    .kubed-picker-panel {
      vertical-align: top;
      background: 0 0;
      border-width: 0 0 1px;
      border-radius: 0;
      box-shadow: none;
    }

    .kubed-picker-panels {
      display: inline-flex;
      flex-wrap: nowrap;
    }
  }

  // range
  .kubed-picker-range {
    position: relative;

    .kubed-picker-clear {
      right: 12px;
    }

    &:hover {
      .kubed-picker-clear {
        opacity: 1;
      }
    }
  }

  .kubed-picker-cell {
    &:before {
      position: absolute;
      top: 50%;
      right: 0;
      left: 0;
      z-index: 1;
      height: 32px;
      transform: translateY(-50%);
      content: '';
      transition: all .3s;
    }
  }

  .kubed-picker-cell-in-view.kubed-picker-cell-range-start:before {
    left: 50%;
  }

  .kubed-picker-cell-in-view.kubed-picker-cell-range-end:before {
    right: 50%;
  }

  .kubed-picker-cell-in-view.kubed-picker-cell-in-range {
    position: relative
  }

  .kubed-picker-cell-in-view.kubed-picker-cell-range-start:not(.kubed-picker-cell-range-start-single):before,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-end:not(.kubed-picker-cell-range-end-single):before,
  .kubed-picker-cell-in-view.kubed-picker-cell-in-range:before {
    background: ${({ theme }) => theme.palette.colors.green[0]};
  }

  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-start:not(.kubed-picker-cell-in-range):not(.kubed-picker-cell-range-start):not(.kubed-picker-cell-range-end),
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-end:not(.kubed-picker-cell-in-range):not(.kubed-picker-cell-range-start):not(.kubed-picker-cell-range-end),
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-start.kubed-picker-cell-range-start-single,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-start.kubed-picker-cell-range-start.kubed-picker-cell-range-end.kubed-picker-cell-range-end-near-hover,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-end.kubed-picker-cell-range-start.kubed-picker-cell-range-end.kubed-picker-cell-range-start-near-hover,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-end.kubed-picker-cell-range-end-single,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover:not(.kubed-picker-cell-in-range) {
    &:after {
      position: absolute;
      top: 50%;
      z-index: 0;
      height: 32px;
      border-top: 1px dashed ${({ theme }) => theme.palette.colors.green[2]};
      border-bottom: 1px dashed ${({ theme }) => theme.palette.colors.green[2]};
      transform: translateY(-50%);
      transition: all .3s;
      content: ""
    }
  }

  tr>.kubed-picker-cell-in-view.kubed-picker-cell-range-hover:first-child:after,
  tr>.kubed-picker-cell-in-view.kubed-picker-cell-range-hover-end:first-child:after,
  .kubed-picker-cell-in-view.kubed-picker-cell-start.kubed-picker-cell-range-hover-edge-start.kubed-picker-cell-range-hover-edge-start-near-range:after,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-edge-start:not(.kubed-picker-cell-range-hover-edge-start-near-range):after,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-start:after {
    left: 6px;
    border-left: 1px dashed ${({ theme }) => theme.palette.colors.green[2]};
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
  }

  tr>.kubed-picker-cell-in-view.kubed-picker-cell-range-hover:last-child:after,
  tr>.kubed-picker-cell-in-view.kubed-picker-cell-range-hover-start:last-child:after,
  .kubed-picker-cell-in-view.kubed-picker-cell-end.kubed-picker-cell-range-hover-edge-end.kubed-picker-cell-range-hover-edge-end-near-range:after,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-edge-end:not(.kubed-picker-cell-range-hover-edge-end-near-range):after,
  .kubed-picker-cell-in-view.kubed-picker-cell-range-hover-end:after {
    right: 6px;
    border-right: 1px dashed ${({ theme }) => theme.palette.colors.green[2]};
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
  }

  .kubed-picker-cell-range-hover-start:after,
  .kubed-picker-cell-range-hover-end:after,
  .kubed-picker-cell-range-hover:after {
    right: 0;
    left: 2px
  }

  .kubed-picker-cell-disabled {
    pointer-events: none;
    color: ${({ theme }) => theme.palette.accents_4};

    &:before {
      background-color: rgba(0, 0, 0, .04);
    }
  }
`;
