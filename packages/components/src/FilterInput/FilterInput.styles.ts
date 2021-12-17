import styled from 'styled-components';
import { Menu, MenuItem } from '../Menu/Menu';
import { addColorAlpha } from '../utils/color';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 32px;
  padding: 5px 40px;
  border-radius: 18px;
  border: solid 1px transparent;
  background-color: ${({ theme }) => theme.palette.accents_1};
  transition: all 0.3s ease-in-out;
  outline: none;

  &:hover {
    border-color: ${({ theme }) => theme.palette.border};
  }

  &.has-value,
  &.is-focused {
    background-color: ${({ theme }) => theme.palette.background};
    border-color: ${({ theme }) => theme.palette.accents_5};
  }

  .icon-search,
  .icon-clear {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 4;
  }

  .icon-search {
    left: 12px;
  }

  .icon-clear {
    right: 12px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.palette.accents_1};
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;

  .filter-input {
    flex: 1;
    width: auto;
    height: 20px;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    box-shadow: none !important;
    color: ${({ theme }) => theme.palette.accents_8};
    font-weight: 600;
  }

  .filter-tag {
    border-radius: 12px;
    padding: 1px 6px 1px 12px;
    margin-top: -2px;
    height: 24px;
    margin-right: 4px;
    background-color: ${({ theme }) => theme.palette.accents_8};
    color: ${({ theme }) => theme.palette.background};

    & + .filter-input {
      margin: 0 0 0 6px;
    }
  }

  .icon-close-tag {
    margin-left: 6px;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background-color: ${({ theme }) => addColorAlpha(theme.palette.accents_6, 0.6)};
    }
  }
`;

export const StyledMenu = styled(Menu)`
  background-color: ${({ theme }) => theme.palette.accents_8};
  padding: 0;

  .menu-item {
    border-radius: 0;
    padding: 6px 19px 6px 12px;
    color: ${({ theme }) => theme.palette.background};

    &:first-child,
    &:last-child {
      border-radius: 4px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.palette.accents_7};
    }
  }
`;
