import React from 'react';
import styled from 'styled-components';
import { DefaultProps, KubedNumberSize } from '../theme';
import { Loading } from '../Loading/Loading';

const OverlayWrapper = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export interface LoadingOverlayProps extends DefaultProps {
  /** Loader size prop */
  size?: KubedNumberSize;

  /** Sets overlay opacity */
  overlayOpacity?: number;

  /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
  overlayColor?: string;

  /** Loading overlay z-index */
  zIndex?: number;

  /** If visible overlay will take 100% width and height of first parent with relative position and overlay all of its content */
  visible: boolean;
}

export function LoadingOverlay({
  size = 'sm',
  overlayColor = '#fff',
  overlayOpacity = 0.5,
  visible,
}: LoadingOverlayProps) {
  if (!visible) return null;

  return (
    <OverlayWrapper>
      <Loading size={size} style={{ zIndex: 1000 }} />
      <div
        style={{
          backgroundColor: overlayColor,
          position: 'absolute',
          opacity: overlayOpacity,
          inset: '0px',
          zIndex: 999,
        }}
      />
    </OverlayWrapper>
  );
}

LoadingOverlay.displayName = '@kubed/components/LoadingOverlay';
