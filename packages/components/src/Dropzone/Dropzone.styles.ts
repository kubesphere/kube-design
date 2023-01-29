import styled from 'styled-components';

export const DropzoneWrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: background-color 150ms ease;
  border: 2px dashed ${({ theme }) => theme.palette.border};
  border-radius: 4px;
  padding: 16px;
`;

export const DropzoneInner = styled.div`
  pointer-events: none;
  user-select: none;
`;
