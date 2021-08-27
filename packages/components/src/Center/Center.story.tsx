import * as React from 'react';
import { Meta } from '@storybook/react';
import { Center } from './Center';

export default {
  title: 'Components/Center',
  component: Center,
} as Meta;

export const basic = () => (
  <Center style={{ background: '#eee', height: '50px' }}>
    Center child element in both horizontal and vertical
  </Center>
);
