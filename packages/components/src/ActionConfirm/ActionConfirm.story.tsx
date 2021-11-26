import * as React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';
import { Button } from '@kubed/components';
import { ActionConfirm } from './ActionConfirm';

export default {
  title: 'Components/ActionConfirm',
  component: ActionConfirm,
} as Meta;

const ActionBox = styled.div`
  position: relative;
  width: 700px;
  height: 500px;
  border: 1px solid #eee;
  overflow: hidden;
`;

export const basic = () => {
  const [visible, setVisible] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 1000);
  };

  return (
    <ActionBox>
      <Button onClick={() => setVisible(!visible)}>Toggle Visible</Button>
      <ActionConfirm visible={visible} confirmLoading={loading} onOk={handleOk} />
    </ActionBox>
  );
};
