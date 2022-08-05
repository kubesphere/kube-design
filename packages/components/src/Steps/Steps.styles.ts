import styled, { css } from 'styled-components';

export const StepsRoot = styled.div`
  &.steps-vertical {
    display: flex;

    .steps-wrapper {
      flex-direction: column;
      align-items: unset;
    }

    .steps-tab {
      flex-direction: column;
      height: auto;
      align-items: flex-start;
      padding: 12px 0 12px 12px;
    }

    .steps-content {
      padding-top: 0;
      padding-left: 16px;
    }
  }
`;

export const StepsWrapper = styled.div`
  display: flex;
  align-items: center;

  &.steps-tab {
    background-color: ${({ theme }) => theme.palette.accents_1};
    height: 64px;
    padding: 0 20px;
  }
`;

export const StepsContent = styled.div`
  padding-top: 16px;
`;

interface SeparatorProps {
  $active: boolean;
  $vertical: boolean;
}

const getSeparatorStyles = (vertical) => {
  if (vertical) {
    return css`
      flex: 1;
      margin-left: 15px;
      width: 2px;
      min-height: 24px;
      margin-top: 5px;
      margin-bottom: 8px;
    `;
  }
  return css`
    flex: 1 1 0%;
    height: 2px;
    margin: 0 10px;
  `;
};

export const StepsSeparator = styled('div')<SeparatorProps>`
  background-color: ${({ $active, theme }) => ($active ? '#00aa72' : theme.palette.accents_2)};
  ${({ $vertical }) => getSeparatorStyles($vertical)};
`;
