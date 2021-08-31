import React from 'react';
import { Text, Group } from '@kubed/components';

export default {
  title: 'Components/Text',
  component: Text,
};

export const Basic = () => <Text>text normal</Text>;

export const Colors = () => (
  <Group>
    <Text color="warning">text warning</Text>
    <Text color="error">text error</Text>
    <Text color="success">text success</Text>
  </Group>
);

export const Styles = () => (
  <Group>
    <Text underline>text underline</Text>
    <Text delete>text delete</Text>
    <Text italic>text italic</Text>
    <Text weight={600}>text weight</Text>
    <Text size="lg">text weight</Text>
  </Group>
);
