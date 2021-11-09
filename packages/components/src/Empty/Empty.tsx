import * as React from 'react';
import styled from 'styled-components';
import { Exclamation } from '@kubed/icons';

export interface EmptyProps {
  desc?: string;
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
`;

export function Empty(props: EmptyProps) {
  const { desc = 'No Data' } = props;
  return (
    <EmptyWrapper>
      <ImageStyle>
        <Exclamation style={{ width: '48px', height: '48px' }} />
      </ImageStyle>
      <ContentStyle>{desc}</ContentStyle>
    </EmptyWrapper>
  );
}

Empty.displayName = 'Empty';

export default Empty;
