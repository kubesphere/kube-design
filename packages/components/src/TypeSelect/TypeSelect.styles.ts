import styled, { css } from 'styled-components';

interface ControlWrapperProps {
  $expanded: boolean;
}

const getExpandedStyle = (expanded: boolean, theme) => {
  if (expanded) {
    return css`
      border-color: ${theme.palette.accents_5};
      border-bottom: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      transition: none;
      background-color: ${theme.palette.accents_1};
    `;
  }
  return null;
};

export const TypeSelectWrapper = styled('div')`
  position: relative;
  border-radius: 4px;
  cursor: pointer;
`;

export const ControlWrapper = styled('div')<ControlWrapperProps>`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.border};
  height: 64px;
  padding: 12px 64px 12px 12px;
  transition: all 0.3s ease-in-out;
  background-color: #fff;

  &:hover {
    border-color: ${({ theme }) => theme.palette.accents_5};
  }
  ${({ $expanded, theme }) => getExpandedStyle($expanded, theme)};
`;

export const DropdownArrow = styled.div`
  position: absolute;
  height: 16px;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  &:hover {
    background-color: ${({ theme }) => theme.palette.accents_1};
  }
  z-index: 999;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 63px;
  left: 0px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.accents_5};
  border-radius: 4px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-top: 0;
  background-color: ${({ theme }) => theme.palette.background};
  z-index: 9999;
  //box-sizing: content-box;
`;

export const DropdownOption = styled.div`
  height: 64px;
  padding: 12px 64px 12px 12px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.accents_0};
  }
`;
