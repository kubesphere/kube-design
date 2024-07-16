import * as React from 'react';
import { Container } from './Container';

export default {
  title: 'Components/Container',
};

export const Demo = () => (
  <Container>
    To get the most out of this module, you should have worked your way through the previous
    JavaScript modules in the series. Those modules typically involve simple API usage, as it is
    often difficult to write client-side JavaScript examples without them.
  </Container>
);

export const Size = () => (
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
);

export const Padding = () => (
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
);

export const Fluid = () => (
  <Container fluid>
    To get the most out of this module, you should have worked your way through the previous
    JavaScript modules in the series. Those modules typically involve simple API usage, as it is
    often difficult to write client-side JavaScript examples without them.
  </Container>
);
