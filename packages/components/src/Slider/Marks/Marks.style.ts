import styled from 'styled-components';

export const sizes = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
};

interface MarkStylesProps {
  size?: number;
}

export const Mark = styled.div<MarkStylesProps>`
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.palette.colors.green[1]};
  z-index: 1;
  height: 8px;
  width: 8px;
  border-radius: 1000px;
  transform: translateX(-4px);
`;

export const MarkLabel = styled.div<MarkStylesProps>`
  transform: translate(-50%, 0);
  font-size: 12px;
  color: ${({ theme }) => theme.palette.accents_4};
  margin-top: 9px;
`;
