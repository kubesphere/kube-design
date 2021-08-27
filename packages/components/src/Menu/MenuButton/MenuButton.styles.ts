import styled from 'styled-components';

export const MenuButtonElement = styled('button')`
  -webkit-tap-highlight-color: transparent;
  border: 0;
  border-radius: 4px;
  outline: 0;
  width: 100%;
  display: inline-block;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  padding: 8px 22px; // todo improve
  line-height: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.accents_7};

  &:hover {
    background-color: ${({ theme }) => theme.palette.accents_2};
  }

  .item-inner {
    display: flex;
    align-items: center;
  }

  .item-icon {
    margin-right: 12px;
  }
`;
