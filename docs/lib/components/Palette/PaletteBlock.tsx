import React from 'react';
import styled from 'styled-components';
import { Palette } from './Palette';

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;
export const PaletteBlock = () => {
  return (
    <Wrapper>
      <Palette color="white" />
      <Palette color="dark" />
      <Palette color="blue" />
      <Palette color="green" />
      <Palette color="yellow" />
      <Palette color="red" />
    </Wrapper>
  );
};
