import styled, { css, keyframes } from 'styled-components';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import classNames from 'classnames';

import { addColorAlpha } from '../utils/color';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideInFromTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideOutToTop = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const slideInFromBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const slideOutToBottom = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;

const slideInFromLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideOutToLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const slideInFromRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOutToRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const baseStyles = css`
  position: fixed;
  z-index: 999;
  gap: 1rem;
  background: ${({ theme }) => theme.palette.background};
  box-shadow: var(--shadow-lg);
  transition: ease-in-out;
  &[data-state='open'] {
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
  &[data-state='closed'] {
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
`;

const topStyles = css`
  left: 0px;
  right: 0px;
  top: 0;
  /* border-bottom: 1px solid; */
  &[data-state='open'] {
    animation-name: ${fadeIn}, ${slideInFromTop};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${slideOutToTop};
  }
`;

const bottomStyles = css`
  left: 0px;
  right: 0px;
  bottom: 0;
  /* border-top: 1px solid; */
  &[data-state='open'] {
    animation-name: ${fadeIn}, ${slideInFromBottom};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${slideOutToBottom};
  }
`;

const leftStyles = css`
  top: 0px;
  bottom: 0px;
  left: 0;
  height: 100%;
  width: 75%;
  /* border-right: 1px solid; */
  max-width: 16rem; /* equivalent to sm:max-w-sm */
  &[data-state='open'] {
    animation-name: ${fadeIn}, ${slideInFromLeft};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${slideOutToLeft};
  }
`;

const rightStyles = css`
  top: 0px;
  bottom: 0px;
  right: 0;
  height: 100%;
  width: 75%;
  /* border-left: 1px solid; */
  max-width: 16rem; /* equivalent to sm:max-w-sm */
  &[data-state='open'] {
    animation-name: ${fadeIn}, ${slideInFromRight};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${slideOutToRight};
  }
`;

const getSideStyles = (side: string) => {
  switch (side) {
    case 'top':
      return topStyles;
    case 'bottom':
      return bottomStyles;
    case 'left':
      return leftStyles;
    case 'right':
      return rightStyles;
    default:
      return rightStyles;
  }
};

export const StyledSheetContent = styled(SheetPrimitive.Content).attrs(({ className }) => ({
  className: classNames(className, 'kubed-sheet-content'),
}))<{
  side: string;
  width?: string | number;
}>`
  ${baseStyles}
  ${({ side }) => getSideStyles(side)}

${({ width }) =>
    width && `min-width: ${typeof width === 'number' ? `${width}px` : width.toString()};`}

  .kubed-sheet-close {
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

  .kubed-sheet-header {
    position: relative;
    padding: 10px 40px 10px 20px;
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};
    background-color: ${({ theme }) => theme.palette.accents_0};
  }

  .kubed-sheet-title {
    color: ${({ theme }) => theme.palette.accents_8};
    min-height: 40px;
    display: flex;
  }

  &.kubed-sheet-content {
    background-color: ${({ theme }) => theme.palette.background};
    vertical-align: middle;
    outline: none;
    box-shadow: 0 8px 16px ${({ theme }) => addColorAlpha(theme.palette.accents_8, 0.28)};
  }

  .kubed-sheet-footer {
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

export const StyledSheetOverlay = styled(SheetPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.8);

  &[data-state='open'] {
    animation: fadeIn 0.3s;
  }

  &[data-state='closed'] {
    animation: fadeOut 0.3s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const StyledSheetHeader = styled.div.attrs(({ className }: { className: string }) => ({
  className: classNames(className, 'kubed-sheet-header'),
}))`
  display: flex;
  flex-direction: column;
  margin-top: 0.125rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const StyledSheetFooter = styled.div.attrs(({ className }: { className: string }) => ({
  className: classNames(className, 'kubed-sheet-footer'),
}))`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledSheetTitle = styled(SheetPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.accents_8};
`;

export const StyledSheetDescription = styled(SheetPrimitive.Description)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.accents_5};
`;

export const StyledHeaderClose = styled(SheetPrimitive.Close)`
  position: absolute;
  top: 14px;
  right: 20px;
  z-index: 10;
  padding: 3px;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
`;
