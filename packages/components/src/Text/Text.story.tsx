import * as React from 'react';
import { Text, Group } from '../index';

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

export const HeadText = () => (
  <Group direction="column">
    <Text variant="h1">h1 title</Text>
    <Text variant="h2">h2 title</Text>
    <Text variant="h3">h3 title</Text>
    <Text variant="h4">h4 title</Text>
    <Text variant="h5">h5 title</Text>
    <Text variant="h6">h6 title</Text>
  </Group>
);
