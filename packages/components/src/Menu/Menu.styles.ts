import styled from 'styled-components';

interface MenuWrapperProps {
  $width: number;
  $themeType: string;
}

export const MenuWrapper = styled('div')<MenuWrapperProps>`
  margin: 0;
  padding: 8px;
  width: ${({ $width }) => $width}px;
  border-radius: 4px;
  background-color: ${({ theme, $themeType }) =>
    $themeType === 'dark' ? theme.palette.accents_8 : theme.palette.background};

  .menu-label {
    padding: 8px 22px;
    font-size: 12px;
    color: ${({ theme, $themeType }) =>
      $themeType === 'dark' ? theme.palette.accents_1 : theme.palette.accents_7};
  }

  .menu-divider {
    border-top-color: ${({ theme, $themeType }) =>
      $themeType === 'dark' ? theme.palette.accents_5 : theme.palette.accents_3};
  }
`;
