import styled, { css } from 'styled-components';
import { Button, ButtonProps } from '../Button/Button';
import { KubedTheme } from '../theme';

interface ControlProps {
  theme?: KubedTheme;
  disabled?: boolean;
  checked?: boolean;
}

export const SwitchWrap = styled('div')`
  display: inline-flex;
  align-items: center;
`;

const getStateStyles = (checked, theme) => {
  if (checked) {
    return css`
      border-color: transparent;
      background-color: ${theme.palette.colors.green[2]} !important;
      box-shadow: 0 1px 2px 0 rgb(0 41 27 / 4%);

      &:before {
        left: calc(100% - 12px - 5px);
        //right: 5px;
      }

      &:hover {
        background-color: ${theme.palette.colors.green[3]} !important;
      }
    `;
  }

  return null;
};

export const StyledInput = styled('input')`
  outline: 0;
  appearance: none;
  display: inline-block;
  min-width: 40px;
  min-height: 20px;
  width: 100%;
  margin: 0;
  opacity: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  position: absolute;
  top: 0;
  left: 0;
`;

export const SwitchControl = styled('div')<ControlProps>`
  position: relative;
  display: inline-block;
  height: 20px;
  min-width: 40px;
  border-radius: 100px;
  line-height: 20px;
  cursor: pointer;
  user-select: none;
  background-color: ${({ theme }) => theme.palette.accents_2};
  transition: background-color 0.2s cubic-bezier(0, 0, 0.2, 1) 0.05s;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  &:before {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.palette.background};
    top: 50%;
    width: 12px;
    height: 12px;
    left: 5px;
    border-radius: 18px;
    transform: translateY(-50%);
    box-shadow: 0 1px 2px 0 rgb(0 41 27 / 8%);
    transition: left 200ms cubic-bezier(0, 0, 0.2, 1) 0s;
  }

  ${({ checked, theme }) => getStateStyles(checked, theme)};
`;

export const TextWrap = styled('div')<ControlProps>`
  color: #fff;
  ${({ checked }) => (checked ? 'margin: 0 22px 0 7px;' : 'margin: 0 7px 0 22px; color:#5f708a;')};
  transition: margin 0.2s;
`;

export const LabelWrap = styled.label`
  margin-left: 8px;
  cursor: pointer;
`;

export const StyledButton = styled(Button)<ButtonProps>`
  &.switch-button {
    background-color: #c1c9d1;
    border-color: transparent;

    &:hover {
      background-color: ${({ theme }) => theme.palette.accents_1};
      border-color: ${({ theme }) => theme.palette.border};
    }
  }

  &.switch-button-checked {
    &:hover {
      border-color: #c1c9d1;
    }
  }
`;

export const ButtonControl = styled('div')<ControlProps>`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 5.8px;
  background: ${({ theme }) => theme.palette.background};
  border-radius: 100px;

  &:before {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.background};
    box-shadow: 0 1px 2px 0 rgb(33 42 51 / 4%), 0 1px 1px 0 rgb(33 42 51 / 4%);
    transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    top: 50%;
    transform: translateY(-50%);

    ${({ checked }) => (checked ? 'left: 12px;' : 'left: 0px;')};
  }

  input {
    width: 24px !important;
    height: 0;
    min-height: 0;
    min-width: 24px;
  }
`;
