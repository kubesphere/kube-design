import React from 'react';
import styled from 'styled-components';
import forwardRef from '../utils/forwardRef';
import { DefaultProps } from '../theme';

export interface CenterProps extends DefaultProps {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;
}

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Center = forwardRef<CenterProps, 'div'>(({ style, className, ...rest }, ref) => {
  return <CenterDiv style={style} ref={ref} className={className} {...rest} />;
});

Center.displayName = '@kubed/components/Center';
