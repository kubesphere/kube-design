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

export const MarkWrapper = styled.div`
  position: absolute,
  top: 0,
`;

export const Mark = styled.div<MarkStylesProps>`
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.palette.colors.green[1]};
  z-index: 1;
  height: 8px;
  width: 8px;
  border-radius: 1000px;
  -webkit-transform: translateX(-4px);
  -moz-transform: translateX(-4px);
  -ms-transform: translateX(-4px);
  transform: translateX(-4px);

  &.mark-filled {
    box-sizing: border-box;
    border: 2px solid ${({ theme }) => theme.palette.colors.green[1]} !important;
    z-index: 1;
    height: 8px;
    width: 8px;
    border-radius: 1000px;
    -webkit-transform: translateX(-4px);
    -moz-transform: translateX(-4px);
    -ms-transform: translateX(-4px);
    transform: translateX(-4px);
    background-color: #fff;
    border-color: #228be6;
  }
`;

export const MarkLabel = styled.div<MarkStylesProps>`
  transform: translate(-50%, 0);
  fontsize: 14px;
  color: #868e96;
  margintop: 5px;
`;
