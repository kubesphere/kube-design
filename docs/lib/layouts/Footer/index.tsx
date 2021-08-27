import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
  width: calc(100% - 200px);
  padding: 50px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.accents_7};
`;

export default function Footer() {
  return <Foot>© 2021 KubeSphere.io</Foot>;
}
