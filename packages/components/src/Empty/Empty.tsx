import * as React from 'react';
import styled from 'styled-components';
import { Exclamation } from '@kubed/icons';
import forwardRef from '../utils/forwardRef';
import { DefaultProps } from '../theme/types';

export interface EmptyProps extends DefaultProps {
  desc?: string;
  imageStyle?: React.CSSProperties;
  icon?: React.ReactNode;
}

const EmptyWrapper = styled.div`
  margin-top: 12px;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(36, 46, 66, 0.06);
  background-color: #ffffff;
  text-align: center;
`;

const ContentStyle = styled.div`
  margin-top: 30px; ;
`;

const ImageStyle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50% 0 50% 50%;
  background: #eff4f9;
  display: inline-block;
  line-height: 50px;
  margin-bottom: 20px;
  > * {
    width: 48px;
    height: 48px;
  }
`;

export const Empty = forwardRef<EmptyProps, 'div'>((props, ref) => {
  const { desc = 'No Data', imageStyle, icon } = props;
  return (
    <EmptyWrapper>
      <ImageStyle style={imageStyle}>{icon ? <div>{icon}</div> : <Exclamation />}</ImageStyle>
      <ContentStyle>{desc}</ContentStyle>
    </EmptyWrapper>
  );
});

Empty.displayName = 'Empty';

export default Empty;
