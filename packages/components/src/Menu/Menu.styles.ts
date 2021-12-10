import styled from 'styled-components';

interface MenuWrapperProps {
  $width: number;
}

export const MenuWrapper = styled('div')<MenuWrapperProps>`
  margin: 0;
  padding: 8px;
  width: ${({ $width }) => $width}px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.palette.background};

  .menu-label {
    padding: 8px 22px;
    font-size: 12px;
  }
`;
