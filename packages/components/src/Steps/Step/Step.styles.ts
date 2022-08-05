import styled from 'styled-components';
import { KubedTheme, themeUtils } from '../../theme';

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  text-align: left;
`;

export const StepBody = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const StepLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
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
  width: 32px;
  height: 32px;
  min-height: 32px;
  border-radius: 32px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.palette.accents_2};
  transition: background-color 150ms ease, border-color 150ms ease;
  background-color: ${({ theme }) => theme.palette.accents_2};
  color: ${({ theme }) => theme.palette.accents_7};
  &[data-progress='true'] {
    //background-color: #00aa72;
    border-color: #00aa72;
    //color: #fff;
  }
  &[data-completed='true'] {
    background-color: #00aa72;
    border-color: #00aa72;
    color: #fff;
  }
`;

// const getSeparatorDistanceFromIcon = (theme: KubedTheme) => {
//   theme.layout.spacing.;
// };

export const StepIconWrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  margin-bottom: ${({ theme }) => theme.layout.gapQuarter};
`;

export const StepCompletedIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  inset: 0;
`;
