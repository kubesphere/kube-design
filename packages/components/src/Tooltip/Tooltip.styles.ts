import styled from 'styled-components';
import Tippy, { TippyProps } from '@tippyjs/react';
import { addColorAlpha } from '../utils/color';

export const StyledTippy = styled(Tippy)<TippyProps>`
  &.tippy-box {
    position: relative;
    background-color: ${({ theme }) => theme.palette.accents_8};
    color: ${({ theme }) => theme.palette.background};
    border-radius: 4px;
    font-size: 12px;
    line-height: 20px;
    outline: 0;
    transition-property: transform, visibility, opacity;
    box-shadow: 0 4px 8px ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.2)};

    &[data-animation='fade'][data-state='hidden'] {
      opacity: 0;
    }
    [data-tippy-root] {
      max-width: calc(100vw - 10px);
    }

    &[data-inertia][data-state='visible'] {
      transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
    }

    &[data-placement^='top'] > .tippy-arrow {
      bottom: 0;
      &:before {
        bottom: -7px;
        left: 0;
        border-width: 8px 8px 0;
        border-top-color: initial;
        transform-origin: center top;
      }
    }

    &[data-placement^='bottom'] > .tippy-arrow {
      top: 0;
      &:before {
        top: -7px;
        left: 0;
        border-width: 0 8px 8px;
        border-bottom-color: initial;
        transform-origin: center bottom;
      }
    }

    &[data-placement^='left'] > .tippy-arrow {
      right: 0;
      &:before {
        border-width: 8px 0 8px 8px;
        border-left-color: initial;
        right: -7px;
        transform-origin: center left;
      }
    }

    &[data-placement^='right'] > .tippy-arrow {
      left: 0;
      &:before {
        left: -7px;
        border-width: 8px 8px 8px 0;
        border-right-color: initial;
        transform-origin: center right;
      }
    }

    .tippy-arrow {
      width: 14px;
      height: 14px;
      color: ${({ theme }) => theme.palette.accents_8};
      &:before {
        content: '';
        position: absolute;
        border-color: transparent;
        border-style: solid;
      }
    }

    .tippy-content {
      position: relative;
      //padding: 5px 9px;
      padding: 8px 12px;
      z-index: 1;
    }

    // animation
    &[data-animation='shift-toward-subtle'][data-state='hidden'] {
      opacity: 0;
    }
    &[data-animation='shift-toward-subtle'][data-state='hidden'][data-placement^='top'][data-state='hidden'] {
      transform: translateY(-5px);
    }
    &[data-animation='shift-toward-subtle'][data-state='hidden'][data-placement^='bottom'][data-state='hidden'] {
      transform: translateY(5px);
    }
    &[data-animation='shift-toward-subtle'][data-state='hidden'][data-placement^='left'][data-state='hidden'] {
      transform: translateX(-5px);
    }
    &[data-animation='shift-toward-subtle'][data-state='hidden'][data-placement^='right'][data-state='hidden'] {
      transform: translateX(5px);
    }
  }
`;
