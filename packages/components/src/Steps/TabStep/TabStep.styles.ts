import styled from 'styled-components';
import { KubedTheme, themeUtils } from '../../theme';

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  text-align: left;
  min-width: 180px;
  height: 100%;
  padding: 12px 15px;
  &[data-progress='true'] {
    background-color: ${({ theme }) => theme.palette.background};
  }
`;

export const StepBody = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const StepLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 1.67;
  text-align: left;
  color: ${({ theme }) => theme.palette.accents_8};
`;

export const StepDescription = styled.div`
  text-align: left;
  line-height: 1.67;
  color: ${({ theme }) => theme.palette.accents_5};
`;

export const StepIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 700;
  width: 40px;
  height: 40px;
  min-height: 40px;
  //border-radius: 32px;
  font-size: 16px;
  //border: 2px solid ${({ theme }) => theme.palette.accents_2};
  transition: background-color 150ms ease, border-color 150ms ease;
  //background-color: ${({ theme }) => theme.palette.accents_2};
  color: ${({ theme }) => theme.palette.accents_7};
  &[data-progress='true'] {
    &:after {
      border-color: ${({ theme }) => themeUtils.getPrimaryColor(theme)};
    }
  }
  &[data-completed='true'] {
    color: #fff;
    &:after {
      border-color: ${({ theme }) => themeUtils.getPrimaryColor(theme)};
      background-color: ${({ theme }) => themeUtils.getPrimaryColor(theme)};
    }
  }

  .kubed-icon {
    width: 40px;
    height: 40px;
  }

  &:after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: ' ';
    border: 2px solid ${({ theme }) => theme.palette.accents_3};
    background-color: ${({ theme }) => theme.palette.background};
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;

export const StepIconWrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

export const StepCompletedIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  inset: 0;
`;
