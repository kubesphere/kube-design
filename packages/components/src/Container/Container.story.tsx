import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from './Container';

storiesOf('Components/Container', module).add('Demo', () => (
  <Container>
    To get the most out of this module, you should have worked your way through the previous
    JavaScript modules in the series. Those modules typically involve simple API usage, as it is
    often difficult to write client-side JavaScript examples without them.
  </Container>
));

storiesOf('Components/Container', module).add('Size', () => (
  <>
    <Container size="xl">
      To get the most out of this module, you should have worked your way through the previous
      JavaScript modules in the series. Those modules typically involve simple API usage, as it is
      often difficult to write client-side JavaScript examples without them.
    </Container>
    <Container size="sm" style={{ marginTop: '30px' }}>
      To get the most out of this module, you should have worked your way through the previous
      JavaScript modules in the series. Those modules typically involve simple API usage, as it is
      often difficult to write client-side JavaScript examples without them.
    </Container>
  </>
));

storiesOf('Components/Container', module).add('Padding', () => (
  <>
    <Container padding="xl">
      To get the most out of this module, you should have worked your way through the previous
      JavaScript modules in the series. Those modules typically involve simple API usage, as it is
      often difficult to write client-side JavaScript examples without them.
    </Container>
    <Container size="sm" style={{ marginTop: '30px' }}>
      To get the most out of this module, you should have worked your way through the previous
      JavaScript modules in the series. Those modules typically involve simple API usage, as it is
      often difficult to write client-side JavaScript examples without them.
    </Container>
  </>
));

storiesOf('Components/Container', module).add('Fluid', () => (
  <Container fluid>
    To get the most out of this module, you should have worked your way through the previous
    JavaScript modules in the series. Those modules typically involve simple API usage, as it is
    often difficult to write client-side JavaScript examples without them.
  </Container>
));
