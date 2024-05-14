import React, { useEffect } from 'react';
import styled from 'styled-components';
import { themeUtils, notify, Notify } from '@kubed/components';
import { useCopyToClipboard } from 'react-use';

type PaletteProps = {
  color: string;
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;
const Item = styled.div``;

const Square = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 0.0625rem inset, rgba(0, 0, 0, 0.15) 0 0 0.25rem inset;
`;
export const Palette = ({ color }: PaletteProps) => {
  const colorsDefault = themeUtils.getPresetStaticTheme().palette.colors;
  const [state, copyToClipboard] = useCopyToClipboard();
  useEffect(() => {
    if (state.value) notify.success(`Copied: ${state.value}`);
  }, [state]);
  return (
    <Container>
      {colorsDefault[color]?.map((c, index) => (
        <Item
          key={index}
          onClick={() => {
            copyToClipboard(c);
          }}
        >
          <Square style={{ backgroundColor: c }} />
          <div>{c}</div>
        </Item>
      ))}
      <Notify position="top-right" />
    </Container>
  );
};
