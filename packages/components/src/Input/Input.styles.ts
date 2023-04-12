import styled from 'styled-components';
import { addColorAlpha } from '../utils/color';
import { KubedSizes } from '../theme';

interface InputProps {
  focused?: boolean;
  disabled?: boolean;
  width?: number;
  size?: KubedSizes;
}

export const InputWrapper = styled('div')<InputProps>`
  background-color: ${({ theme }) => theme.palette.background};
  display: inline-flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  border-radius: 3px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.palette.accents_4};
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.palette.accents_5};
  }

  &.input-focus {
    border-color: ${({ theme }) => theme.palette.colors.green[2]};
    box-shadow: 0 4px 8px 0 ${({ theme }) => addColorAlpha(theme.palette.colors.green[2], 0.2)};
  }

  &.input-disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.palette.accents_1};
    border-color: ${({ theme }) => theme.palette.accents_4};
  }

  input {
    width: 100%;
    font-weight: 600;
    outline: none;
    border-radius: 3px;
    height: ${({ size, theme }) => theme.layout.inputSizes[size]};
    padding: 6px 0;
    border: none;
    line-height: 1.67;
    color: ${({ theme }) => theme.palette.accents_7};
    transition: all 0.3s ease-in-out;
    background-color: transparent;

    &[disabled] {
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.palette.accents_1};
    }

    &:-webkit-autofill {
      background-color: #fff;
      -webkit-box-shadow: 0 0 0 1000px #fff inset;
    }
  }
`;

export const PrefixWrapper = styled('div')`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const SuffixWrapper = styled('div')`
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

export const InputGroup = styled('div')<InputProps>`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};

  &.has-addon-before {
    .input-wrapper {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &.has-addon-after {
    .input-wrapper {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;

export const AddonWrapper = styled('div')`
  background-color: ${({ theme }) => theme.palette.accents_1};
  border: 1px solid ${({ theme }) => theme.palette.accents_4};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;

  &.addon-before {
    border-right-width: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  &.addon-after {
    border-left-width: 0;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;
